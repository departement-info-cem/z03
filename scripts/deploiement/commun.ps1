Set-StrictMode -Version 2.0

$script:ExpectedOriginUrl = 'https://github.com/emcmp/Z03.git'
$script:ExpectedOfficialUrl = 'https://github.com/departement-info-cem/z03.git'
$script:PersonalRepository = 'emcmp/Z03'
$script:OfficialRepository = 'departement-info-cem/z03'
$script:DeploymentLogPath = $null

function Get-RepositoryRoot {
    param([string]$StartPath = $PSScriptRoot)

    Push-Location $StartPath
    try {
        $root = (& git rev-parse --show-toplevel 2>&1)
        if ($LASTEXITCODE -ne 0) {
            throw "Impossible de localiser la racine Git depuis '$StartPath' : $root"
        }

        return ([System.IO.Path]::GetFullPath(($root | Select-Object -First 1).ToString().Trim()))
    }
    finally {
        Pop-Location
    }
}

function Protect-LogText {
    param([AllowNull()][string]$Text)

    if ($null -eq $Text) {
        return ''
    }

    $safe = $Text
    $safe = $safe -replace 'gh[pousr]_[A-Za-z0-9_]{20,}', '[SECRET MASQUE]'
    $safe = $safe -replace '(?i)(authorization\s*:\s*(?:bearer|token)\s+)[^\s]+', '$1[SECRET MASQUE]'
    return $safe
}

