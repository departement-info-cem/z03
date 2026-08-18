---
title: Cours 26 - Code propre
description: Bonnes pratiques de base, commenter ses fonctions et apprendre d'autres langages
---

# Cours 25 - Code propre

Saviez-vous que votre code est parfois *crotté* ? Nous allons y remédier en abordant quelques stratégies et habitudes très simples qui vous aideront ne plus avoir certains défauts ou maladresses dans votre code qui sont généralement évités dans un cadre professionnel. 

## ⚖ Choisir les bons blocs

Nous avons vu les `if`, `else`, `else if`, `switch`, `while`, `do wfile`, `for` et les **conditions ternaires**.

Certains de ces blocs sont très similaires, voir interchangeables pour quelques situations. Cela dit, dans certains cas, le choix du bloc peut devenir évident car il est plus élégant et / ou lisible.

### ❓ Conditions

Lorsqu'on a **plusieurs blocs conditionnels exclusifs** (donc qu'on veut juste utiliser l'un deux) et que les conditions utilisent uniquement l'opérateur `==`, il faut miser sur un bloc `switch`.

🚫 À éviter :

```js showLineNumbers
if(x == 5){
    // ...
}
else if(x == 6 || x == 7){
    // ...
}
else if(x == 8){
    // ...
}
else{
    // ...
}
```

✅ À favoriser :

```js showLineNumbers
switch(x){
    case 5 : /* ... */ break;
    case 6 :
    case 7 : /* ... */ break;
    case 8 : /* ... */ break;
    default : /* ... */
}
```

Lorsqu'on a seulement un `if ... else` qui sert à **choisir une valeur** ou faire une opération similaire avec une valeur différente, il vaut mieux favoriser les **conditions ternaires**.

🚫 À éviter :

```js showLineNumbers
let x = null;

if(gActif == true){
    x = 5;
}
else{
    x = 0;
}

if(gChrono > 0){
    document.querySelector(".jeu").style.display = "block";
}
else{
    document.querySelector(".jeu").style.display = "none";
}
```

✅ À favoriser :

```js showLineNumbers
let x = gActif == true ? 5 : 0;

document.querySelector(".jeu").style.display = gChrono > 0 ? "block" : "none";
```

### ➰ Boucles

Nous avons vu trois types de boucles. Elles sont souvent *interchangeables*, mais on peut quand même les favoriser selon la situation :

* `for` : (95% des cas) On sait d'avance **combien** il y aura d'itérations. (Ex : tableau, calculer une somme, parcourir des éléments HTML, etc.)
* `while` : Dès que le nombre d'itérations est moins évident ou que la condition n'est pas numérique.
* `do while` : (rare) Comme pour `while`, mais on veut garantir qu'il y aura au moins **UNE** itération.

✅ Parcourir un tableau avec `for` :

```js showLineNumbers
for(let i = 0; i < monTableau.length; i++){
    console.log(monTableau[i]);
}
```

:::info
Pour rappel, `i++` est équivalent à `i += 1`. L'usage de `i++` est plus commun si on souhaite seulement **incrémenter de 1**.
:::

:::tip
Si jamais vous remarquez que vous n'utilisez pas la variable `i` à l'intérieur de votre boucle `for`, c'est signe que `while` est peut-être un meilleur choix !
:::

✅ Faire une opération avec une condition moins évidente ou non numérique avec `while`:

```js showLineNumbers
while(x > 10 && gPlein == false){

    x -= 1;
    y += 1;

    if(y >= 20){
        gPlein = true;
    }

}
```

## 🔁 Éviter les répétitions

Au risque de vous surprendre, nous n'aimons pas la répétition en programmation. Ça rend le code plus dense et complexe sans lui ajouter de valeur. Révisons quelques stratégies pour se débarrasser de code répétitif.

### ➰ Boucles

Les boucles existent carrément pour répéter des choses, alors leur cas d'usage devrait être assez évident.

⛔ À éviter :

```js showLineNumbers
document.querySelector(".case1").style.color = "crimson";
document.querySelector(".case2").style.color = "crimson";
document.querySelector(".case3").style.color = "crimson";
document.querySelector(".case4").style.color = "crimson";

console.log(monTableau[0]);
console.log(monTableau[1]);
console.log(monTableau[2]);
console.log(monTableau[3]);
console.log(monTableau[4]);
```

✅ À favoriser :

```js showLineNumbers
for(let i = 1; i < 5; i++){
    document.querySelector(`.case${i}`).style.color = "crimson";
}

for(let i = 0; i < monTableau.length; i++){
    console.log(monTableau[i]);
}
```

### ⚙ Fonctions

Parfois, le code répétitif est moins adapté pour une boucle et / ou est présent à deux endroits indépendants. Dans ce cas, les fonctions sont un outil intéressant. N'hésitez pas à exploiter les **paramètres** s'il y a des petites différences dans le code répétitif.

