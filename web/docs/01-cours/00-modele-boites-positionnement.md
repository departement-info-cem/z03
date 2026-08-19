---
id: cours-modele-boites-positionnement
title: Cours — Modèle en boîtes et positionnement
description: Comprendre le modèle de boîte CSS, l’affichage et le positionnement
slug: /cours/modele-boites-positionnement
sidebar_position: -0.5
---

# Modèle en boîtes et positionnement

En CSS, chaque élément HTML occupe une **boîte rectangulaire**. Comprendre cette boîte permet de prévoir l’espace qu’un élément utilise, de l’aligner avec les autres et de choisir comment il se déplace dans la page.

![Logos de HTML et CSS](../../static/img/cours-modele-boites-positionnement/logos-html-css.png)

## Objectifs

À la fin de ce chapitre, vous serez en mesure de :

- reconnaître les quatre parties du modèle de boîte;
- régler les dimensions, les marges, le remplissage et les bordures;
- distinguer les affichages `block`, `inline`, `inline-block` et `none`;
- contrôler ce qui arrive lorsqu’un contenu dépasse sa boîte;
- comprendre le flux normal d’une page;
- utiliser les positions `relative`, `absolute` et `fixed`;
- créer des effets simples avec `:hover`, `box-shadow` et `transition`;
- combiner des sélecteurs CSS sans perdre de vue la cascade.

## 1. Chaque élément est une boîte

Un titre, un paragraphe, une image et un conteneur `<div>` possèdent tous une zone rectangulaire. Cette zone est parfois difficile à voir parce que son arrière-plan est transparent.

En ajoutant temporairement des couleurs de fond, les limites deviennent visibles :

```css
h1 {
  background-color: mediumpurple;
}

p {
  background-color: lavender;
}
```

![Des couleurs de fond rendent les boîtes HTML visibles](../../static/img/cours-modele-boites-positionnement/boites-rendues-visibles.png)

Cette technique est aussi utile pour déboguer une mise en page.

## 2. Les quatre parties du modèle de boîte

Le modèle de boîte se lit du centre vers l’extérieur :

1. le **contenu** : le texte, l’image ou les éléments enfants;
2. le **remplissage** (`padding`) : l’espace entre le contenu et la bordure;
3. la **bordure** (`border`) : la ligne qui entoure le remplissage;
4. la **marge** (`margin`) : l’espace qui sépare la boîte des éléments voisins.

![Schéma du modèle de boîte CSS](../../static/img/cours-modele-boites-positionnement/modele-de-boite-css.png)

:::info Une boîte dans une boîte

Le contenu est au centre. Le `padding` l’entoure, puis vient la bordure. La `margin` reste à l’extérieur et sépare l’élément de ses voisins.

:::

Voici une boîte qui utilise ces quatre zones :

```css
.carte {
  width: 320px;
  padding: 24px;
  border: 3px solid steelblue;
  margin: 20px;
  background-color: aliceblue;
}
```

## 3. Régler les dimensions

Les propriétés `width` et `height` règlent la largeur et la hauteur du contenu d’une boîte.

```css
.banniere {
  width: 80%;
  height: 160px;
}
```

Une valeur en pixels, comme `320px`, représente une dimension fixe. Un pourcentage, comme `80%`, dépend généralement de la dimension du parent.

### Limiter plutôt que forcer

Les propriétés `min-width`, `max-width`, `min-height` et `max-height` imposent des limites :

```css
.article {
  width: 90%;
  max-width: 800px;
  min-height: 200px;
}
```

Cette boîte occupe 90 % de l’espace disponible, sans devenir plus large que 800 pixels.

### La dimension réellement occupée

Par défaut, `width` et `height` décrivent seulement la zone de contenu. Le remplissage et la bordure s’ajoutent à ces dimensions, puis les marges ajoutent encore de l’espace autour de la boîte.

```text
largeur occupée = contenu + padding + bordure + margin
```

