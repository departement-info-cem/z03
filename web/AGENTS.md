# Instructions Codex - application Docusaurus

Ces instructions s'appliquent à tout le répertoire `web/`.

## Contexte technique

- Docusaurus 3.x
- Node.js 20 dans GitHub Actions
- contenu principal en Markdown/MDX dans `docs/`
- `routeBasePath: "/"`
- le dépôt personnel sert de prévisualisation et le dépôt du département servira à la publication officielle

La logique de `docusaurus.config.js` permet au même code de fonctionner dans les deux contextes. Ne pas remplacer cette logique par des URLs codées en dur vers le 905.

## Organisation du contenu

- `docs/01-cours/` : **théorie** et notes de cours des rencontres;
- `docs/02-labos/` : laboratoires de programmation;
- `docs/03-projet-web/` : **pratique progressive HTML/CSS des rencontres 1 à 5**;
- `docs/accueil.md` : accueil du site;
- `sidebars.js` : navigation.

Pour les rencontres 1 à 5, garder une séparation pédagogique claire :

- la théorie HTML/CSS reste sous **Cours**;
- les consignes pour construire le site Web évolutif restent sous **Projet Web**;
- ne pas fusionner ces deux contenus dans une seule très longue page;
- une page de théorie peut faire un lien vers l'étape pratique correspondante et inversement.

Les anciens travaux pratiques hérités du 905 ont été retirés volontairement. Ne pas recréer ni réintroduire `docs/03-tp/` ou son contenu sans demande explicite. `docs/03-projet-web/` est différent : il contient le projet Web évolutif propre à Z03 et remplace les exercices HTML/CSS séparés ainsi que l'ancien TP1 comme activité pratique des rencontres 1 à 5.

Avant de renommer ou déplacer un document, vérifier ses références dans la navigation, les liens Markdown et la configuration Docusaurus.

### Migration des laboratoires

Avant toute modification importante de `docs/02-labos/` ou des fichiers `static/files/420905_lab*`, lire **`../refonte/MIGRATION_LABORATOIRES_CODEX.md`**.

Ce document contient le mapping entre les anciens laboratoires et la nouvelle séquence des rencontres. En particulier :

- les rencontres 1 à 5 utilisent un site Web évolutif plutôt que des laboratoires HTML/CSS séparés;
- l'ancien laboratoire 2 sur les variables doit être migré vers la rencontre 6;
- certains anciens laboratoires doivent être fusionnés ou scindés plutôt que déplacés en bloc;
- les archives historiques doivent être conservées jusqu'à ce que leur contenu ait été inventorié et la migration validée.

## Style pédagogique

Le public cible est débutant en programmation Web.

Pour le contenu étudiant :

- écrire en français simple et direct;
- introduire le vocabulaire avant de l'utiliser intensivement;
- éviter les raccourcis qui supposent une connaissance préalable de HTML, CSS ou JavaScript;
- privilégier de petits exemples exécutables;
- présenter une notion, une démonstration, puis une occasion de pratique;
- éviter d'introduire plusieurs syntaxes ou abstractions avancées en même temps;
- conserver seulement les détails techniques qui servent les objectifs d'apprentissage.

Pour les exemples de code :

- privilégier la lisibilité à la concision;
- utiliser des noms de variables explicites;
- ne pas employer une fonctionnalité JavaScript avancée avant qu'elle ait été introduite ou expliquée;
- garder HTML sémantique et CSS simple lorsque le sujet principal est JavaScript;
- montrer les erreurs fréquentes lorsqu'elles ont une valeur pédagogique.

## Docusaurus et assets

- conserver les métadonnées/front matter nécessaires aux documents existants;
- utiliser des liens compatibles avec le `baseUrl` au lieu de coder `/905-IntroProg/` ou `/z03/` dans le contenu lorsque Docusaurus peut résoudre le chemin;
- placer les ressources statiques partagées dans `static/`;
- ne pas modifier `build/` directement : il est généré;
- ne pas modifier `node_modules/`.

### Ressources pédagogiques à préparer

Lire **`../refonte/RESSOURCES_A_FOURNIR.md`** lorsqu'une rencontre nécessite une capture d'écran, une image, un ZIP, un fichier de départ ou toute autre ressource que l'étudiant doit voir ou télécharger.

Convention :

- captures et illustrations de la documentation : `static/img/rencontreN/`;
- fichiers à télécharger ou manipuler : `static/files/rencontreN/`;
- pour une nouvelle image préparée spécialement pour un exercice, privilégier **PNG** par défaut, sauf raison claire d'utiliser un autre format.

Si une nouvelle page suppose une ressource qui n'existe pas encore :

1. inscrire immédiatement la ressource dans `../refonte/RESSOURCES_A_FOURNIR.md`;
2. définir son nom de fichier et son emplacement prévus;
3. décrire exactement ce qu'elle doit contenir ou montrer;
4. ne pas créer de lien étudiant vers une ressource absente;
5. intégrer le fichier et mettre le suivi à jour lorsqu'il est fourni.

Lorsqu'un fichier doit être téléchargé par l'étudiant, le rendre immédiatement reconnaissable dans la page avec un encadré Docusaurus intitulé **`📥 Fichier à télécharger`**. Cet encadré doit contenir :

- un lien direct vers le fichier;
- son nom exact;
- une courte indication sur l'endroit où l'enregistrer ou le placer lorsque cela compte pour l'exercice.

Pour un fichier dans `static/files/rencontreN/`, utiliser une référence compatible avec le `baseUrl`, par exemple :

```md
:::info 📥 Fichier à télécharger
**[Télécharger `nom-du-fichier.png`](pathname:///files/rencontreN/nom-du-fichier.png)**

Enregistrez le fichier à l'endroit indiqué dans l'exercice.
:::
```

Ne jamais laisser une consigne vague du type **« utilisez le fichier fourni par l'enseignant »** sans entrée correspondante dans le suivi des ressources et, une fois le fichier disponible, sans lien direct dans la page étudiante.

## Configuration

Les éléments suivants doivent rester portables entre le dépôt personnel et le dépôt officiel :

- `url`
- `baseUrl`
- `organizationName`
- `projectName`
- les liens GitHub d'édition et de pied de page

Si une tâche touche le déploiement, vérifier les deux cibles conceptuelles :

- prévisualisation personnelle : `emcmp/Z03`
- publication officielle : `departement-info-cem/z03`

## Validation obligatoire

Après toute modification sous `web/`, exécuter depuis la racine du dépôt :

`npm run build`

Pour les changements visuels ou de navigation, vérifier également le résultat avec le serveur de développement ou le serveur de build lorsque pertinent.

Ne pas terminer une tâche avec un build cassé sans expliquer précisément ce qui bloque.
