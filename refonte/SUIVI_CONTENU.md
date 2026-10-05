# Suivi de la refonte du contenu Z03

Ce document sert de registre de migration pendant la refonte du cours. Il doit être mis à jour chaque fois qu'une rencontre est déplacée, fusionnée, supprimée ou réécrite.

## Règle de traçabilité

Une rencontre de cours ne doit jamais être réorganisée sans vérifier aussi ses exercices associés.

Pour chaque fusion ou déplacement :

1. identifier la page de cours source;
2. identifier le ou les laboratoires associés;
3. identifier les fichiers sources dans `web/static/files/` (`.zip`, `.docx`, etc.);
4. extraire et inventorier les exercices avant de supprimer ou remplacer une source;
5. déplacer, fusionner ou adapter les exercices dans la nouvelle rencontre;
6. mettre à jour les pages de laboratoire et leurs liens;
7. conserver dans cette table la trace des anciennes sources jusqu'à ce que la migration soit vérifiée.

L'aide-mémoire `web/docs/01-cours/00-rencontre0.0.md` est une ressource de référence et ne compte pas parmi les 15 rencontres.

Consulter également :

- `EVALUATION.md` pour le modèle général de validation;
- `COMPETENCES_HTML_CSS.md` pour la cartographie détaillée des rencontres 1 à 5, les huit compétences HTML/CSS et les trois niveaux d'attente;
- `RESSOURCES_A_FOURNIR.md` pour les captures d'écran, images et fichiers à préparer avant chaque rencontre;
- `PLAN_IMPLEMENTATION_RENCONTRES_1_A_5.md` pour le bloc HTML/CSS;
- `PLAN_RENCONTRES_6_A_15.md` et `PLAN_IMPLEMENTATION_RENCONTRES_6_A_15.md` pour la séquence JavaScript et son implantation.

## Structure actuelle et sources d'exercices

| Cours actuel | Titre / sujet actuel | Notions principales | Exercices / source actuelle | Destination ou décision | Actions de migration |
|---|---|---|---|---|---|
| 1 | Atelier / environnement technologique | stockage, système de fichiers, dossiers, extensions, ZIP, outils du cours | Ancien `01-rencontre1.1.md`; PowerPoint historique **Environnement de travail** fourni pendant la refonte; aucun laboratoire numéroté associé | **Intégré comme préambule distinct de la théorie HTML** | Nouveau `01-rencontre1-environnement.md`; OneDrive, arborescence, extensions, ZIP, VS Code et navigateur intégrés. Ancien atelier conservé comme source. Des captures historiques/provisoires sont déjà intégrées; les remplacements modernes éventuels restent suivis dans `RESSOURCES_A_FOURNIR.md`. |
| 2 | Variables et affectation | Variables, affectation, nombres, opérateurs, chaînes, concaténation | Labo 2 → `420905_lab2.docx` | **Théorie 905 conservée avec micro-ajustements ciblés en R6; labo réorganisé** | `web/docs/01-cours/06-rencontre6.md` conserve le ton, les captures et la matière du 905, avec sept ajustements ciblés : fil conducteur, priorité rapprochée des calculs, trio déclaration/affectation/réaffectation, redéclaration rapprochée, déclarations multiples en `Pour aller plus loin`, répétition de `+=` réduite et résumé final. Navigation native « Sur cette page » conservée. Le labo actif reste `web/docs/02-labos/01-labo2.md` avec 15 activités principales + pratiques facultatives. Sources historiques conservées. Voir `REVISION_R6.md`. |
| 3 | DOM et fonctions | `querySelector`, `textContent`, fonctions, portée locale/globale | Labo 3 + labo 4 exercice 1 | **Implanté en R7 comme bloc cohérent** | R7 conserve DOM + fonctions simples et reçoit maintenant la portée locale/globale provenant de l'ancien cours 4. Le labo 3 reste téléchargeable; l'exercice 1 du labo 4 accompagne R7 comme pratique de portée. |
| 4 | Événements et styles | événements, styles DOM | Labo 4 → `420905_lab4.zip` | **Portée déplacée en R7** | L'exercice 1 du labo 4 accompagne maintenant R7; les exercices 2 à 5 restent associés à R8. La section `.style` de R8 est conservée telle quelle. |
| 5 | Booléens et conditions | Booléens, `if`, `else` | Labo 5 → `420905_lab5.zip` | **Fusion envisagée avec le cours 6** | Extraire le labo 5; inventorier les exercices à conserver. |
| 6 | Opérateurs logiques | Opérateurs logiques, `else if`, débogage | Labo 6 → `420905_lab6.zip` | **Fusion envisagée avec le cours 5** | Extraire le labo 6; fusionner les exercices pertinents avec ceux du labo 5 et éliminer les doublons. |
| 7 | TP1 | Temps consacré au TP1 | Ancien TP supprimé de Z03 | Rencontre à récupérer | Aucun ancien TP à préserver; réaffecter la rencontre. |
| 8 | TP1 | Temps consacré au TP1 | Ancien TP supprimé de Z03 | Rencontre à récupérer | Aucun ancien TP à préserver; réaffecter la rencontre. |
| 9 | Examen formatif 1 | Révision / formatif | Pas de labo associé | Formatif possiblement hors classe | Ne pas réserver nécessairement une rencontre complète; conserver l'idée d'une activité formative autonome. |
| 10 | Examen sommatif 1 | Évaluation sommative | Pas de labo associé | **Déplacer l'évaluation sommative à la rencontre 15** | Adapter plus tard la portée de l'évaluation à la nouvelle séquence. |
| 11 | Boucles | `while`, `do while` | Labo 11 → `420905_lab11.zip` | À conserver, probablement simplifier | Extraire et réévaluer les exercices; privilégier les boucles réellement utiles à Z03. |
| 12 | Tableaux | Tableaux et parcours avec une boucle | Labo 12 → `420905_lab12.zip` | À conserver | Garder la relation boucles → tableaux; vérifier les exercices après réorganisation. |
| 13 | Paramètres et retours | Fonctions avec paramètres et valeurs de retour | Labo 13 → `420905_lab13.zip` | Probablement à fusionner avec l'introduction aux fonctions | Extraire le labo 13 et rattacher les exercices à la future rencontre sur les fonctions. |
| 14 | Classes et attributs | Classes, attributs, élément HTML en variable | Labo 14 → `420905_lab14.zip` | Probablement à intégrer au bloc DOM | Extraire le labo 14 et répartir les exercices avec les notions DOM correspondantes. |
| 15 | Tableaux d'éléments HTML | `querySelectorAll`, collections d'éléments, boucles | Labo 15 → `420905_lab15.zip` | Matière à déplacer plus tôt; rencontre 15 réservée à l'examen | Extraire le labo 15 et rattacher les exercices à la future rencontre DOM + tableaux/boucles. |