![Une boîte dont la hauteur totale comprend le contenu, le remplissage, la bordure et les marges](../../static/img/cours-modele-boites-positionnement/dimensions-totales-boite.png)

:::tip Des dimensions plus prévisibles

La règle suivante rend le calcul plus intuitif :

```css
* {
  box-sizing: border-box;
}
```

Avec `border-box`, la largeur déclarée comprend le contenu, le remplissage et la bordure. Les marges demeurent à l’extérieur.

:::

## 4. Bordures, remplissage et marges

### Ajouter une bordure

Une bordure possède principalement une largeur, un style et une couleur :

```css
.encadre {
  border: 4px dotted royalblue;
}
```

La forme abrégée suit l’ordre `largeur style couleur`.

![Deux boîtes utilisant des bordures différentes](../../static/img/cours-modele-boites-positionnement/exemple-bordures.png)

On peut aussi modifier un côté seulement :

```css
.titre {
  border-bottom: 3px solid darkorange;
}
```

### Créer de l’espace à l’intérieur

Le `padding` éloigne le contenu de la bordure :

```css
.message {
  padding: 20px;
}
```

### Créer de l’espace à l’extérieur

La `margin` éloigne la boîte des autres éléments :

```css
.message {
  margin: 30px;
}
```

![Comparaison des espacements autour de deux boîtes](../../static/img/cours-modele-boites-positionnement/marges-et-remplissage.png)

:::warning Ne pas confondre `padding` et `margin`

Le `padding` agrandit l’espace coloré à l’intérieur de la boîte. La `margin` reste transparente et sépare la boîte de ce qui l’entoure.

:::

### Les formes abrégées

Une seule valeur s’applique aux quatre côtés :

```css
.boite {
  padding: 16px;
}
```

Deux valeurs règlent d’abord le haut et le bas, puis la gauche et la droite :

```css
.boite {
  margin: 20px 10px;
}
```

Quatre valeurs suivent le sens des aiguilles d’une montre : haut, droite, bas, gauche.

```css
.boite {
  margin: 10px 20px 30px 40px;
}
```

## 5. Choisir le type d’affichage

La propriété `display` détermine comment une boîte se comporte dans le flux de la page.

| Valeur | Comportement principal |
| --- | --- |
| `block` | commence sur une nouvelle ligne et prend l’espace horizontal disponible |
| `inline` | reste dans la ligne de texte; ses dimensions sont surtout dictées par son contenu |
| `inline-block` | reste dans la ligne, mais accepte des dimensions et des espacements de boîte |
| `none` | retire complètement l’élément de l’affichage |

### `inline`

Les éléments comme `<span>` et `<a>` sont normalement affichés dans la ligne du texte.

```html
<p>Alain a perdu la <span class="mot">garde</span> de ses enfants.</p>
```

```css
.mot {
  background-color: burlywood;
}
```

![Un élément span affiché dans une ligne de texte](../../static/img/cours-modele-boites-positionnement/element-inline.png)

### `block`

Les éléments comme `<h1>`, `<p>` et `<div>` commencent normalement sur une nouvelle ligne.

```css
span {
  display: block;
}
```

Cette règle force tous les `<span>` à se comporter comme des blocs.

### `inline-block`

`inline-block` permet de placer plusieurs boîtes sur une ligne tout en contrôlant leur largeur, leur hauteur, leurs marges et leur remplissage.

```css
.etiquette {
  display: inline-block;
  width: 180px;
  padding: 12px;
}
```

![Deux paragraphes transformés en boîtes inline-block](../../static/img/cours-modele-boites-positionnement/elements-inline-block.png)

Cette technique peut notamment servir à produire un menu horizontal simple :

```css
nav li {
  display: inline-block;
  margin: 5px;
  padding: 5px;
  background-color: lemonchiffon;
}
```

![Un menu horizontal construit avec inline-block](../../static/img/cours-modele-boites-positionnement/menu-horizontal.png)

