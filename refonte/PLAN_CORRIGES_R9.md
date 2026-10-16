# Corrigés R9 — état actuel et historique

## Retrait des documents internes du ZIP public — 2026-10-16

Portée explicitement autorisée : correction ciblée du ZIP corrigé sur le site personnel, branche dédiée, PR, CI, fusion personnelle si les contrôles réussissent et déploiement par GitHub Actions. Aucune modification de théorie, de compétence évaluée, du ZIP étudiant, des sources historiques ou du dépôt du cégep.

État initial : worktree propre sur `codex/r9-corriges-coherence`, PR #18 déjà fusionnée; `origin/main` actualisé à `22de68ffa86f99517898befc422d9c8bc5f8c9fa`. Le `main` local encore à `e8cb64061985989e4d59abb6075c7cba6420fc58` contient l'ancien ZIP à 50 fichiers (SHA-256 `486f1a6c58c1df5488ddf5cb25ed396d0c9f01828661d6220f308ab8d16fe2d7`). Le ZIP de `origin/main`, celui de la branche initiale et le téléchargement public sont identiques (50 fichiers, CRC valides, SHA-256 `95c52426402c842459beb8c36c7a6d46a2137dcf7a78f60e84d8c898671a534c`).

Branche de correction créée depuis `origin/main` : `codex/r9-zip-sans-documents-internes`. Les branches et les fichiers existants sont conservés.

| Tâche | État | Dépendances et fichiers visés | Définition de terminé |
|---|---|---|---|
| Inventorier les trois références et le ZIP publié | Terminé | Git et téléchargement HTTPS; preuves locales | SHA-256, listes exhaustives et CRC consignés sous `.codex-temp/r9-nettoyage-20261016/`. |
| Nettoyer le corrigé | Terminé | `web/static/files/rencontre9-corrige.zip` | Retirer `LIRE-MOI-ENSEIGNANT.md`, `RAPPORT-VALIDATION.md`, `MANIFESTE.json`; README strictement étudiant, sans provenance; conserver les 46 fichiers des dix exercices octet pour octet. |
| Valider le lot | Terminé | ZIP corrigé et étudiant, Node 20, typecheck et build | 47 fichiers corrigés, zéro document interne, CRC valides, dix HTML/CSS/JS et seize images; liens résolus, syntaxe valide; ZIP étudiant identique et distinct; aucune théorie modifiée. |
| Livrer sur le dépôt personnel | En cours | Branche dédiée et PR `emcmp/Z03`; état final dans le journal local `livraison.json` | CI réussie avant fusion; déploiement Actions réussi au SHA fusionné; ZIP public retéléchargé, liste et SHA-256 identiques au livrable. Vérification personnelle par `scripts/deploiement/verifier-preview.ps1`. |

Les preuves QA et les inventaires restent hors du matériel téléchargeable. Le README remplacé contenait des consignes de travail à compléter et une colonne de provenance technique; son remplacement explique uniquement comment consulter les solutions dans un dossier distinct. Les comparaisons `==` et `!=` restent strictement inchangées. Aucun déplacement ni renumérotation de rencontre.

### Résultats du nettoyage

- Corrigé : **47 fichiers**, CRC valides, SHA-256 `49e4ae1a441e32af1a40649c0e6b7693f780b63347fff27150c78e2e45c0c444`. Seuls trois documents internes retirés et le README remplacé; les 46 fichiers d'exercice sont identiques octet pour octet à `origin/main` avant correction.
- Étudiant : **47 fichiers**, archive inchangée, CRC valides, SHA-256 `3275f9fbf2dd16eab132611f3fd32b30f986f0b8d4d1f0b10fe07fa9456ffbf2`. Les différences avec le corrigé sont exactement les dix scripts et le README. Aucun corrigé ajouté à l'archive étudiante.
- Node **20.19.0** : `node --check` réussi pour les **20 scripts**; **26 références HTML** résolues par archive, références d'images dans le JavaScript également résolues. Les deux liens de téléchargement du laboratoire sont présents dans le build et les deux ZIP générés sont identiques aux sources validées.
- `npm run build` et `npm run typecheck` réussis depuis la racine. Le premier typecheck lancé simultanément au build a rencontré des fichiers générés supprimés pendant sa lecture (`TS6053`); relance après le build réussie. Les avertissements du build concernent la configuration et les données de dépendances héritées; aucune dépendance modifiée.
- Preuves locales : `inventaire-avant.json` (listes complètes pour `main`, `origin/main`, `HEAD` initial et ZIP public téléchargé), `validation.json` (listes finales, CRC, liens et comparaisons), `liens-build.json`, `build.log`, `typecheck-final.log`. Les résultats de CI, fusion, déploiement et retéléchargement public seront consignés après livraison dans `livraison.json` et `public-apres.json`, sous `.codex-temp/r9-nettoyage-20261016/`.

