# Archives R8 versionnées — suivi technique

Base propre : `e610637ac467f8512f566dab47f9d4453a5e195a`, retouches de Xavier lues et conservées.
Portée : une PR personnelle, aucun changement pédagogique, aucune écriture officielle.

| Tâche | État | Fichiers / dépendances | Terminé quand |
| --- | --- | --- | --- |
| Audit Git, générateur, workflow et quatre ZIP publics | Terminé | `scripts/preparer-rencontre8.py`, workflow, site personnel | Sources et inventaires identifiés; référence publique sauvegardée localement |
| Génération isolée et déterministe | Terminé | Générateur, quatre ZIP R8 | Aucun fichier source modifié; contenu identique aux ZIP publics de référence |
| Contrôles CI et documentation Xavier | Terminé | Workflow, tests, README R8 | Dérive, fichiers internes et différence build détectés; chemins explicites |
| Validation et livraison personnelle | En cours | Dépend des tâches précédentes | CRC, contenu, typecheck/build, PR, CI, fusion personnelle et quatre téléchargements vérifiés |

Stratégie : les ZIP versionnés sont copiés directement par Docusaurus. La CI régénère seulement en mémoire et en dossier temporaire, puis compare les octets avant et après le build. Les transformations existantes restent identiques; dates, permissions, ordre et stockage ZIP sont fixés. Les entrées autorisées sont énumérées explicitement. `--write` est une action locale explicite à réviser.

## Contrôles avant livraison

- Six tests Python réussis : déterminisme, CRLF/LF, sources inchangées, CRC et inventaires, refus d'archives absentes/divergentes, refus de document interne et de corrigé identique au départ.
- Les 48 fichiers internes (14 + 14 + 10 + 10) sont identiques octet pour octet aux quatre ZIP publics de référence. Les conteneurs diffèrent volontairement; leur identité complète sera vérifiée après déploiement.
- Fonction `corrections` inchangée (comparaison AST avec `e610637`). Aucun changement des pages, sources HTML/CSS/JS ou images.
- Typecheck local réussi sous Node 20.20.1; build et contrôle des ZIP construits en cours.
- Après CI verte seulement : fusion de l'unique PR personnelle, validation par `scripts/deploiement/verifier-preview.ps1`, contrôle des quatre ZIP publics contre GitHub/Git local et comparaison des références officielles en lecture seule.
