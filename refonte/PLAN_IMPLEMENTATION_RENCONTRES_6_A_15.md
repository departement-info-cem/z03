# Plan d'implémentation — rencontres 6 à 15

**Statut du plan : actif**  
**Dernière mise à jour : 2026-08-26**

Ce document est le plan opérationnel pour mettre en place la séquence JavaScript des rencontres 6 à 15. `PLAN_RENCONTRES_6_A_15.md` demeure la référence pédagogique canonique.

## Principe de cette première implantation

> **Placer d'abord la théorie et les exercices historiques aux bonnes rencontres sans les réécrire.**

Pendant cette passe :

- conserver les exercices historiques tels quels autant que possible;
- conserver les blocs de théorie historiques tels quels autant que possible;
- ne modifier que les titres, numéros, métadonnées, chemins, liens, navigation et autres éléments mécaniques nécessaires;
- accepter qu'un exercice contienne du code fourni utilisant une notion non encore enseignée si ce code sert seulement d'infrastructure;
- noter les irritants rencontrés sans les corriger immédiatement;
- reporter toute simplification, modernisation ou amélioration pédagogique à une phase ultérieure.

## État actuel

| Bloc | État | Résultat |
|---|---|---|
| **Documentation / mapping** | **Terminé** | Mapping R6–R15 stabilisé; principe « placement avant révision » documenté. |
| **R6** | **Implanté** | Ancien cours 2 + labo 2. |
| **R7** | **Implanté / révisé** | Ancien cours 3 + labo 3, avec portée locale/globale et labo 4 exercice 1 déplacés depuis R8. |
| **R8** | **À réviser** | Ancien cours 4 sans la portée + ancien cours 14; labo 4 exercices 2–5. La section `.style` est conservée telle quelle; `classList.contains()` passe à R9. |
| **R9** | **Implanté** | Anciens cours 5 + 6, conservés en deux pages; labos 5 + 6. |
| **R10** | **Implanté** | Ancien cours 11 + labo 11; `while`, `do...while` et débogueur optionnel conservés tels quels. |
| **R11** | **Implanté** | Ancien cours 12 + ancien cours 15 en deux pages; labo 12 + exercices 1–3 du labo 15. |
| **R12** | **Implanté** | Ancien cours 13 + labo 13 + exercice 4 du labo 15. |
| **R13–R15** | À faire après R6–R12 | Intégration / buffer / examen. |
| **Validation CI** | **Bloquée par erreur historique** | `web/static/files/420905_lab6/lab6_exercice3/js/script.js` : `TS1005: '}' expected` ligne 75. |

## Répartition stabilisée

| Rencontre | Théorie historique | Exercices historiques | Intention |
|---|---|---|---|
| **R6** | ancien cours 2 — variables et affectation | labo 2 | déplacement direct |
| **R7** | ancien cours 3 — DOM et fonctions + portée locale/globale de l'ancien cours 4 | labo 3 + labo 4 exercice 1 | conserver le bloc ensemble et ajouter la portée |
| **R8** | ancien cours 4 sans la portée + ancien cours 14 | labo 4 exercices 2–5 + portions pertinentes du labo 14 | mini-quiz 10 % au début; événements/styles ensuite; `.style` conservé |
| **R9** | anciens cours 5 + 6 | labos 5 + 6 | placer ensemble sans enlever les doublons dans la première passe |
| **R10** | ancien cours 11 — boucles | labo 11 | conserver d'abord `while` / `do...while` tels qu'enseignés historiquement; choix final reporté |
| **R11** | ancien cours 12 + ancien cours 15 | labo 12 + labo 15 exercices 1–3 | tableaux, parcours, puis `querySelectorAll` |
| **R12** | ancien cours 13 | labo 13 + labo 15 exercice 4 | paramètres, retours et intégration |
| **R13** | aucune nouvelle théorie essentielle | candidats d'intégration, notamment labo 14 exercices 3–4 au besoin | TP / intégration / travail supervisé |
| **R14** | aucune nouvelle théorie essentielle | reprises / suite du TP | buffer |
| **R15** | aucune nouvelle théorie | — | examen final 30 % |

## Détails R6 — Variables et affectation

**Sources :** ancien cours 2 + labo 2.  
**État : Implanté.**

## Détails R7 — DOM et fonctions

**Sources :** ancien cours 3 + labo 3.  
**État : Implanté.**

### Note de révision future

La section Visual Studio Code de R7 a été retirée puisque VS Code est déjà utilisé depuis R1. R7 inclut maintenant la portée locale/globale afin de préparer les fonctions et le quiz de R8. Les paramètres et `return` demeurent prévus en R12.

