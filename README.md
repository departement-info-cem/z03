# Z03 - Introduction à la programmation web

Dépôt de travail pour la refonte du cours Z03 - Introduction à la programmation web du CÉGEP Édouard-Montpetit.

Le site est construit avec [Docusaurus](https://docusaurus.io/) et provient initialement du matériel du cours 905 - Introduction à la programmation. La refonte adapte cette base pour un cours à option qui ne possède aucun lien avec un programme de techniques multimédias et qui s'adresse à un public ne possédant pas nécessairement d'expérience préalable en informatique, HTML ou CSS.

Voir [`refonte/REFONTE.md`](./refonte/REFONTE.md) pour le contexte pédagogique, les objectifs et les décisions structurantes.

## Structure

```text
Z03/
├── AGENTS.md              # Consignes générales pour Codex et les agents
├── README.md              # Point d'entrée du dépôt
├── package.json           # Commandes pratiques à partir de la racine
├── package-lock.json
├── .github/workflows/     # Déploiement GitHub Pages
├── refonte/               # Planification et suivi internes de la refonte
│   ├── REFONTE.md
│   ├── PLAN_SITE_EVOLUTIF.md
│   ├── COMPETENCES_HTML_CSS.md
│   ├── EVALUATION.md
│   ├── MIGRATION_LABORATOIRES_CODEX.md
│   ├── RESSOURCES_A_FOURNIR.md
│   └── SUIVI_CONTENU.md
├── sources/               # Sources historiques / éditoriales de migration
│   ├── R01-Introduction-HTML-Markdown/
│   ├── R02-Introduction-CSS-Markdown/
│   └── R03-Modele-Boites-Positionnement-Markdown/
└── web/
    ├── AGENTS.md          # Consignes Codex propres à Docusaurus
    ├── docs/              # Contenu pédagogique du site
    ├── src/               # Composantes et styles
    ├── static/            # Ressources statiques
    ├── package.json       # Projet Docusaurus
    └── docusaurus.config.js
```

Les dossiers sous `sources/` sont conservés pour la traçabilité de la refonte. Le contenu pédagogique actif se trouve sous `web/docs/`.

## Prérequis

- Git
- Node.js 20 ou une version compatible récente
- npm

## Installation

À partir de la racine du dépôt :

```powershell
npm run setup
```

Cette commande exécute `npm ci` dans le dossier `web/`.

## Développement local

Démarrer Docusaurus avec rechargement automatique :

```powershell
npm run start
```

Le serveur de développement utilise normalement `http://localhost:3000/`.

## Validation

Construire le site statique :

```powershell
npm run build
```

Le résultat est généré dans `web/build/`.

Tester le build généré :

```powershell
npm run serve
```

Nettoyer le cache Docusaurus au besoin :

```powershell
npm run clear
```

## Travailler avec Codex

Ouvrir la racine du dépôt comme projet local dans Codex.

Codex lit automatiquement les fichiers `AGENTS.md` présents dans l'arborescence. Le fichier racine fournit le contexte global du projet et `web/AGENTS.md` ajoute les règles propres au site Docusaurus et au contenu pédagogique.

Pour les changements pédagogiques ou les réorganisations du cours, consulter également `refonte/REFONTE.md` et les autres documents du dossier `refonte/`.

## Dépôts et publication

### Travail et prévisualisation

`emcmp/Z03`

C'est le dépôt courant pour la refonte et les essais. La configuration Docusaurus détecte ce contexte pour permettre une prévisualisation GitHub Pages personnelle.

### Publication officielle

`departement-info-cem/z03`

Ce dépôt demeure la cible de publication officielle. La synchronisation vers celui-ci doit être faite explicitement lorsqu'une version est prête.

La configuration du site est conçue pour rester portable entre les deux dépôts.

## GitHub Pages

Le workflow `.github/workflows/deploy.yml` :

1. installe les dépendances dans `web/`;
2. exécute le build Docusaurus;
3. publie `web/build/` avec GitHub Pages.

Le workflow peut être déclenché lors d'un push sur `main` ou manuellement dans l'onglet **Actions**.

## Notes sur les dépendances

Le projet contient du matériel hérité du 905. Ne pas lancer `npm audit fix --force` ou effectuer une mise à niveau majeure des dépendances comme étape de nettoyage générale. Les mises à jour de dépendances doivent être traitées séparément et validées avec un build complet.