function Start-DeploymentLog {
    param(
        [Parameter(Mandatory = $true)][string]$Operation,
        [Parameter(Mandatory = $true)][bool]$DryRun,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    $directory = Join-Path $RepositoryRoot '.codex-temp\deploiement'
    if (-not (Test-Path -LiteralPath $directory)) {
        $null = New-Item -ItemType Directory -Path $directory -Force
    }

    $timestamp = Get-Date -Format 'yyyy-MM-dd_HHmmss'
    $script:DeploymentLogPath = Join-Path $directory ("{0}_{1}.log" -f $timestamp, $Operation)
    $header = @(
        "date/heure : $((Get-Date).ToString('o'))",
        "script : $Operation",
        "mode : $(if ($DryRun) { 'DryRun' } else { 'réel' })"
    )
    Set-Content -LiteralPath $script:DeploymentLogPath -Value $header -Encoding UTF8
    Write-Host "Journal : $script:DeploymentLogPath"
    return $script:DeploymentLogPath
}

function Write-DeploymentMessage {
    param(
        [Parameter(Mandatory = $true)][AllowEmptyString()][string]$Message,
        [ValidateSet('INFO', 'OK', 'ATTENTION', 'ERREUR', 'DETAIL')][string]$Level = 'INFO'
    )

    $line = '[{0}] {1}' -f $Level, (Protect-LogText $Message)
    Write-Host $line
    if ($script:DeploymentLogPath) {
        Add-Content -LiteralPath $script:DeploymentLogPath -Value $line -Encoding UTF8
    }
}

function Write-DeploymentState {
    param(
        [Parameter(Mandatory = $true)][string]$Name,
        [AllowNull()][object]$Value
    )

    $display = if ($null -eq $Value -or [string]::IsNullOrWhiteSpace($Value.ToString())) { '(aucun)' } else { $Value.ToString() }
    Write-DeploymentMessage -Message ("{0} : {1}" -f $Name, $display)
}

function Format-CommandForDisplay {
    param([string]$Command, [string[]]$Arguments)

    $formatted = @($Command)
    foreach ($argument in $Arguments) {
        if ($argument -match '\s') {
            $formatted += ('"{0}"' -f ($argument -replace '"', '\"'))
        }
        else {
            $formatted += $argument
        }
    }
    return ($formatted -join ' ')
}

function Invoke-CheckedCommand {
    param(
        [Parameter(Mandatory = $true)][string]$Command,
        [string[]]$Arguments = @(),
        [string]$WorkingDirectory = (Get-Location).Path
    )

    Write-DeploymentMessage -Level 'DETAIL' -Message ("Commande : {0}" -f (Format-CommandForDisplay $Command $Arguments))
    Push-Location $WorkingDirectory
    $previousErrorActionPreference = $ErrorActionPreference
    try {
        $ErrorActionPreference = 'Continue'
        $output = @(& $Command @Arguments 2>&1)
        $exitCode = $LASTEXITCODE
        $ErrorActionPreference = $previousErrorActionPreference
        foreach ($line in $output) {
            Write-DeploymentMessage -Level 'DETAIL' -Message $line.ToString()
        }
        if ($exitCode -ne 0) {
            throw "La commande '$Command' a échoué avec le code $exitCode."
        }
        return @($output | ForEach-Object { $_.ToString() })
    }
    finally {
        $ErrorActionPreference = $previousErrorActionPreference
        Pop-Location
    }
}

function Get-GitText {
    param(
        [Parameter(Mandatory = $true)][string[]]$Arguments,
        [string]$WorkingDirectory = (Get-Location).Path
    )

    $lines = @(Invoke-CheckedCommand -Command 'git' -Arguments $Arguments -WorkingDirectory $WorkingDirectory)
    return (($lines -join "`n").Trim())
}

function Get-CurrentBranch {
    param([string]$RepositoryRoot = (Get-RepositoryRoot))
    return (Get-GitText -Arguments @('branch', '--show-current') -WorkingDirectory $RepositoryRoot)
}

function Get-CommitSha {
    param(
        [Parameter(Mandatory = $true)][string]$Reference,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )
    return (Get-GitText -Arguments @('rev-parse', $Reference) -WorkingDirectory $RepositoryRoot)
}

function Assert-CleanWorktree {
    param([string]$RepositoryRoot = (Get-RepositoryRoot))

    $status = Get-GitText -Arguments @('status', '--porcelain=v1') -WorkingDirectory $RepositoryRoot
    if (-not [string]::IsNullOrWhiteSpace($status)) {
        throw "ARRÊT — le worktree n'est pas propre.`n$status"
    }
    Write-DeploymentMessage -Level 'OK' -Message 'Worktree propre.'
}

function Assert-CurrentBranch {
    param(
        [Parameter(Mandatory = $true)][string]$ExpectedBranch,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    $actual = Get-CurrentBranch -RepositoryRoot $RepositoryRoot
    if ($actual -ne $ExpectedBranch) {
        throw "ARRÊT — branche courante '$actual'; branche exigée '$ExpectedBranch'."
    }
    Write-DeploymentMessage -Level 'OK' -Message "Branche courante conforme : $actual."
}

function Get-RemoteUrls {
    param(
        [Parameter(Mandatory = $true)][string]$Remote,
        [switch]$Push,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    $arguments = @('remote', 'get-url')
    if ($Push) {
        $arguments += '--push'
    }
    $arguments += @('--all', $Remote)
    $text = Get-GitText -Arguments $arguments -WorkingDirectory $RepositoryRoot
    if ([string]::IsNullOrWhiteSpace($text)) {
        return @()
    }
    return @($text -split "`r?`n")
}

function Assert-ExpectedRemotes {
    param([string]$RepositoryRoot = (Get-RepositoryRoot))

    $expectations = @(
        @{ Name = 'origin'; Url = $script:ExpectedOriginUrl },
        @{ Name = 'cegep'; Url = $script:ExpectedOfficialUrl }
    )

    foreach ($expectation in $expectations) {
        $fetchUrls = @(Get-RemoteUrls -Remote $expectation.Name -RepositoryRoot $RepositoryRoot)
        $pushUrls = @(Get-RemoteUrls -Remote $expectation.Name -Push -RepositoryRoot $RepositoryRoot)
        if ($fetchUrls.Count -ne 1 -or $fetchUrls[0] -ne $expectation.Url) {
            throw "ARRÊT — URL fetch inattendue pour '$($expectation.Name)' : $($fetchUrls -join ', ')."
        }
        if ($pushUrls.Count -ne 1 -or $pushUrls[0] -ne $expectation.Url) {
            throw "ARRÊT — URL push inattendue pour '$($expectation.Name)' : $($pushUrls -join ', ')."
        }
    }
    Write-DeploymentMessage -Level 'OK' -Message 'Remotes fetch et push conformes.'
}

function Assert-PushDefaultOrigin {
    param([string]$RepositoryRoot = (Get-RepositoryRoot))

    $value = Get-GitText -Arguments @('config', '--get', 'remote.pushDefault') -WorkingDirectory $RepositoryRoot
    if ($value -ne 'origin') {
        throw "ARRÊT — remote.pushDefault vaut '$value'; la valeur exigée est 'origin'."
    }
    Write-DeploymentMessage -Level 'OK' -Message 'remote.pushDefault = origin.'
}

function Update-OriginRefs {
    param([string]$RepositoryRoot = (Get-RepositoryRoot))
    $null = Invoke-CheckedCommand -Command 'git' -Arguments @('fetch', 'origin', '--prune') -WorkingDirectory $RepositoryRoot
}

function Update-OfficialRefs {
    param([string]$RepositoryRoot = (Get-RepositoryRoot))
    $null = Invoke-CheckedCommand -Command 'git' -Arguments @('fetch', 'cegep', '--prune') -WorkingDirectory $RepositoryRoot
}

function Assert-CommitExists {
    param(
        [Parameter(Mandatory = $true)][string]$Sha,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    $null = Get-GitText -Arguments @('cat-file', '-e', "$Sha`^{commit}") -WorkingDirectory $RepositoryRoot
    Write-DeploymentMessage -Level 'OK' -Message "Commit présent localement : $Sha."
}

function Test-GitAncestor {
    param(
        [Parameter(Mandatory = $true)][string]$Ancestor,
        [Parameter(Mandatory = $true)][string]$Descendant,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    Write-DeploymentMessage -Level 'DETAIL' -Message "Test d'ancêtre : $Ancestor -> $Descendant"
    Push-Location $RepositoryRoot
    try {
        & git merge-base --is-ancestor $Ancestor $Descendant 2>&1 | ForEach-Object {
            Write-DeploymentMessage -Level 'DETAIL' -Message $_.ToString()
        }
        $exitCode = $LASTEXITCODE
        if ($exitCode -eq 0) { return $true }
        if ($exitCode -eq 1) { return $false }
        throw "git merge-base --is-ancestor a échoué avec le code $exitCode."
    }
    finally {
        Pop-Location
    }
}

function Assert-FastForwardPossible {
    param(
        [Parameter(Mandatory = $true)][string]$CurrentSha,
        [Parameter(Mandatory = $true)][string]$TargetSha,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    if (-not (Test-GitAncestor -Ancestor $CurrentSha -Descendant $TargetSha -RepositoryRoot $RepositoryRoot)) {
        throw "ARRÊT — HISTORIQUES DIVERGENTS : $CurrentSha n'est pas un ancêtre de $TargetSha."
    }
    Write-DeploymentMessage -Level 'OK' -Message 'Avance rapide possible.'
}

function ConvertFrom-RemoteRefLines {
    param([string[]]$Lines)

    $references = @()
    foreach ($line in @($Lines)) {
        if ([string]::IsNullOrWhiteSpace($line)) { continue }
        if ($line -notmatch '^([0-9a-fA-F]{40})\s+refs/heads/(.+)$') {
            throw "Référence distante illisible : '$line'."
        }
        $references += [pscustomobject]@{
            Sha = $Matches[1].ToLowerInvariant()
            Name = $Matches[2]
            Ref = "refs/heads/$($Matches[2])"
        }
    }
    return @($references)
}

function Get-OfficialBranches {
    param(
        [string]$Pattern = 'refs/heads/*',
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    $lines = @(Invoke-CheckedCommand -Command 'git' -Arguments @('ls-remote', '--heads', 'cegep', $Pattern) -WorkingDirectory $RepositoryRoot)
    return @(ConvertFrom-RemoteRefLines -Lines $lines)
}

function Get-ActiveCandidates {
    param([string]$RepositoryRoot = (Get-RepositoryRoot))
    return @(Get-OfficialBranches -Pattern 'refs/heads/publication/candidat-*' -RepositoryRoot $RepositoryRoot)
}

function Assert-OfficialBranchSha {
    param(
        [Parameter(Mandatory = $true)][string]$BranchName,
        [Parameter(Mandatory = $true)][string]$ExpectedSha,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    $branches = @(Get-OfficialBranches -Pattern "refs/heads/$BranchName" -RepositoryRoot $RepositoryRoot)
    if ($branches.Count -ne 1 -or $branches[0].Sha -ne $ExpectedSha) {
        throw "ARRÊT — la branche officielle $BranchName ne pointe pas sur $ExpectedSha."
    }
    Write-DeploymentMessage -Level 'OK' -Message "Branche officielle vérifiée : $BranchName -> $ExpectedSha."
}

function Assert-NoActiveCandidate {
    param([object[]]$Candidates = @())

    if (@($Candidates).Count -ne 0) {
        $candidateNames = (@($Candidates) | ForEach-Object { $_.Name }) -join ', '
        throw "ARRÊT — un candidat actif existe déjà : $candidateNames."
    }
    Write-DeploymentMessage -Level 'OK' -Message 'Aucun candidat actif.'
}

function Get-SingleActiveCandidate {
    param([object[]]$Candidates = @())

    $count = @($Candidates).Count
    if ($count -eq 0) {
        throw 'Aucun candidat actif — aucune opération possible.'
    }
    if ($count -ne 1) {
        throw "ARRÊT — $count candidats actifs existent; un seul est permis."
    }
    return @($Candidates)[0]
}

function Assert-CandidateNameMatchesSha {
    param(
        [Parameter(Mandatory = $true)][string]$CandidateName,
        [Parameter(Mandatory = $true)][string]$Sha
    )

    if ($CandidateName -notmatch '^publication/candidat-\d{4}-\d{2}-\d{2}-([0-9a-fA-F]{7})$') {
        throw "ARRÊT — nom de candidat invalide : '$CandidateName'."
    }
    if ($Matches[1].ToLowerInvariant() -ne $Sha.Substring(0, 7).ToLowerInvariant()) {
        throw "ARRÊT — le SHA court du candidat ne correspond pas à sa cible : $CandidateName -> $Sha."
    }
    Write-DeploymentMessage -Level 'OK' -Message 'Le nom du candidat correspond à son SHA.'
}

function Assert-CandidateReachableFromOrigin {
    param(
        [Parameter(Mandatory = $true)][string]$CandidateSha,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    $originSha = Get-CommitSha -Reference 'origin/main' -RepositoryRoot $RepositoryRoot
    if (-not (Test-GitAncestor -Ancestor $CandidateSha -Descendant $originSha -RepositoryRoot $RepositoryRoot)) {
        throw "ARRÊT — le candidat $CandidateSha n'est pas présent dans l'historique de origin/main."
    }
    Write-DeploymentMessage -Level 'OK' -Message 'Le candidat est conservé dans lʼhistorique de origin/main.'
}

function Invoke-ValidationSuite {
    param(
        [string]$RepositoryRoot = (Get-RepositoryRoot),
        [string]$GitHubRepository
    )

    $previousRepository = $env:GITHUB_REPOSITORY
    try {
        if ($GitHubRepository) {
            $env:GITHUB_REPOSITORY = $GitHubRepository
        }
        $null = Invoke-CheckedCommand -Command 'npm' -Arguments @('run', 'setup') -WorkingDirectory $RepositoryRoot
        $null = Invoke-CheckedCommand -Command 'npm' -Arguments @('run', 'typecheck') -WorkingDirectory $RepositoryRoot
        $null = Invoke-CheckedCommand -Command 'npm' -Arguments @('run', 'build') -WorkingDirectory $RepositoryRoot
        $null = Invoke-CheckedCommand -Command 'npm' -Arguments @('--prefix', 'web', 'run', 'build:refonte') -WorkingDirectory $RepositoryRoot
        Write-DeploymentMessage -Level 'OK' -Message 'Installation, typecheck et deux builds réussis.'
    }
    finally {
        if ($null -eq $previousRepository) {
            Remove-Item Env:GITHUB_REPOSITORY -ErrorAction SilentlyContinue
        }
        else {
            $env:GITHUB_REPOSITORY = $previousRepository
        }
    }
}

function Get-GitHubRunsForSha {
    param(
        [Parameter(Mandatory = $true)][string]$Repository,
        [Parameter(Mandatory = $true)][string]$Sha,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    $jsonLines = @(Invoke-CheckedCommand -Command 'gh' -Arguments @('run', 'list', '--repo', $Repository, '--commit', $Sha, '--limit', '20', '--json', 'databaseId,headSha,status,conclusion,url,event,workflowName,createdAt') -WorkingDirectory $RepositoryRoot)
    $json = ($jsonLines -join "`n")
    if ([string]::IsNullOrWhiteSpace($json)) { return @() }
    return @($json | ConvertFrom-Json)
}

function Get-SuccessfulDeploymentRun {
    param(
        [Parameter(Mandatory = $true)][string]$Repository,
        [Parameter(Mandatory = $true)][string]$Sha,
        [switch]$Wait,
        [int]$TimeoutSeconds = 1200,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    $deadline = (Get-Date).AddSeconds($TimeoutSeconds)
    do {
        $runs = @(Get-GitHubRunsForSha -Repository $Repository -Sha $Sha -RepositoryRoot $RepositoryRoot |
            Where-Object { $_.headSha -eq $Sha -and $_.event -eq 'push' } |
            Sort-Object createdAt -Descending)
        if ($runs.Count -gt 0) {
            $run = $runs[0]
            Write-DeploymentState -Name 'workflow GitHub Actions' -Value $run.url
            if ($run.status -eq 'completed') {
                if ($run.conclusion -ne 'success') {
                    throw "ARRÊT — workflow GitHub Actions en échec ($($run.conclusion)) : $($run.url)"
                }
                return $run
            }
        }
        if (-not $Wait) { break }
        Start-Sleep -Seconds 10
    } while ((Get-Date) -lt $deadline)

    if ($Wait) {
        throw "ARRÊT — aucun workflow réussi pour $Sha avant l'expiration du délai."
    }
    throw "ARRÊT — aucun workflow personnel terminé et réussi pour $Sha."
}

function Assert-WorkflowJobsSucceeded {
    param(
        [Parameter(Mandatory = $true)][object]$Run,
        [Parameter(Mandatory = $true)][string]$Repository,
        [switch]$RequireDeployment,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    $lines = @(Invoke-CheckedCommand -Command 'gh' -Arguments @('run', 'view', $Run.databaseId.ToString(), '--repo', $Repository, '--json', 'jobs,url,status,conclusion,headSha,event') -WorkingDirectory $RepositoryRoot)
    $details = (($lines -join "`n") | ConvertFrom-Json)
    Assert-WorkflowJobsObjectSucceeded -Details $details -RequireDeployment:$RequireDeployment
    Write-DeploymentMessage -Level 'OK' -Message 'Jobs GitHub Actions requis réussis.'
    return $details
}

function Assert-WorkflowJobsObjectSucceeded {
    param(
        [Parameter(Mandatory = $true)][object]$Details,
        [switch]$RequireDeployment
    )

    $build = @($Details.jobs | Where-Object { $_.name -eq 'Build le site' })
    if ($build.Count -ne 1 -or $build[0].conclusion -ne 'success') {
        throw "ARRÊT — le job 'Build le site' n'a pas réussi : $($Details.url)"
    }
    if ($RequireDeployment) {
        $deployment = @($Details.jobs | Where-Object { $_.name -eq 'Déployer le site' })
        if ($deployment.Count -ne 1 -or $deployment[0].conclusion -ne 'success') {
            throw "ARRÊT — le job 'Déployer le site' n'a pas réussi : $($Details.url)"
        }
    }
}

function Get-HttpPage {
    param(
        [Parameter(Mandatory = $true)][string]$Url,
        [int]$TimeoutSeconds = 30
    )

    Write-DeploymentMessage -Level 'DETAIL' -Message "HTTP GET $Url"
    try {
        $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -MaximumRedirection 5 -TimeoutSec $TimeoutSeconds
    }
    catch {
        throw "ARRÊT — requête HTTP échouée pour $Url : $($_.Exception.Message)"
    }
    if ([int]$response.StatusCode -ne 200) {
        throw "ARRÊT — $Url répond HTTP $($response.StatusCode), attendu 200."
    }
    Write-DeploymentMessage -Level 'OK' -Message "$Url répond HTTP 200."
    return $response
}

function Assert-PublicNavigation {
    param([Parameter(Mandatory = $true)][string]$Content)

    $navMatches = [regex]::Matches($Content, '<nav\b[\s\S]*?</nav>', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
    $navigation = ($navMatches | ForEach-Object { $_.Value }) -join "`n"
    if ($navigation -match '>\s*Refonte\s*<') {
        throw 'ARRÊT — la navigation publique contient Refonte.'
    }
    Write-DeploymentMessage -Level 'OK' -Message 'Navigation publique sans Refonte.'
}

function Test-SiteRoutes {
    param(
        [Parameter(Mandatory = $true)][string]$BaseUrl,
        [Parameter(Mandatory = $true)][object[]]$Routes,
        [switch]$CheckPublicNavigation,
        [switch]$CheckStaticAssets
    )

    $pages = @{}
    foreach ($route in $Routes) {
        $url = if ([string]::IsNullOrWhiteSpace($route.Path)) { $BaseUrl } else { $BaseUrl.TrimEnd('/') + '/' + $route.Path.TrimStart('/') }
        $response = Get-HttpPage -Url $url
        $content = $response.Content
        if ($route.Marker -and $content -notmatch [regex]::Escape($route.Marker)) {
            throw "ARRÊT — marqueur '$($route.Marker)' absent de $url."
        }
        $pages[$url] = $content
    }

    $rootContent = $pages[$BaseUrl]
    if ($null -eq $rootContent) {
        $rootContent = (Get-HttpPage -Url $BaseUrl).Content
    }

    if ($CheckPublicNavigation) {
        Assert-PublicNavigation -Content $rootContent
    }

    if ($CheckStaticAssets) {
        $matches = [regex]::Matches($rootContent, '(?:href|src)="(?<path>/z03/assets/[^"?#]+)', [System.Text.RegularExpressions.RegexOptions]::IgnoreCase)
        $assetPaths = @($matches | ForEach-Object { $_.Groups['path'].Value } | Select-Object -Unique | Select-Object -First 2)
        if ($assetPaths.Count -eq 0) {
            throw 'ARRÊT — aucune ressource statique /z03/assets/ trouvée dans la page officielle.'
        }
        $baseUri = New-Object System.Uri($BaseUrl)
        foreach ($assetPath in $assetPaths) {
            $assetUrl = '{0}://{1}{2}' -f $baseUri.Scheme, $baseUri.Authority, $assetPath
            $null = Get-HttpPage -Url $assetUrl
        }
        Write-DeploymentMessage -Level 'OK' -Message 'Ressources statiques vérifiées.'
    }
}

function New-DetachedValidationWorktree {
    param(
        [Parameter(Mandatory = $true)][string]$Sha,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    $path = Join-Path ([System.IO.Path]::GetTempPath()) ("z03-deploiement-{0}" -f ([Guid]::NewGuid().ToString('N')))
    $null = Invoke-CheckedCommand -Command 'git' -Arguments @('worktree', 'add', '--detach', $path, $Sha) -WorkingDirectory $RepositoryRoot
    Write-DeploymentState -Name 'worktree temporaire' -Value $path
    return $path
}

function Remove-DetachedValidationWorktree {
    param(
        [Parameter(Mandatory = $true)][string]$Path,
        [string]$RepositoryRoot = (Get-RepositoryRoot)
    )

    $fullPath = [System.IO.Path]::GetFullPath($Path)
    $tempRoot = [System.IO.Path]::GetFullPath([System.IO.Path]::GetTempPath())
    $leaf = Split-Path -Leaf $fullPath
    if (-not $fullPath.StartsWith($tempRoot, [System.StringComparison]::OrdinalIgnoreCase) -or -not $leaf.StartsWith('z03-deploiement-')) {
        throw "Refus de nettoyer un chemin temporaire inattendu : $fullPath"
    }

    if (Test-Path -LiteralPath $fullPath) {
        $null = Invoke-CheckedCommand -Command 'git' -Arguments @('worktree', 'remove', '--force', $fullPath) -WorkingDirectory $RepositoryRoot
    }
    $null = Invoke-CheckedCommand -Command 'git' -Arguments @('worktree', 'prune') -WorkingDirectory $RepositoryRoot
    Write-DeploymentMessage -Level 'OK' -Message 'Worktree temporaire nettoyé.'
}

function Get-OfficialActivitySnapshot {
    param([string]$RepositoryRoot = (Get-RepositoryRoot))

    $runLines = @(Invoke-CheckedCommand -Command 'gh' -Arguments @('run', 'list', '--repo', $script:OfficialRepository, '--limit', '20', '--json', 'databaseId') -WorkingDirectory $RepositoryRoot)
    $deploymentLines = @(Invoke-CheckedCommand -Command 'gh' -Arguments @('api', "repos/$($script:OfficialRepository)/deployments?per_page=20", '--jq', '.[].id') -WorkingDirectory $RepositoryRoot)
    $runIds = @()
    if (-not [string]::IsNullOrWhiteSpace(($runLines -join ''))) {
        $runJson = $runLines -join [Environment]::NewLine
        $runObjects = $runJson | ConvertFrom-Json
        $runIds = @($runObjects | ForEach-Object { $_.databaseId.ToString() })
    }
    return [pscustomobject]@{
        RunIds = @($runIds | Sort-Object)
        DeploymentIds = @($deploymentLines | Where-Object { -not [string]::IsNullOrWhiteSpace($_) } | Sort-Object)
    }
}

function Assert-OfficialActivityUnchanged {
    param(
        [Parameter(Mandatory = $true)][object]$Before,
        [Parameter(Mandatory = $true)][object]$After
    )

    if (($Before.RunIds -join ',') -ne ($After.RunIds -join ',') -or ($Before.DeploymentIds -join ',') -ne ($After.DeploymentIds -join ',')) {
        throw 'ARRÊT — une exécution Actions ou un déploiement officiel inattendu a été créé.'
    }
    Write-DeploymentMessage -Level 'OK' -Message 'Aucune nouvelle exécution Actions ni aucun déploiement officiel.'
}

function Get-CriticalRoutes {
    return @(
        [pscustomobject]@{ Path = ''; Marker = 'Bien débuter' },
        [pscustomobject]@{ Path = 'fonctionnement'; Marker = 'Fonctionnement du cours' },
        [pscustomobject]@{ Path = 'cours/rencontre1'; Marker = 'Premiers pas en HTML' },
        [pscustomobject]@{ Path = 'cours/rencontre2'; Marker = 'HTML, fichiers et navigation' },
        [pscustomobject]@{ Path = 'projet-web/presentation'; Marker = 'Projet Web' },
        [pscustomobject]@{ Path = 'projet-web/evaluation'; Marker = 'Évaluation' }
    )
}
