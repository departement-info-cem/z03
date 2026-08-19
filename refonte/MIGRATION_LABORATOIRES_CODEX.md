# Plan Codex — réalignement des laboratoires avec la nouvelle séquence Z03

Ce document est une **spécification de migration pour Codex**. Il décrit comment réaligner les anciens laboratoires hérités du 905 avec la nouvelle séquence de 15 rencontres de Z03.

Il doit être lu avec :

- `SUIVI_CONTENU.md` — registre général de migration;
- `COMPETENCES_HTML_CSS.md` — rencontres 1 à 5 et compétences HTML/CSS;
- `EVALUATION.md` — modèle d'évaluation progressive;
- `web/sidebars.js` — séquence canonique actuellement affichée sur le site.

## Objectif

La navigation **Laboratoires** ne doit plus refléter les anciens numéros de cours/labos. Les activités doivent être rattachées à la **nouvelle rencontre où la matière est réellement enseignée**.

Exemple important :

> l'ancien `Laboratoire 2` sur les variables et JavaScript ne doit plus apparaître comme un laboratoire de la rencontre 2; il doit être migré vers la **rencontre 6 — Variables et JavaScript**.

Les anciens numéros (`lab2`, `lab3`, etc.) sont des **identifiants de sources héritées**, pas les nouveaux numéros pédagogiques.

# Principes de migration

1. **La nouvelle séquence des rencontres est la référence.** Ne pas conserver un laboratoire à une rencontre uniquement parce que son ancien numéro correspondait à l'ancien calendrier.
2. **Ne pas déplacer aveuglément un laboratoire mixte.** Lorsqu'un ancien laboratoire contient plusieurs notions qui sont maintenant séparées, extraire les exercices et les répartir entre les nouvelles rencontres.
3. **Préserver les sources héritées jusqu'à validation.** Ne pas supprimer les `.zip`, `.docx` ou autres fichiers `420905_lab*` avant que leur contenu ait été inventorié et que la migration soit vérifiée.
4. **Les rencontres 1 à 5 n'ont pas besoin de laboratoires HTML/CSS séparés.** La pratique HTML/CSS se fait directement dans le site Web évolutif de l'étudiant. Les consignes de construction doivent être intégrées aux rencontres plutôt que recréer des exercices artificiels.
5. **Les nouveaux laboratoires de programmation commencent à la rencontre 6.** Leur ordre doit suivre les notions réellement enseignées.
6. **Retirer les anciennes consignes de remise sur Teams** des nouvelles pages de laboratoire, sauf décision explicite contraire. Le nouveau modèle repose d'abord sur le travail en classe et les validations progressives.
7. **Ne pas renommer les archives sources avant la fin de l'inventaire.** Le nom `420905_lab2.docx`, par exemple, doit rester traçable comme source historique même si son contenu devient le laboratoire de la rencontre 6.
8. **Après chaque migration**, mettre à jour `SUIVI_CONTENU.md` avec la destination réelle et l'état du laboratoire.
9. **Après toute modification du site**, exécuter le build Docusaurus et corriger les liens cassés avant de considérer la migration terminée.

# Nouvelle structure pédagogique des laboratoires

## Rencontres 1 à 5 — HTML/CSS

Il ne faut **pas créer cinq laboratoires indépendants** pour remplacer l'ancien TP.

Le travail pratique consiste à bâtir progressivement un site Web choisi par l'étudiant :

- rencontre 1 : première page et contenu HTML de base;
- rencontre 2 : organisation des fichiers, images, plusieurs pages, liens et navigation;
- rencontre 3 : feuille CSS externe, sélecteurs, classes et premiers styles;
- rencontre 4 : modèle en boîte, `margin`, `padding`, bordures et dimensions simples;
- rencontre 5 : Flexbox simple, navigation horizontale, intégration et correction.

Les consignes de pratique doivent donc vivre dans les pages des rencontres 1 à 5 ou dans un guide de site évolutif commun, et non dans l'ancienne série `Laboratoire 2`, `Laboratoire 3`, etc.

## Rencontres 6 à 13 — laboratoires de programmation

Créer à terme des pages de laboratoire alignées sur les nouvelles rencontres. Une convention possible est :

```text
web/docs/02-labos/
├── 06-rencontre6.md
├── 07-rencontre7.md
├── 08-rencontre8.md
├── 09-rencontre9.md
├── 10-rencontre10.md
├── 11-rencontre11.md
├── 12-rencontre12.md
└── 13-rencontre13.md
```

Le nom étudiant de chaque page doit être basé sur la **nouvelle rencontre**, pas sur le numéro historique du laboratoire source.

La navigation `labos` dans `web/sidebars.js` devra éventuellement devenir explicite, comme la navigation `docs`, afin que seuls les laboratoires réellement retenus apparaissent dans le bon ordre.

# Mapping des anciennes sources vers la nouvelle séquence

