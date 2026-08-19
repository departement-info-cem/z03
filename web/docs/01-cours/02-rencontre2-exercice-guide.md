---
title: Exercice guidé - Images, chemins et navigation
description: Construire ensemble un petit site de deux pages pour pratiquer les chemins relatifs, les images locales et les liens.
---

# Exercice guidé - Images, chemins et navigation

Cet exercice se fait **ensemble en classe** avant de modifier votre propre Projet Web.

Le but est de comprendre une idée essentielle : **un chemin relatif se lit à partir du fichier HTML dans lequel le chemin est écrit**.

## 1. Créer la structure de l'exercice

Dans votre dossier Z03, créez un nouveau dossier :

```text
exercice-rencontre2
```

À l'intérieur, créez cette structure :

```text
exercice-rencontre2/
├── index.html
├── images/
│   └── chat.jpg
└── pages/
    └── infos.html
```

:::info 📥 Fichier à télécharger
**[Télécharger `chat.jpg`](pathname:///files/rencontre2/chat.jpg)**

Enregistrez le fichier dans le dossier `images` de l'exercice et gardez le nom exact `chat.jpg`.
:::

:::warning Le fichier doit vraiment être dans le projet
Ne laissez pas l'image dans Téléchargements ou sur le Bureau. Le fichier doit se trouver dans le dossier `images` de l'exercice.
:::

## 2. Construire la page d'accueil

Dans `index.html`, créez un document HTML complet :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le monde des chats</title>
  </head>
  <body>
    <h1>Le monde des chats</h1>
    <p>Cette petite page sert à pratiquer les chemins relatifs.</p>
  </body>
</html>
```

Enregistrez le fichier et vérifiez qu'il s'ouvre correctement dans le navigateur.

## 3. Afficher une image depuis `index.html`

Ajoutez l'image dans le `<body>` :

```html
<img src="images/chat.jpg" alt="Un chat">
```

Pourquoi le chemin commence-t-il par `images/`?

Le fichier `index.html` se trouve à la racine de l'exercice. À partir de ce fichier, il faut **entrer dans le dossier `images`** pour atteindre `chat.jpg`.

```text
index.html
   ↓
images/
   ↓
chat.jpg
```

:::info À maîtriser
Dans un chemin relatif, le point de départ est le fichier qui contient le code, et non automatiquement la racine du projet.
:::

## 4. Créer une deuxième page dans un sous-dossier

Dans `pages/infos.html`, créez une deuxième page complète :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Informations sur les chats</title>
  </head>
  <body>
    <h1>Informations sur les chats</h1>
    <p>Cette page se trouve dans le dossier pages.</p>
  </body>
</html>
```

Ouvrez cette page dans le navigateur pour vérifier qu'elle fonctionne elle aussi.

## 5. Afficher la même image depuis `pages/infos.html`

Essayez d'abord ce code dans `infos.html` :

```html
<img src="images/chat.jpg" alt="Un chat">
```

L'image ne devrait pas apparaître. Depuis `pages/infos.html`, il n'existe pas de dossier `pages/images/`.

Pour atteindre le véritable dossier `images`, il faut d'abord remonter au dossier parent avec `../` :

```html
<img src="../images/chat.jpg" alt="Un chat">
```

Le trajet devient :

```text
pages/infos.html
      ↓
     ../
      ↓
exercice-rencontre2/
      ↓
   images/
      ↓
   chat.jpg
```

:::info À maîtriser
`../` signifie **remonter d'un dossier**.

Il n'est pas nécessaire d'en mettre partout. On l'utilise seulement lorsque le fichier recherché se trouve plus haut dans l'arborescence.
:::

## 6. Relier la page d'accueil à la page Informations

Dans `index.html`, ajoutez une navigation :

```html
<nav>
  <a href="index.html">Accueil</a>
  <a href="pages/infos.html">Informations</a>
</nav>
```

Depuis `index.html`, le deuxième lien entre dans le dossier `pages` pour atteindre `infos.html`.

Cliquez sur le lien **Informations** pour vérifier qu'il fonctionne.

## 7. Créer le chemin de retour

Dans `pages/infos.html`, ajoutez aussi une navigation :

```html
<nav>
  <a href="../index.html">Accueil</a>
  <a href="infos.html">Informations</a>
</nav>
```

Cette fois, le lien vers l'accueil utilise `../index.html`, parce que `infos.html` se trouve un dossier plus bas que `index.html`.

Le lien vers `infos.html` n'a pas besoin de dossier dans son chemin, puisque le fichier se trouve déjà dans le **même dossier** que la page actuelle.

:::tip Bonne pratique
`<nav>` est un bon élément pour regrouper les liens de navigation importants d'un site. Nous l'utiliserons dans nos exemples, sans en faire une compétence évaluée séparément.
:::

## 8. Tester comme un développeur

Testez maintenant les deux pages dans les deux directions :

1. ouvrez `index.html`;
2. cliquez sur **Informations**;
3. vérifiez l'image;
4. cliquez sur **Accueil**;
5. recommencez le trajet une deuxième fois.

Ensuite, provoquez volontairement une erreur dans `infos.html` :

```html
<a href="index.html">Accueil</a>
```

Observez ce qui arrive, puis corrigez le lien avec :

```html
<a href="../index.html">Accueil</a>
```

Le but n'est pas seulement d'obtenir le bon code : vous devez comprendre **pourquoi** la première version ne fonctionne pas.

## 9. Différence entre validation HTML et test des chemins

Le validateur W3C peut détecter beaucoup d'erreurs de syntaxe HTML, mais il ne peut pas toujours savoir si un fichier local existe réellement à l'endroit indiqué.

Pour cette raison, vous devez faire les deux :

- vérifier la structure HTML avec le [validateur W3C](https://validator.w3.org/);
- cliquer sur les liens et regarder les images dans le navigateur pour vérifier les chemins.

## 10. Avant de passer au Projet Web

Vérifiez que vous êtes capable de :

- [ ] expliquer à quoi sert le dossier `images`;
- [ ] utiliser `images/chat.jpg` depuis `index.html`;
- [ ] utiliser `../images/chat.jpg` depuis `pages/infos.html`;
- [ ] expliquer ce que signifie `../`;
- [ ] créer un lien avec `<a href="...">`;
- [ ] passer de `index.html` à une page dans `pages/`;
- [ ] revenir d'une page dans `pages/` vers `index.html`;
- [ ] repérer un chemin incorrect à l'aide de l'arborescence du projet.

Vous êtes maintenant prêt à appliquer ces mêmes principes à votre propre site.

**[Continuer vers Projet Web — Étape 2](../03-projet-web/02-rencontre2.md)**
