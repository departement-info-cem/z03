---
title: Rencontre 8 - Événements et styles
description: Écouteurs d'événements et styles (DOM)
---

# Rencontre 8 - Événements et styles

:::info Mini-quiz — 10 %
Le mini-quiz a lieu au début de la rencontre et porte sur la matière des rencontres 6 et 7.
:::

## 📢 Écouteurs d'événements

Les **écouteurs d'événements** sont des *bidules* qui permettent **d'appeler des fonctions** suite à une **interaction** avec la page Web.

* Exemple 1 : En **cliquant** sur un élément ... son texte change !

<center>![Événement de clic](../../static/img/cours5/clickHard.png)</center>

* Exemple 2 : En **survolant** un élément ... une alerte apparait !

<center>![Événement de survol](../../static/img/cours5/badHover.png)</center>

Pour le moment, nous allons voir **trois types d'événements** :

* `click` : Appelle une fonction lorsqu'un élément HTML est **cliqué**
* `mouseover` : Appelle une fonction lorsqu'un élément HTML est **survolé**
* `mouseout` : Appelle une fonction lorsqu'un élément HTML **n'est plus survolé** (la souris sort de l'élément)

### 🥚 Créer un écouteur d'événements

Voici la syntaxe à utiliser :

```js
document.querySelector(".classe").addEventListener("type", nom_fonction);
```

* `document.querySelector(".classe")` permet de cibler un élément HTML spécifique dans la page.
* `type` doit être remplacé par `"click"`, `"mouseover"` ou `"mouseout"`.
* `nom_fonction` doit être remplacé par le **nom de la fonction** qu'on souhaite appeler.

#### 💡 Exemple

```js
document.querySelector(".bouton1").addEventListener("click", changerTexte);
```

✅ La **fonction** `changerTexte()` sera appelée lorsque l'**élément avec la classe `bouton1`** sera **cliqué**.

#### 🔍 Vue d'ensemble

On a cet élément HTML dans la page :

```html
<button class="bouton1">Cliquez-moi délicatement</button>
```

On a cette fonction dans `script.js` :

```js showLineNumbers
function changerTexte(){
    document.querySelector(".bouton1").textContent = "Tu as cliqué trop fort 😩";
}
```

Grâce à l'événement suivant ...

```js
document.querySelector(".bouton1").addEventListener("click", changerTexte);
```

... lorsque nous allons **cliquer** sur l'élément avec la classe `bouton1`, la fonction `changerTexte()` sera **appelée**, ce qui aura pour effet de **changer le texte de l'élément avec la classe `bouton1`** :

<center>![Événement de clic](../../static/img/cours5/clickHard.png)</center>

### 📍 Où déclarer les écouteurs d'événements ?

Dans le cadre du cours, nous placerons toujours les **écouteurs d'événements** dans une fonction nommée `init()`. (Cette fonction sera automatiquement appelée lorsque la page Web sera **chargée par le navigateur Web**, ce qui rendra automatiquement tous les écouteurs d'événements fonctionnels)

```js showLineNumbers
function init(){

    document.querySelector(".bouton1").addEventListener("click", changerTexte);
    document.querySelector(".bouton2").addEventListener("click", lancerAlerte);

}
```

:::info

On peut mettre **autant** d'écouteurs d'événements **qu'on veut** dans la fonction `init()` !

:::

:::note

Pour que la fonction `init()` soit effectivement executée quand la page Web sera **chargée**, il faut rajouter l'attribut suivant à la balise `<body>` du fichier HTML.

```html
<body onload="init()">
```

Dans ce cours, cette opération sera toujours réalisée pour vous au préalable, donc vous n'aurez pas à le faire.

:::

## 👨‍🎨 Styles (DOM)

À l'aide du **DOM** (Document Object Model), nous allons pouvoir modifier les **styles** d'un élément HTML. On peut appliquer des **styles CSS** sur demande à l'aide de JavaScript !

La syntaxe à utiliser sera la suivante :

```js
document.querySelector(".classe").style.propriété = "valeur";
```

### 🎨 Couleur du texte