| Nouvelle rencontre | Sujet actuel | Anciennes sources principales | Action demandée à Codex |
|---|---|---|---|
| **1** | Environnement et HTML | aucune source de labo historique obligatoire | Ne pas créer de labo séparé. Intégrer la pratique au site évolutif. |
| **2** | HTML, fichiers et navigation | aucune source de labo historique obligatoire | Ne pas placer l'ancien labo 2 ici. La pratique est le site évolutif. |
| **3** | Introduction à CSS | nouvelles pages CSS, pas ancien labo JS | Pratique directement dans le site évolutif. |
| **4** | Modèle en boîte et espacements | matériel CSS à réorganiser | Pratique directement dans le site évolutif. |
| **5** | Flexbox simple et intégration | matériel CSS à réorganiser | Pratique directement dans le site évolutif; pas de remise de TP distincte. |
| **6** | Variables et JavaScript | `web/docs/02-labos/01-labo2.md` → `web/static/files/420905_lab2.docx` | **Migrer l'ancien labo 2 ici.** Adapter le vocabulaire et retirer les références à l'ancien calendrier / Teams. |
| **7** | Conditions et logique | `420905_lab5.zip` + `420905_lab6.zip` | **Fusionner** les exercices utiles des deux anciens laboratoires. Éliminer les doublons. Conserver en priorité booléens, comparaisons, `if`, `else`, `else if`, `&&`, `||`. |
| **8** | Fonctions | portions « fonctions » de `420905_lab3.zip` + `420905_lab13.zip` | **Scinder l'ancien labo 3** et récupérer ses exercices de fonctions. Fusionner avec les exercices pertinents de l'ancien labo 13 sur paramètres/retours. Privilégier déclaration, appel et paramètres simples. |
| **9** | DOM de base | portions DOM de `420905_lab3.zip`; portions pertinentes de `420905_lab14.zip` au besoin | Récupérer `querySelector`, `textContent` et manipulation d'un élément. Ne pas déplacer ici les exercices d'événements qui appartiennent à la rencontre 10. |
| **10** | Événements et classes CSS | `420905_lab4.zip` + portions pertinentes de `420905_lab14.zip` | Réorganiser autour de `click`, `addEventListener`, fonction appelée par un événement et `classList`. Garder les attributs concrets (`src`, `alt`, etc.) seulement lorsqu'ils servent un exercice. |
| **11** | Boucles | `420905_lab11.zip` | Conserver les exercices utiles, mais simplifier. `do...while` est un candidat à retirer si aucun exercice essentiel n'en dépend. |
| **12** | Tableaux | `420905_lab12.zip` | Conserver création, index, `length`, parcours et `push` lorsque pertinent. Éviter de garder `pop`/`splice` uniquement par héritage. |
| **13** | Plusieurs éléments du DOM | `420905_lab15.zip` | Réorganiser autour de `querySelectorAll` et du parcours de plusieurs éléments avec les notions déjà apprises de tableaux/boucles/DOM. |
| **14** | Rattrapage et révision | laboratoires précédents | **Aucun nouveau laboratoire obligatoire.** Réutiliser les activités incomplètes, reprises et exercices de consolidation. |
| **15** | Évaluation sommative finale | aucun laboratoire | **Aucun laboratoire.** Rencontre réservée à l'évaluation sommative. |

# Traitement détaillé des anciennes sources connues

## Ancien laboratoire 2 → nouvelle rencontre 6

Source actuelle :

```text
web/docs/02-labos/01-labo2.md
web/static/files/420905_lab2.docx
```

La page actuelle s'appelle simplement `Laboratoire 2` et contient une consigne de remise sur Teams.

Actions :

1. extraire/inventorier le contenu du `.docx`;
2. confirmer les exercices portant réellement sur variables, affectation, nombres, chaînes et opérations simples;
3. créer la nouvelle page de laboratoire de la rencontre 6;
4. adapter les consignes à Z03;
5. conserver le fichier historique tant que la migration n'est pas validée;
6. retirer l'ancienne page de la navigation lorsque la nouvelle page est prête.

## Anciens laboratoires 5 et 6 → nouvelle rencontre 7

Ces deux laboratoires correspondent aux anciens blocs « Booléens et conditions » et « Opérateurs logiques » qui sont maintenant regroupés.

Actions :

1. extraire les deux archives;
2. dresser une courte liste des exercices de chacune;
3. identifier les doublons;
4. construire un seul parcours d'exercices progressif;
5. conserver : booléens, comparaisons, `if`, `else`, `else if`, `&&`, `||`;
6. retirer ou déplacer en extra les exercices qui demandent une complexité non retenue dans le nouveau noyau.

## Ancien laboratoire 3 → nouvelles rencontres 8 et 9

L'ancien cours mélangeait DOM et fonctions. Son laboratoire ne doit donc **pas** être déplacé en bloc.

Actions :

- exercices centrés sur déclaration/appel de fonctions → rencontre 8;
- exercices centrés sur `querySelector`, `textContent` et accès à la page → rencontre 9;
- exercices qui combinent déjà plusieurs notions → les simplifier ou les placer après l'introduction des deux blocs;
- ne pas introduire des événements à la rencontre 9 si l'événement n'a pas encore été enseigné.

