# Ressources à fournir — suivi de la refonte Z03

Ce document est la **liste de travail des captures d'écran, images, fichiers téléchargeables et autres ressources** nécessaires aux rencontres du cours.

Il sert à éviter qu'une page étudiante demande soudainement « utilisez le fichier fourni par l'enseignant » alors que ce fichier n'a pas encore été préparé.

## Règle de travail

Lorsqu'une page de cours, un exercice ou un Projet Web a besoin d'une nouvelle ressource qui n'existe pas encore dans le dépôt :

1. ajouter immédiatement la ressource dans ce document;
2. lui donner un **nom de fichier prévu** et un **emplacement prévu**;
3. décrire précisément ce que la ressource doit montrer ou contenir;
4. ne pas créer de lien étudiant vers le fichier tant qu'il n'existe pas réellement;
5. une fois le fichier fourni, l'intégrer au dépôt puis passer son état à `Prêt`.

Ne jamais laisser une dépendance implicite du type « image fournie en classe » sans entrée correspondante dans cette liste.

## Convention pour les téléchargements étudiants

Lorsqu'un fichier doit être téléchargé par l'étudiant, la page doit le signaler de façon très visible avec un encadré portant le libellé **📥 Fichier à télécharger**.

Le bloc doit contenir au minimum :

- un lien direct vers le fichier;
- le nom exact du fichier à obtenir;
- une courte indication sur l'endroit où le placer lorsque cela est important pour l'exercice.

Modèle à utiliser dans les pages Docusaurus :

```md
:::info 📥 Fichier à télécharger
**[Télécharger `nom-du-fichier.png`](pathname:///files/rencontreN/nom-du-fichier.png)**

Enregistrez le fichier à l'endroit indiqué dans l'exercice.
:::
```

Ne pas afficher cet encadré tant que le fichier n'existe pas réellement dans `web/static/files/`.

### Format des nouvelles images

Pour les **nouvelles images préparées spécialement pour les exercices**, utiliser **PNG par défaut** (`.png`), sauf lorsqu'un autre format a une raison pédagogique ou technique claire.

Les ressources existantes n'ont pas besoin d'être converties simplement pour uniformiser leur extension. L'image `chat.jpg` de la rencontre 2 reste donc en JPEG.

## Convention de dossiers

Les ressources sont regroupées par rencontre.

### Images affichées dans la documentation

```text
web/static/img/
├── rencontre1/
├── rencontre2/
├── rencontre3/
└── ...
```

Utiliser ces dossiers pour :

- captures d'écran;
- schémas;
- illustrations;
- images utilisées directement dans les pages Docusaurus.

### Fichiers que l'étudiant doit télécharger ou manipuler

```text
web/static/files/
├── rencontre1/
├── rencontre2/
├── rencontre3/
└── ...
```

Utiliser ces dossiers pour :

- images de départ à télécharger;
- archives ZIP;
- fichiers HTML/CSS/JS à corriger;
- documents ou projets de départ.

Les dossiers n'ont pas besoin d'être créés tant qu'ils ne contiennent aucune ressource réelle.

## États utilisés

- **À décider** : il faut d'abord confirmer si la ressource ou l'activité est encore pertinente.
- **À produire** : la ressource est définie, mais elle doit être créée ou capturée.
- **À fournir** : la ressource doit être fournie par l'enseignant.
- **À intégrer** : le fichier existe, mais il n'est pas encore placé ou référencé dans le site.
- **Provisoire intégré** : une ressource existante est déjà utilisée dans le cours, mais pourra être remplacée plus tard par une version plus récente sans changer la structure de la page.
- **Prêt** : le fichier est dans le dépôt et la page qui l'utilise est prête.
- **Non retenu** : la ressource a été examinée et ne sera pas utilisée.

# Rencontre 1 — Environnement et HTML

## Sources déjà disponibles

| Source | Utilité | État / décision |
|---|---|---|
| Ancien PowerPoint **Environnement de travail** (12 diapositives) | Arborescence, création de dossiers, extensions, affichage des extensions, compression/décompression ZIP | **Source reçue**. Le contenu a alimenté le nouveau préambule. Plusieurs captures montrent un ancien Windows et 7-Zip : les utiliser comme référence, mais privilégier des captures actuelles. |
| `web/docs/01-cours/01-rencontre1.1.md` — ancien **Cours 1 - Atelier** | Connexion aux postes, 2FA, Teams, stockage infonuagique, ancien autodiagnostic | **Source historique conservée**. Les éléments durables sur le stockage ont été repris; Teams et l'autodiagnostic doivent être confirmés avant réintégration. |
| `web/static/img/atelier/VSCODE/` — quatre captures VS Code | Ouverture d'un dossier depuis Windows, démarrage de VS Code et résultat après ouverture du projet | **Réutilisées** dans le préambule. Les fichiers originaux sont conservés et des copies aux noms stables sont placées dans `web/static/img/rencontre1/`. |
| `web/static/img/atelier/leaEtudiant.png` | Ancienne capture associée à l'atelier | **À décider**. Ne pas l'utiliser automatiquement tant que son rôle dans la nouvelle rencontre n'est pas confirmé. |

