// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  bienDebuter: [
    {
      type: "doc",
      id: "fonctionnement-du-cours",
      label: "Fonctionnement du cours",
    },
    {
      type: "doc",
      id: "acces-poste-compte-reseau",
      label: "Accès au poste et compte réseau",
    },
    {
      type: "doc",
      id: "caracteres-utiles-clavier",
      label: "Caractères utiles au clavier",
    },
    {
      type: "doc",
      id: "liens-utiles",
      label: "Liens utiles",
    },
  ],
  docs: [
    {
      type: "doc",
      id: "cours/aide-memoire-html-css",
      label: "Aide-mémoire — HTML/CSS",
    },
    {
      type: "category",
      label: "Rencontre 1 — Environnement et HTML",
      items: [
        {
          type: "doc",
          id: "cours/rencontre1-environnement",
          label: "Préambule — Environnement de travail",
        },
        { type: "doc", id: "cours/rencontre1", label: "Cours — Premiers pas en HTML" },
        {
          type: "doc",
          id: "cours/rencontre1-exercice-guide",
          label: "Exercice guidé — Première page",
        },
        {
          type: "ref",
          id: "projet-web/rencontre1",
          label: "Projet Web — Étape 1",
        },
      ],
    },
    {
      type: "category",
      label: "Rencontre 2 — HTML, fichiers et navigation",
      items: [
        {
          type: "doc",
          id: "cours/rencontre2",
          label: "Cours — Images, chemins et navigation",
        },
        {
          type: "doc",
          id: "cours/rencontre2-exercice-guide",
          label: "Exercice guidé — Chemins et navigation",
        },
        {
          type: "ref",
          id: "projet-web/rencontre2",
          label: "Projet Web — Étape 2",
        },
      ],
    },
    {
      type: "category",
      label: "Rencontre 3 — Introduction à CSS",
      items: [
        {
          type: "doc",
          id: "cours/rencontre3",
          label: "Cours — Introduction à CSS",
        },
        {
          type: "doc",
          id: "cours/rencontre3-exercice-guide",
          label: "Exercice guidé — Première feuille CSS",
        },
        {
          type: "ref",
          id: "projet-web/rencontre3",
          label: "Projet Web — Étape 3",
        },
      ],
    },
    {
      type: "category",
      label: "Rencontre 4 — Modèle en boîte et espacements",
      items: [
        {
          type: "doc",
          id: "cours/rencontre4",
          label: "Cours — Modèle en boîte et espacements",
        },
        {
          type: "doc",
          id: "cours/rencontre4-exercice-guide",
          label: "Exercice guidé — Comprendre le modèle en boîte",
        },
        {
          type: "ref",
          id: "projet-web/rencontre4",
          label: "Projet Web — Étape 4",
        },
      ],
    },
    {
      type: "category",
      label: "Rencontre 5 — Flexbox simple et intégration",
      items: [
        {
          type: "doc",
          id: "cours/rencontre5",
          label: "Cours — Flexbox simple et intégration",
        },
        {
          type: "doc",
          id: "cours/rencontre5-exercice-guide",
          label: "Exercice guidé — Flexbox simple",
        },
        {
          type: "ref",
          id: "projet-web/rencontre5",
          label: "Projet Web — Étape 5",
        },
      ],
    },
    {
      type: "category",
      label: "Rencontre 6 — Variables et affectation",
      items: [
        {
          type: "doc",
          id: "cours/rencontre6",
          label: "Cours — Variables et affectation",
        },
        {
          type: "ref",
          id: "labos/labo2",
          label: "Laboratoire — Variables",
        },
      ],
    },
    {
      type: "category",
      label: "Rencontre 7 — DOM et fonctions",
      items: [
        {
          type: "doc",
          id: "cours/rencontre7",
          label: "Cours — DOM et fonctions",
        },
        {
          type: "ref",
          id: "labos/labo3",
          label: "Laboratoire — DOM et fonctions",
        },
      ],
    },
    {
      type: "category",
      label: "Rencontre 8 — Interactivité, classes et attributs",
      items: [
        { type: "doc", id: "cours/rencontre8", label: "Cours — Événements et styles" },
        {
          type: "doc",
          id: "cours/rencontre8-classes-attributs",
          label: "Cours — Classes et attributs",
        },
      ],
    },
    {
      type: "category",
      label: "Rencontre 9 — Conditions et logique",
      items: [
        { type: "doc", id: "cours/rencontre9", label: "Cours — Booléens et conditions" },
        {
          type: "doc",
          id: "cours/rencontre9-operateurs-logiques",
          label: "Cours — Opérateurs logiques",
        },
      ],
    },
    { type: "doc", id: "cours/rencontre10", label: "Rencontre 10 — Boucles" },
    {
      type: "category",
      label: "Rencontre 11 — Tableaux et plusieurs éléments DOM",
      items: [
        { type: "doc", id: "cours/rencontre11", label: "Cours — Tableaux" },
        {
          type: "doc",
          id: "cours/rencontre11-queryselectorall",
          label: "Cours — Tableaux d'éléments HTML",
        },
      ],
    },
    { type: "doc", id: "cours/rencontre12", label: "Rencontre 12 — Paramètres et retours" },
    { type: "doc", id: "cours/rencontre13", label: "Rencontre 13 — Plusieurs éléments du DOM" },
    { type: "doc", id: "cours/rencontre14", label: "Rencontre 14 — Rattrapage et révision" },
    { type: "doc", id: "cours/rencontre15", label: "Rencontre 15 — Évaluation sommative finale" },
  ],
  projetWeb: [{ type: "autogenerated", dirName: "03-projet-web" }],
  dansAutobus: [{ type: "autogenerated", dirName: "04-dans-autobus" }],
  labos: [
    {
      type: "doc",
      id: "labos/labo2",
      label: "Rencontre 6 — Variables",
    },
    {
      type: "doc",
      id: "labos/labo3",
      label: "Rencontre 7 — DOM et fonctions",
    },
  ],
};

module.exports = sidebars;
