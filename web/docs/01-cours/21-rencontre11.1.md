---
title: Cours 21 - currentTarget
description: currentTarget
---

# Cours 21 - currentTarget

## 🔄 Code répétitif

Disons qu'on souhaite que **survoler** l'élément `.bouton1` change sa couleur de fond. On va devoir créer un **écouteur d'événements** et **une fonction qui change la couleur de fond du bouton** :

```js showLineNumbers
function init(){
    document.querySelector(".bouton1").addEventListener("mouseover", changerFond);
}

function changerFond(){
    document.querySelector(".bouton1").style.backgroundColor = "gray";
}
```

Ensuite, disons qu'on souhaite obtenir **le même comportement** pour l'élément `.bouton2` ...

* On doit ajouter un autre **écouteur d'événements**
* On doit ajouter une autre **fonction similaire**

```js showLineNumbers
// Écouteurs d'événements
function init(){
    document.querySelector(".bouton1").addEventListener("mouseover", changerFond1);
    document.querySelector(".bouton2").addEventListener("mouseover", changerFond2);
}

// Changer le fond du .bouton1
function changerFond1(){
    document.querySelector(".bouton1").style.backgroundColor = "gray";
}

// Changer le fond du .bouton2
function changerFond2(){
    document.querySelector(".bouton2").style.backgroundColor = "gray";
}
```

⛔ C'est agaçant : on a deux fonctions presque identiques ... (`changerFond1()` et `changerFond2()`)

Hélas, même en utilisant des **paramètres**, il faut quand même **une fonction par bouton** puisqu'on ne peut pas fournir de paramètre facilement dans un écouteur d'événements :

```js showLineNumbers
// Écouteurs d'événements
function init(){
    document.querySelector(".bouton1").addEventListener("mouseover", fondBouton1);
    document.querySelector(".bouton2").addEventListener("mouseover", fondBouton2);
}

function fondBouton1(){
    changerFond(".bouton1");
}

function fondBouton2(){
    changerFond(".bouton2");
}

// Changer le fond d'un élément de notre choix
function changerFond(classe){
    document.querySelector(classe).style.backgroundColor = "gray";
}
```

## 💡 Solution : currentTarget

Dans le genre de situation abordée plus haut, le *gadget* `currentTarget` est très utile.

Commençons par reprendre le code lorsqu'il y avait seulement l'élément `.bouton1` :

```js showLineNumbers
function init(){
    document.querySelector(".bouton1").addEventListener("mouseover", changerFond);
}

// Changer la couleur de fond de .bouton1
function changerFond(){
    document.querySelector(".bouton1").style.backgroundColor = "gray";
}
```

Puis, dans la fonction `changerFond()`, nous allons faire deux modifications :

* Ajouter un **paramètre** nommé `event`.
* Remplacer `document.querySelector(".bouton1")` par `event.currentTarget`.

<center>![currentTarget](../../static/img/cours12/currentTarget.png)</center>

<br/>

> Que fait `event.currentTarget` ?

Lorsque la fonction `changerFond()` sera appelée, `event.currentTarget` **sera automatiquement remplacé par** `document.querySelector( ... classe de l'élément qui a déclenché l'événement ... )`.

<hr/>

Par exemple, si c'est **survoler l'élément `.bouton1`** qui a déclenché **l'appel de `changerFond()`**, `event.currentTarget` **va devenir** `document.querySelector(".bouton1")`.

<center>![currentTarget](../../static/img/cours12/currentTargetGif.gif)</center>

<hr/>

On peut donc appeler la fonction `changerFond()` avec **n'importe quel écouteur d'événements** et c'est **toujours l'élément avec lequel on vient d'interagir qui sera modifié** :

```js showLineNumbers
function init(){
    document.querySelector(".bouton1").addEventListener("mouseover", changerFond);
    document.querySelector(".bouton2").addEventListener("mouseover", changerFond);
    document.querySelector(".bouton3").addEventListener("mouseover", changerFond);
}

// Changer la couleur de fond de l'élément survolé
function changerFond(event){
    event.currentTarget.style.backgroundColor = "gray";
}
```

* Si on survole `.bouton1`, la couleur de fond de `.bouton1` deviendra *gray*.
* Si on survole `.bouton2`, la couleur de fond de `.bouton2` deviendra *gray*.
* Si on survole `.bouton3`, la couleur de fond de `.bouton3` deviendra *gray*.

:::warning

Le *gadget* `event.currentTarget` est seulement utile quand c'est **l'élément avec lequel on interagit** qu'on souhaite modifier.

Par exemple, si on veut changer la couleur de `.texte1` lorsqu'on clique sur `bouton1`, nous n'aurons pas le choix de faire ceci :

```js showLineNumbers
function init(){
    document.querySelector(".bouton1").addEventListener("click", changerCouleur);
}

// Changer la couleur de .texte1
function changerCouleur(){
    document.querySelector(".texte1").style.color = "red";
}
```

❌ Si on avait remplacé `document.querySelector(".texte1")` par `event.currentTarget`, c'est la couleur de `.bouton1` qui serait modifiée plutôt que celle de `.texte1` !