## R8 — Interactivité, événements, classes et attributs

**Sources :** ancien cours 4 + ancien cours 14; labo 4 + labo 14 exercices 1–2.

Première implantation réalisée :

- les deux blocs théoriques sont conservés comme pages distinctes;
- mini-quiz 10 % annoncé au début de la première page;
- labo 4 exercice 1 déplacé en R7 pour la portée; exercices 2 à 5 conservés en R8;
- page du labo 14 indique de faire uniquement les exercices 1 et 2;
- aucun exercice ni ZIP modifié.

**État : Implanté.**

## R9 — Conditions

**Sources :** anciens cours 5 + 6 et labos 5 + 6.

Première implantation réalisée :

- ancien cours 5 placé comme bloc « Booléens et conditions »;
- ancien cours 6 placé comme bloc « Opérateurs logiques »;
- labos 5 et 6 rattachés à R9;
- répétitions et contenu à alléger éventuellement conservés pour la passe de révision.

**État : Implanté.**

## R10 — Boucles

**Sources :** ancien cours 11 + labo 11.

Première implantation réalisée :

- théorie historique déplacée telle quelle;
- `while`, `do...while`, exemples avancés et débogueur optionnel conservés;
- labo 11 présenté comme laboratoire de R10;
- aucune conversion vers `for` effectuée.

La possibilité d'utiliser éventuellement `for` comme forme principale reste une piste de révision ultérieure seulement.

**État : Implanté.**

## R11 — Tableaux et plusieurs éléments DOM

**Sources :** ancien cours/labo 12 + ancien cours 15 + labo 15 exercices 1–3.

Première implantation réalisée en deux pages de théorie :

1. **Tableaux** : création, index, `length`, modification, `push`, `pop`, `splice`, parcours;
2. **Tableaux d'éléments HTML** : `querySelectorAll`, index et parcours de plusieurs éléments DOM.

Côté exercices :

- labo 12 rattaché à R11;
- labo 15 conservé intact;
- sa page indique que les exercices 1 à 3 appartiennent à R11.

**État : Implanté.**

## R12 — Paramètres, retours et intégration

**Sources :** ancien cours/labo 13 + labo 15 exercice 4.

Première implantation réalisée :

- théorie historique « Paramètres et retours » placée telle quelle;
- labo 13 rattaché à R12;
- labo 15 conservé intact et sa page indique que l'exercice 4 appartient à R12.

Toute nouvelle matière essentielle doit être terminée à la fin de cette rencontre.

**État : Implanté.**

## R13–R15

- **R13** : TP / intégration / travail supervisé; aucune nouvelle notion essentielle.
- **R14** : buffer, reprises, pratique, suite du TP ou révision.
- **R15** : examen final de 30 %.

## Validation technique

Le workflow du dépôt exécute `npm run typecheck` avant le build Docusaurus. Le `typecheck` est actuellement bloqué par une erreur déjà présente dans un fichier historique du **labo 6** :

```text
web/static/files/420905_lab6/lab6_exercice3/js/script.js(75,2)
TS1005: '}' expected.
```

Cette erreur n'a pas été corrigée pendant la passe de placement afin de respecter la règle de ne pas modifier les exercices avant la phase de révision. Elle doit être traitée séparément comme défaut technique historique lorsque nous déciderons de rendre toute la collection exécutable par la CI.

## Prochain point de reprise

Les rencontres **R6 à R12 sont maintenant implantées structurellement**.

La prochaine phase prévue est :

> **Construire R13–R15 : intégration/TP, buffer et examen final, sans ajouter de nouvelle matière essentielle.**

Avant ou pendant cette phase, on peut également faire une passe visuelle et pédagogique de R6–R12 en conservant une séparation claire entre :

1. défauts techniques indispensables à corriger;
2. améliorations pédagogiques facultatives à décider ensuite.

## Phase de révision pédagogique ultérieure

Seulement après que la séquence est structurellement en place :

- relire théorie et exercices rencontre par rencontre;
- repérer les répétitions;
- décider définitivement de la forme principale de boucle;
- décider des notions réellement à alléger;
- retirer notamment la section VS Code de R7 si confirmé;
- nettoyer le code fourni seulement lorsqu'il crée une confusion réelle;
- améliorer les exercices sans perdre leur comportement éprouvé;
- aligner définitivement le TP de R13 et l'examen de R15.


### Convention de diffusion des laboratoires

Les pages Docusaurus de laboratoire restent volontairement courtes : titre, contexte minimal et liens de téléchargement. Les consignes détaillées sont conservées dans le matériel téléchargeable plutôt que recopiées sur le site.