### Inventaire final du corrigé

À la racine : `README.md` strictement étudiant. Chacun des dix dossiers ci-dessous contient `index.html`, `css/styles.css`, `js/script.js`, plus les images indiquées dans son sous-dossier `images/`.

| Dossier | Images |
|---|---|
| `exercice01` | Aucune |
| `exercice02` | Aucune |
| `exercice03` | `chocolate.png`, `poop.png` |
| `exercice04` | `chocolate.png`, `poop.png` |
| `exercice05` | `lightBlue.png`, `lightRed.png` |
| `exercice06` | `fireBro.png`, `iceBro.png` |
| `exercice07` | `chocolate.png`, `poop.png` |
| `exercice08` | `flashy.png`, `sobre.png` |
| `exercice09` | Aucune |
| `exercice10` | `multi.png`, `off.png`, `on.png`, `printer.png` |

Les sections ci-dessous décrivent les lots antérieurs; leurs mentions de rapport/manifeste inclus dans le ZIP sont historiques et remplacées par le présent nettoyage.

## Mise en cohérence autorisée — 2026-10-16

Base vérifiée avant mutation : worktree propre, `main == origin/main == e8cb64061985989e4d59abb6075c7cba6420fc58`, y compris lecture du SHA distant. Branche personnelle : `codex/r9-corriges-coherence`. Sauvegarde à préserver : `sauvegarde/rencontre9-cd7ecd5` à `cd7ecd52489564bc075099d89f39ab1bc5fb4a29`.

Portée bornée confiée à Codex : inspecter les dix solutions du ZIP séparé et adapter uniquement les comparaisons équivalentes pour les données des exercices; actualiser sa documentation, son manifeste et les quatre documents internes visés. Conserver les consignes et le ZIP étudiant; ne modifier aucune page de théorie, compétence évaluée, source historique, branche officielle ou script de publication. Livraison par commit et PR personnels, sans fusion implicite.

| Tâche | État | Dépendances et fichiers visés | Définition de terminé |
|---|---|---|---|
| Vérifier la base et inventorier | Terminé | Git, les deux ZIP R9, scripts de validation | Base propre et alignée; sauvegarde identifiée; dix solutions inspectées; navigation déjà conforme dans les scripts. |
| Adapter les solutions et la documentation du ZIP | Terminé | `web/static/files/rencontre9-corrige.zip` | Comparaisons justifiées par leurs types; consignes intactes; mentions de diffusion actuelles; manifeste recalculé. |
| Actualiser les suivis | Terminé | Présent plan, `PLAN_IMPLEMENTATION_RENCONTRES_6_A_15.md`, `SUIVI_CONTENU.md`, `STRATEGIE_DEPOTS_ET_MISE_EN_PRODUCTION.md` | État courant distingué des étapes historiques, sans effacer leur traçabilité. |
| Valider | Terminé | ZIP extraits et preuves sous `.codex-temp/r9-coherence-20261016/` | CRC, dix solutions, absence de corrigés dans le ZIP étudiant, syntaxe JS, tests fonctionnels, typecheck/build Node 20 et tests existants de navigation réussis. |
| Livraison personnelle pour révision | Prêt à réviser | Branche personnelle `codex/r9-corriges-coherence` et PR vers `emcmp/Z03` | Lot validé prêt pour révision; commit, URL de PR et résultat du workflow exact consignés dans `.codex-temp/r9-coherence-20261016/livraison.json` à la livraison. La fusion et le déploiement Pages restent une étape ultérieure. |

### Audit des comparaisons du corrigé

| Script dans le ZIP | Nombre adapté | Données et justification |
|---|---:|---|
| `exercice01/js/script.js` | 3 | Fatigue : booléen initial puis inversé; aliment : chaînes `brocoli` / `chocolat`. |
| `exercice02/js/script.js` | 2 | Nom et style : chaînes initialisées et remplacées par d'autres chaînes. |
| `exercice03/js/script.js` | 0 | Aucune comparaison à adapter. |
| `exercice04/js/script.js` | 1 | Attribut `alt` lu comme chaîne, comparé au libellé `Poop`, puis réaffecté avec une chaîne. Même un attribut absent ne correspond pas à ce libellé. |
| `exercice05/js/script.js` | 1 | Couleur : chaînes `bleu` / `rouge` uniquement. |
| `exercice06/js/script.js` | 0 | Aucune comparaison à adapter. |
| `exercice07/js/script.js` | 6 | Deux booléens inversés par les boutons; quatre comparaisons de couleur entre chaînes. |
| `exercice08/js/script.js` | 2 | Prix initialisés avec des nombres et ajustés par des opérations numériques; comparaison entre nombres. |
| `exercice09/js/script.js` | 1 | Style : chaînes `bordure` / `fond` uniquement. |
| `exercice10/js/script.js` | 1 | Feuilles : nombre initialisé à 5, augmenté/diminué numériquement, comparé au nombre 0. |