## Nouvelles sources HTML / CSS

| Source | Contenu principal | Utilisation prévue | État |
|---|---|---|---|
| `web/docs/01-cours/01-rencontre1-environnement.md` | stockage, fichiers/dossiers, extensions, ZIP, VS Code, navigateur | Préambule opérationnel de la rencontre 1, séparé de la théorie HTML | **Page canonique créée**; captures historiques/provisoires intégrées, remplacements modernes facultatifs suivis dans `RESSOURCES_A_FOURNIR.md` |
| `web/docs/01-cours/00-introduction-html.md` | structure HTML, balises, attributs, titres, paragraphes, listes, images, chemins relatifs, navigation, commentaires, validation W3C | Source principale des rencontres 1 et 2 et des compétences WEB-01 à WEB-04 | Intégrée au site; mapping détaillé dans `COMPETENCES_HTML_CSS.md` |
| `web/docs/01-cours/00-introduction-css.md` | syntaxe CSS, feuille externe, sélecteurs, classes/id, cascade simple, conteneurs, couleurs, bordures, texte et typographie | Source principale de la rencontre 3 et d'une partie des compétences WEB-05 à WEB-07 | **Condensée dans la page canonique R3** `web/docs/01-cours/03-rencontre3.md`; la source `00-*` est conservée pour la traçabilité |
| `web/docs/01-cours/00-modele-boites-positionnement.md` | modèle en boîte, dimensions, affichage, débordement, positionnement et effets | Source fortement allégée pour la rencontre 4 | **Noyau migré dans la page canonique R4** `web/docs/01-cours/04-rencontre4.md`; seuls `margin`, `padding`, bordures et dimensions simples ont été retenus dans le noyau, et la source `00-*` est conservée |
| `web/docs/01-cours/05-rencontre5.md` | Flexbox minimal : parent et enfants directs, `display: flex`, `gap` et alignements simples | Nouvelle synthèse ciblée pour la rencontre 5 et l'intégration HTML/CSS | **Page canonique créée et validée techniquement**; Flexbox simple remplace `inline-block` comme outil introductif de disposition |

