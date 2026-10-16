[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
. (Join-Path (Split-Path -Parent $PSScriptRoot) 'commun.ps1')

$script:Passed = 0
$script:Failed = 0

function Invoke-Test {
    param(
        [Parameter(Mandatory = $true)][string]$Name,
        [Parameter(Mandatory = $true)][scriptblock]$Body
    )

    try {
        & $Body
        Write-Host "[RÉUSSI] $Name"
        $script:Passed++
    }
    catch {
        Write-Host "[ÉCHEC] $Name : $($_.Exception.Message)" -ForegroundColor Red
        $script:Failed++
    }
}

function Assert-True {
    param([bool]$Condition, [string]$Message = 'Condition attendue vraie.')
    if (-not $Condition) { throw $Message }
}

function Assert-Throws {
    param(
        [Parameter(Mandatory = $true)][scriptblock]$Body,
        [Parameter(Mandatory = $true)][string]$Pattern
    )

    try {
        $null = & $Body
    }
    catch {
        if ($_.Exception.Message -notmatch $Pattern) {
            throw "Exception inattendue : $($_.Exception.Message)"
        }
        return
    }
    throw "Aucune exception; motif attendu : $Pattern"
}

function Invoke-TestGit {
    param([string]$Repository, [string[]]$Arguments)
    $previousErrorActionPreference = $ErrorActionPreference
    $ErrorActionPreference = 'Continue'
    try {
        $output = @(& git -C $Repository @Arguments 2>&1)
    }
    finally {
        $ErrorActionPreference = $previousErrorActionPreference
    }
    if ($LASTEXITCODE -ne 0) {
        throw "git de test a échoué : $($output -join ' ')"
    }
    return @($output | ForEach-Object { $_.ToString() })
}

function New-TestRepository {
    param([string]$Path)

    $null = New-Item -ItemType Directory -Path $Path -Force
    $null = Invoke-TestGit -Repository $Path -Arguments @('init')
    $null = Invoke-TestGit -Repository $Path -Arguments @('config', 'user.name', 'Tests Z03')
    $null = Invoke-TestGit -Repository $Path -Arguments @('config', 'user.email', 'tests-z03@example.invalid')
    $null = Invoke-TestGit -Repository $Path -Arguments @('checkout', '-b', 'main')
    Set-Content -LiteralPath (Join-Path $Path 'fichier.txt') -Value 'base' -Encoding UTF8
    $null = Invoke-TestGit -Repository $Path -Arguments @('add', '--', 'fichier.txt')
    $null = Invoke-TestGit -Repository $Path -Arguments @('commit', '-m', 'base')
    $null = Invoke-TestGit -Repository $Path -Arguments @('remote', 'add', 'origin', 'https://github.com/emcmp/Z03.git')
    $null = Invoke-TestGit -Repository $Path -Arguments @('remote', 'add', 'cegep', 'https://github.com/departement-info-cem/z03.git')
    $null = Invoke-TestGit -Repository $Path -Arguments @('config', 'remote.pushDefault', 'origin')
}

$testRoot = Join-Path ([System.IO.Path]::GetTempPath()) ("z03-tests-deploiement-{0}" -f ([Guid]::NewGuid().ToString('N')))
$repository = Join-Path $testRoot 'repo'

try {
    New-TestRepository -Path $repository

    Invoke-Test 'origin et cegep valides' {
        Assert-ExpectedRemotes -RepositoryRoot $repository
        Assert-PushDefaultOrigin -RepositoryRoot $repository
    }

    Invoke-Test 'worktree propre' {
        Assert-CleanWorktree -RepositoryRoot $repository
    }

    Invoke-Test 'branche main valide' {
        Assert-CurrentBranch -ExpectedBranch 'main' -RepositoryRoot $repository
    }

    Invoke-Test 'worktree sale refusé' {
        Set-Content -LiteralPath (Join-Path $repository 'sale.txt') -Value 'sale' -Encoding UTF8
        try {
            Assert-Throws -Body { Assert-CleanWorktree -RepositoryRoot $repository } -Pattern 'worktree.*pas propre'
        }
        finally {
            Remove-Item -LiteralPath (Join-Path $repository 'sale.txt') -Force
        }
    }

    Invoke-Test 'mauvaise branche refusée' {
        $null = Invoke-TestGit -Repository $repository -Arguments @('checkout', '-b', 'autre')
        try {
            Assert-Throws -Body { Assert-CurrentBranch -ExpectedBranch 'main' -RepositoryRoot $repository } -Pattern 'branche courante'
        }
        finally {
            $null = Invoke-TestGit -Repository $repository -Arguments @('checkout', 'main')
        }
    }

    Invoke-Test 'mauvais origin refusé' {
        $null = Invoke-TestGit -Repository $repository -Arguments @('remote', 'set-url', 'origin', 'https://example.invalid/mauvais.git')
        try {
            Assert-Throws -Body { Assert-ExpectedRemotes -RepositoryRoot $repository } -Pattern "origin"
        }
        finally {
            $null = Invoke-TestGit -Repository $repository -Arguments @('remote', 'set-url', 'origin', 'https://github.com/emcmp/Z03.git')
        }
    }

    Invoke-Test 'mauvais cegep refusé' {
        $null = Invoke-TestGit -Repository $repository -Arguments @('remote', 'set-url', 'cegep', 'https://example.invalid/mauvais.git')
        try {
            Assert-Throws -Body { Assert-ExpectedRemotes -RepositoryRoot $repository } -Pattern "cegep"
        }
        finally {
            $null = Invoke-TestGit -Repository $repository -Arguments @('remote', 'set-url', 'cegep', 'https://github.com/departement-info-cem/z03.git')
        }
    }

    Invoke-Test 'pushDefault incorrect refusé' {
        $null = Invoke-TestGit -Repository $repository -Arguments @('config', 'remote.pushDefault', 'cegep')
        try {
            Assert-Throws -Body { Assert-PushDefaultOrigin -RepositoryRoot $repository } -Pattern 'pushDefault'
        }
        finally {
            $null = Invoke-TestGit -Repository $repository -Arguments @('config', 'remote.pushDefault', 'origin')
        }
    }

    $sha = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    $candidate = [pscustomobject]@{ Name = 'publication/candidat-2026-08-21-aaaaaaa'; Sha = $sha }

    Invoke-Test 'aucun candidat lors de publication' {
        Assert-Throws -Body { Get-SingleActiveCandidate -Candidates @() } -Pattern 'Aucun candidat actif'
    }

    Invoke-Test 'un candidat valide' {
        $selected = Get-SingleActiveCandidate -Candidates @($candidate)
        Assert-True ($selected.Sha -eq $sha)
        Assert-CandidateNameMatchesSha -CandidateName $selected.Name -Sha $selected.Sha
    }

    Invoke-Test 'deux candidats refusés' {
        Assert-Throws -Body { Get-SingleActiveCandidate -Candidates @($candidate, $candidate) } -Pattern '2 candidats actifs'
    }

    Invoke-Test 'SHA du candidat incohérent refusé' {
        Assert-Throws -Body { Assert-CandidateNameMatchesSha -CandidateName 'publication/candidat-2026-08-21-bbbbbbb' -Sha $sha } -Pattern 'ne correspond pas'
    }

    Invoke-Test 'avance rapide possible' {
        $baseSha = (Invoke-TestGit -Repository $repository -Arguments @('rev-parse', 'HEAD') | Select-Object -First 1)
        Add-Content -LiteralPath (Join-Path $repository 'fichier.txt') -Value 'suite' -Encoding UTF8
        $null = Invoke-TestGit -Repository $repository -Arguments @('add', '--', 'fichier.txt')
        $null = Invoke-TestGit -Repository $repository -Arguments @('commit', '-m', 'suite')
        $childSha = (Invoke-TestGit -Repository $repository -Arguments @('rev-parse', 'HEAD') | Select-Object -First 1)
        Assert-FastForwardPossible -CurrentSha $baseSha -TargetSha $childSha -RepositoryRoot $repository
    }

    Invoke-Test 'cegep/main non ancêtre refusé' {
        $currentSha = (Invoke-TestGit -Repository $repository -Arguments @('rev-parse', 'HEAD') | Select-Object -First 1)
        $baseSha = (Invoke-TestGit -Repository $repository -Arguments @('rev-parse', 'HEAD~1') | Select-Object -First 1)
        $null = Invoke-TestGit -Repository $repository -Arguments @('checkout', '-b', 'divergente', $baseSha)
        Set-Content -LiteralPath (Join-Path $repository 'divergent.txt') -Value 'divergent' -Encoding UTF8
        $null = Invoke-TestGit -Repository $repository -Arguments @('add', '--', 'divergent.txt')
        $null = Invoke-TestGit -Repository $repository -Arguments @('commit', '-m', 'divergent')
        $divergentSha = (Invoke-TestGit -Repository $repository -Arguments @('rev-parse', 'HEAD') | Select-Object -First 1)
        try {
            Assert-Throws -Body { Assert-FastForwardPossible -CurrentSha $currentSha -TargetSha $divergentSha -RepositoryRoot $repository } -Pattern 'HISTORIQUES DIVERGENTS'
        }
        finally {
            $null = Invoke-TestGit -Repository $repository -Arguments @('checkout', 'main')
        }
    }

    Invoke-Test 'build échoué arrête la commande' {
        Assert-Throws -Body { Invoke-CheckedCommand -Command 'powershell.exe' -Arguments @('-NoProfile', '-Command', 'exit 7') -WorkingDirectory $repository } -Pattern 'code 7'
    }

    Invoke-Test 'commande externe avec ligne vide journalisée' {
        $result = @(Invoke-CheckedCommand -Command 'powershell.exe' -Arguments @('-NoProfile', '-Command', "[Console]::WriteLine('avant'); [Console]::WriteLine(''); [Console]::WriteLine('après')") -WorkingDirectory $repository)
        Assert-True ($result.Count -eq 3) 'La commande doit retourner exactement trois lignes.'
        Assert-True ($result[0] -eq 'avant') 'La première ligne est inattendue.'
        Assert-True ($result[1] -eq '') 'La ligne vide nʼa pas été conservée.'
        Assert-True ($result[2] -eq 'après') 'La dernière ligne est inattendue.'
    }

    Invoke-Test 'workflow échoué refusé' {
        $details = [pscustomobject]@{
            url = 'https://example.invalid/run/1'
            jobs = @([pscustomobject]@{ name = 'Build le site'; conclusion = 'failure' })
        }
        Assert-Throws -Body { Assert-WorkflowJobsObjectSucceeded -Details $details } -Pattern "Build le site"
    }

    Invoke-Test 'navigation Laboratoires acceptée' {
        Assert-PublicNavigation -Content '<nav><a>Laboratoires</a></nav>'
    }

    Invoke-Test 'navigation Refonte refusée' {
        Assert-Throws -Body { Assert-PublicNavigation -Content '<nav><a>Refonte</a></nav>' } -Pattern 'navigation publique contient Refonte'
    }

    Invoke-Test 'mode DryRun présent et sans force push' {
        $scriptDirectory = Split-Path -Parent $PSScriptRoot
        foreach ($name in @('verifier-preview.ps1', 'preparer-candidat.ps1', 'publier-candidat.ps1', 'annuler-candidat.ps1')) {
            $content = Get-Content -Raw -LiteralPath (Join-Path $scriptDirectory $name)
            Assert-True ($content -match 'param\(\[switch\]\$DryRun\)') "$name ne déclare pas DryRun."
            Assert-True ($content -notmatch 'git[^\r\n]*push[^\r\n]*(--force|--force-with-lease)') "$name contient un force push."
        }
    }

    Invoke-Test 'preview actualise cegep avant de lire cegep/main' {
        $previewPath = Join-Path (Split-Path -Parent $PSScriptRoot) 'verifier-preview.ps1'
        $content = Get-Content -Raw -LiteralPath $previewPath
        $fetchIndex = $content.IndexOf('Update-OfficialRefs -RepositoryRoot $repositoryRoot')
        $readIndex = $content.IndexOf("Get-CommitSha -Reference 'cegep/main'")
        Assert-True ($fetchIndex -ge 0) 'Le fetch officiel est absent de verifier-preview.ps1.'
        Assert-True ($readIndex -ge 0) 'La lecture de cegep/main est absente de verifier-preview.ps1.'
        Assert-True ($fetchIndex -lt $readIndex) 'cegep/main est lu avant lʼactualisation du remote cegep.'
    }
}
finally {
    $fullTestRoot = [System.IO.Path]::GetFullPath($testRoot)
    $tempRoot = [System.IO.Path]::GetFullPath([System.IO.Path]::GetTempPath())
    if ($fullTestRoot.StartsWith($tempRoot, [System.StringComparison]::OrdinalIgnoreCase) -and (Split-Path -Leaf $fullTestRoot).StartsWith('z03-tests-deploiement-')) {
        Remove-Item -LiteralPath $fullTestRoot -Recurse -Force -ErrorAction SilentlyContinue
    }
}

Write-Host "Tests réussis : $script:Passed"
Write-Host "Tests échoués : $script:Failed"
if ($script:Failed -ne 0) { exit 1 }
