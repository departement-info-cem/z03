# Cartographie HTML/CSS — compétences, validations et niveaux d'attente

Ce document sert de référence pour les rencontres 1 à 5 de Z03. Il relie la documentation HTML/CSS, les compétences évaluées, les moments de validation et le niveau d'attente associé aux notions.

Il doit être utilisé avec `EVALUATION.md` et `SUIVI_CONTENU.md`.

## Principes

- Les rencontres 1 et 2 sont consacrées principalement à l'environnement de travail et à HTML.
- Les rencontres 3, 4 et 5 sont consacrées principalement à CSS.
- La programmation JavaScript commence à la rencontre 6; aucune nouvelle notion HTML/CSS essentielle ne doit être nécessaire après la rencontre 5.
- Les notions sont plus nombreuses que les compétences évaluées.
- Plusieurs notions peuvent être observées au cours d'une même validation.
- Une compétence peut être `À faire`, `À revoir` ou `Validée` indépendamment des autres compétences observées au même moment.
- Une validation doit porter sur la maîtrise et la compréhension, pas sur le décompte mécanique d'occurrences dans le projet.
- Les exercices existants doivent être conservés autant que possible. Lorsqu'une notion est retirée ou rendue facultative, privilégier l'allègement de l'exercice plutôt que sa réécriture complète.

## Trois niveaux d'attente

### À maîtriser

Une notion **À maîtriser** fait partie du noyau du cours.

- Elle peut contribuer directement à une compétence évaluée.
- Elle peut apparaître dans une validation de compétence.
- Elle peut être réinvestie dans l'évaluation sommative finale si elle demeure essentielle dans la séquence finale.

### Bonne pratique

Une **Bonne pratique** est enseignée, montrée dans les exemples et encouragée, mais elle ne constitue pas à elle seule une condition de réussite d'une compétence.

Exemple : utiliser `<header>`, `<nav>`, `<main>` ou `<footer>` lorsque ces éléments décrivent bien le contenu.

L'enseignant peut signaler l'absence d'une bonne pratique et suggérer une amélioration sans refuser une validation uniquement pour cette raison.

### Pour aller plus loin

Le contenu **Pour aller plus loin** est facultatif.

- Il permet à un étudiant d'enrichir son site ou d'explorer une notion supplémentaire.
- Il ne fait pas partie des compétences obligatoires.
- Il ne doit pas être nécessaire pour obtenir tous les points des validations progressives.
- Il ne doit pas apparaître comme exigence dans l'évaluation sommative finale.

## Convention visuelle à utiliser dans le site

Lorsque le contenu des rencontres sera réorganisé, utiliser des repères visuels explicites afin que l'étudiant distingue immédiatement le niveau d'attente.

Convention proposée avec les admonitions Docusaurus :

```md
:::info À maîtriser
Cette notion fait partie du noyau attendu et peut être évaluée.
:::

:::tip Bonne pratique
Cette pratique est recommandée, mais son absence ne fait pas échouer une compétence à elle seule.
:::

:::note Pour aller plus loin — non évalué
Cette section est facultative et ne fait pas partie de l'évaluation.
:::
```

Le texte du libellé doit toujours être présent; la couleur ou l'icône ne doit pas être le seul indice.

# Compétences HTML/CSS regroupées

Le bloc HTML/CSS est regroupé en **huit compétences**. Ces compétences sont suffisamment distinctes pour donner une rétroaction utile, mais elles ne nécessitent pas huit rencontres individuelles avec chaque étudiant.