Les anciennes sources de migration `sources/R01-Introduction-HTML-Markdown/`, `sources/R02-Introduction-CSS-Markdown/` et `sources/R03-Modele-Boites-Positionnement-Markdown/` restent utiles pour la traçabilité, mais les pages de référence actives sont maintenant sous `web/docs/01-cours/`.

## Séquence confirmée pour les rencontres 1 à 7

| Rencontre | Noyau de matière | Validation |
|---|---|---|
| **1** | préambule environnement de travail, fichiers/dossiers, VS Code, navigateur; puis première page, structure et contenu HTML de base | aucune sommative prévue |
| **2** | organisation du projet, images, chemins relatifs, pages multiples, liens et navigation | Validation A — WEB-01/02; Validation B — WEB-03/04 selon l'avancement |
| **3** | syntaxe CSS, feuille externe, chemins CSS, sélecteurs, classes, propriétés visuelles | début Validation C — WEB-05/06 |
| **4** | consolidation CSS, bordures, dimensions simples, `margin`, `padding`, modèle en boîte | Validation C; début Validation D — WEB-07/08 |
| **5** | Flexbox simple, navigation horizontale, intégration, pratique et correction | Validation D et reprises |
| **6** | variables, déclaration, affectation, réaffectation, nombres, chaînes, opérateurs, concaténation et littéraux de gabarits | reprises HTML/CSS seulement au besoin |
| **7** | DOM de base avec `querySelector` / `textContent`, fonctions simples et portée locale/globale | prépare avec R6 le mini-quiz de R8 |

## Niveaux d'attente pour le contenu

Toute réorganisation des pages HTML/CSS doit classifier les notions selon trois niveaux.

### À maîtriser

Noyau du cours. Peut contribuer directement à une compétence évaluée et être réinvesti dans l'examen final.

### Bonne pratique

Enseignée, montrée et recommandée, mais son absence ne fait pas échouer une compétence à elle seule.

Exemples : éléments sémantiques `header`, `nav`, `main`, `footer`; texte alternatif pertinent; indentation; commentaires; validation W3C; compréhension simple de la cascade.

### Pour aller plus loin

Facultatif et non évalué. Doit être clairement identifié sur le site par un libellé textuel en plus du traitement visuel.

Exemples : détails `inline`/`inline-block`, `overflow`, positionnement, Flexbox avancé, Grid, animations et transitions.

## Contraintes de calendrier confirmées

- Le cours comporte 15 rencontres.
- Toute nouvelle matière essentielle doit être terminée au plus tard à la rencontre 12.
- La **rencontre 13** est réservée à un TP, une activité d'intégration ou du travail supervisé, sans nouvelle notion essentielle.
- La **rencontre 14 est un buffer** : rattrapage, travail, pratique, révision ou absorption d'une interruption. Aucune nouvelle notion essentielle ne doit dépendre de cette rencontre.
- La rencontre 15 est réservée à l'évaluation sommative.
- HTML/CSS est enseigné comme noyau aux rencontres 1 à 5 seulement.
- JavaScript commence à la rencontre 6.

## Contraintes d'évaluation confirmées

- Le mini-quiz de la rencontre 8 vaut **10 %** et porte uniquement sur la matière enseignée avant le quiz, principalement R6 et R7.
- La rencontre 15 contient l'évaluation sommative finale de **30 %**.
- L'évaluation doit commencer tôt dans la session sous forme de validations progressives de compétences observables.
- Au moins **15 % de la note doit avoir été évalué au plus tard à la rencontre 6**.
- Le bloc HTML/CSS des rencontres 1 à 5 représente **30 % de la note finale**.
- Les huit compétences HTML/CSS sont regroupées en quatre moments de validation afin de limiter la charge avec un groupe d'environ 24 étudiants.
- Les validations doivent pouvoir être réalisées en classe pendant les périodes de travail.
- Les compétences non maîtrisées lors d'une première tentative peuvent être représentées lorsque la logistique le permet.
- Les notions déclarées `Bonne pratique` ne doivent pas provoquer à elles seules l'échec d'une compétence.
- Les notions `Pour aller plus loin` ne doivent faire partie ni des critères obligatoires ni de l'examen final.

## Priorisation proposée de la matière héritée