Syntaxe :

```js
document.querySelector(".classe").style.color = "nomDeLaCouleur";
```

Exemple :

<center>![Modification de style](../../static/img/cours5/color.png)</center>

### 🟦 Couleur de fond

Syntaxe :

```js
document.querySelector(".classe").style.backgroundColor = "nomDeLaCouleur";
```

Exemple :

<center>![Modification de style](../../static/img/cours5/backgroundColor.png)</center>

### 🔳 Style, couleur et largeur de bordure

Syntaxe :

```js
document.querySelector(".classe").style.borderStyle = "nomDuStyle";
document.querySelector(".classe").style.borderColor = "nomDeLaCouleur";
document.querySelector(".classe").style.borderWidth = "NOMBREpx";
```

Exemple :

<center>![Modification de style](../../static/img/cours5/border.png)</center>

Le style peut prendre les valeurs `"none"` (pas de bordure, souvent le défaut), `"solid"` (bordure pleine) et bien d'autres (voir [**ici**](https://www.w3schools.com/cssref/pr_border-style.php)) 

⛔ `px` est l'unité, ici la bordure fera 20 **pixels**. Si vous oubliez l'unité, la valeur de l'attribut ne sera pas changée.

### 📏 Largeur et hauteur d'un élément

Syntaxe :

```js
document.querySelector(".classe").style.width = "NOMBREpx";
document.querySelector(".classe").style.height = "NOMBREpx";
```

Exemple :

<center>![Modification de style](../../static/img/cours5/size.png)</center>

:::note

On a modifié la taille du `<div>` qui contient l'image. (On n'a pas modifié l'`<img>` !)

:::

### 👻 Opacité d'un élément

Syntaxe :

```js
document.querySelector(".classe").style.opacity = 0.5;
```

⛔ Il faut utiliser une valeur entre `0` et `1` pour l'opacité. (`0.5` correspond à 50% d'opacité, par exemple)

Exemple :

<center>![Modification de style](../../static/img/cours5/opacity.png)</center>

### 🙈 Visibilité d'un élément

Syntaxe pour **rendre invisible** (retirer l'élément de la page) :

```js
document.querySelector(".classe").style.display = "none";
```

Syntaxe pour **rendre visible** (réafficher l'élément dans la page) :

```js
document.querySelector(".classe").style.display = "block";
```

### 🥊 Espacement depuis la gauche / le haut

Syntaxe :

```js
document.querySelector(".classe").style.left = "NOMBREpx";
document.querySelector(".classe").style.top = "NOMBREpx";
```

Exemple :

<center>![Modification de style](../../static/img/cours5/topLeft.png)</center>

### 🌈 Plus de couleurs

Bien qu'il existe [**140 couleurs nommées**](https://www.w3schools.com/colors/colors_names.asp) en lettres comme ceci :

```js
// "red" est une couleur qui existe :
document.querySelector(".classe").style.color = "red";
```

On peut utiliser des couleurs encore plus précises à l'aide de leur **code héxadécimal** :

```js
document.querySelector(".classe").style.color = "#DC143C";
```

<center>![Modification de style](../../static/img/cours5/hexaColor.png)</center>

### ✨ Dans une fonction

Bien entendu, on peut modifier les styles dans une **fonction** :

```js showLineNumbers
function texteBleu(){
    document.querySelector(".bouton1").style.color = "blue";
}
```

On peut ensuite tester cette fonction avec un **écouteur d'événements** ou **directement dans la console** :

<center>![Modification de style](../../static/img/cours5/testStyle.png)</center>

## 🔩 DOM (récapitulatif)

Jusqu'à maintenant, nous avons vu trois modifications possibles qui peuvent être réalisées sur une page Web à l'aide du **DOM** :

* 📝 Manipuler le contenu textuel :

```js
document.querySelector(".classe").textContent = "Texte";
```

* 📢 Ajouter un écouteur d'événements :

```js
document.querySelector(".classe").addEventListener("type", maFonction);
```

* 🎨 Modifier les styles :

```js
document.querySelector(".classe").style.propriété = "valeur de style";
```