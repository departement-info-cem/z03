---
title: Rencontre 2 - HTML, fichiers et navigation
description: Organiser le projet, utiliser les chemins relatifs, ajouter des images locales et relier plusieurs pages HTML.
---

# Rencontre 2 - HTML, fichiers et navigation

À la rencontre 1, vous avez créé une première page HTML. Aujourd'hui, cette page va devenir un **petit site composé de plusieurs fichiers**.

La difficulté principale de la rencontre est de comprendre **où se trouvent les fichiers les uns par rapport aux autres**. Cette idée servira aujourd'hui pour les images et les liens, puis à la rencontre 3 pour relier vos pages à une feuille CSS.

## Objectifs de la rencontre

À la fin de la rencontre, vous devriez être capable de :

- organiser les pages et les ressources dans des dossiers;
- ajouter une image locale avec `<img>`;
- utiliser `src` et `alt`;
- lire une petite arborescence de fichiers;
- construire un chemin relatif vers un fichier du même dossier ou d'un sous-dossier;
- utiliser `../` pour remonter vers un dossier parent;
- créer un lien avec `<a>` et `href`;
- relier plusieurs pages HTML entre elles;
- construire une navigation qui fonctionne depuis différentes pages;
- diagnostiquer un lien ou une image qui ne fonctionne pas.

## 1. D'une page Web à un site Web

Une page Web est un fichier HTML. Un site Web contient généralement **plusieurs fichiers qui travaillent ensemble** :

```text
mon-site/
├── index.html
├── images/
│   └── chat.jpg
└── pages/
    └── apropos.html
```

Dans cet exemple :

- `mon-site` est le dossier racine du projet;
- `index.html` est la page d'accueil;
- `images` contient les images locales;
- `pages` contient une page secondaire.

Un dossier ne sert pas seulement à faire du rangement. Sa position influence aussi les **chemins** que nous devons écrire dans HTML.

:::info À maîtriser
Avant d'écrire un chemin, vous devez être capable de répondre à deux questions :

1. Dans quel fichier suis-je en train d'écrire le code?
2. Où se trouve le fichier que je veux atteindre?
:::

## 2. Ajouter une image locale

L'élément `<img>` permet d'afficher une image dans une page.

```html
<img src="images/chat.jpg" alt="Un chat blanc assis devant une fenêtre">
```

Deux attributs sont particulièrement importants.

### `src`

`src` indique **où trouver le fichier image**.

```html
src="images/chat.jpg"
```

Le navigateur lit ce chemin à partir du fichier HTML actuel.

### `alt`

`alt` fournit une solution textuelle lorsque l'image ne peut pas être vue ou lorsqu'une personne utilise un lecteur d'écran.

```html
alt="Un chat blanc assis devant une fenêtre"
```

:::tip Bonne pratique — texte alternatif
Un bon texte alternatif transmet l'information utile de l'image. Un texte comme `chat.jpg` ou `image123` ne décrit pas réellement le contenu.
:::

## 3. Comprendre les chemins relatifs

Un **chemin relatif** décrit la position d'un fichier par rapport au fichier actuel.

Prenons cette structure :

```text
mon-site/
├── index.html
├── images/
│   └── chat.jpg
└── pages/
    └── apropos.html
```

### Fichier dans le même dossier

Si deux fichiers se trouvent dans le même dossier, le nom du fichier peut suffire.

Depuis `pages/apropos.html`, pour atteindre un autre fichier `contact.html` également placé dans `pages/` :

```html
<a href="contact.html">Contact</a>
```

### Entrer dans un sous-dossier

Depuis `index.html`, pour atteindre `images/chat.jpg` :

```html
<img src="images/chat.jpg" alt="Un chat blanc">
```

On peut lire le chemin comme ceci :

```text
à partir de index.html
→ entrer dans images
→ trouver chat.jpg
```

### Remonter d'un dossier avec `../`

