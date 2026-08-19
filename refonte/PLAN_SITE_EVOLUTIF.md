# Plan directeur — site Web évolutif des rencontres 1 à 5

Ce document définit le **plan haut niveau** du projet Web construit progressivement pendant les cinq premières rencontres de Z03.

Il remplace, dans l'organisation pédagogique, l'ancien modèle « exercices HTML/CSS séparés + TP1 remis à la fin ». L'étudiant pratique directement les notions dans un **même site Web personnel** qu'il enrichit au fur et à mesure que la matière est enseignée.

Ce document est d'abord un document de conception pour la refonte. Il servira ensuite de source pour rédiger les pages étudiantes détaillées de chaque rencontre.

Documents associés :

- `COMPETENCES_HTML_CSS.md` — huit compétences et quatre moments de validation;
- `EVALUATION.md` — modèle de validation progressive;
- `SUIVI_CONTENU.md` — séquence et décisions de migration;
- `MIGRATION_LABORATOIRES_CODEX.md` — réalignement futur des laboratoires de programmation.

# Intention pédagogique

Pendant les rencontres 1 à 5, le travail pratique n'est pas une série de petits exercices indépendants.

Le cycle visé est :

1. courte présentation d'une nouvelle notion;
2. démonstration par l'enseignant;
3. application immédiate dans le site personnel de l'étudiant;
4. aide au besoin;
5. validation d'une ou de plusieurs compétences lorsque l'étudiant est prêt;
6. poursuite et amélioration du même site à la rencontre suivante.

Le projet sert donc simultanément de :

- terrain de pratique;
- fil conducteur entre les rencontres;
- preuve observable pour les validations de compétences;
- contexte authentique pour apprendre les fichiers, les chemins, HTML et CSS.

Il ne doit pas redevenir un gros TP dont toute la note dépend d'une remise finale.

# Sujet et portée du site

L'étudiant choisit un **sujet de son choix** : loisir, sport, jeu vidéo, voyage, musique, animaux, cuisine, technologie, collection, entreprise fictive, etc.

Le sujet sert uniquement de contexte. La qualité ou l'originalité du sujet ne doit pas influencer la maîtrise des compétences techniques.

Le site doit rester volontairement petit. À terme, il devrait contenir environ **trois pages significatives ou plus**, par exemple :

- une page d'accueil;
- une page consacrée à une partie du sujet (détail, produits, activités, galerie, information, etc.);
- une page À propos, Contact ou autre page pertinente au sujet.

Ces exemples ne sont pas des noms de fichiers obligatoires. L'étudiant peut adapter la structure à son sujet tant que le site permet de démontrer les compétences attendues.

# Règles de conception

## Ce qui est évalué

L'évaluation porte sur la capacité de l'étudiant à **construire, expliquer et modifier** son site en utilisant les notions enseignées.

On ne compte pas mécaniquement :

- le nombre de couleurs;
- le nombre de polices;
- le nombre de `<div>`;
- le nombre de classes;
- le nombre de listes;
- le nombre de bordures;
- le nombre exact de propriétés CSS.

Une contrainte de pratique peut demander à l'étudiant d'essayer une notion, mais elle ne devient pas automatiquement un critère de notation indépendant.

## Trois niveaux d'attente

Les pages étudiantes devront distinguer clairement :

### À maîtriser

Contenu qui contribue directement aux compétences évaluées.

### Bonne pratique

Pratique recommandée et enseignée, mais dont l'absence ne fait pas échouer une compétence à elle seule.

### Pour aller plus loin — non évalué

Contenu facultatif pour les étudiants qui avancent plus rapidement ou souhaitent enrichir leur site.

Le libellé textuel doit être visible; la couleur seule ne doit pas servir à distinguer les niveaux.

# Progression du site par rencontre

## Rencontre 1 — Démarrer le site

### Matière principale

- environnement de travail;
- fichiers, dossiers et extensions;
- VS Code et navigateur;
- première page HTML;
- structure générale d'un document;
- éléments HTML de contenu de base.

### Étape du projet

L'étudiant :