⛔ À éviter (code répétitif dans deux fonctions) :

```js showLineNumbers
function a(){

    if(gActif == true){

        gActif = false; // 😠
        document.querySelector(".bouton").style.display = "none"; // 😠
        alert("Partie perdue !"); // 😠
        gScore = 0;
        gChrono = 0; // 😠

    }

}

function b(){

    if(gScore > gMeilleurScore){
        gMeilleurScore = gScore;
    }
    gActif = false; // 😠
    document.querySelector(".bouton").style.display = "none"; // 😠
    alert("Victoire !"); // 😠
    gChrono = 0; // 😠

}
```

Certains morceaux se ressemblent beaucoup dans `a()` et `b()`. Tentons de les unir dans une nouvelle fonction. Bien entendu, certains morceaux qui n'étaient pas répétitifs seront conservés dans `a()` et `b()`.

✅ À favoriser :

```js showLineNumbers
function a(){

    if(gActif == true){

        gScore = 0;
        c("Partie perdue !");

    }

}

function b(){

    if(gScore > gMeilleurScore){
        gMeilleurScore = gScore;
    }
    c("Victoire !");

}

function c(message){

    gActif = false;
    document.querySelector(".bouton").style.display = "none";
    alert(message);
    gChrono = 0;

}
```

:::note

N'oubliez pas qu'en plus des **paramètres**, utiliser `event.currentTarget` et des **paramètres dans les écouteurs d'événements** permet aussi d'éviter certaines répétitions. (Seulement si le code est appeler par un écouteur d'événements, bien entendu)

:::

### ❓ Conditions

Les blocs conditionnels ne sont pas faits pour répéter du code, alors si justement vous remarquez du code répétitif, tentez de le réunir.

⛔ À éviter :

```js showLineNumbers
if(x < 0){
    x = 0;
    console.log(x);
}
else if(x > 100){
    x = x / 2;
    console.log(x);
}
else{
    console.log(x);
}
```

✅ À favoriser :

```js showLineNumbers
if(x < 0){
    x = 0;
}
else if(x > 100){
    x = x / 2;
}

console.log(x); // On exécute cette ligne dans tous les cas, à la fin.
```

## 👶 Simplification de booléens

À partir de maintenant, il est **interdit** 🚔 d'utiliser `== true` dans une condition !

⛔ À éviter :

```js showLineNumbers
if(gActif == true){
    x += 5;
}
```

Si `gActif` vaut `true`, utiliser `if(gActif)` fait exactement le même travail.

:::tip

Truc simple : vous pouvez commencer par écrire votre code avec `== true` si ça vous aide à comprendre, mais vous pouvez systématiquement retirer le `== true` par la suite sans impact sur le fonctionnement du code. C'est promis !

:::

Tentez également de simplifier votre code si un `if ... else` sert juste à choisir un **booléen**.

⛔ À éviter :

```js showLineNumbers
function partieEnCours(){

    if(gChrono > 0){
        return true;
    }
    else{
        return false;
    }

}
```

✅ À favoriser :

```js showLineNumbers
function partieEnCours(){

    return gChrono > 0; // sera true ou false. Même fonctionnement !

}
```

## ✨ Autres détails 

1. N'oubliez pas vos **points-virgules** `;`

```js showLineNumbers
// 😠
let x = 2
console.log(x)
x += 1;
```

:::info

Bien qu'en JavaScript, oublier les points-virgules pose seulement problème dans deux scénarios très peu communs (plusieurs instructions sur la même ligne + prochaine ligne qui commence par `(` ou `[`), insérer un `;` à la fin d'une instruction est obligatoire dans de nombreux langages comme `C`, `C++`, `C#`, `Java`, etc. Alors c'est une bonne habitude à adopter dès maintenant.

:::

2. Soignez vos **indentations** et **sauts de ligne**

```js showLineNumbers
// 💀
function partieEnCours(){ if(
gChrono > 0)
{   
    return true; } else
    { return false; }
    }

// 😇
function partieEnCours(){ 
    if(gChrono > 0){   
        return true; 
    } 
    else{ 
        return false; 
    }
}
```

:::tip

Rappel : `shift` + `alt` + `f` est votre ami(e).

:::

3. Faites preuve de constance / régularité pour vos **espaces**

```js showLineNumbers
// 😵
let x= 1+ 3 *  5/ 9-  11;

// 🗿
let x = 1 + 3 * 5 / 9 - 11;
```

4. N'oubliez pas d'utiliser des **noms significatifs** pour vos variables

```js showLineNumbers
// 🚫
let skibidi = "brainrot";
let abc = 5;
let zgouibidou = false;

// 👌
let categorie = "brainrot";
let nbAmis = 5;
let jeuActif = false;
```