## Ancien laboratoire 13 → nouvelle rencontre 8

Récupérer principalement les exercices qui renforcent :

- paramètres simples;
- appel avec arguments;
- éventuellement une introduction légère à `return`.

Ne pas conserver un approfondissement des valeurs de retour uniquement parce qu'il existait dans l'ancien cours.

## Anciens laboratoires 4 et 14 → nouvelles rencontres 9 et 10

Ces sources peuvent contenir des notions qui se chevauchent avec DOM, portée, événements, classes et attributs.

Codex doit les **inventorier exercice par exercice** avant de décider de leur destination.

Destination générale :

- accès/manipulation DOM de base → rencontre 9;
- événements et `addEventListener` → rencontre 10;
- classes CSS manipulées en JavaScript (`classList`) → rencontre 10;
- attributs concrets utiles (`src`, `alt`, etc.) → rencontre 9 ou 10 selon l'exercice;
- longue liste de styles `.style` ou catalogues d'événements → réduire ou retirer du noyau.

## Laboratoires 11, 12 et 15

Ils ont une destination relativement directe :

- labo 11 → rencontre 11 — boucles;
- labo 12 → rencontre 12 — tableaux;
- labo 15 → rencontre 13 — plusieurs éléments du DOM.

Même dans ces cas, il faut revoir les exercices à la lumière de la matière retirée ou simplifiée.

# Sources héritées non encore mappées

Les pages suivantes existent encore dans `web/docs/02-labos/` :

```text
13-labo16.md  → 420905_lab16.zip
14-labo21.md  → 420905_lab21.zip
15-labo22.md  → 420905_lab22.zip
16-labo23.md  → 420905_lab23.zip
```

Leur numéro ne suffit pas pour déterminer leur destination dans Z03.

**Instruction Codex : ne pas les placer arbitrairement dans les rencontres 16, 21, 22 ou 23** — ces rencontres n'existent pas dans la nouvelle séquence.

Pour chacune :

1. extraire l'archive dans un dossier temporaire hors navigation;
2. inventorier les fichiers et les notions pratiquées;
3. comparer ces notions à la nouvelle séquence des rencontres 6 à 13;
4. décider : `intégrer`, `fusionner`, `conserver comme extra`, ou `retirer`;
5. documenter la décision dans `SUIVI_CONTENU.md`;
6. ne supprimer l'archive historique qu'après validation explicite.

# Structure cible de la navigation Laboratoires

À terme, la navigation devrait ressembler conceptuellement à :

```text
Laboratoires
├── Rencontre 6 — Variables et JavaScript
├── Rencontre 7 — Conditions et logique
├── Rencontre 8 — Fonctions
├── Rencontre 9 — DOM de base
├── Rencontre 10 — Événements et classes CSS
├── Rencontre 11 — Boucles
├── Rencontre 12 — Tableaux
└── Rencontre 13 — Plusieurs éléments du DOM
```

Ne pas afficher :

- « Laboratoire 2 » comme si celui-ci appartenait encore à la rencontre 2;
- des laboratoires 16/21/22/23 uniquement parce que les fichiers historiques existent;
- un laboratoire distinct pour les rencontres 14 ou 15;
- des pages HTML/CSS artificielles pour les rencontres 1 à 5 lorsque la pratique est déjà intégrée au site évolutif.

# Méthode de travail demandée à Codex

Pour chaque nouvelle rencontre de programmation :

1. lire la page de cours correspondante dans `web/docs/01-cours/`;
2. lire `SUIVI_CONTENU.md` pour connaître les décisions de simplification;
3. ouvrir/extrait les anciennes sources de laboratoire indiquées dans ce document;
4. inventorier les exercices avant de les modifier;
5. choisir les exercices qui correspondent réellement à la nouvelle rencontre;
6. adapter plutôt que réécrire lorsqu'un exercice est déjà bon;
7. enlever les références au 905, à l'ancien numéro de cours, aux anciens TP et aux remises Teams qui ne s'appliquent plus;
8. créer ou mettre à jour la page de laboratoire de la nouvelle rencontre;
9. vérifier les liens vers les fichiers statiques;
10. mettre à jour la navigation `labos`;
11. mettre à jour `SUIVI_CONTENU.md`;
12. exécuter le build Docusaurus.

# Critères de fin de migration

La migration des laboratoires sera considérée terminée lorsque :

- la navigation Laboratoires suit la nouvelle séquence;
- aucune page étudiante ne présente un ancien numéro de laboratoire comme s'il correspondait encore au calendrier actuel;
- chaque laboratoire retenu est lié à une nouvelle rencontre précise;
- les laboratoires mixtes ont été scindés ou recomposés;
- les sources héritées non utilisées ont une décision documentée;
- les rencontres 1 à 5 utilisent le site évolutif plutôt que des exercices HTML/CSS séparés;
- les rencontres 14 et 15 n'introduisent pas de nouveau laboratoire obligatoire;
- les liens et téléchargements fonctionnent;
- `npm run build` réussit.
