# Plan d'implémentation — finalisation des rencontres 1 à 5

**Statut du plan : actif**  
**Dernière mise à jour : 2026-08-19**

Ce document est le **plan opérationnel de travail** pour terminer le bloc HTML/CSS des rencontres 1 à 5 avant de poursuivre la refonte de la programmation.

Il ne remplace pas les documents de conception existants. Il sert à répondre à une autre question : **qu'est-ce qu'on fait maintenant, dans quel ordre, et où en est-on si le travail est interrompu?**

Documents de référence :

- `PLAN_SITE_EVOLUTIF.md` — progression pédagogique du même site Web pendant les rencontres 1 à 5;
- `COMPETENCES_HTML_CSS.md` — notions, compétences WEB-01 à WEB-08 et moments de validation;
- `EVALUATION.md` — règles d'évaluation progressive;
- `SUIVI_CONTENU.md` — traçabilité des sources et décisions de migration;
- `RESSOURCES_A_FOURNIR.md` — captures, images et fichiers nécessaires aux rencontres;
- `../web/AGENTS.md` — règles techniques et de contenu pour l'application Docusaurus.

# Règle de travail

Pour une étape de refonte qui touche plusieurs pages ou qui modifie la progression pédagogique :

1. **documenter le plan avant l'implémentation**;
2. découper le travail en tâches identifiables;
3. marquer une tâche `En cours` avant de commencer;
4. après un lot cohérent de changements, noter le résultat et le prochain point de reprise;
5. ne considérer une rencontre `Prête à réviser` que lorsque cours, pratique, Projet Web, ressources et navigation sont cohérents;
6. mettre à jour ce document si le plan change pendant le travail.

Le but est qu'une interruption de session, un changement d'agent ou une délégation à Codex ne fasse pas perdre l'état du travail.

# Répartition des rôles

## GPT-concepteur

Le GPT-concepteur demeure responsable en priorité de :

- la progression pédagogique;
- le choix des notions à conserver, alléger ou déplacer;
- la rédaction du contenu destiné aux étudiants;
- la conception des exercices guidés;
- la continuité du Projet Web;
- la cohérence entre matière, pratique et évaluation.

## Codex

Codex peut recevoir des tâches **techniques, mécaniques ou de vérification clairement bornées**. Une tâche Codex ne doit pas prendre de décision pédagogique implicite.

Toute tâche déléguée à Codex doit préciser :

- les fichiers qu'il peut modifier;
- ce qu'il ne doit pas modifier;
- les vérifications attendues;
- le livrable ou le commit attendu.

Des prompts prêts à copier sont conservés plus bas dans ce document.

# Portée de cette passe

## À terminer maintenant

- remplacer l'onglet principal **Fonctionnement** par **Bien débuter**;
- regrouper sous **Bien débuter** la page **Fonctionnement du cours** et une nouvelle page **Accès au poste et compte réseau**;
- corriger la couverture de la rencontre 1 afin que le préambule réutilise provisoirement les captures utiles du PowerPoint **Environnement de travail**;
- cohérence finale de la rencontre 2;
- rencontre 3 complète : cours, exercice guidé, Projet Web — Étape 3;
- rencontre 4 complète : cours, exercice guidé, Projet Web — Étape 4;
- rencontre 5 complète : cours, exercice guidé, Projet Web — Étape 5;
- navigation cohérente des rencontres 1 à 5;
- ressources nécessaires identifiées ou intégrées;
- lecture transversale de la progression 1 → 5;
- build Docusaurus final.

## Gelé pour cette passe

À l'exception du **correctif ciblé sur l'environnement de travail** décrit dans la phase BD/R1 ci-dessous :

- ne pas refaire une nouvelle passe générale de finition sur la rencontre 1;
- ne pas commencer la refonte détaillée de JavaScript à partir de la rencontre 6;
- ne pas réorganiser les laboratoires de programmation;
- ne pas finaliser la pondération détaillée des compétences;
- ne pas moderniser toutes les captures historiques avant le premier cours;
- ne pas faire de nouveau ménage général du dépôt;
- ne pas introduire de CSS avancé dans le noyau obligatoire.

Les anciennes captures suffisamment claires peuvent être utilisées **provisoirement maintenant**, puis remplacées plus tard par des versions actuelles en conservant les mêmes noms de fichiers.

