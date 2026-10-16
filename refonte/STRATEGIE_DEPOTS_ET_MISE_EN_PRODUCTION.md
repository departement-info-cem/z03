# Stratégie des dépôts et mise en production

**Statut : protocole opérationnel; alignement initial terminé le 2026-08-21**

**Source de vérité : `emcmp/Z03`**

**Production : `departement-info-cem/z03`**

## Objectif

Conserver un seul historique de développement et promouvoir vers la production exactement la version approuvée, sans copie manuelle, sans force push et sans demander à l'utilisateur de manipuler un SHA.

```text
développement
→ preview personnelle validée
→ candidat officiel unique et immuable
→ GO humain explicite
→ avance rapide exacte de la production
→ vérification GitHub Actions et du site
→ trace publiée et journal local
```

## État de référence après l'alignement initial

La première production officielle issue de la source de vérité a réussi le 2026-08-21. Depuis cet alignement, `origin/main` et `cegep/main` partagent le même historique. Le protocole normal est donc une avance rapide de `cegep/main` vers le candidat exact.

SHA publié lors de l'alignement :

```text
4575022c3dc0a6b2dc698e1c5eca62bfddf14969
```

Branches officielles de conservation créées ou préservées :

```text
archive/avant-alignement-2026-08-21-6d32219
publication/publie-2026-08-21-4575022
AjoutNiveauPourTP1
```

L'ancien `main` officiel est conservé dans l'archive. Le bundle initial complet est conservé hors du dépôt :

```text
P:\Projects\_CEGEP\Z03-cegep-avant-alignement-2026-08-21.bundle
```

Le chemin du poste peut changer; le bundle n'est pas une dépendance du processus normal et ne doit jamais être ajouté au dépôt.

## Architecture à deux remotes

```text
Dossier local Z03
│
├── origin  → https://github.com/emcmp/Z03.git
│             source de vérité, développement et preview
│
└── cegep   → https://github.com/departement-info-cem/z03.git
              candidat et production officielle
```

`origin` reste l'unique destination implicite :

```powershell
git config remote.pushDefault origin
git branch --set-upstream-to=origin/main main
```

Toute écriture officielle nomme explicitement `cegep`. Aucun workflow GitHub Actions personnel, PAT versionné, secret inter-dépôts, GitHub App ou bot ne pousse vers le dépôt du cégep.

## Invariants de sécurité

1. `emcmp/Z03` est la source de vérité.
2. Le dépôt officiel ne sert pas au développement courant.
3. Préparer un candidat n'autorise pas sa publication.
4. Seule la phrase exacte **« GO production du candidat en attente »** autorise une publication réelle.
5. Aucun force push, rebase, squash ou réécriture de l'historique officiel n'est permis.
6. Un worktree sale, une mauvaise branche, un remote inattendu ou un `remote.pushDefault` différent de `origin` arrête l'opération.
7. Un typecheck, un build, un workflow ou un contrôle HTTP en échec arrête l'opération.
8. Il ne peut exister qu'un candidat actif sous `publication/candidat-*`.
9. Une évolution de `origin/main` ne remplace jamais silencieusement un candidat.
10. Une publication promeut le candidat préparé, jamais la tête courante par défaut.
11. `cegep/main` doit être un ancêtre du candidat. Toute divergence arrête l'automatisation.
12. Les SHA sont calculés et consignés automatiquement; l'utilisateur n'en recopie aucun.
13. Les branches `archive/*`, `AjoutNiveauPourTP1` et `publication/publie-*` ne sont jamais déplacées ou supprimées par le processus normal.
14. Aucun secret, jeton, cookie ou identifiant d'authentification n'est écrit dans les scripts ou les journaux.

## Outils locaux recommandés

Les quatre scripts PowerShell 5.1 utilisent Git, GitHub CLI, Node.js et npm déjà installés. Ils écrivent leur journal non versionné sous `.codex-temp/deploiement/`.

| Opération | Script | Écriture officielle possible |
| --- | --- | --- |
| Vérifier la preview | `scripts/deploiement/verifier-preview.ps1` | Jamais |
| Préparer un candidat | `scripts/deploiement/preparer-candidat.ps1` | Branche candidate seulement, hors `-DryRun` |
| Publier le candidat | `scripts/deploiement/publier-candidat.ps1` | `main`, trace publiée et retrait du candidat, hors `-DryRun` et après le GO exact |
| Annuler le candidat | `scripts/deploiement/annuler-candidat.ps1` | Trace annulée et retrait du candidat seulement, hors `-DryRun` |

Chaque script accepte `-DryRun`. Le dry-run exécute les contrôles applicables et ne fait aucune écriture officielle réelle. Les commandes externes sont contrôlées par leur code de sortie; une erreur interrompt immédiatement la suite.

## Processus normal

### 1. Vérifier la version personnelle

Commande humaine :

> Synchronise Z03 et vérifie la version personnelle. Ne touche pas à la production.

Script :

```powershell
scripts/deploiement/verifier-preview.ps1
```

Le script exige `main` propre, valide les remotes, récupère `origin`, effectue au besoin uniquement un `pull --ff-only`, puis exécute :

```powershell
npm run setup
npm run typecheck
npm run build
npm --prefix web run build:refonte
```

Il vérifie ensuite le workflow personnel exact et les routes critiques de `https://emcmp.github.io/Z03/`. Il ne contient aucune écriture vers `cegep`.

### 2. Préparer le candidat

Commande humaine :