### `none`

```css
.message-secondaire {
  display: none;
}
```

L’élément n’est plus affiché et ne réserve aucun espace dans la page.

## 6. Gérer un contenu qui dépasse

Lorsque le contenu est plus grand que sa boîte, la propriété `overflow` contrôle le débordement.

```css
.resume {
  width: 240px;
  height: 120px;
  overflow: auto;
}
```

Les principales valeurs sont :

- `visible` : le contenu dépasse la boîte;
- `hidden` : la partie qui dépasse est cachée;
- `scroll` : des barres de défilement sont toujours réservées;
- `auto` : des barres apparaissent seulement lorsque nécessaire.

![Comparaison des valeurs visible, hidden, auto et scroll](../../static/img/cours-modele-boites-positionnement/valeurs-overflow.png)

`overflow-x` contrôle l’axe horizontal et `overflow-y` l’axe vertical.

## 7. Le flux normal de la page

Sans règle de positionnement particulière, les éléments suivent le **flux normal** :

- les éléments `block` s’empilent du haut vers le bas;
- les éléments `inline` se suivent de gauche à droite et reviennent à la ligne au besoin.

![Des boîtes placées dans le flux normal](../../static/img/cours-modele-boites-positionnement/flux-normal.png)

La valeur `position: static` représente ce comportement par défaut.

## 8. Déplacer et positionner une boîte

Les propriétés `top`, `right`, `bottom` et `left` servent de décalages. Leur effet dépend de la valeur de `position`.

### Position relative

Avec `position: relative`, la boîte demeure dans le flux, mais son affichage peut être décalé par rapport à sa position initiale.

```css
.bloc {
  position: relative;
  top: 20px;
  left: 20px;
}
```

![Une boîte décalée avec position relative](../../static/img/cours-modele-boites-positionnement/position-relative.png)

L’espace initial de la boîte reste réservé.

### Position absolue

Avec `position: absolute`, la boîte quitte le flux normal. Elle se place par rapport à son premier ancêtre positionné.

```html
<div class="carte">
  <span class="badge">Nouveau</span>
  <h2>Produit</h2>
</div>
```

```css
.carte {
  position: relative;
}

.badge {
  position: absolute;
  top: 0;
  right: 0;
}
```

![Un enfant en position absolue dans un parent en position relative](../../static/img/cours-modele-boites-positionnement/position-absolute.png)

Le parent reçoit souvent `position: relative` uniquement pour devenir le repère de l’enfant.

:::danger Un repère à prévoir

Sans ancêtre positionné, un élément en `position: absolute` peut se placer par rapport à la page entière. Le duo « parent relatif, enfant absolu » évite beaucoup de surprises.

:::

### Position fixe

Avec `position: fixed`, la boîte quitte aussi le flux. Elle reste au même endroit dans la fenêtre lorsque la page défile.

```css
.retour-haut {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
```

![Une boîte fixée dans le coin de la fenêtre](../../static/img/cours-modele-boites-positionnement/position-fixed.png)

:::warning Hors du flux

Les positions `absolute` et `fixed` retirent l’élément du flux normal. Les autres boîtes se comportent alors comme s’il n’occupait plus sa place initiale.

:::

### Gérer la superposition avec `z-index`

Des éléments positionnés peuvent se chevaucher. `z-index` indique lequel apparaît devant les autres.

```css
.avant-plan {
  position: absolute;
  z-index: 2;
}

.arriere-plan {
  position: absolute;
  z-index: 1;
}
```

![Plusieurs boîtes superposées avec z-index](../../static/img/cours-modele-boites-positionnement/superposition-z-index.png)

Une valeur plus élevée place généralement l’élément devant les éléments comparables du même contexte.

## 9. Réagir aux actions de la personne

Une **pseudo-classe** sélectionne un élément dans un état particulier. Son nom commence par deux-points.

### Au survol avec `:hover`

