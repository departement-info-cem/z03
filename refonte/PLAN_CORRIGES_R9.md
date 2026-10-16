# Corrigés intégrés aux dix exercices R9

Tâche approuvée le 2026-10-16. Base : dernier `origin/main`, `38217b5`.

## Portée et conventions constatées

R7 est consulté sans modification : son ZIP étudiant contient HTML/CSS/JS de départ; son ZIP corrigé séparé utilise des blocs `pre/code` et un encadré `.warning` ambre. Message exact : « Avant de consulter le corrigé : essayez d'abord les exercices. Utilisez ce document pour vérifier votre raisonnement et comprendre une erreur. » R7 ne contient pas de `details/summary` ni le libellé littéral « une fois terminé, consultez corrigé ».

Réutiliser les styles et le message constatés, avec sélecteurs CSS limités au corrigé. Pour satisfaire l'ouverture volontaire demandée, placer un `details` fermé sous chaque exercice, après son conteneur interactif, avec notification visible « Une fois l’exercice terminé, consultez le corrigé ci-dessous ». Afficher la solution enseignante en texte échappé, sans script exécutable ajouté. Adapter uniquement l'en-tête privé du script affiché à sa diffusion étudiante.

## Plan et critères de fin

| Tâche | État | Dépendances et fichiers visés | Définition de terminé |
|---|---|---|---|
| Inspecter R7, R9 et le corrigé enseignant | Terminé | Deux ZIP R7, ZIP R9 distant, archive enseignante locale | Modèle réel identifié; source enseignante alignée sur `38217b5`; aucune décision pédagogique nouvelle. |
| Intégrer les corrigés | Terminé | `web/static/files/rencontre9.zip` : dix HTML, dix CSS, README interne | Dix volets fermés sous les exercices; avertissement R7; 47 entrées conservées; JS étudiant, 20 TODO, bogues 09 et images identiques. |
| Vérifier archive et rendu | Terminé | Archive extraite; outils et preuves sous `.codex-temp/` | Intégrité, liens, ouverture souris/clavier, comparaison des boutons avant/après, syntaxe des scripts étudiants et affichés, tests fonctionnels des solutions, typecheck et build Node 20 réussis. |
| Livrer et vérifier Pages | En cours | Checkout propre dédié sur dernier `origin/main`; présent plan | Commit ciblé et push en avance rapide vers `emcmp/Z03/main`; workflow exact réussi et archive HTTP identique, ou SHA local et cause précise. |

Les sources et exercices historiques, R7 et le dépôt officiel restent hors du périmètre. Aucun déplacement ni renumérotation de rencontre; aucun changement de compétence évaluée. README à modifier uniquement dans le ZIP pour annoncer les corrigés après le travail.

## Vérifications acquises

- 47 entrées conservées; seuls les dix HTML, dix CSS et le README interne changent. HTML initial conservé intégralement avant/après la section ajoutée; CSS initial intact et styles ajoutés limités à `.corrige`.
- Dix scripts étudiants et seize images identiques octet pour octet; 20 TODO préservés. Aucun script de solution chargé par la page.
- Node 20.19.0 : `node --check` réussi sur les dix scripts étudiants et les dix solutions affichées.
- Edge/Chromium : 10/10 pages vérifiées; code invisible au départ, ouverture/refermeture souris/Entrée/Espace, chemins HTML/CSS et images résolus. Rendu, dimensions/styles et effets des boutons identiques au ZIP initial, même après ouverture; mêmes erreurs volontaires de 09.
- Preuves et captures locales : `.codex-temp/r9-corriges-verification/` dans le dépôt principal; aucun outil de test ajouté au matériel étudiant.
- Solutions affichées : 2716/2716 assertions fonctionnelles réussies sur les dix exercices, dont seuils, priorités et consommation de l'imprimante; aucune exception ni ressource manquante dans les solutions. Tests exécutés sur des copies locales où le texte affiché remplace le script étudiant, sans modifier le livrable.
- `npm run typecheck` et `npm run build` réussis depuis la racine du checkout sous Node 20.19.0, cible `emcmp/Z03`. Avertissements hérités de dépendances/configuration seulement; aucune dépendance modifiée.
- `npm run serve` : page `/Z03/labos/labo5` vérifiée dans Edge, lien de téléchargement présent et aucune erreur de page; ZIP servi en HTTP 200 et identique par SHA-256 à l'archive validée (`78b96cc4b93690f4efea1a80d223b61cb5172654ce4305da68c6b72c500d20a9`).

## Livraison et reprise

Checkout dédié : `.codex-temp/r9-corriges-publication/` dans le dépôt principal. Le `main` local historique divergé reste inchangé. Le commit de livraison sera identifiable sur `origin/main` par son message « Intégrer les corrigés sous les exercices R9 ». Le SHA exact, le workflow Pages et la comparaison SHA-256 du ZIP public seront consignés dans le journal local `.codex-temp/r9-corriges-verification/livraison.json` et dans le rapport final. Si la publication s'arrête, le même journal indique l'étape et la cause; ne jamais forcer le push.
