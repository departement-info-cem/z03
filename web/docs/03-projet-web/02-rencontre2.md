---
title: Étape 2 - Transformer votre page en petit site
description: Organiser les ressources, ajouter des images locales et relier plusieurs pages avec des chemins relatifs.
sidebar_position: 3
---

# Projet Web — Étape 2

Cette activité est la **mise en pratique personnelle de la rencontre 2**. Vous partez du site commencé à la rencontre 1 et vous le transformez en un petit site composé de plusieurs pages.

Avant de commencer, consultez le **[cours de la rencontre 2](../01-cours/02-rencontre2.md)**. L'**[exercice guidé sur les chemins et la navigation](../01-cours/02-rencontre2-exercice-guide.md)** vous permettra ensuite de pratiquer avec un petit exemple avant de modifier votre propre projet.

## 1. Reprendre le projet de la rencontre 1

Ouvrez le **même dossier de projet** que la semaine dernière dans VS Code.

Au départ, votre projet ressemble probablement à ceci :

```text
mon-site/
└── index.html
```

Ne recommencez pas un nouveau site. Tout ce que vous faites aujourd'hui doit faire évoluer ce projet.

## 2. Organiser les fichiers

Pour cette étape, nous allons utiliser volontairement deux sous-dossiers :

- `pages` pour les pages secondaires;
- `images` pour les images du site.

Créez une structure comparable à celle-ci :

```text
mon-site/
├── index.html
├── images/
│   ├── image1.jpg
│   └── image2.jpg
└── pages/
    ├── sujet.html
    └── apropos.html
```

Les noms `sujet.html` et `apropos.html` sont des exemples. Choisissez des noms qui correspondent à votre sujet.

:::info À maîtriser
Vous devez être capable de retrouver un fichier dans cette structure et de construire un chemin relatif à partir du fichier HTML dans lequel vous écrivez le code.
:::

:::tip Bonne pratique
Utilisez des noms de fichiers courts, sans espace et sans accent, par exemple `jeux-video.html`, `mes-recettes.html` ou `equipe.html`.
:::

## 3. Créer deux pages secondaires

Créez vos deux nouvelles pages dans le dossier `pages`.

Chaque page doit posséder une structure HTML complète et un contenu qui a une fonction reconnaissable dans votre site.

Par exemple :

- `index.html` : présenter le sujet;
- `pages/sujet.html` : développer un aspect du sujet;
- `pages/apropos.html` : présenter l'auteur du site, le projet ou une autre information pertinente.

Vous n'avez pas besoin d'écrire beaucoup de texte. Utilisez les éléments HTML vus en classe de façon logique : titres, paragraphes, listes et autres éléments pertinents.

## 4. Ajouter des images locales

Placez vos images dans le dossier `images` au lieu de les laisser dans Téléchargements ou sur le Bureau.

Depuis `index.html`, une image peut être utilisée ainsi :

```html
<img src="images/image1.jpg" alt="Description de l'image">
```

Depuis une page placée dans `pages`, le chemin doit d'abord remonter au dossier du projet :

```html
<img src="../images/image1.jpg" alt="Description de l'image">
```

Faites l'essai dans les deux situations afin de voir la différence entre `images/...` et `../images/...`.

:::tip Bonne pratique — texte alternatif
L'attribut `alt` devrait transmettre l'information importante de l'image. Évitez un texte comme `image1.jpg`; décrivez plutôt ce que l'image apporte à la page.
:::

## 5. Construire la navigation

Votre navigation doit permettre d'aller d'une page à l'autre et de revenir à l'accueil.

Comme les fichiers ne sont pas tous dans le même dossier, **le chemin des liens n'est pas identique sur toutes les pages**.

### Navigation dans `index.html`

Depuis la racine du projet, il faut entrer dans le dossier `pages` :

```html
<nav>
  <a href="index.html">Accueil</a>
  <a href="pages/sujet.html">Mon sujet</a>
  <a href="pages/apropos.html">À propos</a>
</nav>
```