Depuis `pages/apropos.html`, pour revenir vers `index.html` :

```html
<a href="../index.html">Accueil</a>
```

`../` signifie **remonter d'un dossier**.

Depuis cette même page, pour atteindre l'image :

```html
<img src="../images/chat.jpg" alt="Un chat blanc">
```

Le trajet est donc :

```text
pages/apropos.html
→ ../              revenir dans mon-site
→ images/          entrer dans images
→ chat.jpg         atteindre le fichier
```

:::warning Le chemin dépend du fichier actuel
Le même fichier image peut avoir deux chemins différents selon la page qui l'utilise.

Depuis `index.html` :

```html
<img src="images/chat.jpg" alt="Un chat blanc">
```

Depuis `pages/apropos.html` :

```html
<img src="../images/chat.jpg" alt="Un chat blanc">
```
:::

## 4. Éviter les chemins qui ne fonctionneront pas en ligne

Le navigateur doit pouvoir retrouver les fichiers **à l'intérieur du projet**.

Évitez donc un chemin qui dépend de votre ordinateur, par exemple :

```text
C:\Users\VotreNom\Downloads\chat.jpg
```

Ce chemin pourrait fonctionner uniquement sur votre poste et devenir inutilisable lorsque le site est déplacé ou publié.

Placez plutôt le fichier dans votre projet :

```text
mon-site/
└── images/
    └── chat.jpg
```

puis utilisez un chemin relatif.

:::tip Bonne pratique
Pour les travaux du cours, gardez les ressources importantes dans le dossier du projet. Le site devient ainsi plus facile à déplacer, sauvegarder et publier.
:::

## 5. Créer un lien avec `<a>`

L'élément `<a>` crée un lien. Son attribut `href` indique la destination.

```html
<a href="pages/apropos.html">À propos</a>
```

Le texte placé entre `<a>` et `</a>` devient cliquable.

### Lien vers une autre page du projet

Depuis `index.html` :

```html
<a href="pages/apropos.html">À propos</a>
```

Depuis `pages/apropos.html`, le lien de retour devient :

```html
<a href="../index.html">Accueil</a>
```

### Lien vers un autre site

Un lien peut aussi utiliser une adresse complète :

```html
<a href="https://www.w3.org/">Site du W3C</a>
```

Dans ce cas, on utilise une adresse Web complète plutôt qu'un chemin vers un fichier local du projet.

## 6. Construire une navigation

Un site de plusieurs pages doit permettre à la personne de comprendre où elle peut aller et de revenir facilement vers les autres pages.

Supposons cette structure :

```text
mon-site/
├── index.html
└── pages/
    ├── sujet.html
    └── apropos.html
```

Dans `index.html`, la navigation pourrait être :

```html
<nav>
  <a href="index.html">Accueil</a>
  <a href="pages/sujet.html">Mon sujet</a>
  <a href="pages/apropos.html">À propos</a>
</nav>
```

Dans `pages/sujet.html`, les chemins changent :

```html
<nav>
  <a href="../index.html">Accueil</a>
  <a href="sujet.html">Mon sujet</a>
  <a href="apropos.html">À propos</a>
</nav>
```

Pourquoi?

- `../index.html` remonte vers le dossier parent;
- `sujet.html` est dans le même dossier que la page actuelle;
- `apropos.html` est aussi dans le même dossier.

:::tip Bonne pratique
L'élément `<nav>` décrit un groupe de liens de navigation importants. Nous l'utiliserons dans les exemples du cours.

`<nav>` est une bonne pratique, mais son absence à elle seule ne fait pas échouer une compétence si la navigation est autrement correcte et comprise.
:::

## 7. Continuer à structurer le contenu HTML

Chaque nouvelle page reste un **document HTML complet**. Elle ne contient pas seulement quelques lignes copiées de la page d'accueil.