:::

:::danger

⛔ Notez que `currentTarget` ne peut pas être utilisé dans la fonction `init()` ! Ça ne fait tout simplement rien.

```js showLineNumbers
function init(event){
    event.currentTarget.addEventListener("click", changerCouleur); // 🚫
}
```

Il faut toujours indiquer clairement à quel **élément HTML** un écouteur d'événements **est rattaché**.

On ne peut utiliser `event.currentTarget` que dans les fonctions appelées par un écouteur d'évènements, par exemple ici dans la fonction `changerCouleur`.

:::

## 🎲 Autres exemples

Comme `event.currentTarget` peut remplacer `document.querySelector()`, on peut utiliser ...

* `.style.propriété` pour modifier les **styles** de l'élément qui déclenche l'événement.
* `.textContent` pour manipuler le **contenu textuel** de l'élément qui déclenche l'événement.

#### Exemple 1

Lorsque nous survolerons sur l'élément `.texte1`, son contenu textuel va changer :

```js showLineNumbers
function init(){
    document.querySelector(".texte1").addEventListener("mouseover", changerTexte);
}
 
function changerTexte(event){
    event.currentTarget.textContent = "Skibidi";
}
```

#### Exemple 2

Lorsque nous cliquerons sur l'élément `.paragraphe3`, son contenu textuel sera affiché dans la **console** :

```js showLineNumbers
function init(){
    document.querySelector(".paragraphe3").addEventListener("click", afficherTexte);
}
 
function afficherTexte(event){
    console.log(event.currentTarget.textContent);
}
```

## 📢 Écouteurs d'événements avec paramètres

Pour le moment, nous n'étions pas capables de **passer des paramètres** à une fonction appelée par un écouteur d'événements.

:::warning

⛔ Ceci **ne fonctionne pas** :

```js showLineNumbers
function init(){

    document.querySelector(".bouton1").addEventListener("click", changerCouleur("crimson"));

}
```

✅ Nous sommes obligés d'écrire le nom de la fonction **sans paramètre ni parenthèses** dans un écouteur d'événements :

```js showLineNumbers
function init(){

    document.querySelector(".bouton1").addEventListener("click", changerCouleur);

}
```

:::

Il existe toutefois un *stratagème* pour contourner cette contrainte :

```js
document.querySelector(".bouton1").addEventListener("click", function(){ changerCouleur("crimson") });
```

Remarquez qu'on a glissé l'appel de `changerCouleur("crimson")` dans un bloc `function(){ ... }`.

Il n'est pas nécessaire de comprendre à 100% ce stratagème (tant que vous êtes capables de l'utiliser !), mais en gros, `function() { ... }` est une **fonction anonyme** (une fonction qui n'a pas de nom et donc qui ne peut pas être réutilisée) et on peut mettre le bloc de code de notre choix à l'intérieur. (Dans ce cas-ci, un appel de fonction avec **paramètre(s)**)

Bref, dans ce cas-ci, **cliquer** sur l'élément `.bouton1` appelle une **fonction anonyme** qui appelle `changerCouleur("crimson")` 😵

### ✨ Exemple de simplification du code

Voici un exemple où ce *stratagème* est utilisé pour simplifier du code.

Avant :

```js showLineNumbers
function init(){

    document.querySelector(".bouton1").addEventListener("click", changerCouleurBleu);
    document.querySelector(".bouton2").addEventListener("click", changerCouleurRouge);

}

function changerCouleurBleu(){
    changerCouleur("blue");
}

function changerCouleurRouge(){
    changerCouleur("red");
}

function changerCouleur(couleur){
    document.querySelector(".texte").style.color = couleur;
}
```

Remarquez que les fonctions `changerCouleurBleu()` et `changerCouleurRouge()` servent juste à faire le **pont** entre un écouteur d'événement et la fonction `changerCouleur()` pour passer un **paramètre**. Remédions-y.

Après :

```js showLineNumbers
function init(){

    document.querySelector(".bouton1").addEventListener("click", function(){ changerCouleur("blue") });
    document.querySelector(".bouton2").addEventListener("click", function(){ changerCouleur("red") });

}

function changerCouleur(couleur){
    document.querySelector(".texte").style.color = couleur;
}
```

## 👬 eventTarget + paramètres

Si jamais on souhaitait utiliser `event.currentTarget` ET un ou plusieurs paramètres dans un écouteur d'événements simultanément, il faudrait s'y prendre comme ceci :

```js showLineNumbers
let gValeur = 6;

function init(){

    // La « fonction anonyme » envoie le paramètre event à la fonction changerValeur()
    document.querySelector(".bouton1").addEventListener("click", function(event){ changerValeur(event, 7) });

}

function changerValeur(event, valeur){

    gValeur = valeur;
    event.currentTarget.style.backgroundColor = "gold";

}
```

:::info

Bien entendu, on peut glisser autant de paramètres qu'on veut dans la fonction :

```js
function changerValeur(event, valeur1, valeur2, valeur3){
    // ...
}
```

:::