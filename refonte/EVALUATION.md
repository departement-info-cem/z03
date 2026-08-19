# Évaluation progressive des compétences — Z03

Ce document décrit la stratégie d'évaluation envisagée pour Z03. Il doit évoluer avec la séquence de cours et rester cohérent avec `SUIVI_CONTENU.md` et `COMPETENCES_HTML_CSS.md`.

## Intention

Éviter de concentrer l'évaluation dans quelques gros travaux pratiques remis à une date fixe. Les compétences sont plutôt validées progressivement pendant les rencontres, sur des réalisations concrètes et observables.

Le modèle visé est :

- une seule évaluation sommative finale à la rencontre 15;
- des validations de compétences tout au long de la session;
- au moins 15 % de la note déjà évaluée au plus tard à la rencontre 6;
- la rencontre 14 conservée comme buffer, rattrapage, travail ou révision;
- aucune notion essentielle introduite à la rencontre 14;
- possibilité pour un étudiant de représenter une compétence qui n'était pas encore maîtrisée lors d'une première tentative.

## Principe de validation

Une compétence doit être suffisamment petite pour être vérifiée rapidement en classe, idéalement en 1 à 3 minutes.

La validation devrait porter sur ce que l'étudiant sait faire et expliquer, et non seulement sur la présence du résultat final dans un projet.

Les notions ne correspondent pas une à une aux compétences. Plusieurs notions proches peuvent être regroupées dans une seule compétence, et plusieurs compétences peuvent être observées au cours d'un même passage auprès de l'étudiant.

Le modèle distingue trois statuts :

- `À faire` : aucune preuve suffisante n'a encore été observée;
- `À revoir` : une tentative a eu lieu, mais la maîtrise n'est pas encore suffisante;
- `Validée` : la preuve de maîtrise est jugée suffisante.

`À revoir` ne constitue pas une pénalité en soi. L'étudiant peut représenter la compétence lorsque la logistique le permet.

## Déroulement suggéré en classe

1. Une partie de la rencontre sert à l'enseignement et à la pratique guidée.
2. Une plage de travail autonome permet aux étudiants d'avancer leurs exercices ou leur projet fil rouge.
3. Lorsqu'un étudiant estime maîtriser une compétence disponible, il demande une validation.
4. L'enseignant vérifie rapidement la réalisation et peut poser une courte question ou demander une petite modification pour distinguer compréhension et simple copie.
5. Une même interaction peut permettre de statuer sur deux compétences proches.
6. Chaque compétence reçoit indépendamment un statut : `À faire`, `À revoir` ou `Validée`.
7. Une compétence `À revoir` peut être représentée plus tard sans attendre une grosse remise.

Ce fonctionnement doit éviter une file d'attente permanente. La validation ne doit pas se transformer en séance de tutorat prolongée : si la maîtrise n'est pas encore suffisante, l'enseignant indique brièvement ce qui doit être retravaillé et passe à l'étudiant suivant.

## Bloc HTML/CSS — huit compétences, quatre moments de validation

Les rencontres 1 à 5 constituent le bloc HTML/CSS. La programmation JavaScript commence à la rencontre 6.

Les compétences détaillées et le mapping complet des notions se trouvent dans `COMPETENCES_HTML_CSS.md`.

### Compétences

| Code | Compétence |
|---|---|
| **WEB-01** | Organiser un projet Web et utiliser les chemins |
| **WEB-02** | Construire une page HTML correctement structurée |
| **WEB-03** | Structurer et enrichir le contenu HTML |
| **WEB-04** | Relier plusieurs pages dans une navigation fonctionnelle |
| **WEB-05** | Associer correctement une feuille CSS externe |
| **WEB-06** | Cibler les éléments avec des sélecteurs appropriés |
| **WEB-07** | Mettre en forme une interface avec CSS |
| **WEB-08** | Organiser l'espace et la disposition des éléments |

### Moments de validation

| Moment | Période cible | Compétences |
|---|---|---|
| **Validation A — Structure HTML** | Rencontre 2 | WEB-01, WEB-02 |
| **Validation B — Contenu et navigation** | Rencontre 2 ou début de la rencontre 3 | WEB-03, WEB-04 |
| **Validation C — CSS de base** | Rencontres 3–4 | WEB-05, WEB-06 |
| **Validation D — Mise en forme et disposition** | Rencontres 4–5 | WEB-07, WEB-08 |

Ainsi, huit compétences ne produisent pas huit entrevues distinctes par étudiant. Le modèle vise quatre passages principaux, répartis pendant les périodes de travail.

La capacité de diagnostiquer et corriger sert de méthode de validation plutôt que de compétence autonome. Par exemple, l'enseignant peut demander de réparer un chemin relatif, de cibler plusieurs éléments avec une classe ou d'ajuster un `padding`.

