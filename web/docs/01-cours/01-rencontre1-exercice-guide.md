---
title: Exercice guidé - Construire une première page HTML
description: Construire ensemble une page HTML complète, la tester et corriger quelques erreurs fréquentes.
---

# Exercice guidé - Construire une première page HTML

Cet exercice se fait **ensemble en classe**. Le but est de pratiquer le cycle de travail avant de commencer votre propre site.

Vous n'avez pas besoin d'avoir choisi le sujet de votre projet pour faire cet exercice.

## 1. Créer le dossier de l'exercice

Dans votre dossier du cours Z03, créez un dossier nommé par exemple :

```text
exercice-rencontre1
```

Ouvrez **le dossier complet** dans VS Code, puis créez le fichier :

```text
index.html
```

À ce moment, vous devriez avoir :

```text
Z03/
└── exercice-rencontre1/
    └── index.html
```

## 2. Construire la structure du document

Commencez par la structure générale :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ma première page</title>
  </head>
  <body>
  </body>
</html>
```

Enregistrez le fichier et ouvrez-le dans votre navigateur.

:::info À maîtriser
Vous devez être capable de reconnaître la structure générale d'un document HTML et de savoir où placer le contenu visible de la page.
:::

## 3. Ajouter du contenu visible

Dans le `<body>`, ajoutez progressivement du contenu. Après chaque petite étape, enregistrez puis actualisez le navigateur.

### Un titre et une introduction

```html
<h1>Ma première page Web</h1>
<p>Cette page me permet de pratiquer les bases de HTML.</p>
```

### Une section

Ajoutez ensuite une section avec un titre de niveau 2 et un paragraphe.

```html
<h2>Ce que j'apprends aujourd'hui</h2>
<p>J'apprends à organiser le contenu d'une page avec des éléments HTML.</p>
```

### Une liste

Ajoutez une liste de trois éléments :

```html
<ul>
  <li>Créer un fichier HTML</li>
  <li>Écrire des éléments HTML</li>
  <li>Observer le résultat dans le navigateur</li>
</ul>
```

### Mettre l'accent sur un mot

Modifiez un paragraphe afin d'utiliser `<strong>` ou `<em>` à un endroit où cela a du sens.

## 4. Pratiquer le cycle de travail

Pendant le cours, vous répéterez très souvent ce cycle :

```text
modifier le code
      ↓
enregistrer
      ↓
actualiser le navigateur
      ↓
observer le résultat
```

Faites maintenant trois petites modifications, une à la fois :

1. changez le texte du `<h1>`;
2. ajoutez un élément dans la liste;
3. ajoutez un nouveau paragraphe.

Après **chaque** modification, enregistrez et actualisez la page.

## 5. Trouver et corriger des erreurs

Une page peut parfois s'afficher même si son HTML contient des erreurs. Le navigateur essaie de deviner ce que vous vouliez faire; cela ne signifie pas que le document est correct.

### Erreur de balise fermante

Qu'est-ce qui ne va pas ici?

```html
<h1>Un titre important</h2>
```

Corrigez le code avant de continuer.

### Erreur d'imbrication

Qu'est-ce qui ne va pas ici?

```html
<p>Ce texte est <strong><em>très important</strong></em>.</p>
```

Les éléments imbriqués doivent se fermer dans l'ordre inverse de leur ouverture.

### Paragraphe oublié

Repérez aussi l'erreur suivante :

```html
<p>Premier paragraphe
<p>Deuxième paragraphe</p>
```

Même si le navigateur peut afficher quelque chose de plausible, gardez des balises explicites et une structure lisible.

## 6. Valider le document avec W3C

Le **validateur W3C** peut vous aider à repérer des erreurs de structure que le navigateur ne montre pas clairement.

Ouvrez le [service de validation du W3C](https://validator.w3.org/), puis validez votre fichier `index.html` avec l'enseignant.

L'objectif n'est pas de mémoriser tous les messages du validateur. Apprenez plutôt à :

1. lire le premier message utile;
2. retrouver l'endroit correspondant dans votre code;
3. corriger une erreur à la fois;
4. valider de nouveau.

:::tip Bonne pratique
L'indentation et la validation W3C sont fortement recommandées. Elles vous aident à trouver les problèmes, mais une compétence n'est pas évaluée seulement sur la beauté de l'indentation ou sur un compteur mécanique d'erreurs.
:::

## 7. Avant de passer au projet

Vérifiez que vous êtes capable de :

- [ ] retrouver le dossier de l'exercice;
- [ ] ouvrir ce dossier dans VS Code;
- [ ] reconnaître le `<head>` et le `<body>`;
- [ ] ajouter un titre, un paragraphe et une liste;
- [ ] corriger une balise fermante incorrecte;
- [ ] enregistrer et actualiser le navigateur après une modification;
- [ ] utiliser le validateur W3C avec de l'aide au besoin.

Vous êtes maintenant prêt à commencer la première version de votre propre site.

**[Continuer vers Projet Web — Étape 1](../03-projet-web/01-rencontre1.md)**