# États utilisés

| État | Signification |
|---|---|
| `À faire` | La tâche n'a pas commencé. |
| `En cours` | Quelqu'un travaille actuellement sur cette tâche. |
| `Bloqué` | Une dépendance empêche d'avancer; le blocage doit être expliqué. |
| `Délégué à Codex` | Une tâche bornée a été envoyée à Codex; ne pas refaire le même travail en parallèle. |
| `Prêt à réviser` | L'implémentation est complète, mais une lecture pédagogique de l'ensemble reste souhaitable. |
| `Terminé` | La tâche a été vérifiée et ne nécessite plus d'action dans cette passe. |

# État de départ révisé

| Élément | État actuel | État global |
|---|---|---|
| **Bien débuter** | `Fonctionnement` existe comme onglet direct; aucune page locale dédiée au compte réseau | **À faire** |
| **Rencontre 1** | cours, exercice et Projet Web présents; VS Code illustré; le préambule contient le texte sur dossiers/extensions/ZIP mais les captures historiques Windows/ZIP du PowerPoint ne sont pas actuellement intégrées | **À faire — correctif ciblé** |
| **Rencontre 2** | cours détaillé, exercice avec `chat.jpg`, Étape 2 présente, navigation structurée | **Prêt à réviser** |
| **Rencontre 3** | squelette seulement | **À faire** |
| **Rencontre 4** | squelette seulement | **À faire** |
| **Rencontre 5** | squelette seulement | **À faire** |

# Ordre d'implémentation

L'ordre retenu est maintenant :

0. **Phase BD/R1 — Bien débuter + correctif environnement de la rencontre 1**;
1. **Rencontre 3 complète**;
2. **Rencontre 4 complète**;
3. **Rencontre 5 complète**;
4. **relecture rapide de la rencontre 2** à la lumière de ce qui suit;
5. **lecture transversale des rencontres 1 à 5**;
6. ajustements de poids seulement si cette lecture montre un déséquilibre;
7. build final et mise à jour des suivis.

La phase 0 doit rester courte : elle vise la préparation immédiate du premier cours, pas une nouvelle refonte complète de R1.

# Définition de « rencontre prête à réviser »

Une rencontre 3, 4 ou 5 n'atteint le statut `Prêt à réviser` que si :

- la page **Cours** contient la matière réellement prévue pour cette rencontre et ne porte plus un simple avertissement « refonte en cours »;
- un **exercice guidé** permet de pratiquer la nouveauté avant de modifier le Projet Web;
- une page **Projet Web — Étape N** poursuit le même site commencé à la rencontre 1;
- le cours, l'exercice et le projet utilisent le même vocabulaire et les mêmes conventions de fichiers;
- `À maîtriser`, `Bonne pratique` et `Pour aller plus loin — non évalué` sont distingués lorsque nécessaire;
- les compétences possibles à cette rencontre correspondent à `COMPETENCES_HTML_CSS.md`;
- toute ressource manquante est inscrite dans `RESSOURCES_A_FOURNIR.md`;
- la navigation Docusaurus présente la rencontre selon la même logique que les rencontres 1 et 2;
- les anciens documents sources ne sont pas supprimés tant que leur migration n'est pas vérifiée;
- `npm run build` réussit, ou le blocage est documenté précisément.

# Tâches d'implémentation

## Phase BD/R1 — Bien débuter et environnement du premier cours

Cette phase est prioritaire parce qu'elle touche directement ce que les étudiants voient et utilisent dès le premier cours.

### BD-01 — Remplacer l'onglet « Fonctionnement » par « Bien débuter »

**État : À faire**

Objectif de navigation : avoir un onglet principal **Bien débuter** contenant au minimum :

1. **Fonctionnement du cours**;
2. **Accès au poste et compte réseau**.

Implémentation technique préférée :

- conserver pour l'instant `web/docs/fonctionnement-du-cours.md` à son emplacement actuel afin d'éviter un déplacement inutile avant le cours;
- créer un sidebar `bienDebuter` dans `web/sidebars.js`;
- remplacer dans `web/docusaurus.config.js` l'item direct `Fonctionnement` par un item `docSidebar` nommé **Bien débuter**;
- préserver le slug actuel `/fonctionnement` de la page existante.

