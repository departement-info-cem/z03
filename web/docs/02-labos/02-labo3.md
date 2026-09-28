---
title: Rencontre 7 - Laboratoire DOM et fonctions
sidebar_label: Rencontre 7 — DOM et fonctions
---

# Rencontre 7 - Laboratoire DOM et fonctions

Ce laboratoire reprend les notions de la rencontre 7 dans une progression en trois étapes :

1. manipuler le DOM directement dans la console;
2. lire et appeler des fonctions déjà écrites;
3. écrire vos propres fonctions.

:::info 📥 Fichiers de départ

**[Télécharger les fichiers du laboratoire](pathname:///files/420905_lab3.zip)**

Décompressez le fichier ZIP avant de commencer.

Le ZIP contient les trois dossiers de travail :

- `lab3_exercice1`
- `lab3_exercice2`
- `lab3_exercice3`

**Utilisez les consignes de cette page.** Les fichiers servent de point de départ pour les exercices.

:::

:::tip Avant de commencer

Pour chaque exercice :

1. ouvrez le dossier demandé dans VS Code;
2. ouvrez son fichier `index.html` dans Chrome ou Firefox;
3. ouvrez la console avec `F12`;
4. actualisez la page lorsque vous voulez recommencer avec son état initial.

:::

## Exercice 1 — Manipuler le DOM dans la console

Travaillez dans le dossier **`lab3_exercice1`**.

Pour cet exercice, vous écrirez votre JavaScript directement dans la **console du navigateur**.

### 1. Lire du texte

À l'aide de `document.querySelector(...)` et de `.textContent`, récupérez le contenu textuel de l'élément qui possède la classe `.titre1`.

Vous devriez obtenir le texte affiché dans ce titre.

### 2. Remplacer du texte

Remplacez le contenu textuel de l'élément `.texteMC` par :

```text
Non, c'est un cochon.
```

Vous devrez utiliser l'opérateur `=`.

### 3. Trouver une classe dans le HTML

Trouvez le titre **Bokoblin** dans la page.

Repérez sa classe en utilisant le HTML ou l'outil **Inspecter** du navigateur.

### 4. Utiliser cette classe

À l'aide de la classe trouvée à l'étape précédente, remplacez **Bokoblin** par :

```text
Goomba
```

### 5. Passer par une variable

Récupérez le contenu textuel de l'élément `.titre3` et placez-le dans une variable nommée `titre`.

Ensuite, affectez la valeur de cette variable au `.textContent` de l'élément `.textePeppa`.

:::note

Vous ne devriez pas avoir à écrire vous-même le texte contenu dans `.titre3`. Votre code doit le **lire dans la page**, le conserver dans une variable, puis le réutiliser.

:::

### 6. Ajouter du texte à la fin

Actualisez la page.

Ajoutez ensuite l'un de ces textes à la fin de `.textePeppa` :

- `" Yikes."`
- `" Cringe."`
- `" Ouash."`

Utilisez `+=` plutôt que `=`.

### 7. Ajouter du texte au début

Actualisez de nouveau la page.

Modifiez le paragraphe sous **Peppa pig** pour ajouter **`Peppa pig` au début du texte existant**.

:::tip

Pour ajouter du texte au début, vous devrez d'abord conserver ou relire le texte qui existe déjà.

Une variable ou un littéral de gabarit peut vous aider.

:::

## Exercice 2 — Lire et appeler des fonctions

Travaillez dans le dossier **`lab3_exercice2`**.

Ouvrez :

- `index.html` pour comprendre la page et ses classes;
- `js/script.js` pour examiner les fonctions déjà écrites.

Vous n'avez pas à modifier les fonctions de cet exercice. Votre objectif est de **lire leur code**, comprendre ce qu'elles font et appeler la bonne fonction dans la console.

### 1. Trouver la classe de « Pomme 🍎 »

Trouvez dans le HTML la classe de l'élément qui contient :

```text
Pomme 🍎
```

### 2. Remplacer « Pomme 🍎 » par « Poire 🍐 »

Parmi les fonctions `mystere1()` à `mystere5()`, trouvez celle qui remplace le texte **Pomme 🍎** par **Poire 🍐**.

Appelez-la dans la console pour vérifier votre réponse.

### 3. Afficher « Poire 🍐 » dans la console

Trouvez la fonction qui affiche :

```text
Poire 🍐
```

dans la console.

Appelez-la pour confirmer votre réponse.

### 4. Ajouter « Raisin 🍇 » après « Pêche 🍑 »

Trouvez la fonction qui ajoute **Raisin 🍇** après le texte **Pêche 🍑** sans remplacer le texte existant.

Appelez-la dans la console pour vérifier son effet.

:::important

Dans cet exercice, ne vous fiez pas seulement au nom `mystere...`.

**Lisez le code à l'intérieur de chaque fonction.**

:::

## Exercice 3 — Créer vos propres fonctions

Travaillez dans le dossier **`lab3_exercice3`**.

Cette fois, vous allez compléter le fichier :

```text
js/script.js
```

Les consignes sont également présentes comme commentaires dans le fichier.

Après chaque fonction :

1. enregistrez `script.js`;
2. actualisez la page;
3. appelez la fonction dans la console;
4. vérifiez son résultat.

### Fonction 1 — `quatreEtCinq()`

Créez une fonction nommée `quatreEtCinq()`.

Elle doit :

- remplacer le texte de `.quatre` par `"Zombies 🧟‍♂️"`;
- remplacer le texte de `.cinq` par `"Vampires 🧛‍♂️"`.

Il faudra donc deux instructions utilisant `querySelector` et `textContent`.

### Fonction 2 — `byeLicornes()`

Créez `byeLicornes()`.

Elle doit :

1. remplacer le contenu de `.trois` par une chaîne vide `""`;
2. afficher une alerte contenant `"Bye 😭"`.

### Fonction 3 — `test()`

Créez `test()`.

Elle doit simplement afficher :

```text
Test réussi !
```

dans la console avec `console.log()`.

:::tip

Cette fonction est volontairement très simple. Utilisez-la pour vérifier que vous distinguez bien la **déclaration** d'une fonction de son **appel**.

:::

### Fonction 4 — `texteDeux()`

Créez `texteDeux()`.

Elle doit ajouter :

```text
 et génies 🧞
```

à la fin du contenu de l'élément `.deux`.

Utilisez `+=`.

### Fonction 5 — `dragonDansConsole()`

Créez `dragonDansConsole()`.

Elle doit :

1. récupérer le contenu textuel de `.un`;
2. afficher ce texte dans la console.

Vous pouvez utiliser une variable pour rendre le code plus facile à lire.

### Fonction 6 — `alerteLicorneMage()`

Créez `alerteLicorneMage()`.

Elle doit :

1. récupérer le texte de `.trois`;
2. lui ajouter `" et mages 🧙‍♂️"`;
3. afficher le résultat complet dans une alerte.

Vous pouvez utiliser `+=` ou un littéral de gabarit.

## ✅ Avant de terminer

Vous devriez maintenant être capable de :

- sélectionner un élément avec `document.querySelector(...)`;
- lire son `.textContent`;
- remplacer ou ajouter du texte;
- conserver une valeur du DOM dans une variable;
- lire le corps d'une fonction existante;
- déclarer une fonction simple;
- appeler une fonction dans la console;
- utiliser `console.log()` et `alert()`.

:::important Le réflexe R7

Quand une fonction ne produit pas l'effet attendu :

1. vérifiez le **sélecteur**;
2. vérifiez `.textContent`;
3. vérifiez les **accolades**;
4. enregistrez le fichier;
5. actualisez la page;
6. appelez la fonction avec ses parenthèses `()`.

:::
