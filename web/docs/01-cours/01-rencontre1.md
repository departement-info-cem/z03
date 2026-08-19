---
title: Rencontre 1 - Premiers pas en HTML
description: Découvrir les éléments HTML, l'imbrication, la structure d'un document et les premiers contenus visibles.
---

# Rencontre 1 - Premiers pas en HTML

Avant de commencer cette partie, assurez-vous d'avoir complété le **[Préambule — Environnement de travail](./01-rencontre1-environnement.md)**.

Votre environnement étant prêt, nous pouvons maintenant nous concentrer sur HTML.

HTML est le langage qui décrit la **structure et le sens du contenu** d'une page Web. Pour cette première rencontre, nous allons apprendre à reconnaître ses principaux éléments et à construire une page simple que nous comprenons entièrement.

## Objectifs de la rencontre

À la fin de cette partie, vous devriez être capable de :

- expliquer simplement ce qu'est un élément HTML;
- reconnaître une balise ouvrante, un contenu et une balise fermante;
- reconnaître un attribut simple;
- imbriquer correctement des éléments HTML;
- reconnaître les principales parties d'un document HTML;
- utiliser des titres, des paragraphes et des listes pour structurer du contenu;
- créer une page HTML complète et l'observer dans le navigateur.

## 1. Comprendre les éléments HTML

Un document HTML est composé d'**éléments**. La plupart des éléments possèdent :

1. une balise ouvrante;
2. un contenu;
3. une balise fermante.

```html
<p>Ceci est un paragraphe.</p>
```

Dans cet exemple :

- `<p>` ouvre l'élément;
- `Ceci est un paragraphe.` est son contenu;
- `</p>` ferme l'élément.

### Les attributs

Une balise ouvrante peut contenir des **attributs**. Un attribut donne une information supplémentaire sur l'élément.

```html
<p class="introduction">Bienvenue!</p>
```

Ici, l'attribut `class` possède la valeur `introduction`. Nous utiliserons davantage les classes lorsque nous commencerons CSS.

### Quelques éléments sans balise fermante

Certains éléments ne contiennent pas de texte et n'ont pas de balise fermante. C'est notamment le cas de :

```html
<br>
<hr>
```

Nous verrons l'élément `<img>` et les chemins vers les images à la rencontre 2.

## 2. Imbriquer les éléments correctement

Un élément peut en contenir un autre. On parle alors d'**imbrication**.

```html
<p>Ce mot est <strong>important</strong>.</p>
```

Les balises doivent se fermer dans l'ordre inverse de leur ouverture.

Code correctement imbriqué :

```html
<p>Cinq chiens <strong><em>chassent</em></strong> six chats.</p>
```

:::danger Balises croisées
Le code suivant est incorrect, parce que les balises se croisent :

```html
<p>Cinq chiens <strong><em>chassent</strong></em> six chats.</p>
```
:::

:::tip Bonne pratique
L'indentation aide à voir la structure et à repérer plus facilement une balise mal placée.
:::

## 3. La structure d'un document HTML

Une page HTML complète possède une structure générale semblable à celle-ci :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma première page</title>
  </head>
  <body>
    <h1>Bienvenue sur ma page</h1>
    <p>Je viens de créer ma première page Web.</p>
  </body>
</html>
```

### `<!doctype html>` et `<html>`

`<!doctype html>` indique au navigateur qu'il doit interpréter le document comme du HTML moderne. L'élément `<html>` contient ensuite tout le document; `lang="fr"` indique que son contenu est en français.

### `<head>`

Le `<head>` contient des informations sur la page qui ne font pas partie du contenu principal affiché :

- `charset="UTF-8"` permet d'utiliser correctement les caractères accentués;
- `viewport` adapte l'affichage à la largeur de l'appareil;
- `<title>` détermine le texte affiché dans l'onglet du navigateur.

### `<body>`

Le `<body>` contient ce que la personne voit dans la page : titres, paragraphes, listes et, plus tard, images et liens.

:::info À maîtriser
Vous n'avez pas besoin de réciter cette structure de mémoire dès aujourd'hui. Vous devez surtout être capable d'en reconnaître les grandes parties et de savoir où placer le contenu visible.
:::

## 4. Structurer le contenu visible

### Les titres

HTML propose six niveaux de titres, de `<h1>` à `<h6>`.

```html
<h1>Titre principal de la page</h1>
<h2>Une grande section</h2>
<h3>Une sous-section</h3>
```

Le niveau indique la place du titre dans la structure du document. On choisit donc un niveau pour son sens, et non simplement pour obtenir une taille de caractères particulière.

### Les paragraphes

```html
<p>Voici mon premier paragraphe.</p>
<p>Voici un deuxième paragraphe.</p>
```

### Les listes

Une liste non ordonnée utilise `<ul>` et `<li>` :

```html
<ul>
  <li>Jeux de stratégie</li>
  <li>Jeux coopératifs</li>
  <li>Jeux de cartes</li>
</ul>
```

Une liste ordonnée utilise `<ol>` lorsque l'ordre des éléments est important.

### Mettre l'accent sur un passage

```html
<p>
  Cette consigne est <strong>importante</strong> et ce mot reçoit
  une <em>emphase</em> particulière.
</p>
```

:::info À maîtriser
Concentrez-vous sur la capacité de choisir un élément HTML qui correspond au rôle de votre contenu et de l'imbriquer correctement.

Vous n'avez pas à mémoriser une longue liste de balises.
:::

## 5. Passer de la théorie à la pratique

Nous allons maintenant construire une première page ensemble, étape par étape :

**[Exercice guidé — Construire une première page HTML](./01-rencontre1-exercice-guide.md)**

Après cet exercice, vous appliquerez la même méthode à votre propre site :

**[Projet Web — Étape 1 : première version de votre site](../03-projet-web/01-rencontre1.md)**

Si vous voulez voir la vue d'ensemble avant de commencer, consultez aussi la **[présentation du Projet Web](../03-projet-web/00-presentation.md)**.

Aucune validation sommative n'est prévue à la rencontre 1. Cette première rencontre prépare surtout les compétences **WEB-01** et **WEB-02**, qui commenceront à être validées à la rencontre 2.

:::note Pour aller plus loin — non évalué
Si vous terminez rapidement, enrichissez le contenu de votre page ou refaites une petite partie sans regarder l'exemple. N'essayez pas encore de prendre de l'avance avec CSS ou une mise en page complexe.
:::
