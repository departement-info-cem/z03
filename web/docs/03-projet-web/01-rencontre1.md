---
title: Étape 1 - Première version de votre site
description: Créer la première page de votre site personnel en appliquant la structure HTML vue à la rencontre 1.
sidebar_position: 2
---

# Projet Web — Étape 1

Cette activité est la **mise en pratique personnelle de la rencontre 1**. Vous allez créer la première version du site que vous ferez évoluer pendant les prochaines rencontres.

Avant de commencer, vous devriez avoir fait l'**[exercice guidé sur la première page HTML](../01-cours/01-rencontre1-exercice-guide.md)**.

Pour comprendre l'ensemble du travail à venir, consultez la **[présentation du Projet Web](./00-presentation.md)**.

## 1. Choisir ou confirmer un sujet

Si vous n'avez pas encore choisi votre sujet, faites un choix provisoire maintenant. Le sujet n'est pas évalué et pourra encore être ajusté avant que votre site contienne plusieurs pages.

Le plus important est de choisir quelque chose sur lequel vous pouvez écrire facilement quelques petites sections.

## 2. Créer le dossier du projet

Dans votre dossier de cours Z03, créez un dossier pour votre site.

Par exemple :

```text
Z03/
└── mon-site/
```

Ouvrez ensuite **le dossier complet** dans VS Code et créez :

```text
index.html
```

À cette étape, votre projet devrait donc ressembler à ceci :

```text
mon-site/
└── index.html
```

## 3. Créer une structure HTML complète

Votre fichier `index.html` doit contenir la structure générale vue en classe :

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon sujet</title>
  </head>
  <body>
    <!-- Votre contenu ira ici -->
  </body>
</html>
```

Remplacez `Mon sujet` par un titre adapté à votre propre site.

## 4. Construire le contenu de la page

Dans le `<body>`, construisez une première vraie page sur votre sujet.

Votre page devrait contenir :

- un titre principal avec `<h1>`;
- une courte introduction avec un ou plusieurs paragraphes;
- quelques sections organisées avec des titres pertinents;
- au moins une liste là où une liste a du sens;
- du contenu réel lié à votre sujet.

Vous pouvez utiliser `<strong>` ou `<em>` lorsqu'ils ont un sens dans votre contenu.

:::info À maîtriser
Le but n'est pas d'accumuler des balises. Vous devez être capable de choisir des éléments qui correspondent au rôle du contenu et de les imbriquer correctement.
:::

## 5. Tester votre page

Ouvrez `index.html` dans un navigateur et travaillez par petits changements :

```text
modifier le code
      ↓
enregistrer
      ↓
actualiser le navigateur
      ↓
observer le résultat
```

Lorsque la page fonctionne, utilisez aussi le [validateur W3C](https://validator.w3.org/) pour repérer d'éventuelles erreurs de structure.

:::warning Pas de CSS aujourd'hui
Votre page sera probablement très simple visuellement. C'est normal.

HTML sert d'abord à **structurer le contenu**. Nous commencerons la mise en forme avec CSS à la rencontre 3.
:::

## 6. Checklist de fin de rencontre

Avant de terminer, vérifiez que :

- [ ] vous savez où se trouve le dossier de votre site;
- [ ] le fichier se nomme réellement `index.html`;
- [ ] le dossier du projet s'ouvre correctement dans VS Code;
- [ ] la page s'ouvre dans le navigateur;
- [ ] votre document contient une structure HTML complète;
- [ ] votre `<title>` et votre `<h1>` correspondent à votre sujet;
- [ ] votre contenu est organisé avec des éléments HTML pertinents;
- [ ] vos balises sont correctement imbriquées;
- [ ] vous savez modifier le code, enregistrer et actualiser la page.

Si un de ces points ne fonctionne pas, demandez de l'aide avant la prochaine rencontre.

## Compétences préparées

Il n'y a **aucune validation sommative** à la rencontre 1.

Cette étape prépare principalement :

- **WEB-01 — Organiser un projet Web et utiliser les chemins**;
- **WEB-02 — Construire une page HTML correctement structurée**.

Ces compétences commenceront à être observées plus formellement à la rencontre 2, lorsque votre projet contiendra plusieurs fichiers et ressources.

:::note Pour aller plus loin — non évalué
Si vous terminez rapidement, enrichissez le **contenu** de votre page : ajoutez une section, une liste ou une sous-section supplémentaire et vérifiez que la structure reste logique.

N'essayez pas encore de prendre de l'avance avec CSS, la navigation ou une mise en page complexe.
:::

## Prochaine étape

À la rencontre 2, cette page unique deviendra un petit site avec :

- plusieurs pages;
- des images locales;
- des dossiers organisés;
- des chemins relatifs;
- une navigation permettant de circuler dans le site.