| Bloc hérité | À maîtriser | Bonne pratique / à compresser | Pour aller plus loin / retirer du noyau |
|---|---|---|---|
| Environnement de travail | dossiers/fichiers, extensions, ouvrir un projet dans VS Code et le navigateur, organisation des ressources | OneDrive/ZIP selon les besoins concrets du cours | outils avancés de gestion de fichiers non requis |
| HTML | structure du document, éléments/attributs, titres/paragraphes/listes, images, liens, chemins relatifs, navigation | `header`, `nav`, `main`, `footer`, `alt`, commentaires, validation W3C, sémantique simple | éléments HTML rarement utilisés et nuances sémantiques avancées |
| CSS — base | liaison externe, syntaxe d'une règle, sélecteurs d'élément et de classe, propriétés visuelles de base | `id`, cascade simple, `<span>`, détails contextuels CSS intraligne/interne | théorie détaillée de spécificité |
| CSS — espace/disposition | `margin`, `padding`, modèle en boîte, dimensions simples, `display:flex` simple, `gap` | `border-radius`, `justify-content`/`align-items` selon les exercices | détails `inline`/`inline-block`, `overflow`, positionnement, Flexbox avancé, Grid, animations |
| Variables / chaînes | variables, déclaration, affectation, réaffectation, nombres, chaînes, opérateurs simples, template strings | `+=` et `-=` à pratiquer sans multiplier les variantes | déclarations multiples conservées dans un encadré `Pour aller plus loin`; `++` / `--` restent visibles comme facultatifs dans la théorie 905; détails de priorité au-delà du nécessaire |
| Conditions | booléens, comparaisons, `if`, `else`, `else if`, `&&`, `||` | exemples complexes d'opérateurs logiques | opérateur `!` et tableau complet de priorité des opérateurs |
| Fonctions | déclaration, appel, paramètres simples | plusieurs paramètres, `return` présenté brièvement | approfondissement des valeurs de retour, exemples sophistiqués si le temps manque |
| Portée des variables | comprendre qu'une variable déclarée dans une fonction est locale | mentionner les globales seulement lorsqu'un état doit être partagé | convention systématique du préfixe `g` et théorie détaillée sur les globales |
| Événements | `click`, `addEventListener`, fonction appelée par un événement | un second événement seulement si utile à un exercice | catalogue `mouseover` / `mouseout` si non requis |
| Styles via DOM | surtout utiliser des classes CSS avec `classList`; modifier une propriété simple lorsque pertinent | quelques propriétés `.style` utiles | mémoriser une longue liste de propriétés CSS en JavaScript |
| Classes DOM | `classList.add`, `remove`, `toggle` | `contains` | cas avancés non nécessaires |
| Attributs DOM | lire/modifier un attribut concret lorsque requis (`src`, `alt`, etc.) | présentation courte intégrée au DOM | rencontre complète consacrée aux attributs |
| Boucles | comprendre la répétition et savoir parcourir une séquence | forme principale à réévaluer seulement après la première implantation | `do...while`, conditions de boucle complexes, débogueur avancé : pistes de révision ultérieure |
| Tableaux | création, index, `length`, parcours; `push`, `pop` et `splice` peuvent être conservés lorsque les exercices sont simples | modification simple d'un élément | opérations avancées seulement si elles surchargent réellement le parcours |
| Plusieurs éléments DOM | `querySelectorAll` et parcours de plusieurs éléments | intégrer au bloc tableaux/boucles/DOM | rencontre complète indépendante |
| Débogage | lire la console, tester souvent, reconnaître les erreurs courantes | pratiquer le débogage dans tous les cours | grosse section autonome au débogueur |

## Mapping des exercices HTML/CSS — prochaine étape

Le mapping détaillé des notions existe maintenant dans `COMPETENCES_HTML_CSS.md`, mais les exercices HTML/CSS n'y sont pas encore rattachés.

Pour chaque exercice existant, relever :

1. sa source actuelle;
2. les notions couvertes;
3. la ou les compétences concernées;
4. la rencontre cible entre 1 et 5;
5. la décision : `conserver`, `déplacer`, `alléger` ou `retirer`;
6. les portions qui deviennent `Pour aller plus loin`.

Principe de migration : **ne pas réécrire un exercice qui fonctionne déjà pour une notion essentielle**. Retirer ou simplifier les portions devenues facultatives plutôt que reconstruire le matériel au complet.

## Décisions confirmées

