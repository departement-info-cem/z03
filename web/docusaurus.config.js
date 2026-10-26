// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import { themes } from "prism-react-renderer";
import fs from "node:fs";
import path from "node:path";

const siteConfig = require("./config");

const lightCodeTheme = themes.vsDark;
const darkCodeTheme = themes.vsDark;

const isPersonalPreview = process.env.GITHUB_REPOSITORY === "emcmp/Z03";
const includeRefonteDocs = process.env.INCLUDE_REFONTE_DOCS === "true";
const repositoryOwner = isPersonalPreview ? "emcmp" : "departement-info-cem";
const repositoryName = isPersonalPreview ? "Z03" : siteConfig.nomUrl;
const repositoryUrl = `https://github.com/${repositoryOwner}/${repositoryName}`;

// Les documents internes de refonte restent hors du site étudiant. Ils sont
// copiés et publiés uniquement quand INCLUDE_REFONTE_DOCS=true, par exemple
// avec `npm run start:refonte` sur le poste de l'enseignant.
const refonteDocuments = [
  "REFONTE.md",
  "PLAN_SITE_EVOLUTIF.md",
  "COMPETENCES_HTML_CSS.md",
  "EVALUATION.md",
  "MIGRATION_LABORATOIRES_CODEX.md",
  "RESSOURCES_A_FOURNIR.md",
  "SUIVI_CONTENU.md",
  "MODELE_EDITORIAL_CONTENU.md",
  "PLAN_EPURATION_REPETITIONS_R1_R5.md",
  "VERIFICATIONS_LOCALES_AVANT_COURS.md",
  "CONSULTER_REFONTE_LOCAL.md",
  "STRATEGIE_DEPOTS_ET_MISE_EN_PRODUCTION.md",
  "ARCHIVAGE_SOURCES_HISTORIQUES.md",
];
const refonteSourceDirectory = path.resolve(__dirname, "../refonte");
const refonteContentDirectory = path.resolve(__dirname, ".refonte-docs");

if (includeRefonteDocs) {
  fs.rmSync(refonteContentDirectory, { recursive: true, force: true });
  fs.mkdirSync(refonteContentDirectory, { recursive: true });

  for (const document of refonteDocuments) {
    const source = path.join(refonteSourceDirectory, document);
    const destination = path.join(refonteContentDirectory, document);
    fs.copyFileSync(source, destination);
  }
}

/** @type {NonNullable<import('@docusaurus/types').Config['plugins']>} */
const plugins = [require.resolve("./plugins/docs-metadata")];

if (includeRefonteDocs) {
  plugins.push([
    "@docusaurus/plugin-content-docs",
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    ({
      id: "refonte",
      path: ".refonte-docs",
      routeBasePath: "refonte",
      include: refonteDocuments,
      sidebarPath: require.resolve("./sidebars-refonte.js"),
    }),
  ]);
}

/** @type {NonNullable<import('@docusaurus/preset-classic').ThemeConfig['navbar']>['items']} */
const navbarItems = [
  {
    type: "docSidebar",
    position: "left",
    sidebarId: "bienDebuter",
    label: "Bien débuter",
  },
  {
    type: "doc",
    docId: "cours/rencontre1-environnement",
    position: "left",
    label: "Cours",
  },
  {
    type: "docSidebar",
    position: "left",
    sidebarId: "projetWeb",
    label: "Projet Web",
  },
  {
    type: "docSidebar",
    position: "left",
    sidebarId: "travauxPratiques",
    label: "Travaux pratiques",
  },
  {
    type: "docSidebar",
    position: "left",
    sidebarId: "dansAutobus",
    label: "Dans l'autobus",
  },
];

navbarItems.splice(2, 0, {
  type: "docSidebar",
  position: "left",
  sidebarId: "labos",
  label: "Laboratoires",
});

if (includeRefonteDocs) {
  navbarItems.push({
    type: "docSidebar",
    position: "left",
    sidebarId: "refonte",
    docsPluginId: "refonte",
    label: "Refonte",
  });
}

navbarItems.push({
  type: "custom-styleSwitcher",
  position: "right",
});

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteConfig.nom,
  tagline: siteConfig.description,
  url: isPersonalPreview
    ? "https://emcmp.github.io"
    : "https://info.cegepmontpetit.ca",
  baseUrl: isPersonalPreview ? "/Z03/" : `/${siteConfig.nomUrl}/`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  organizationName: repositoryOwner,
  projectName: repositoryName,
  deploymentBranch: "gh-pages",
  trailingSlash: false,

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl: `${repositoryUrl}/tree/main/web`,
        },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")],
        },
      }),
    ],
  ],

  plugins,

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: siteConfig.nom,
        logo: {
          alt: "Logo CEM",
          src: "img/logo.svg",
        },
        items: navbarItems,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Sources",
            items: [
              {
                label: "GitHub",
                href: repositoryUrl,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}. ${
          siteConfig.nom
        }. CÉGEP Édouard-Montpetit.`,
      },
      // Décommenter et remplir pour activer l'indexation des pages par le moteur de recherche local
      // algolia: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      //   contextualSearch: true,
      //   searchPagePath: 'search',
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["csharp", "java", "dart"],
      },
      metadata: [
        {
          name: "keywords",
          content: `${siteConfig.nom}, ${siteConfig.description}, informatique, technique, cégep, cegep, édouard-montpetit, edouard-montpetit, édouard montpetit, edouard montpetit`,
        },
      ],
    }),
};

module.exports = config;