Les 17 remplacements utilisent `==` ou `!=` et conservent le résultat pour les données et manipulations prévues. Aucun cas dangereux n'a été relevé dans ces scripts. Le même remplacement serait dangereux avec des types mélangés : un booléen `true` et le nombre `1`, le nombre `3` et la chaîne `"3"`, ou `null` et `undefined` peuvent devenir égaux par conversion. Une saisie provenant d'un champ HTML demanderait donc une nouvelle analyse. Cette limite est consignée ici pour la maintenance; aucune explication n'est ajoutée aux cours R9.

### Résultats du lot courant

- CRC des deux ZIP valides; dix solutions et dix scripts étudiants; 26 références locales résolues par archive. ZIP étudiant identique à la référence sans réponses; ses fonctions à compléter et les bogues volontaires de 09 sont préservés.
- Seuls les dix en-têtes, les 17 comparaisons, `LIRE-MOI-ENSEIGNANT.md`, `RAPPORT-VALIDATION.md` et `MANIFESTE.json` changent dans le corrigé. Dix HTML, dix CSS, seize images et README étudiant intacts. Manifeste SHA-256 vérifié sur 49 fichiers.
- Node 20.19.0 : 20/20 scripts passent `node --check`; analyse AST des dix solutions réussie. Edge 155.0.4283.45 : 2716/2716 assertions réussies, aucune exception de page, erreur console ou ressource manquante.
- `npm run typecheck` et `npm run build` réussis depuis la racine sous Node 20.19.0. Build relancé avec succès après finalisation du rapport inclus dans le ZIP. Les fichiers exécutables finaux sont identiques aux fichiers testés. Avertissements hérités seulement; aucune dépendance modifiée.
- `scripts/deploiement/tests/run-tests.ps1` : 21/21 tests réussis. Navigation du build public contrôlée : Laboratoires présent, Refonte absent. Aucun script ni garde-fou modifié.
- SHA-256 final du corrigé : `95c52426402c842459beb8c36c7a6d46a2137dcf7a78f60e84d8c898671a534c`. SHA-256 étudiant inchangé : `3275f9fbf2dd16eab132611f3fd32b30f986f0b8d4d1f0b10fe07fa9456ffbf2`.
- Preuves locales : `integrite.json`, `audit-comparaisons.json`, `verification/statique.json`, `verification/navigateur-archive.json`, `build-final.log` et, après livraison, `livraison.json`, sous `.codex-temp/r9-coherence-20261016/`.

## État de diffusion constaté à la base

Les exercices et les corrigés sont maintenant séparés : `web/static/files/rencontre9.zip` (47 fichiers, sans solutions) et `web/static/files/rencontre9-corrige.zip` (50 fichiers, dix solutions exécutables). La page `web/docs/02-labos/04-labo5.md` propose les deux téléchargements avec avertissement. Le corrigé sous `web/static/` est public lors du build du site.

Historique vérifié dans Git : `38217b5` clarifie les exercices; `b56282b` intègre temporairement les solutions aux pages du ZIP étudiant; `81e60df` ajoute un lien; `2f9ccda` restaure le ZIP étudiant sans réponses; `12812aa` ajoute le ZIP corrigé séparé. Le workflow de cette dernière livraison a réussi : https://github.com/emcmp/Z03/actions/runs/38940277864. Le journal local antérieur `.codex-temp/r9-finalisation-validation/publication.json` consigne les deux archives publiques en HTTP 200. Le ZIP étudiant courant a pour SHA-256 `3275f9fbf2dd16eab132611f3fd32b30f986f0b8d4d1f0b10fe07fa9456ffbf2`.

## Plan historique d'intégration — remplacé par la diffusion séparée

Les sections suivantes conservent le plan et les vérifications de l'intégration temporaire. Leurs états et chemins décrivent cette étape passée, et ne constituent plus le point de reprise courant.

Tâche approuvée le 2026-10-16. Base : dernier `origin/main`, `38217b5`.

## Portée et conventions constatées

