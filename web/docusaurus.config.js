// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import { themes } from "prism-react-renderer";
import fs from "node:fs";
import path from "node:path";

const siteConfig = require("./config");

const lightCodeTheme = themes.vsDark;
const darkCodeTheme = themes.vsDark;

const isPersonalPreview = process.env.GITHUB_REPOSITORY === "emcmp/Z03";
const repositoryOwner = isPersonalPreview ? "emcmp" : "departement-info-cem";
const repositoryName = isPersonalPreview ? "Z03" : siteConfig.nomUrl;
const repositoryUrl = `https://github.com/${repositoryOwner}/${repositoryName}`;

// Les documents internes de refonte vivent dans ../refonte. Docusaurus en
// copie une sélection dans un dossier généré afin de les publier sans faire
// compiler le reste du dépôt comme contenu de documentation.
const refonteDocuments = [
  "REFONTE.md",
  "PLAN_SITE_EVOLUTIF.md",
  "COMPETENCES_HTML_CSS.md",
  "EVALUATION.md",
  "MIGRATION_LABORATOIRES_CODEX.md",
  "RESSOURCES_A_FOURNIR.md",
  "SUIVI_CONTENU.md",
];
const refonteSourceDirectory = path.resolve(__dirname, "../refonte");
const refonteContentDirectory = path.resolve(__dirname, ".refonte-docs");

fs.mkdirSync(refonteContentDirectory, { recursive: true });
for (const document of refonteDocuments) {
  const source = path.join(refonteSourceDirectory, document);
  const destination = path.join(refonteContentDirectory, document);
  const sourceContent = fs.readFileSync(source);
  const destinationContent = fs.existsSync(destination)
    ? fs.readFileSync(destination)
    : null;

  if (!destinationContent || !sourceContent.equals(destinationContent)) {
    fs.writeFileSync(destination, sourceContent);
  }
}

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

  plugins: [
    require.resolve("./plugins/docs-metadata"),
    [
      "@docusaurus/plugin-content-docs",
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: "refonte",
        path: ".refonte-docs",
        routeBasePath: "refonte",
        include: [
          "REFONTE.md",
          "PLAN_SITE_EVOLUTIF.md",
          "COMPETENCES_HTML_CSS.md",
          "EVALUATION.md",
          "MIGRATION_LABORATOIRES_CODEX.md",
          "RESSOURCES_A_FOURNIR.md",
          "SUIVI_CONTENU.md",
        ],
        sidebarPath: require.resolve("./sidebars-refonte.js"),
      }),
    ],
  ],

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
        items: [
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
            sidebarId: "dansAutobus",
            label: "Dans l'autobus",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "labos",
            label: "Laboratoires",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "refonte",
            docsPluginId: "refonte",
            label: "Refonte",
          },
        ],
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