## Niveaux d'attente dans le matériel

Le contenu pédagogique doit être classé en trois niveaux.

### À maîtriser

La notion fait partie du noyau attendu et peut contribuer directement à une compétence évaluée ou être réinvestie dans l'évaluation finale.

### Bonne pratique

La notion ou pratique est enseignée et encouragée, mais son absence ne doit pas faire échouer une compétence à elle seule.

Exemples HTML :

- utiliser `<nav>` pour une navigation;
- utiliser `<main>` pour le contenu principal;
- utiliser `<header>` et `<footer>` lorsque ces éléments conviennent;
- fournir un texte alternatif pertinent aux images;
- valider le HTML et maintenir une indentation lisible.

### Pour aller plus loin

La notion est facultative, clairement identifiée comme non évaluée et ne doit pas être requise dans l'évaluation finale.

Exemples CSS :

- détails de `inline` / `inline-block`;
- `overflow`;
- positionnement (`position`, `top`, `left`, etc.);
- Flexbox avancé;
- Grid;
- animations et transitions.

Le site doit utiliser un repère visuel et textuel clair pour distinguer ces catégories. La couleur seule ne doit pas servir d'indication.

## Pondération — cadre de travail

La pondération finale doit respecter les règles institutionnelles applicables.

Le bloc HTML/CSS peut maintenant être envisagé autour de **30 %** de la note finale. Cette valeur est une hypothèse de travail : le nouveau modèle remplace l'ancien TP1 de 15 %, mais doit aussi récupérer une partie de l'ancienne première évaluation qui reprenait HTML/CSS en plus des premières notions de programmation.

La hausse de la pondération ne doit pas augmenter mécaniquement le nombre de moments de validation. Les huit compétences HTML/CSS demeurent regroupées en quatre moments principaux.

La pondération exacte par compétence reste à déterminer après inventaire des exercices et clarification du poids des premières compétences JavaScript.

## Projet fil rouge

Un petit site Web évolutif sert de support aux validations successives sans devenir un gros TP remis d'un seul bloc.

Le même projet peut servir de preuve pour :

- environnement et structure de fichiers;
- HTML;
- navigation;
- CSS;
- ajout de JavaScript;
- DOM et interactions;
- puis, si retenus, boucles/tableaux et manipulation de plusieurs éléments.

L'étudiant accumule ainsi des validations sur un produit qu'il améliore, mais la note n'attend pas une remise finale du produit complet.

## Règles pour les compétences

Une compétence évaluée doit :

1. être observable;
2. être formulée avec un verbe d'action;
3. pouvoir être vérifiée rapidement;
4. correspondre à de la matière réellement enseignée;
5. ne pas dépendre d'un contenu déclaré facultatif;
6. pouvoir être rattachée à un ou plusieurs exercices identifiés dans `SUIVI_CONTENU.md`;
7. être incluse explicitement dans la portée de l'examen final seulement si elle est considérée essentielle.

Les critères mécaniques comme « utiliser deux couleurs », « avoir deux classes » ou « insérer deux `div` » peuvent servir à guider la pratique, mais ne doivent pas devenir des compétences distinctes ni imposer un décompte pendant une validation.

## Application de suivi — besoin fonctionnel

L'application de suivi devra permettre de gérer rapidement les validations individuelles et l'historique des tentatives.

### Vue principale

- étudiants par groupe;
- compétences regroupées par bloc;
- états `À faire`, `À revoir`, `Validée`;
- progression globale;
- filtre par compétence ou moment de validation;
- horodatage;
- courte note facultative;
- historique des changements de statut.

### Flux minimal

L'étudiant demande une validation. L'enseignant ouvre sa fiche, sélectionne le moment ou les compétences concernées, observe la preuve et enregistre les statuts appropriés.

La conception de l'application est traitée séparément du présent document pédagogique.

## Décisions actuelles

- Une seule évaluation sommative formelle est prévue, à la rencontre 15.
- L'évaluation progressive par compétences remplace l'idée de dépendre d'un gros TP unique pour obtenir les premières notes.
- Les rencontres 1 et 2 servent principalement à l'environnement de travail et à HTML.
- Les rencontres 3, 4 et 5 servent principalement à CSS.
- La programmation JavaScript commence à la rencontre 6.
- Le bloc HTML/CSS comprend huit compétences regroupées en quatre moments de validation.
- Le bloc HTML/CSS peut représenter environ 30 % de la note finale, sous réserve de la pondération globale à finaliser.
- Le contenu pédagogique est classé en `À maîtriser`, `Bonne pratique` ou `Pour aller plus loin`.
- Les notions « Pour aller plus loin » ne font pas partie des validations obligatoires ni de l'examen final.
- La rencontre 14 demeure un buffer sans nouvelle matière essentielle.