R7 est consulté sans modification : son ZIP étudiant contient HTML/CSS/JS de départ; son ZIP corrigé séparé utilise des blocs `pre/code` et un encadré `.warning` ambre. Message exact : « Avant de consulter le corrigé : essayez d'abord les exercices. Utilisez ce document pour vérifier votre raisonnement et comprendre une erreur. » R7 ne contient pas de `details/summary` ni le libellé littéral « une fois terminé, consultez corrigé ».

Réutiliser les styles et le message constatés, avec sélecteurs CSS limités au corrigé. Pour satisfaire l'ouverture volontaire demandée, placer un `details` fermé sous chaque exercice, après son conteneur interactif, avec notification visible « Une fois l’exercice terminé, consultez le corrigé ci-dessous ». Afficher la solution enseignante en texte échappé, sans script exécutable ajouté. Adapter uniquement l'en-tête privé du script affiché à sa diffusion étudiante.

## Plan et critères de fin

| Tâche | État | Dépendances et fichiers visés | Définition de terminé |
|---|---|---|---|
| Inspecter R7, R9 et le corrigé enseignant | Terminé | Deux ZIP R7, ZIP R9 distant, archive enseignante locale | Modèle réel identifié; source enseignante alignée sur `38217b5`; aucune décision pédagogique nouvelle. |
| Intégrer les corrigés | Terminé | `web/static/files/rencontre9.zip` : dix HTML, dix CSS, README interne | Dix volets fermés sous les exercices; avertissement R7; 47 entrées conservées; JS étudiant, 20 TODO, bogues 09 et images identiques. |
| Vérifier archive et rendu | Terminé | Archive extraite; outils et preuves sous `.codex-temp/` | Intégrité, liens, ouverture souris/clavier, comparaison des boutons avant/après, syntaxe des scripts étudiants et affichés, tests fonctionnels des solutions, typecheck et build Node 20 réussis. |
| Livrer et vérifier Pages | En cours | Checkout propre dédié sur dernier `origin/main`; présent plan | Commit ciblé et push en avance rapide vers `emcmp/Z03/main`; workflow exact réussi et archive HTTP identique, ou SHA local et cause précise. |

Les sources et exercices historiques, R7 et le dépôt officiel restent hors du périmètre. Aucun déplacement ni renumérotation de rencontre; aucun changement de compétence évaluée. README à modifier uniquement dans le ZIP pour annoncer les corrigés après le travail.

## Vérifications acquises

- 47 entrées conservées; seuls les dix HTML, dix CSS et le README interne changent. HTML initial conservé intégralement avant/après la section ajoutée; CSS initial intact et styles ajoutés limités à `.corrige`.
- Dix scripts étudiants et seize images identiques octet pour octet; 20 TODO préservés. Aucun script de solution chargé par la page.
- Node 20.19.0 : `node --check` réussi sur les dix scripts étudiants et les dix solutions affichées.
- Edge/Chromium : 10/10 pages vérifiées; code invisible au départ, ouverture/refermeture souris/Entrée/Espace, chemins HTML/CSS et images résolus. Rendu, dimensions/styles et effets des boutons identiques au ZIP initial, même après ouverture; mêmes erreurs volontaires de 09.
- Preuves et captures locales : `.codex-temp/r9-corriges-verification/` dans le dépôt principal; aucun outil de test ajouté au matériel étudiant.
- Solutions affichées : 2716/2716 assertions fonctionnelles réussies sur les dix exercices, dont seuils, priorités et consommation de l'imprimante; aucune exception ni ressource manquante dans les solutions. Tests exécutés sur des copies locales où le texte affiché remplace le script étudiant, sans modifier le livrable.
- `npm run typecheck` et `npm run build` réussis depuis la racine du checkout sous Node 20.19.0, cible `emcmp/Z03`. Avertissements hérités de dépendances/configuration seulement; aucune dépendance modifiée.
- `npm run serve` : page `/Z03/labos/labo5` vérifiée dans Edge, lien de téléchargement présent et aucune erreur de page; ZIP servi en HTTP 200 et identique par SHA-256 à l'archive validée (`78b96cc4b93690f4efea1a80d223b61cb5172654ce4305da68c6b72c500d20a9`).

## Livraison et reprise

Checkout dédié : `.codex-temp/r9-corriges-publication/` dans le dépôt principal. Le `main` local historique divergé reste inchangé. Le commit de livraison sera identifiable sur `origin/main` par son message « Intégrer les corrigés sous les exercices R9 ». Le SHA exact, le workflow Pages et la comparaison SHA-256 du ZIP public seront consignés dans le journal local `.codex-temp/r9-corriges-verification/livraison.json` et dans le rapport final. Si la publication s'arrête, le même journal indique l'étape et la cause; ne jamais forcer le push.