```css
.bouton:hover {
  background-color: lightslategray;
  color: white;
}
```

![Un paragraphe dont le style change au survol](../../static/img/cours-modele-boites-positionnement/pseudo-classe-hover.png)

### Pendant l’activation avec `:active`

```css
.bouton:active {
  transform: translateY(2px);
}
```

`:active` s’applique pendant l’activation de l’élément, par exemple pendant que le bouton de la souris est enfoncé.

## 10. Combiner des sélecteurs

### Sélectionner un descendant

Un espace sélectionne les éléments qui se trouvent n’importe où à l’intérieur d’un autre élément :

```css
article p {
  line-height: 1.6;
}
```

Cette règle vise tous les paragraphes contenus dans un `<article>`.

### Sélectionner un enfant direct

Le symbole `>` vise seulement les enfants placés directement dans le parent :

```css
main > p {
  border-left: 4px solid steelblue;
}
```

![Résultat d’un sélecteur d’enfant direct](../../static/img/cours-modele-boites-positionnement/selecteur-enfant.png)

### Regrouper des sélecteurs

Une virgule permet d’appliquer les mêmes déclarations à plusieurs sélecteurs :

```css
h1,
h2,
p {
  color: midnightblue;
}
```

![Plusieurs éléments mis en forme par une règle groupée](../../static/img/cours-modele-boites-positionnement/selecteurs-groupes.png)

## 11. Quelques finitions utiles

### Transparence

`opacity` accepte une valeur de `0` à `1` :

```css
.desactive {
  opacity: 0.5;
}
```

Une valeur de `0` rend l’élément invisible; une valeur de `1` le rend complètement opaque.

### Ombre portée

```css
.carte {
  box-shadow: 0 10px 24px rgb(0 0 0 / 20%);
}
```

![Une boîte avec une ombre portée](../../static/img/cours-modele-boites-positionnement/ombre-portee.png)

Les valeurs représentent ici le décalage horizontal, le décalage vertical, le flou et la couleur.

### Transition

Une transition rend un changement de style graduel :

```css
.carte {
  transition: background-color 200ms ease,
              transform 200ms ease;
}

.carte:hover {
  background-color: aliceblue;
  transform: translateY(-4px);
}
```

La transition ne déclenche pas elle-même le changement. Elle décrit plutôt comment le navigateur passe de l’état normal à l’état `:hover`.

## 12. Quand plusieurs règles se contredisent

CSS signifie *Cascading Style Sheets*. La cascade détermine quelle déclaration est retenue lorsque plusieurs règles visent la même propriété.

Pour débuter, retenez ceci :

1. une règle plus précise peut l’emporter sur une règle plus générale;
2. une classe est plus précise qu’un simple nom d’élément;
3. un identifiant est plus précis qu’une classe;
4. lorsque deux règles ont la même précision, la dernière déclarée gagne.

:::info En cas d’égalité, la dernière règle gagne

L’ordre ne décide qu’après la précision. Une règle placée plus bas ne remplace donc pas automatiquement un sélecteur beaucoup plus précis.

:::

```css
p {
  color: navy;
}

.alerte {
  color: firebrick;
}
```

Un paragraphe qui possède la classe `alerte` devient rouge foncé, car le sélecteur de classe est plus précis.

## À retenir

- Chaque élément HTML est représenté par une boîte.
- `padding` crée de l’espace à l’intérieur de la bordure; `margin` crée de l’espace à l’extérieur.
- `display` contrôle la manière dont une boîte participe à la mise en page.
- Le flux normal suffit pour une grande partie d’une page.
- Les positions `absolute` et `fixed` retirent une boîte du flux; il faut donc les utiliser avec intention.
- Un élément absolu est souvent placé dans un parent relatif.
- `:hover`, `box-shadow` et `transition` permettent d’ajouter une réaction visuelle simple.
- La précision des sélecteurs et leur ordre expliquent quelle règle CSS l’emporte.