### Navigation dans une page du dossier `pages`

Depuis `pages/sujet.html`, il faut utiliser `../` pour revenir au dossier parent avant d'atteindre `index.html` :

```html
<nav>
  <a href="../index.html">Accueil</a>
  <a href="sujet.html">Mon sujet</a>
  <a href="apropos.html">À propos</a>
</nav>
```

Adaptez les noms de fichiers et les textes des liens à votre propre site.

:::tip Bonne pratique
L'élément `<nav>` est recommandé pour regrouper les liens qui servent à la navigation principale du site. Son utilisation exacte n'est pas une compétence évaluée séparément.
:::

## 6. Tester tous les chemins

Ne testez pas seulement la page d'accueil.

Ouvrez chacune de vos pages dans le navigateur et vérifiez :

1. que les images apparaissent;
2. que chaque lien mène au bon endroit;
3. que vous pouvez revenir à l'accueil;
4. que vous pouvez passer d'une page secondaire à l'autre;
5. que les noms de fichiers dans le code correspondent exactement aux vrais noms des fichiers.

Si une image ou un lien ne fonctionne pas, partez du fichier HTML actuel et posez-vous la question : **où dois-je aller à partir d'ici pour atteindre le fichier voulu?**

:::warning Majuscules et noms de fichiers
`Image1.jpg`, `image1.jpg` et `image1.JPG` peuvent être considérés comme des noms différents lorsque le site est publié en ligne. Utilisez toujours exactement le même nom dans vos dossiers et dans votre code.
:::

## 7. Précontrôle avant la validation

Avant de demander une validation, assurez-vous que :

- [ ] vous travaillez toujours dans le projet commencé à la rencontre 1;
- [ ] `index.html` se trouve à la racine du projet;
- [ ] vos pages secondaires se trouvent dans `pages/`;
- [ ] vos images locales se trouvent dans `images/`;
- [ ] vos pages possèdent une structure HTML complète;
- [ ] vos pages contiennent du contenu réel et organisé;
- [ ] les images s'affichent depuis la page d'accueil et depuis une page secondaire;
- [ ] la navigation fonctionne dans les deux directions;
- [ ] vous comprenez pourquoi certains chemins commencent par `../`;
- [ ] vous avez corrigé les erreurs HTML évidentes, avec le validateur W3C au besoin.

Cette checklist sert à vous préparer. La validation ne consiste pas à compter mécaniquement le nombre de pages, d'images ou de balises.

## Validations disponibles

À partir de cette rencontre, les premières validations HTML deviennent disponibles.

### Validation A — Structure HTML

L'enseignant peut observer :

- **WEB-01 — Organiser un projet Web et utiliser les chemins**;
- **WEB-02 — Construire une page HTML correctement structurée**.

Il peut par exemple vous demander de montrer où se trouve une image, d'expliquer un chemin ou de corriger un chemin devant lui.

### Validation B — Contenu et navigation

L'enseignant peut aussi observer :

- **WEB-03 — Structurer et enrichir le contenu HTML**;
- **WEB-04 — Relier plusieurs pages dans une navigation fonctionnelle**.

Il peut par exemple vous demander d'ajouter un lien, de modifier la destination d'un lien ou d'expliquer comment revenir d'une page secondaire vers l'accueil.

Une même courte interaction peut permettre d'observer plusieurs compétences. Une compétence qui demande encore du travail pourra être représentée plus tard.

:::note Pour aller plus loin — non évalué
Si votre site fonctionne bien et que vos validations sont prêtes, vous pouvez :

- ajouter une autre page pertinente;
- ajouter un lien vers un site externe utile;
- enrichir le contenu d'une page;
- ajouter d'autres images locales en vérifiant soigneusement leurs chemins.

Ne commencez pas encore CSS : la feuille de styles externe sera introduite à la rencontre 3.
:::

## Prochaine étape

À la rencontre 3, vous conserverez exactement ce site et vous lui ajouterez une **feuille CSS externe** pour commencer sa mise en forme visuelle.