Un ménage physique des fichiers pourra être fait plus tard si nécessaire.

### BD-02 — Créer « Accès au poste et compte réseau »

**État : À faire**  
**Dépend de : BD-01**

Créer une page étudiante courte qui aide un étudiant à savoir quoi faire avant de pouvoir travailler sur un poste du Cégep.

Source institutionnelle de référence :

`https://techno.cegepmontpetit.ca/compte-reseau/`

La page locale doit expliquer simplement :

- à quoi sert le compte réseau dans le contexte du cours;
- qu'il sert notamment à accéder aux ordinateurs du Cégep et aux services institutionnels;
- où trouver la procédure officielle de première activation / gestion du mot de passe;
- quoi faire si le compte est verrouillé ou si l'accès ne fonctionne pas;
- qu'un étudiant qui n'arrive pas à ouvrir sa session doit régler ce problème avant les activités nécessitant VS Code et les fichiers du cours.

Éviter de recopier inutilement des détails institutionnels susceptibles de changer, par exemple une liste précise de critères de mot de passe. Préférer une courte explication et un lien clair vers la page officielle.

### BD-03 — Auditer le PowerPoint « Environnement de travail » contre le préambule actuel

**État : À faire**

Constat au 2026-08-19 : le préambule actuel reprend plusieurs **idées** du PowerPoint, mais pas l'ensemble de sa couverture visuelle. Le dossier `web/static/img/rencontre1/` contient actuellement les quatre captures VS Code, mais pas les captures Windows/ZIP prévues à partir du PowerPoint.

Le contrôle doit vérifier explicitement la couverture suivante du PowerPoint historique :

- avertissement sur les fichiers laissés sur les ordinateurs du Cégep;
- arborescence de dossiers et notion de hiérarchie;
- racine / disques / supports;
- création d'un dossier;
- extensions de fichiers;
- affichage des extensions dans Windows;
- principe d'une archive ZIP;
- compression d'un dossier;
- résultat de la compression et vérification du contenu de l'archive;
- décompression / extraction;
- **avertissement final : ne jamais travailler directement dans l'archive ZIP; travailler dans le dossier extrait**.

Pour chaque point, indiquer : `présent dans le texte`, `illustré`, `à intégrer` ou `non retenu`.

### BD-04 — Réintégrer les captures historiques utiles comme ressources provisoires

**État : À faire**  
**Dépend de : BD-03**

Réutiliser immédiatement les captures du PowerPoint lorsqu'elles rendent la procédure plus claire, même si leur interface est ancienne.

Règles :

- copier les captures retenues sous `web/static/img/rencontre1/` avec des noms stables et explicites;
- insérer les images aux sections pertinentes de `01-rencontre1-environnement.md`;
- ajouter au besoin une courte mention indiquant que l'interface peut différer légèrement;
- conserver un avertissement très visible sur l'extraction du ZIP avant de travailler;
- ne pas exiger une recapture moderne avant le premier cours;
- marquer ces images `Provisoire intégré` dans `RESSOURCES_A_FOURNIR.md`;
- permettre leur remplacement futur fichier pour fichier sans devoir réécrire la page.

La partie ZIP doit montrer **les deux opérations** lorsqu'elles sont utiles : compresser et extraire/décompresser. L'accent pédagogique principal demeure sur le fait de travailler dans le dossier extrait, jamais dans l'archive.

### BD-05 — Validation technique de la phase Bien débuter / R1

**État : À faire**  
**Dépend de : BD-01 à BD-04**

- vérifier la navigation **Bien débuter**;
- vérifier les liens vers les deux pages;
- vérifier le lien institutionnel du compte réseau;
- vérifier que toutes les images du préambule existent réellement;
- vérifier les textes alternatifs des images;
- exécuter `npm run build`;
- mettre à jour ce plan et `RESSOURCES_A_FOURNIR.md`.

---

## Phase R3 — Introduction à CSS

### R3-01 — Délimiter le contenu de cours

**État : À faire**

Source principale : `web/docs/01-cours/00-introduction-css.md`.

À conserver dans le noyau :