| Code | Compétence | Notions principalement observées |
|---|---|---|
| **WEB-01** | **Organiser un projet Web et utiliser les chemins** | dossiers et fichiers, organisation des ressources, chemins relatifs, sous-dossiers, `../` |
| **WEB-02** | **Construire une page HTML correctement structurée** | structure du document, éléments et attributs, imbrication, indentation |
| **WEB-03** | **Structurer et enrichir le contenu HTML** | titres, paragraphes, listes, images, liens et choix d'éléments appropriés |
| **WEB-04** | **Relier plusieurs pages dans une navigation fonctionnelle** | `<a>`, `href`, pages multiples, navigation et chemins |
| **WEB-05** | **Associer correctement une feuille CSS externe** | fichier CSS, `<link>`, chemin vers la feuille, syntaxe d'une règle CSS |
| **WEB-06** | **Cibler les éléments avec des sélecteurs appropriés** | sélecteurs d'élément, classes, compréhension de `id`, cascade simple |
| **WEB-07** | **Mettre en forme une interface avec CSS** | couleurs, arrière-plans, typographie, alignement, bordures et propriétés visuelles |
| **WEB-08** | **Organiser l'espace et la disposition des éléments** | `margin`, `padding`, modèle en boîte, dimensions simples et Flexbox simple |

La capacité de **modifier, diagnostiquer et corriger** le code n'est pas une neuvième compétence indépendante. Elle sert plutôt de méthode de vérification de la maîtrise. Par exemple, l'enseignant peut demander de corriger un chemin, de cibler un groupe d'éléments avec une classe ou d'ajuster l'espacement entre le contenu et une bordure.

## Ce qui n'est pas attendu dans une validation

Une validation ne doit pas devenir un décompte du type :

- deux couleurs différentes;
- deux polices différentes;
- deux `<div>`;
- deux classes;
- une liste de chaque type;
- un nombre précis de bordures ou de propriétés CSS.

Ces éléments peuvent servir d'exercices ou de contraintes de pratique, mais la validation porte sur la capacité à utiliser volontairement les outils appropriés.

# Quatre moments de validation

Les huit compétences sont regroupées en **quatre moments de validation principaux**.

| Moment | Période cible | Compétences observées | Intention |
|---|---|---|---|
| **Validation A — Structure HTML** | Rencontre 2 | **WEB-01**, **WEB-02** | Vérifier l'organisation du projet, les chemins et la structure générale des pages. |
| **Validation B — Contenu et navigation** | Rencontre 2 ou début de la rencontre 3 | **WEB-03**, **WEB-04** | Vérifier que l'étudiant sait construire du contenu et relier plusieurs pages correctement. |
| **Validation C — CSS de base** | Rencontres 3–4 | **WEB-05**, **WEB-06** | Vérifier la feuille externe, les chemins CSS et l'utilisation des sélecteurs/classes. |
| **Validation D — Mise en forme et disposition** | Rencontres 4–5 | **WEB-07**, **WEB-08** | Vérifier la mise en forme, le modèle en boîte, les espacements et une disposition simple. |

Une seule interaction avec l'étudiant peut donc produire deux décisions différentes, par exemple :

```text
WEB-05 — Feuille CSS externe     Validée
WEB-06 — Sélecteurs              À revoir
```

Une compétence `À revoir` peut être représentée plus tard. La reprise d'une compétence HTML/CSS après la rencontre 5 ne doit pas retarder le début de JavaScript pour le groupe.

# Séquence de matière proposée

| Rencontre | Noyau de matière | Validation possible |
|---|---|---|
| **1** | environnement de travail, fichiers/dossiers, VS Code, navigateur, première page, structure HTML, contenu de base | aucune validation sommative prévue |
| **2** | organisation du projet, images, chemins relatifs, plusieurs pages, liens et navigation | Validations A et B |
| **3** | syntaxe CSS, feuille externe, chemins vers CSS, sélecteurs, classes et propriétés visuelles | début de la validation C |
| **4** | consolidation CSS, bordures, dimensions simples, `margin`, `padding`, modèle en boîte | validation C et début de D |
| **5** | Flexbox simple, navigation horizontale, intégration, pratique et correction | validation D et reprises |
| **6** | début de la programmation JavaScript | reprises HTML/CSS seulement au besoin, sans nouvelle matière essentielle |

# Mapping de la documentation HTML

Documentation de référence : `web/docs/01-cours/00-introduction-html.md`.