1. choisit un sujet;
2. crée le dossier racine de son site;
3. crée `index.html`;
4. ouvre sa page dans le navigateur;
5. ajoute du contenu réel lié à son sujet;
6. utilise quelques éléments HTML pertinents : titres, paragraphes, listes, images ou autres éléments déjà vus.

L'objectif n'est pas de terminer une page complète. L'étudiant doit surtout réussir à créer, enregistrer, modifier et afficher une première page qu'il comprend.

### Compétences

Aucune validation sommative principale n'est prévue à la rencontre 1.

Les premières observations peuvent toutefois préparer :

- **WEB-01 — Organiser un projet Web et utiliser les chemins**;
- **WEB-02 — Construire une page HTML correctement structurée**.

### Bonnes pratiques possibles

- indentation lisible;
- noms de fichiers simples et explicites;
- structure HTML propre;
- utilisation de `<main>`, `<header>` ou d'autres éléments sémantiques lorsque cela aide, sans en faire une exigence de maîtrise.

### Pour aller plus loin

L'étudiant rapide peut ajouter davantage de contenu ou explorer quelques éléments HTML supplémentaires, sans prendre d'avance sur les compétences obligatoires des rencontres suivantes.

---

## Rencontre 2 — Transformer la page en véritable petit site

### Matière principale

- organisation des ressources;
- images locales;
- chemins relatifs;
- sous-dossiers;
- `../` lorsque nécessaire;
- liens;
- plusieurs pages;
- navigation.

### Étape du projet

L'étudiant transforme sa première page en petit site multipage.

À la fin de l'étape, le projet devrait avoir une structure comparable à :

```text
mon-site/
├── index.html
├── une-autre-page.html
├── apropos.html
├── css/
│   └── styles.css      # peut être créé maintenant ou à la rencontre 3
└── images/
    ├── image1.jpg
    └── image2.jpg
```

L'étudiant :

1. organise les ressources dans des dossiers;
2. crée plusieurs pages liées à son sujet;
3. ajoute des images locales lorsque pertinent;
4. construit une navigation permettant de circuler entre les pages;
5. vérifie ses chemins relatifs;
6. ajoute suffisamment de contenu pour que chaque page ait une fonction reconnaissable.

### Validations disponibles

**Validation A — Structure HTML**

- **WEB-01 — Organiser un projet Web et utiliser les chemins**;
- **WEB-02 — Construire une page HTML correctement structurée**.

**Validation B — Contenu et navigation**

- **WEB-03 — Structurer et enrichir le contenu HTML**;
- **WEB-04 — Relier plusieurs pages dans une navigation fonctionnelle**.

La validation B peut se poursuivre au début de la rencontre 3 si nécessaire.

### Exemples de vérifications rapides

L'enseignant peut demander :

- « Montre-moi comment on passe de cette page à ta page À propos. »;
- « Où se trouve cette image dans ton projet? »;
- « Si cette page était dans un sous-dossier, qu'est-ce qui changerait dans le chemin? »;
- « Ajoute ou corrige ce lien devant moi. »

### Bonnes pratiques possibles

- `alt` pertinent pour les images;
- `<nav>` pour une navigation importante;
- `<main>` pour le contenu principal;
- validation W3C comme précontrôle;
- commentaires lorsqu'ils ont une utilité réelle.

### Pour aller plus loin

- ajouter une page supplémentaire;
- ajouter des liens externes pertinents;
- enrichir le contenu sans créer de nouvelles exigences évaluées.

---

## Rencontre 3 — Donner une identité visuelle au site

### Matière principale

- syntaxe d'une règle CSS;
- CSS intraligne/interne comme contexte;
- feuille CSS externe comme méthode attendue;
- `<link>` et chemin vers la feuille CSS;
- sélecteurs d'élément;
- classes;
- `id` à un niveau de compréhension;
- couleurs, arrière-plans, typographie, alignement et bordures simples.

### Étape du projet

L'étudiant :

1. crée ou complète `css/styles.css`;
2. relie correctement ses pages à cette feuille externe;
3. applique une première identité visuelle cohérente à son site;
4. utilise des sélecteurs d'élément lorsque cela convient;
5. crée et réutilise des classes pour cibler certains groupes d'éléments;
6. modifie volontairement plusieurs propriétés visuelles.