> Prépare un candidat de production à partir de la version personnelle actuelle. Ne publie rien.

Script :

```powershell
scripts/deploiement/preparer-candidat.ps1
```

Le script exige `HEAD == origin/main`, aucun candidat actif et `cegep/main` ancêtre de `origin/main`. Après les validations locales, Actions et HTTP, il calcule :

```text
publication/candidat-YYYY-MM-DD-<sha-court>
```

Il exécute toujours un `git push --dry-run` avant la création réelle. La préparation crée uniquement cette branche au SHA exact; `cegep/main` doit rester inchangé et aucun déploiement Pages ne doit être déclenché.

### 3. Publier le candidat après le GO

Commande humaine exacte :

> GO production du candidat en attente

Script autorisé hors `-DryRun` uniquement après cette phrase :

```powershell
scripts/deploiement/publier-candidat.ps1
```

Le script retrouve l'unique candidat, vérifie le SHA encodé dans son nom, confirme sa présence dans l'historique de `origin/main`, puis le valide dans un worktree détaché. Il vérifie l'avance rapide et exécute un dry-run du push avant :

```powershell
git push cegep "<sha-candidat>:refs/heads/main"
```

Le push ne contient jamais `--force` ni `--force-with-lease`. Après le push, le script exige le SHA distant exact, le succès des jobs `Build le site` et `Déployer le site`, les routes officielles, les ressources statiques et l'absence de `Refonte` dans la navigation publique. `Laboratoires` est désormais autorisé dans cette navigation (décision intégrée au commit personnel `e8cb640`, PR #17, le 2026-10-16).

Contrôle de cohérence du 2026-10-16 : `Assert-PublicNavigation` dans `scripts/deploiement/commun.ps1` refuse déjà `Refonte` sans interdire `Laboratoires`. La suite `scripts/deploiement/tests/run-tests.ps1` contient les deux cas explicites, « navigation Laboratoires acceptée » et « navigation Refonte refusée ». Aucune modification des scripts ni des garde-fous n'est nécessaire pour cette correction documentaire.

Après succès complet seulement, il crée ou confirme l'immuable :

```text
publication/publie-YYYY-MM-DD-<sha-court>
```

Il retire ensuite uniquement la branche candidate active. Si un contrôle postérieur au push échoue, il ne revient jamais en arrière automatiquement, ne force aucune référence et ne publie aucun autre SHA.

### 4. Annuler le candidat

Commande humaine :

> Annule le candidat de production en attente.

Script :

```powershell
scripts/deploiement/annuler-candidat.ps1
```

Le script crée ou confirme la trace :

```text
publication/annule-YYYY-MM-DD-<sha-court>
```

Il supprime uniquement le candidat actif et confirme que `cegep/main` reste inchangé.

### 5. Remplacer le candidat

Commande humaine :

> Remplace le candidat de production par la version personnelle actuelle.

Séquence obligatoire :

```text
annuler-candidat.ps1
→ verifier-preview.ps1
→ preparer-candidat.ps1
```

Si l'annulation réussit mais que la nouvelle préparation échoue, aucune production n'a lieu, aucun candidat actif ne demeure et l'ancien SHA reste conservé dans `publication/annule-*`. Cet état est volontairement sûr.

## Cas exceptionnel : divergence

Le cas normal suppose :

```text
cegep/main est un ancêtre du candidat
```

Si ce test échoue, les scripts affichent :

```text
ARRÊT — HISTORIQUES DIVERGENTS
```

Ils ne tentent ni fusion, ni réinitialisation, ni renommage, ni force push, ni réparation automatique. Une divergence exige un audit distinct, un plan de conservation et une autorisation humaine propre à l'intervention. Le GO quotidien ne donne pas cette autorisation élargie.

## GitHub Actions, Pages et contrôles HTTP

Le workflow versionné `.github/workflows/deploy.yml` est l'unique mécanisme attendu. Il construit sous Node.js 20, exécute le typecheck, téléverse `web/build` et ne déploie que lors d'un push sur `main`.

Les validations publiques portent au minimum sur :

```text
/
/fonctionnement
/cours/rencontre1
/cours/rencontre2
/projet-web/presentation
/projet-web/evaluation
```

Une publication officielle vérifie aussi des ressources sous `/z03/assets/` et la navigation publique.

## Journalisation et reprise

Les journaux locaux incluent la date, le script, le mode, `origin/main`, `cegep/main` avant et après, le candidat, les résultats de validation, le workflow et les URL testées. Ils restent sous `.codex-temp/deploiement/`.

En cas d'arrêt avant le push de `main`, la production reste inchangée. En cas d'échec après ce push, le journal et le message final indiquent explicitement que la production a été mise à jour et qu'une intervention est requise, sans retour arrière automatique.

## Historique de l'alignement initial

Avant le 2026-08-21, les deux `main` avaient divergé. L'ancien `main` officiel a été renommé en `archive/avant-alignement-2026-08-21-6d32219`, puis le nouveau `main` a été créé au candidat validé sans force push. La branche par défaut a été remise sur `main`, le workflow officiel a réussi et la trace `publication/publie-2026-08-21-4575022` a été créée.

Cette procédure historique n'est pas le processus quotidien et n'est pas rejouée par les scripts.

## Risques suivis séparément

- protection de `main` et rulesets absents;
- HTTPS non imposé malgré le certificat approuvé;
- vulnérabilités npm héritées;
- évolution du runtime interne des actions JavaScript GitHub.

Ces sujets n'autorisent pas une modification implicite de la production ou des dépendances.