| Section actuelle | Notions | Niveau d'attente | Compétence(s) liée(s) | Exercices |
|---|---|---|---|---|
| **1. Une première page Web** | créer `index.html`, ouvrir dans le navigateur, première structure | À maîtriser | WEB-02 | À rattacher |
| **2. Comprendre les éléments HTML** | balises, contenu, attributs, éléments sans fermeture | À maîtriser | WEB-02, WEB-03 | À rattacher |
| **3. Imbriquer les éléments correctement** | imbrication et indentation | À maîtriser | WEB-02 | À rattacher |
| **4. La structure d'un document HTML** | `doctype`, `html`, `head`, `charset`, `title`, `body`, structure générale | À maîtriser | WEB-02 | À rattacher |
| **5. Structurer le contenu visible** | titres, paragraphes, listes, `strong`, `em`, `br` | À maîtriser comme famille d'outils; pas de décompte par balise | WEB-03 | À rattacher |
| **6. Ajouter une image** | `img`, `src`, chemins relatifs | À maîtriser | WEB-01, WEB-03 | À rattacher |
| **6. Ajouter une image** | texte alternatif `alt` | Bonne pratique fortement recommandée | WEB-03 | À rattacher |
| **7. Relier plusieurs pages** | `a`, `href`, pages multiples, liens internes et externes | À maîtriser | WEB-04 | À rattacher |
| **7. Relier plusieurs pages** | utiliser `<nav>` pour un groupe de liens de navigation | Bonne pratique | WEB-04 | À rattacher |
| **8. Commentaires** | `<!-- ... -->` | Bonne pratique | — | À rattacher |
| **9. Valider le document** | validation W3C et correction des erreurs | Bonne pratique / précontrôle avant validation | WEB-02 | À rattacher |

## Éléments sémantiques HTML

Les éléments sémantiques sont utiles, mais ils ne doivent pas devenir une barrière disproportionnée dans un cours d'introduction.

### Bonnes pratiques à enseigner

- `<nav>` pour une navigation importante;
- `<main>` pour le contenu principal;
- `<header>` pour un en-tête;
- `<footer>` pour un pied de page.

Leur utilisation doit être montrée et encouragée dans les exemples. Cependant, un étudiant ne doit pas échouer une compétence uniquement parce qu'il utilise un conteneur général là où un élément sémantique aurait été préférable, si la structure, la navigation et le comportement demandés sont autrement maîtrisés.

Les nuances plus fines entre `section`, `article`, `aside` et d'autres éléments sémantiques peuvent être présentées **Pour aller plus loin** si elles apparaissent dans le matériel futur.

# Mapping de la documentation CSS — introduction

Documentation de référence : `web/docs/01-cours/00-introduction-css.md`.

| Section actuelle | Notions | Niveau d'attente | Compétence(s) liée(s) | Exercices |
|---|---|---|---|---|
| **1. Ajouter un premier style** | propriété, valeur, déclaration, règle CSS | À maîtriser | WEB-05, WEB-07 | À rattacher |
| **2. Trois façons d'ajouter du CSS** | CSS intraligne et interne | Bonne pratique / contexte; savoir les reconnaître sans les privilégier | — | À rattacher |
| **2. Trois façons d'ajouter du CSS** | feuille CSS externe, `<link>`, `href`, chemin | À maîtriser | WEB-05 | À rattacher |
| **3. Les sélecteurs indiquent quoi modifier** | sélecteur d'élément | À maîtriser | WEB-06 | À rattacher |
| **3. Les sélecteurs indiquent quoi modifier** | classe et réutilisation d'une classe | À maîtriser — priorité élevée | WEB-06 | À rattacher |
| **3. Les sélecteurs indiquent quoi modifier** | identifiant `id` et `#id` | Bonne pratique / notion à comprendre, sans validation indépendante | WEB-06 | À rattacher |
| **4. Quand plusieurs règles visent le même élément** | cascade et priorité simple | Bonne pratique nécessaire au débogage, sans théorie détaillée | WEB-06 | À rattacher |
| **5. Regrouper du contenu** | conteneur `<div>` pour regrouper des éléments | À maîtriser comme outil | WEB-03, WEB-07 | À rattacher |
| **5. Regrouper du contenu** | `<span>` | Bonne pratique / outil ponctuel | WEB-03, WEB-07 | À rattacher |
| **5. Regrouper du contenu** | `header`, `nav`, `main`, `footer` | Bonne pratique | WEB-03, WEB-04 | À rattacher |
| **6. Couleurs et arrière-plans** | `color`, `background-color`, couleurs hexadécimales | À maîtriser comme famille d'outils; pas de nombre minimal d'occurrences | WEB-07 | À rattacher |
| **7. Ajouter une bordure** | `border` et ses valeurs principales | À maîtriser comme outil | WEB-07, WEB-08 | À rattacher |
| **8. Aligner et décorer le texte** | `text-align`, `text-decoration` | À maîtriser comme famille d'outils; pas de décompte | WEB-07 | À rattacher |
| **9. Modifier la typographie** | `font-family`, `font-style`, `font-size`, introduction à `rem` | À maîtriser comme famille d'outils; pas de décompte | WEB-07 | À rattacher |
| **10. Exemple complet** | intégration des notions précédentes | Synthèse, pas une nouvelle notion | WEB-05 à WEB-07 | À rattacher |