- Les anciens TP du 905 ont été retirés et ne sont pas des sources à préserver.
- Toute fusion de contenu doit inclure explicitement la migration des exercices associés.
- La rencontre 13 est réservée à l'intégration / TP / travail supervisé sans nouvelle matière essentielle.
- La rencontre 14 doit rester disponible comme buffer et séance de travail/rattrapage.
- La rencontre 15 est l'évaluation sommative finale de 30 %.
- HTML/CSS occupe les rencontres 1 à 5, avec JavaScript dès 6.
- Huit compétences HTML/CSS sont retenues et regroupées en quatre moments de validation.
- Les notions du matériel sont classées selon `À maîtriser`, `Bonne pratique` et `Pour aller plus loin`.
- Les éléments sémantiques comme `header`, `nav`, `main` et `footer` sont des bonnes pratiques enseignées plutôt que des compétences bloquantes.
- Flexbox simple remplace l'accent sur `inline-block` comme outil de disposition introductif.
- `overflow`, le positionnement et les détails avancés de mise en page sont sortis du noyau obligatoire.
- L'évaluation progressive par compétences devient le modèle privilégié pour obtenir des notes avant l'examen final sans accumuler de grosses corrections simultanées.
- L'environnement de travail de la rencontre 1 est séparé de la théorie HTML dans un préambule distinct.
- Toute ressource à fournir aux étudiants doit être inscrite dans `RESSOURCES_A_FOURNIR.md` avant qu'une page en dépende.
- Les documents internes de refonte sont regroupés sous `refonte/` et les sources historiques/importées sous `sources/`.
- Les chantiers pédagogiques importants doivent être précédés d'un plan d'implémentation versionné et mis à jour pendant le travail.
- Pour R6–R15, la première implantation a placé la théorie et les exercices historiques aux bonnes rencontres avant la révision pédagogique.
- R6 conserve la théorie 905 comme base, avec sept micro-ajustements ciblés documentés dans `REVISION_R6.md`; le laboratoire étudiant réorganisé demeure actif.
- R7 regroupe maintenant DOM, fonctions simples et portée locale/globale; l'exercice 1 de l'ancien labo 4 y est déplacé. `classList.contains()` est reporté à R9 avec les conditions.

## Décisions / hypothèses en cours

- La pondération HTML/CSS est fixée à **30 %**; seule la répartition exacte entre WEB-01 à WEB-08 reste à établir avec la pondération des premières compétences JavaScript.
- Les anciens cours/labos 5 et 6 doivent être placés ensemble en R9 dans la première implantation; l'élimination de doublons est reportée à la révision pédagogique ultérieure.
- Les paramètres de fonctions sont considérés plus importants que l'approfondissement des valeurs de retour.
- Le choix éventuel d'une boucle principale différente de la théorie historique reste une piste de révision, pas un prérequis à la migration.
- Le DOM devrait privilégier à terme l'application/retrait de classes CSS plutôt qu'une longue liste de styles écrits directement en JavaScript, mais cette amélioration n'est pas faite pendant la première implantation.

## Journal des migrations