## Captures de la rencontre 1

| Ressource | Emplacement | Utilisation | État |
|---|---|---|---|
| Afficher les extensions dans Windows | `web/static/img/rencontre1/windows-afficher-extensions.png` | Montrer l'option **Extensions de noms de fichiers** dans un Explorateur Windows actuel. | **À fournir** |
| Extraire une archive ZIP | `web/static/img/rencontre1/windows-extraire-zip.png` | Montrer clairement l'action **Extraire tout** ou son équivalent. | **À fournir** |
| Clic droit sur le dossier du projet | `web/static/img/rencontre1/vscode-clic-droit-dossier.png` | Montrer l'ouverture du dossier avec VS Code directement depuis l'Explorateur Windows. | **Provisoire intégré** — repris de `web/static/img/atelier/VSCODE/VsCode-right-click-open.png`; remplacement moderne facultatif. |
| Clic droit depuis l'intérieur du dossier | `web/static/img/rencontre1/vscode-clic-droit-dans-dossier.png` | Montrer une deuxième façon de lancer VS Code lorsque le dossier est déjà ouvert dans Windows. | **Provisoire intégré** — repris de `web/static/img/atelier/VSCODE/VsCode-inside-folder-right-click-open.png`; remplacement moderne facultatif. |
| Démarrage de VS Code | `web/static/img/rencontre1/vscode-demarrage.png` | Montrer la fenêtre de VS Code au démarrage avant l'ouverture du projet. | **Provisoire intégré** — repris de `web/static/img/atelier/VSCODE/vsCode-opened.png`; remplacement moderne facultatif. |
| Dossier ouvert dans VS Code | `web/static/img/rencontre1/vscode-dossier-ouvert.png` | Montrer le projet après son ouverture et aider à repérer l'Explorateur de VS Code. | **Provisoire intégré** — repris de `web/static/img/atelier/VSCODE/vsCode-opened2.png`; remplacement moderne facultatif. |

Les quatre captures VS Code sont maintenant **suffisantes pour enseigner la procédure**. Une future mise à jour visuelle peut simplement remplacer les fichiers de `web/static/img/rencontre1/` en conservant les mêmes noms.

## Décisions à confirmer

| Élément de l'ancien atelier | Question | État |
|---|---|---|
| Teams | Est-ce encore la plateforme réellement utilisée pour les communications ou certaines remises dans Z03? | **À décider** |
| Test autodiagnostic informatique | Est-ce que le formulaire existe encore et est-il encore utile dans la nouvelle formule du cours? | **À décider** |
| Liens compte réseau / double authentification | Doivent-ils être affichés directement dans le préambule étudiant ou simplement présentés en classe? | **À décider** |

# Rencontre 2 — HTML, fichiers et navigation

## Fichiers à fournir

| Ressource | Emplacement prévu | Utilisation | État |
|---|---|---|---|
| Image de chat pour l'exercice guidé | `web/static/files/rencontre2/chat.jpg` | Fichier à télécharger pour pratiquer `images/chat.jpg` et `../images/chat.jpg`, sans perdre du temps à chercher une image pendant le cours. | **Prêt** — fichier présent sur `main` et lien direct ajouté à l'exercice guidé. |

### Contraintes pour `chat.jpg`

- fichier léger et simple à reconnaître;
- format JPEG réel;
- nom final exactement `chat.jpg`;
- image dont l'utilisation dans le cours est permise;
- dimensions raisonnables pour éviter un téléchargement inutilement lourd.

L'exercice guidé de la rencontre 2 contient maintenant un encadré **📥 Fichier à télécharger** avec un lien direct vers `chat.jpg` et l'instruction de le placer dans le dossier `images`.

# Rencontres suivantes

La liste doit être enrichie **au moment où chaque nouvelle rencontre est conçue**, avant de considérer son matériel prêt pour la classe.

Pour toute nouvelle ressource, noter au minimum :

| Rencontre | Page concernée | Ressource | Fichier prévu | Description exacte | État |
|---|---|---|---|---|---|
| — | — | — | — | — | — |