- syntaxe propriété / valeur / déclaration / règle;
- feuille CSS externe;
- `<link>` et chemin vers `css/styles.css`;
- sélecteur d'élément;
- classe et réutilisation de classes;
- `id` seulement à un niveau de compréhension;
- couleurs et arrière-plans;
- typographie et alignement simples;
- bordures simples;
- cascade expliquée seulement au niveau nécessaire pour comprendre un conflit courant.

À compresser ou présenter comme contexte : CSS intraligne/interne, `<span>`, détails de cascade.

À ne pas faire glisser vers cette rencontre : modèle en boîte détaillé, Flexbox, positionnement.

### R3-02 — Rédiger le cours canonique

**État : À faire**  
**Dépend de : R3-01**

Transformer `web/docs/01-cours/03-rencontre3.md` en véritable page étudiante de rencontre 3 en réutilisant et simplifiant le matériel pertinent de `00-introduction-css.md`.

### R3-03 — Créer l'exercice guidé CSS

**État : À faire**  
**Dépend de : R3-02**

Créer un petit exercice guidé distinct du Projet Web permettant de pratiquer : feuille externe, chemin CSS, sélecteur d'élément, classe et quelques propriétés visuelles.

L'exercice doit être assez court pour laisser du temps au Projet Web.

### R3-04 — Créer Projet Web — Étape 3

**État : À faire**  
**Dépend de : R3-02 et R3-03**

Poursuivre le site des étapes 1 et 2 : création de `css/styles.css`, liaison depuis toutes les pages, première identité visuelle cohérente, utilisation volontaire de classes.

Validation visée : début de **Validation C — WEB-05 / WEB-06**.

### R3-05 — Navigation, ressources et validation technique

**État : À faire**  
**Dépend de : R3-02 à R3-04**

- transformer la rencontre 3 dans `web/sidebars.js` en catégorie Cours / Exercice guidé / Projet Web;
- inscrire toute ressource manquante dans `RESSOURCES_A_FOURNIR.md`;
- vérifier les liens entre les trois pages;
- exécuter `npm run build`;
- mettre à jour le présent plan et `SUIVI_CONTENU.md`.

---

## Phase R4 — Modèle en boîte et espacements

### R4-01 — Extraire le noyau utile du matériel existant

**État : À faire**

Source principale : `web/docs/01-cours/00-modele-boites-positionnement.md`.

À conserver dans le noyau :

- contenu / `padding` / `border` / `margin`;
- différence `padding` et `margin`;
- bordures;
- dimensions simples lorsque réellement utiles;
- regroupement de contenu en blocs;
- consolidation des classes.

À retirer du noyau obligatoire ou à classer `Pour aller plus loin` :

- théorie détaillée `block` / `inline` / `inline-block`;
- `overflow`;
- positions `relative`, `absolute`, `fixed`;
- transitions et effets avancés;
- combinaisons de sélecteurs non nécessaires à la progression.

### R4-02 — Rédiger le cours canonique

**État : À faire**  
**Dépend de : R4-01**

Transformer `web/docs/01-cours/04-rencontre4.md` en véritable page étudiante centrée sur le modèle en boîte et les espacements.

### R4-03 — Créer l'exercice guidé « carte / bloc »

**État : À faire**  
**Dépend de : R4-02**

Créer un exercice très visuel où l'étudiant manipule `padding`, `border`, `margin` et une dimension simple afin de comprendre la différence entre espace intérieur et extérieur.

### R4-04 — Créer Projet Web — Étape 4

**État : À faire**  
**Dépend de : R4-02 et R4-03**

Faire améliorer des sections du site en blocs lisibles avec espacements volontaires, sans imposer un design uniforme à tous les sujets.

Validations visées : fin possible de **Validation C** et début de **Validation D — WEB-07 / WEB-08**.

### R4-05 — Navigation, ressources et validation technique

**État : À faire**  
**Dépend de : R4-02 à R4-04**

Même contrôle de sortie que R3-05.

---

## Phase R5 — Flexbox simple et intégration

### R5-01 — Définir le Flexbox minimal

**État : À faire**

Noyau prévu :

- `display: flex`;
- `gap`;
- `justify-content` et `align-items` seulement dans quelques cas concrets;
- navigation horizontale comme cas principal;
- consolidation plutôt qu'ajout d'une longue liste de propriétés.

Ne pas rendre obligatoires : Flexbox avancé, Grid, positionnement, animations, transitions.

