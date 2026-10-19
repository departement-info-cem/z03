# Rencontre 8 — archives actuelles

Les quatre ZIP ci-dessous sont les fichiers distribués sur le site personnel. Ils sont versionnés : ouvrir le ZIP ou utiliser **Download raw file** sur GitHub.

| Activité | Départ étudiant | Corrigé séparé |
| --- | --- | --- |
| Événements et styles (4 exercices) | [rencontre8-evenements-styles.zip](rencontre8-evenements-styles.zip) | [rencontre8-evenements-styles-corriges.zip](rencontre8-evenements-styles-corriges.zip) |
| Classes et attributs (2 exercices) | [rencontre8-classes-attributs.zip](rencontre8-classes-attributs.zip) | [rencontre8-classes-attributs-corriges.zip](rencontre8-classes-attributs-corriges.zip) |

Le site personnel les sert sous `https://emcmp.github.io/Z03/files/rencontre8/`, avec ces mêmes noms. Les corrigés sont volontairement publics dans leurs archives séparées; aucun document interne enseignant n'est inclus.

## Sources historiques et fabrication

- `web/static/files/420905_lab4/` et `420905_lab4.zip` : sources historiques du 905 conservées. Les exercices 2–5 alimentent les exercices 1–4 actuels.
- `web/static/files/420905_lab14/` et `420905_lab14.zip` : sources historiques conservées; ne pas les confondre avec les archives R8 actuelles.
- `classes-attributs/` ici : source dérivée R8 déjà versionnée, utilisée pour les deux exercices actuels.
- `sources/` et `archives/ancien-site/` : provenance historique ou éditoriale, pas les téléchargements actuels.
- `scripts/preparer-rencontre8.py` à la racine : transformations existantes et corrections, exécutées uniquement sur des copies temporaires. Il ne modifie plus les dossiers sources ni ne produit de dossiers corrigés dans l'arbre de travail.

Pour vérifier depuis la racine :

```text
python scripts/preparer-rencontre8.py --check
python -m unittest discover -s scripts/tests -p test_rencontre8.py
npm run typecheck
npm run build
python scripts/preparer-rencontre8.py --check --build-dir web/build
```

Après une modification volontaire des sources ou du générateur, lancer `python scripts/preparer-rencontre8.py --write`, réviser les quatre ZIP et les versionner avec la modification. Python 3.11 ou ultérieur est requis. Les fins de ligne sont normalisées en LF; ordre, date, permissions et stockage sans compression sont fixés pour obtenir les mêmes octets sur Windows et Linux, indépendamment de zlib et des dates de checkout.

La CI compare la génération isolée aux ZIP versionnés, vérifie CRC et inventaire fermé (HTML, CSS, JS et images explicitement attendus), puis compare les ZIP du build. Une divergence fait échouer le workflow; le déploiement utilise directement les ZIP versionnés, sans régénération en place.

## Référence contrôlée

Les quatre archives publiques téléchargées après le déploiement personnel de `e610637ac467f8512f566dab47f9d4453a5e195a` ont été comparées fichier interne par fichier interne : tous les octets de contenu sont préservés, y compris les corrigés. Le conteneur ZIP devient déterministe et diffère des anciennes archives publiques (métadonnées et stockage). L'identité des ZIP complets avec le site est vérifiée après le nouveau déploiement.