# Mapping CSS — modèle en boîte et disposition simple

Cette matière doit alimenter principalement les rencontres 4 et 5. Elle devra être rattachée à la page de documentation correspondante lors de la réorganisation.

| Notion | Niveau d'attente | Compétence(s) liée(s) | Exercices |
|---|---|---|---|
| `width` et `height` dans des cas simples | À maîtriser au besoin, sans théorie exhaustive des unités | WEB-08 | À rattacher |
| `padding` | À maîtriser | WEB-08 | À rattacher |
| `margin` | À maîtriser | WEB-08 | À rattacher |
| relation contenu / `padding` / `border` / `margin` | À maîtriser | WEB-08 | À rattacher |
| `border-radius` | Bonne pratique / outil visuel | WEB-07 | À rattacher |
| `display: flex` dans un cas simple | À maîtriser à un niveau introductif | WEB-08 | À rattacher |
| `gap` | À maîtriser à un niveau introductif | WEB-08 | À rattacher |
| `justify-content` et `align-items` dans quelques cas simples | Bonne pratique / approfondissement utile | WEB-08 | À rattacher |

# Pour aller plus loin — CSS

Les notions suivantes peuvent rester disponibles sur le site, mais doivent être clairement séparées du noyau obligatoire :

- détails de `inline`, `block` et `inline-block`;
- `overflow` et ses variantes;
- positionnement avec `position`, `top`, `right`, `bottom` et `left`;
- Flexbox avancé (`flex-grow`, `flex-shrink`, `flex-basis`, `order`, `align-content`, combinaisons complexes, etc.);
- CSS Grid;
- mises en page complexes;
- transitions;
- animations;
- propriétés purement décoratives non nécessaires aux objectifs du cours.

# Pondération

La pondération exacte des huit compétences reste à confirmer.

Comme hypothèse de travail, le bloc HTML/CSS peut représenter **jusqu'à environ 30 %** de la note finale, puisqu'il remplace non seulement l'ancien TP1 de 15 %, mais aussi une partie de l'ancienne première évaluation qui reprenait HTML/CSS en plus des premières notions de programmation.

La pondération ne doit pas obliger à créer davantage de moments de validation : les huit compétences peuvent conserver leurs quatre moments de validation même si leur valeur totale augmente.

# Prochaine étape — mapping des exercices

Pour chaque exercice HTML/CSS existant, compléter les colonnes `Exercices` des tableaux précédents et consigner :

1. la source actuelle de l'exercice;
2. les notions réellement pratiquées;
3. la rencontre cible (1 à 5);
4. la décision : **conserver**, **déplacer**, **alléger** ou **retirer**;
5. les portions devenues facultatives, notamment celles liées au positionnement, à `overflow`, à `inline-block` ou à du Flexbox avancé.

L'objectif est de réutiliser le matériel existant autant que possible et de supprimer de la matière plutôt que d'ajouter de nouvelles exigences.