### R5-02 — Rédiger le cours canonique

**État : À faire**  
**Dépend de : R5-01**

Transformer `web/docs/01-cours/05-rencontre5.md` en page complète avec exemples très simples de disposition.

### R5-03 — Créer l'exercice guidé Flexbox

**État : À faire**  
**Dépend de : R5-02**

Pratiquer une navigation horizontale et un petit groupe de blocs. L'objectif est de comprendre l'idée parent flex → enfants disposés, pas de couvrir Flexbox exhaustivement.

### R5-04 — Créer Projet Web — Étape 5

**État : À faire**  
**Dépend de : R5-02 et R5-03**

Améliorer au moins une disposition utile dans le site, harmoniser les pages et consacrer le reste du temps à la correction et aux validations.

Validation visée : finalisation de **Validation D — WEB-07 / WEB-08** et reprises lorsque possible.

### R5-05 — Navigation, ressources et validation technique

**État : À faire**  
**Dépend de : R5-02 à R5-04**

Même contrôle de sortie que R3-05.

---

## Phase de revue globale

### REV-01 — Relecture ciblée de la rencontre 2

**État : À faire**  
**Dépend de : R3–R5 prêts à réviser**

Vérifier seulement :

- charge réelle de la rencontre;
- cohérence cours → exercice `chat.jpg` → Projet Web Étape 2;
- quantité de pages/contenu exigée avant l'arrivée de CSS;
- réalisme des validations A et B dans le temps disponible.

Ne pas réécrire R2 simplement pour uniformiser le style si le contenu fonctionne.

### REV-02 — Lecture transversale R1 → R5

**État : À faire**  
**Dépend de : REV-01**

Lire les cinq rencontres comme un étudiant et comme un enseignant afin de répondre à :

- R1 laisse-t-elle assez de temps pour démarrer le projet?
- R2 contient-elle trop de HTML pour une seule rencontre?
- R3 introduit-elle trop de propriétés CSS?
- R4 empiète-t-elle sur le rôle de R5?
- R5 garde-t-elle suffisamment de temps pour la pratique, la correction et les validations?
- le Projet Web progresse-t-il naturellement sans devenir un gros TP?

### REV-03 — Ajustements de poids

**État : À faire**  
**Dépend de : REV-02**

Déplacer, compresser ou rendre facultative une notion seulement si la lecture transversale montre un déséquilibre réel. Documenter toute modification de portée dans `SUIVI_CONTENU.md` et, si l'évaluation change, dans `EVALUATION.md` / `COMPETENCES_HTML_CSS.md`.

### REV-04 — Vérification finale avant utilisation en classe

**État : À faire**  
**Dépend de : REV-03**

- vérifier l'onglet **Bien débuter**;
- vérifier les catégories de navigation 1 à 5;
- vérifier les liens Cours → Exercice → Projet Web;
- vérifier les téléchargements et ressources statiques;
- exécuter `npm run build`;
- vérifier visuellement les pages principales si possible;
- mettre toutes les tâches terminées à jour dans ce document.

# Tâches Codex disponibles

Ces tâches sont **optionnelles**. Le GPT-concepteur peut continuer sans les déléguer. Leur but est de réserver à Codex le travail technique qui ne nécessite pas de décision pédagogique.

## CODEX-01 — Audit technique des assets R3–R5

**État : Disponible, non délégué**

Prompt à envoyer à Codex :

> Travaille dans le dépôt `emcmp/Z03`. Lis d'abord `AGENTS.md`, `web/AGENTS.md` et `refonte/PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md`. Fais uniquement un audit technique des images et autres assets susceptibles d'être réutilisés pour les rencontres 3, 4 et 5 à partir de `web/docs/01-cours/00-introduction-css.md`, `web/docs/01-cours/00-modele-boites-positionnement.md`, `sources/R02-Introduction-CSS-Markdown/`, `sources/R03-Modele-Boites-Positionnement-Markdown/` et `web/static/img/`. Ne modifie pas le contenu pédagogique et ne déplace aucun fichier. Ajoute un rapport `refonte/AUDIT_ASSETS_R3_R5_CODEX.md` indiquant pour chaque asset : source, notion illustrée, fichier actuel, réutilisable oui/non, et éventuel problème de chemin ou de doublon. Termine par `git diff --check` et donne le commit créé.

