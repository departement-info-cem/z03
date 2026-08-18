---
title: Cours 13 - Paramètres et retours
description: Fonctions avec paramètres et avec valeur de retour
---

# Cours 13 - Paramètres et retours

Certaines fonctions **n'ont pas de paramètres** :

<center>![0 paramètre](../../static/img/cours10/noParam.png)</center>

Certaines fonctions **ont un ou plusieurs paramètres** :

<center>![1 paramètre](../../static/img/cours10/yesParam.png)</center>

💡 Lorsqu'une **fonction** contient une ou plusieurs **données** dans ses **parenthèses** lorsqu'on l'**appelle**, on dit que c'est une **fonction avec paramètre(s)**.

Quand on appelle `alert(...)` et `console.log(...)`, il **faut** mettre du texte (ou une variable qui contient du texte) dans les **parenthèses**. Quand on fait ça on « **envoie un paramètre** » à la fonction. Cette fonction va ensuite **utiliser** le **paramètre** pour faire quelque chose avec.

## 🥚 Créer une fonction avec un paramètre

Ci-dessous, j'ai une fonction simple, sans paramètre :

```js showLineNumbers
function alerteEtConsole(){

    alert("Allo");
    console.log("Allo");

}
```

Toutefois, au lieu d'afficher `"Allo"` dans une **alerte** et dans la **console**, j'aimerais pouvoir **choisir le texte affiché** quand j'appelle la fonction...

Je vais **ajouter un paramètre à la fonction** :

<center>![1 paramètre](../../static/img/cours10/alertConsole.png)</center>

💡 J'ai ajouté un **paramètre** et je l'ai nommé `message`. J'ai **utilisé** ce paramètre à deux endroits dans la fonction.

Disons que j'appelle la fonction comme ceci :

<center>![1 paramètre](../../static/img/cours10/callWithParam.png)</center>

Alors le texte `"Cliquez pour gagner 1000$ 🤑"` sera 🔌 *plugué* (propagé) à tous les endroits dans la fonction où nous avons utilisé le paramètre `message`. (C'est-à-dire dans `alert(message)` et dans `console.log(message)`)

Que se passera-t-il ? Le message `"Cliquez pour gagner 1000$ 🤑"` sera affiché dans la **console** et dans une **alerte** :

<center>![1 paramètre](../../static/img/cours10/alertConsoleMoney.png)</center>

<hr/>

<center>![Gif avec un paramètre](../../static/img/cours10/paramPropagation.gif)</center>

:::warning

Gardez à l'esprit qu'un **paramètre**, c'est un **contrat** : nous **devons** fournir un **paramètre** à la fonction pour pouvoir l'utiliser, car elle en a besoin pour que son code fonctionne bien.

:::

## 🧩 Exemple avec deux paramètres

```js showLineNumbers
function salutations(nom, heure){

    alert(`Bonjour ${nom}, il est actuellement ${heure} !`);

}
```

On peut voir que la fonction `salutations()` possède **deux paramètres** : `nom` et `heure`.

⛔ N'oubliez pas : chaque **paramètre** est un **contrat** ! C'est comme si la fonction nous disait : « tu **dois** me fournir un `nom` et une `heure` pour que je puisse bien fonctionner ! »

<center>![2 paramètres](../../static/img/cours10/twoParams.png)</center>

## ⚡ La puissance des paramètres

Quel est l'avantage d'utiliser les paramètres ? Commençons par regarder trois fonctions **sans paramètre** :

```js showLineNumbers
function texteEtBordureRouge(){

    document.querySelector(".texte").style.color = "red";
    document.querySelector(".texte").style.borderColor = "red";

}

function texteEtBordureBleu(){

    document.querySelector(".texte").style.color = "blue";
    document.querySelector(".texte").style.borderColor = "blue";

}

function texteEtBordureVert(){

    document.querySelector(".texte").style.color = "green";
    document.querySelector(".texte").style.borderColor = "green";

}
```

⛔ Ces trois fonctions font **presque la même chose** et sont **très répétitives** ! 😬

<hr/>

À l'aide d'un **paramètre**, nous pourrions **remplacer ces trois fonctions par une seule** ! 🧠

```js showLineNumbers
function texteEtBordure(couleurChoisie){

    document.querySelector(".texte").style.color = couleurChoisie;
    document.querySelector(".texte").style.borderColor = couleurChoisie;

}
```

Et voilà ! On a une fonction qui fera le travail, **peu importe la couleur** :

* `textureEtBordure("pink");` permettrait de rendre le texte et la bordure roses.
* `textureEtBordure("crimson");` permettrait de rendre le texte et la bordure cramoisis.
* etc.

:::tip

On pourrait même en profiter pour ajouter un **deuxième paramètre**, qui permettrait de **choisir l'élément HTML**. (Plutôt que de toujours modifier l'élément avec la classe `.texte`)