Par exemple :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>À propos</title>
  </head>
  <body>
    <nav>
      <a href="../index.html">Accueil</a>
      <a href="apropos.html">À propos</a>
    </nav>

    <main>
      <h1>À propos</h1>
      <p>Voici le contenu principal de cette page.</p>
    </main>
  </body>
</html>
```

:::tip Bonne pratique
`<main>` peut être utilisé pour identifier le contenu principal de la page. Des éléments comme `<header>`, `<nav>`, `<main>` et `<footer>` donnent du sens à la structure, mais ils ne sont pas évalués comme une liste de balises obligatoires.
:::

## 8. Diagnostiquer un chemin qui ne fonctionne pas

Lorsque vous voyez une image brisée ou qu'un lien mène au mauvais endroit, ne changez pas le chemin au hasard.

Procédez dans cet ordre :

1. regardez dans quel fichier HTML le chemin est écrit;
2. retrouvez ce fichier dans l'explorateur de VS Code;
3. retrouvez le fichier de destination;
4. tracez mentalement le trajet entre les deux;
5. vérifiez les noms de dossiers et de fichiers caractère par caractère;
6. corrigez le chemin puis testez de nouveau.

### Exemple d'erreur

Structure :

```text
mon-site/
├── index.html
└── pages/
    └── apropos.html
```

Code écrit dans `pages/apropos.html` :

```html
<a href="index.html">Accueil</a>
```

Le navigateur cherche alors `pages/index.html`, qui n'existe pas.

La correction est :

```html
<a href="../index.html">Accueil</a>
```

:::warning Les majuscules comptent
Lorsqu'un site est publié, `Chat.jpg` et `chat.jpg` peuvent être considérés comme deux fichiers différents. Utilisez exactement le même nom dans le dossier et dans le code.
:::

## 9. Valider HTML et tester les chemins

Le validateur W3C reste utile pour vérifier la structure et la syntaxe HTML :

[Validateur HTML du W3C](https://validator.w3.org/)

Il peut vous aider à trouver une balise oubliée ou un attribut mal écrit.

Cependant, un document HTML peut être valide tout en contenant un chemin vers un fichier qui n'existe pas. Pour vérifier les chemins, vous devez aussi **ouvrir les pages, cliquer sur tous les liens et regarder si les images apparaissent**.

:::tip Bonne pratique
Avant une validation de compétence, faites un précontrôle : validez votre HTML, puis parcourez votre site comme si vous étiez un visiteur.
:::

## 10. Passer de la théorie à la pratique

Nous allons d'abord pratiquer les chemins avec un petit site commun :

**[Exercice guidé — Images, chemins et navigation](./02-rencontre2-exercice-guide.md)**

Vous appliquerez ensuite les mêmes principes à votre propre site :

**[Projet Web — Étape 2 : transformer votre page en petit site](../03-projet-web/02-rencontre2.md)**

## Validations disponibles

À cette rencontre, deux moments de validation deviennent disponibles.

### Validation A — Structure HTML

- **WEB-01 — Organiser un projet Web et utiliser les chemins**;
- **WEB-02 — Construire une page HTML correctement structurée**.

### Validation B — Contenu et navigation

- **WEB-03 — Structurer et enrichir le contenu HTML**;
- **WEB-04 — Relier plusieurs pages dans une navigation fonctionnelle**.

La validation B peut se poursuivre au début de la rencontre 3 au besoin.

:::info À maîtriser
La validation porte sur votre capacité à **comprendre, expliquer et modifier** votre code. Elle ne consiste pas à compter un nombre précis d'images, de liens, de listes ou de balises.
:::

:::note Pour aller plus loin — non évalué
Si vous avez terminé la matière principale, vous pouvez ajouter un lien externe pertinent, une page supplémentaire ou du contenu supplémentaire à votre site.

Ne commencez pas encore la mise en forme CSS : la rencontre 3 sera consacrée à la feuille de styles externe et aux premiers sélecteurs.
:::