Le but n'est pas d'atteindre un nombre précis de couleurs ou de polices. L'étudiant doit montrer qu'il sait **cibler un élément et produire volontairement un résultat visuel**.

### Validation disponible

Début de la **Validation C — CSS de base** :

- **WEB-05 — Associer correctement une feuille CSS externe**;
- **WEB-06 — Cibler les éléments avec des sélecteurs appropriés**.

### Exemples de vérifications rapides

- « Montre-moi comment cette page trouve ton fichier CSS. »;
- « Fais-moi changer tous les éléments de ce groupe sans modifier les autres. »;
- « Pourquoi as-tu utilisé une classe ici? »;
- « Cette règle ne s'applique pas : trouve-moi pourquoi. »

### Bonnes pratiques possibles

- éviter le CSS intraligne pour le projet;
- réutiliser les classes plutôt que recopier les mêmes styles;
- garder des noms de classes compréhensibles;
- comprendre sommairement qu'une règle peut en remplacer une autre.

### Pour aller plus loin

- styles au survol (`:hover`) si introduits comme extra;
- propriétés purement décoratives supplémentaires;
- exploration personnelle sans incidence sur la validation.

---

## Rencontre 4 — Organiser l'espace avec le modèle en boîte

### Matière principale

- dimensions simples lorsque pertinentes;
- `border`;
- `padding`;
- `margin`;
- relation contenu / remplissage / bordure / marge;
- regroupement d'éléments;
- consolidation des classes et du CSS externe.

### Étape du projet

L'étudiant améliore la structure visuelle de ses pages.

Il doit notamment :

1. identifier quelques zones ou groupes de contenu qui gagneraient à être présentés comme des blocs;
2. appliquer des bordures ou arrière-plans lorsque cela aide à distinguer ces zones;
3. utiliser `padding` pour créer de l'espace à l'intérieur des blocs;
4. utiliser `margin` pour espacer les blocs entre eux;
5. ajuster certaines dimensions lorsque cela est réellement utile;
6. réutiliser ses classes plutôt que multiplier les règles presque identiques.

### Validations disponibles

- terminer au besoin la **Validation C — WEB-05 / WEB-06**;
- commencer la **Validation D — WEB-07 / WEB-08**.

Compétences principalement observées :

- **WEB-07 — Mettre en forme une interface avec CSS**;
- **WEB-08 — Organiser l'espace et la disposition des éléments**.

### Exemples de vérifications rapides

- « Mets plus d'espace entre le texte et sa bordure. »;
- « Éloigne ces deux blocs sans déplacer leur contenu à l'intérieur. »;
- « Explique-moi la différence entre ce `margin` et ce `padding`. »;
- « Applique le même style à ces éléments sans recopier toute la règle. »

### Bonnes pratiques possibles

- `border-radius`;
- cohérence des espacements;
- éviter les hauteurs fixes inutiles;
- corriger le CSS existant plutôt qu'empiler des règles contradictoires.

### Pour aller plus loin

- effets visuels supplémentaires;
- nuances du modèle en boîte non nécessaires aux exercices;
- propriétés avancées clairement indiquées comme non évaluées.

---

## Rencontre 5 — Disposer, intégrer et finaliser

### Matière principale

- `display: flex` dans des cas simples;
- `gap`;
- `justify-content` / `align-items` au besoin;
- navigation horizontale simple;
- intégration et consolidation;
- diagnostic et correction de problèmes HTML/CSS.

### Étape du projet

L'étudiant termine le bloc HTML/CSS en améliorant son site plutôt qu'en ajoutant beaucoup de nouvelles fonctionnalités.

Il doit :

1. utiliser Flexbox dans au moins un cas où cela apporte une solution simple et compréhensible, par exemple la navigation ou un groupe de blocs;
2. vérifier la cohérence visuelle entre les pages;
3. corriger les liens, chemins, styles ou espacements encore problématiques;
4. être capable de modifier son propre code à la demande;
5. compléter les validations HTML/CSS qui ne sont pas encore maîtrisées.

### Validation disponible

Finalisation de la **Validation D — Mise en forme et disposition** :

- **WEB-07 — Mettre en forme une interface avec CSS**;
- **WEB-08 — Organiser l'espace et la disposition des éléments**.