```js showLineNumbers
function texteEtBordure(classe, couleurChoisie){

    document.querySelector(classe).style.color = couleurChoisie;
    document.querySelector(classe).style.borderColor = couleurChoisie;

}
```

Et voilà, il ne reste plus qu'à **appeler la fonction en lui fournissant deux paramètres** :

* `texteEtBordure(".description", "crimson")` : rendra l'élément `.description` cramoisi.
* `texteEtBordure(".texte", "pink")` : rendra l'élément `.texte` rose.
* etc.

:::

## 🎫 Valeurs et variables

Lorsqu'on passe des **paramètres** à une fonction, on peut le faire en utilisant directement des **valeurs** (`6`, `"salut"`, `true`, etc.) ou en utilisant des **variables**.

Disons qu'on a la fonction suivante :

```js showLineNumbers
function colorierTexte(couleur){

    document.querySelector(".paragraphe2").style.color = couleur;

}
```

Les deux manières de **passer un paramètre** qui suivent sont toutes deux valides.

* Écrire directement la valeur :

```js
colorierTexte("blue");
```

* Utiliser une variable :

```js
let teinte = "red";
colorierTexte(teinte); // On a passé "red" via une variable
```

## 📬 Retourner une valeur

Voici un exemple de fonction **avec une valeur de retour** :

```js showLineNumbers
function valeurPi(){

    let pi = 3.14159265359;
    return pi;

}
```

Grâce au **mot clé `return`**, on peut dire que « la fonction `valeurPi()` retournera la valeur `3.14159265359` ».

## 📞 Appeler une fonction avec retour

Voici ce qui se passe lorsqu'on appelle une **fonction avec valeur de retour** comme `valeurPi()` :

<center>![Valeur de retour](../../static/img/cours11/return.png)</center>

<hr/>

<center>![Animation de return](../../static/img/cours11/returnGif.gif)</center>

### 💡 Exemple un peu plus utile

La fonction `Math.random()` existe par défaut. (Pas besoin de la créer, comme `alert()` et `console.log()` !)

`Math.random()` retourne **un nombre aléatoire entre `0` et `0.99999...`**. Très utile pour simuler le **hasard** ! 🎲

<center>![Valeur aléatoire](../../static/img/cours11/random.png)</center>

Exemple : on a **25% de chances de gagner 100$** et **75% de chances de perdre 50$** :

```js showLineNumbers
function jouer(){

    let nombreAleatoire = Math.random();

    if(nombreAleatoire < 0.25){

        gArgent += 100;

    }
    else{

        gArgent -= 50;

    }

}
```

* Dans la variable `nombreAleatoire`, il y aura une valeur entre `0` et `0.9999...`. On ne sait pas d'avance quelle sera la valeur ! La valeur changera à chaque fois que nous appellerons la fonction `jouer()`.
* Avec ce `if` ... `else`, on a 25% de chances d'exécuter le `if` et 75% de chances d'exécuter le `else`.

<center>![Probabilité illustrée](../../static/img/cours11/odds.png)</center>

## 🛑 Point de non-retour

:::warning

⛔ Notez que dès que l'instruction `return` est exécutée, **on met fin** à la fonction !

<center>![Fonction avortée](../../static/img/cours11/noReturn.png)</center>

:::

## 📜 Exemples variés

Voici une fonction qui retourne `true` si trois variables globales sont **identiques**, et `false` sinon :

```js showLineNumbers
function tousEgaux(){

    if(gNombre1 == gNombre2 && gNombre1 == gNombre3){
        return true;
    }
    return false;

}
```

:::tip

Pas besoin de mettre `return false` dans un bloc `else` ! Ce bout de code sera seulement atteint si le bloc `if` n'a pas été exécuté de toute façon !

:::

Voici une fonction qui reçoit deux **paramètres** (deux nombres nommés `x` et `y`) et qui **retourne le plus grand des deux** :

```js showLineNumbers
function maximum(x, y){

    if(x > y){
        return x;
    }
    return y;

}
```

```js
let nombre = maximum(2, 4); // nombre contient 4
```

<hr/>

<center>![Animation de return](../../static/img/cours11/paramReturnGif.gif)</center>

<hr/>

Voici une fonction qui reçoit un **paramètre** (une chaîne de caractères nommée `nom`) et qui **retourne une chaîne de caractères qui correspond à un message de salutations** :

```js showLineNumbers
function saluer(nom){

    return `Salut ${nom}, comment tu vas ?`;

}
```

```js
alert(saluer("Simone"));
```

<center>![Alerte](../../static/img/cours11/alert.png)</center>