| Date | Changement | Sources concernées | Exercices concernés | État |
|---|---|---|---|---|
| 2026-08-18 | Création du registre de suivi | Cours 1 à 15 | Labos 2–6 et 11–15 inventoriés | En cours |
| 2026-08-18 | Sommative fixée à la rencontre 15 | Ancien cours 10 | Aucun labo | Décidé |
| 2026-08-18 | Fusion booléens + opérateurs logiques envisagée | Anciens cours 5 et 6 | `420905_lab5.zip`, `420905_lab6.zip` | À réaliser lors de la réorganisation |
| 2026-08-18 | Rencontre 14 réservée comme buffer / travail / rattrapage | Future rencontre 14 | À déterminer | Décidé |
| 2026-08-18 | Première priorisation des notions à simplifier ou couper | Cours 4, 6, 11 à 15 principalement | Labos correspondants à vérifier avant suppression | Analyse en cours |
| 2026-08-18 | Adoption d'une stratégie d'évaluation progressive par compétences | Future séquence complète | Exercices à rattacher aux compétences lors de la migration | Décidé |
| 2026-08-18 | CSS complexe retiré du noyau évalué | Futures rencontres CSS | Nouveaux exercices HTML/CSS à concevoir/rattacher | Décidé |
| 2026-08-18 | Import des sources éditoriales HTML et CSS | Sources R01/R02 puis pages `web/docs/01-cours/00-introduction-*` | Exercices HTML/CSS à rattacher | Intégré au site |
| 2026-08-18 | Séquence HTML/CSS fixée aux rencontres 1–5; JavaScript dès 6 | Documentation HTML/CSS | Mapping d'exercices à compléter | Décidé |
| 2026-08-18 | Huit compétences HTML/CSS regroupées en quatre moments de validation | `EVALUATION.md`, `COMPETENCES_HTML_CSS.md` | À rattacher | Décidé |
| 2026-08-18 | Classification `À maîtriser` / `Bonne pratique` / `Pour aller plus loin` adoptée | Documentation HTML/CSS | À appliquer lors de la réorganisation | Décidé |
| 2026-08-19 | Préambule Environnement séparé du cours HTML et suivi des ressources créé | Ancien Atelier, PowerPoint Environnement de travail, rencontre 1 actuelle | Captures Windows/VS Code à fournir; `chat.jpg` de la rencontre 2 ajouté au suivi | En cours |
| 2026-08-19 | Nettoyage de la racine du dépôt : documents internes regroupés sous `refonte/`, sources R01–R03 sous `sources/` | Documents de refonte et sources éditoriales | Aucun contenu supprimé | Effectué |
| 2026-08-19 | Création du plan d'implémentation reprenable pour finaliser les rencontres 1 à 5 avant la suite de JavaScript | `PLAN_SITE_EVOLUTIF.md`, `COMPETENCES_HTML_CSS.md`, pages R1–R5 actuelles | R3–R5 à compléter; R2 à relire après leur implémentation | Planifié |
| 2026-08-19 | Création et validation technique de la rencontre 3 : cours canonique, exercice guidé et Projet Web — Étape 3 | `00-introduction-css.md`, `03-rencontre3.md`, `03-rencontre3-exercice-guide.md`, `03-projet-web/03-rencontre3.md` | Exercice guidé — Première feuille CSS | Prêt à réviser; source historique conservée |
| 2026-08-19 | Création et validation technique de la rencontre 4 : cours canonique, exercice guidé et Projet Web — Étape 4 | `00-modele-boites-positionnement.md`, `04-rencontre4.md`, `04-rencontre4-exercice-guide.md`, `03-projet-web/04-rencontre4.md` | Exercice guidé — Comprendre le modèle en boîte | Prêt à réviser; source historique conservée |
| 2026-08-19 | Création et validation technique de la rencontre 5 : cours canonique, exercice guidé et Projet Web — Étape 5 | Nouvelle synthèse Flexbox ciblée, `05-rencontre5.md`, `05-rencontre5-exercice-guide.md`, `03-projet-web/05-rencontre5.md` | Exercice guidé — Flexbox simple | Prêt à réviser |
| 2026-08-20 | Pondération HTML/CSS harmonisée à 30 % sans changer les huit compétences ni les quatre moments de validation | `EVALUATION.md`, `COMPETENCES_HTML_CSS.md`, `PLAN_SITE_EVOLUTIF.md`, pages étudiantes du Projet Web | Aucun exercice modifié par cette décision | Décidé |
| 2026-08-26 | Première implantation de R6 et R7 : théorie historique déplacée telle quelle et laboratoires rattachés aux nouvelles rencontres | ancien cours 2 → `06-rencontre6.md`; ancien cours 3 → `07-rencontre7.md`; pages labo 2 et 3 | labo 2 → R6; labo 3 → R7; fichiers historiques et exercices inchangés | Implanté |
| 2026-08-26 | Révision pédagogique de R6 avec archive avant révision | `06-rencontre6.md`, `01-labo2.md`, `REVISION_R6.md`, sources `420905_lab2` | 42 questions historiques condensées en 15 activités principales + pratiques facultatives; déclaration / affectation / réaffectation renforcées | Implanté puis partiellement annulé |
| 2026-08-27 | Retour de la théorie R6 à la version historique 905 | `06-rencontre6.md`, `REVISION_R6.md` | Le labo réorganisé demeure actif; ancien labo complet conservé en source | Décidé et implanté |
| 2026-08-27 | Micro-ajustements ciblés sur la théorie 905 de R6 | `06-rencontre6.md`, `REVISION_R6.md` | Aucun changement au labo actif | **Décidé et implanté** |


## Convention de diffusion des laboratoires

Les pages Docusaurus de laboratoire servent principalement au téléchargement du matériel. Les consignes détaillées restent dans les fichiers téléchargeables, sauf besoin pédagogique explicite de les publier aussi sur le site.