Reprises possibles des validations A, B ou C lorsque la logistique le permet.

### Bonnes pratiques possibles

- navigation cohérente d'une page à l'autre;
- présentation visuelle lisible;
- code suffisamment propre pour être retrouvé et modifié rapidement;
- éléments sémantiques appropriés lorsqu'ils sont naturels.

### Pour aller plus loin — non évalué

Exemples à offrir aux étudiants qui veulent enrichir leur site :

- approfondissement de Flexbox;
- `:hover` et transitions simples;
- `box-shadow`;
- positionnement dans un cas particulier;
- `overflow`;
- CSS Grid;
- animations;
- autres effets visuels.

Ces éléments ne doivent pas être nécessaires pour obtenir la pleine maîtrise des compétences HTML/CSS.

# Vue synthèse : matière, projet et validations

| Rencontre | L'étudiant fait évoluer son site | Compétences / validation |
|---|---|---|
| **1** | choisit son sujet, crée `index.html`, ajoute son premier contenu | préparation WEB-01/02; aucune validation principale |
| **2** | organise les ressources, crée plusieurs pages, ajoute images et navigation | Validation A : WEB-01/02; Validation B : WEB-03/04 |
| **3** | crée/relie la feuille CSS, ajoute classes et identité visuelle | début Validation C : WEB-05/06 |
| **4** | améliore blocs, espacements et modèle en boîte | fin C; début Validation D : WEB-07/08 |
| **5** | ajoute une disposition Flexbox simple, consolide et corrige | fin Validation D et reprises |

# Pondération

Le bloc HTML/CSS peut représenter **environ 30 %** de la note finale comme hypothèse de travail.

La valeur exacte par compétence reste à confirmer. L'augmentation de la pondération ne doit pas augmenter artificiellement le nombre d'interactions d'évaluation : les huit compétences restent regroupées dans quatre moments principaux.

# Structure future des pages étudiantes

Lorsque ce plan sera validé, créer des pages étudiantes détaillées pour chacune des rencontres 1 à 5.

Chaque page devrait suivre une structure commune :

```text
1. Ce que nous apprenons aujourd'hui
2. Démonstration / exemples de cours
3. Ton site aujourd'hui
   - À maîtriser
   - Étapes de construction
4. Avant de demander une validation
   - courte liste de précontrôle
5. Compétence(s) pouvant être validée(s)
6. Bonne pratique
7. Pour aller plus loin — non évalué
```

Les consignes doivent être suffisamment précises pour faire progresser un étudiant débutant, sans transformer le projet en grille mécanique d'occurrences.

# Précontrôle avant une validation

Les pages détaillées pourront proposer une petite liste que l'étudiant vérifie lui-même avant de demander une validation.

Exemples selon la rencontre :

- les pages s'ouvrent;
- les liens testés fonctionnent;
- les images utilisées s'affichent;
- la feuille CSS est réellement externe;
- les notions demandées ont été essayées;
- l'étudiant est capable d'expliquer et de modifier son propre code.

Ce précontrôle ne constitue pas une évaluation et ne remplace pas la validation de l'enseignant.

# Passage à JavaScript

À la rencontre 6, la séquence d'enseignement passe à JavaScript.

Le site évolutif HTML/CSS peut rester disponible comme réalisation de l'étudiant et éventuellement servir de contexte à certains exemples, mais **aucune nouvelle matière HTML/CSS essentielle ne doit être ajoutée après la rencontre 5**.

Un étudiant dont une compétence HTML/CSS est encore `À revoir` peut la représenter plus tard lorsque la logistique le permet, sans retarder la progression du groupe en programmation.

# Prochaine étape de conception

Après validation de ce plan haut niveau :

1. rédiger la page étudiante détaillée de la rencontre 1;
2. rédiger celle de la rencontre 2 en y intégrant clairement les validations A et B;
3. poursuivre avec les rencontres 3, 4 et 5;
4. déplacer progressivement le contenu pertinent des pages HTML/CSS actuelles dans ces nouvelles pages;
5. marquer visuellement les blocs `Bonne pratique` et `Pour aller plus loin — non évalué`;
6. retirer de la navigation principale les anciennes pages de matière lorsqu'elles ont été entièrement migrées et vérifiées.