## CODEX-02 — Contrôle technique après une rencontre terminée

**État : Disponible, non délégué**

Prompt à adapter puis envoyer à Codex :

> Travaille dans `emcmp/Z03`. Lis `AGENTS.md`, `web/AGENTS.md` et `refonte/PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md`. La rencontre N vient d'être rédigée. Ne réécris pas le contenu pédagogique. Vérifie uniquement : liens Markdown/MDX, chemins vers les images et fichiers statiques, cohérence des IDs Docusaurus, ordre de la catégorie dans `web/sidebars.js`, fichiers référencés inexistants et liens cassés évidents. Exécute `npm run build` depuis la racine. Corrige seulement les erreurs techniques non ambiguës. Mets à jour dans le plan la tâche technique correspondante si elle est réellement terminée, puis donne le commit et le résultat du build.

## CODEX-03 — Vérification finale R1–R5

**État : Disponible, non délégué**

Prompt à envoyer lorsque REV-03 est terminé :

> Travaille dans `emcmp/Z03`. Lis `AGENTS.md`, `web/AGENTS.md` et `refonte/PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md`. Fais un contrôle technique final des rencontres 1 à 5 sans modifier leurs choix pédagogiques : navigation, liens entre cours/exercices/Projet Web, liens de téléchargement, assets statiques, IDs/slugs et build Docusaurus. Signale séparément les problèmes qui nécessitent une décision pédagogique au lieu de les corriger toi-même. Exécute `npm run build` et `git diff --check`. Corrige les erreurs purement techniques et fournis le commit final ainsi qu'un bref rapport.

## CODEX-04 — Contrôle technique de « Bien débuter » et des assets R1

**État : Disponible, non délégué**

À utiliser **après** l'implémentation BD-01 à BD-04 si une seconde vérification technique est utile.

Prompt à envoyer à Codex :

> Travaille dans `emcmp/Z03`. Lis `AGENTS.md`, `web/AGENTS.md` et `refonte/PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md`. Ne change aucune décision pédagogique. Vérifie uniquement la phase BD/R1 déjà implémentée : sidebar et onglet `Bien débuter`, IDs des pages `Fonctionnement du cours` et `Accès au poste et compte réseau`, lien institutionnel vers `https://techno.cegepmontpetit.ca/compte-reseau/`, existence de toutes les images référencées par `web/docs/01-cours/01-rencontre1-environnement.md`, textes alternatifs, doublons ou mauvais chemins dans `web/static/img/rencontre1/`. Exécute `npm run build` et `git diff --check`. Corrige seulement les erreurs techniques non ambiguës et donne le commit ainsi qu'un bref rapport.

# Protocole de reprise après interruption

Lorsqu'une nouvelle session reprend ce travail :

1. lire `AGENTS.md`, `REFONTE.md` et **ce document**;
2. vérifier le dernier commit de `main` et les changements récents;
3. repérer la première tâche `En cours`; s'il n'y en a aucune, prendre la première tâche `À faire` dont les dépendances sont terminées;
4. refetcher les fichiers concernés immédiatement avant modification;
5. ne pas recommencer une tâche marquée `Délégué à Codex` sans vérifier son résultat;
6. à la fin du lot, mettre à jour le statut, le résultat et le prochain point de reprise dans ce document.

Si une tâche a été interrompue sans mise à jour de statut, inspecter les derniers commits et le diff avant de décider ce qui reste réellement à faire.

# Point de reprise actuel

Le plan révisé est maintenant enregistré avant l'implémentation.

La prochaine tâche normale est :

> **BD-01 — Remplacer l'onglet « Fonctionnement » par « Bien débuter ».**

Puis :

> **BD-02 — Créer la page « Accès au poste et compte réseau ».**  
> **BD-03 / BD-04 — Réconcilier le PowerPoint Environnement de travail avec le préambule et réintégrer ses captures utiles.**

Après cette phase ciblée du premier cours, reprendre avec **R3-01 — Délimiter le contenu de cours de la rencontre 3**.

Codex n'est pas nécessaire pour BD-01 à BD-04; le GPT-concepteur garde ces choix. `CODEX-04` demeure disponible comme contrôle technique après coup.