#!/usr/bin/env python3
"""Génère R8 en isolation; vérifie les ZIP versionnés par défaut."""
import argparse
from pathlib import Path
from tempfile import TemporaryDirectory
from zipfile import ZipFile, ZipInfo, ZIP_STORED
import shutil, re

REPO = Path(__file__).resolve().parents[1]
GROUPS = {"evenements-styles": 4, "classes-attributs": 2}
IMAGES = {
    "evenements-styles": {"exercice4/images/lightOff.png", "exercice4/images/lightOn.png"},
    "classes-attributs": {"exercice1/images/chocolate.png", "exercice1/images/poop.png",
                          "exercice2/images/flashy.png", "exercice2/images/sobre.png"},
}


def expected_names(group):
    return IMAGES[group] | {
        f"exercice{i}/{name}" for i in range(1, GROUPS[group] + 1)
        for name in ("index.html", "css/styles.css", "js/script.js")
    }


def prepare(root):
    # Les transformations pédagogiques existantes sont conservées à l'identique.
    dest = root / "rencontre8"
    source = root / "420905_lab4"
    titles=[
    "C'est quoi un bouton ? 😵","Peut-on compter sur toi ? 🤔",
    "Avez-vous du... style ? 💋👔👗",
    "Combien faut-il d'étudiants pour changer une ampoule ? 💡👨‍🎓👩‍🎓",
    "Se salir les mains avec les classes et les attributs 🤚💩",
    "Mario en a assez des répétitions ! 🍄🔁"]
    levels=["★☆☆ Facile","★★☆ Intermédiaire","★☆☆ Facile","★★☆ Intermédiaire","★☆☆ Facile","★★☆ Intermédiaire"]
    steps=[
    ["Crée init() et associe click sur .bouton1 à changerTexte(), mouseover sur .bouton2 à lancerAlerte() et mouseout sur .bouton3 à imprimerDansConsole().","Complète changerTexte() pour afficher gNouveauTexte dans .texte avec textContent.","Complète lancerAlerte() pour afficher gTexteAlerte et imprimerDansConsole() pour afficher le message demandé dans la console (F12)."],
    ["Crée init() : les clics sur .up et .down appellent augmenterCompteur() et reduireCompteur().","Crée les deux fonctions : augmente ou diminue gCompteur de 1, puis affiche sa valeur dans .compteur avec textContent.","Vérifie : 0 → 1 → 2 → 1 → 0 → -1. 🔢"],
    ["Les sept écouteurs d'événements sont déjà présents dans init() : ne les modifie pas.","Complète les fonctions : bouton 1 texte red, 2 fond gold, 3 bordure blue, 4 bordure 10px, 5 largeur 300px et hauteur 100px, 6 opacité 0.2, 7 display none.","Clique sur les sept boutons; le dernier disparaît jusqu'au prochain rechargement. 👻"],
    ["Le HTML contient deux images : .lightOff visible et .lightOn cachée.","Crée init() avec mouseover sur .lightOff → on() et mouseout sur .lightOn → off().","Crée on() pour cacher .lightOff et afficher .lightOn, puis off() pour faire l'inverse avec style.display (none ou block). 💡","Vérifie que l'ampoule s'allume et s'éteint plusieurs fois."],
    ["Les événements sont déjà dans init() : ne les modifie pas.","Complète ajouterClasse(), retirerClasse() et basculerClasse() : elles manipulent la classe brun de .texte1 avec classList.","Complète ajouterAttribut() : title de .objetBrun devient « Trop mignon ! 💩 ». retirerAttribut() vide title. modifierAttribut() change src en images/chocolate.png et alt en Morceau de chocolat.","Teste les trois classes et les trois attributs. Le caca devient du chocolat ! 🍫"],
    ["Les deux boutons fonctionnent déjà : ne change pas leur comportement.","Dans styleFlashy() et styleSobre(), crée une variable locale let imageMario = document.querySelector('.image');","Remplace les cinq appels répétitifs à document.querySelector('.image') par imageMario dans chaque fonction.","Teste plusieurs alternances : Mario sobre 🤵, Mario flashy 🌈."]]
    def corrections(index, original):
        if index == 0:
            return '''let gNouveauTexte = "La hippopotomonstrosesquippedaliophobie est la phobie des longs mots. 😨";
let gTexteAlerte = "COMMENT OSEZ-VOUS SURVOLER CE BOUTON ? 😡";

function init() {
    document.querySelector(".bouton1").addEventListener("click", changerTexte);
    document.querySelector(".bouton2").addEventListener("mouseover", lancerAlerte);
    document.querySelector(".bouton3").addEventListener("mouseout", imprimerDansConsole);
}

function changerTexte() {
    document.querySelector(".texte").textContent = gNouveauTexte;
}

function lancerAlerte() {
    alert(gTexteAlerte);
}

function imprimerDansConsole() {
    console.log("Tu as arrêté de survoler le 3e bouton 😠 !");
}
'''
        if index == 1:
            return '''let gCompteur = 0;

function init() {
    document.querySelector(".up").addEventListener("click", augmenterCompteur);
    document.querySelector(".down").addEventListener("click", reduireCompteur);
}

function augmenterCompteur() {
    gCompteur = gCompteur + 1;
    document.querySelector(".compteur").textContent = gCompteur;
}

function reduireCompteur() {
    gCompteur = gCompteur - 1;
    document.querySelector(".compteur").textContent = gCompteur;
}
'''
        if index == 2:
            initialisation = original[:original.index("// ▄▄▄", original.index("function init()"))]
            return initialisation + '''
function couleurTexte() {
    document.querySelector(".bouton1").style.color = "red";
}

function couleurFond() {
    document.querySelector(".bouton2").style.backgroundColor = "gold";
}

function couleurBordure() {
    document.querySelector(".bouton3").style.borderColor = "blue";
}

function largeurBordure() {
    document.querySelector(".bouton4").style.borderWidth = "10px";
}

function tailleBouton() {
    document.querySelector(".bouton5").style.width = "300px";
    document.querySelector(".bouton5").style.height = "100px";
}

function opaciteBouton() {
    document.querySelector(".bouton6").style.opacity = 0.2;
}

function visibiliteBouton() {
    document.querySelector(".bouton7").style.display = "none";
}
'''
        if index == 3:
            return '''function init() {
    document.querySelector(".lightOff").addEventListener("mouseover", on);
    document.querySelector(".lightOn").addEventListener("mouseout", off);
}

function on() {
    document.querySelector(".lightOff").style.display = "none";
    document.querySelector(".lightOn").style.display = "block";
}

function off() {
    document.querySelector(".lightOn").style.display = "none";
    document.querySelector(".lightOff").style.display = "block";
}
'''
        if index == 4:
            initialisation = original[:original.index("// ▄▄▄")]
            return initialisation + '''
function ajouterClasse() {
    document.querySelector(".texte1").classList.add("brun");
}

function retirerClasse() {
    document.querySelector(".texte1").classList.remove("brun");
}

function basculerClasse() {
    document.querySelector(".texte1").classList.toggle("brun");
}

function ajouterAttribut() {
    document.querySelector(".objetBrun").title = "Trop mignon ! 💩";
}

function retirerAttribut() {
    document.querySelector(".objetBrun").title = "";
}

function modifierAttribut() {
    document.querySelector(".objetBrun").src = "images/chocolate.png";
    document.querySelector(".objetBrun").alt = "Morceau de chocolat";
}
'''
        # Exercice Mario : conserver le code original et remplacer les répétitions.
        code = original.replace('document.querySelector(".image")', 'imageMario')
        code = code.replace(
            'function styleFlashy(){',
            'function styleFlashy(){\n    let imageMario = document.querySelector(".image");'
        ).replace(
            'function styleSobre(){',
            'function styleSobre(){\n    let imageMario = document.querySelector(".image");'
        )
        return code
    for i in range(6):
        group="evenements-styles" if i<4 else "classes-attributs"
        number=i+1 if i<4 else i-3
        src=source/f"lab4_exercice{i+2}" if i<4 else dest/group/f"exercice{number}"
        target=dest/group/f"exercice{number}"
        if src != target:
            if target.exists():shutil.rmtree(target)
            shutil.copytree(src,target)
        page=target/"index.html"
        html=page.read_text(encoding="utf-8")
        title=f"Exercice {number} — {titles[i]}"
        card='<div id="description"><h2>'+title+'</h2><p><strong>'+levels[i]+'</strong> — Suis les étapes pour réussir cette mission ! 🎯</p>'
        for n,step in enumerate(steps[i],1):card+=f'<h3>Étape {n}</h3><p>{step}</p>'
        card+='<p>🧪 Teste toutes les fonctionnalités dans ton navigateur avant de consulter le corrigé ! 🏆</p></div>'
        html=re.sub(r'<div id="description">.*?</div>',lambda m:card,html,flags=re.S)
        html=html.replace("<title>Exercice</title>",f"<title>{title}</title>")
        if i==4:
            html=html.replace('class="bouton5"','class="bouton4"').replace('class="bouton6"','class="bouton5"').replace('class="bouton7"','class="bouton6"')
        page.write_text(html,encoding="utf-8",newline="\n")
        css=target/"css/styles.css"
        css.write_text(css.read_text(encoding="utf-8")+'\n#description h3{font-size:1.05em;margin:12px 0 5px}\n',encoding="utf-8",newline="\n")
        js=target/"js/script.js"
        old=js.read_text(encoding="utf-8")
        if i==4:
            old=old.replace('".bouton5"','".bouton4"').replace('".bouton6"','".bouton5"').replace('".bouton7"','".bouton6"')
            old=old.replace("Remplacez la valeur de l'attribut src par", "Changez src et alt : valeur de l'attribut src par")
        if i==1:old=old.replace("variale globale","variable globale")
        if i==5:old=old.replace("Pour tous les futurs exercices", "Pour ces deux fonctions")
        js.write_text(old,encoding="utf-8",newline="\n")
        cor=dest/"corriges"/group/f"exercice{number}"
        if cor.exists():shutil.rmtree(cor)
        shutil.copytree(target,cor)
        (cor/"js/script.js").write_text(corrections(i,old),encoding="utf-8",newline="\n")

    result = {}
    for group in GROUPS:
        for solution in (False, True):
            folder = dest / ("corriges" if solution else "") / group
            filename = f"rencontre8-{group}" + ("-corriges" if solution else "") + ".zip"
            files = {p.relative_to(folder).as_posix(): p for p in folder.rglob("*") if p.is_file()}
            if set(files) != expected_names(group):
                raise ValueError(f"Inventaire non autorisé : {folder}: {set(files) ^ expected_names(group)}")
            target = dest / filename
            with ZipFile(target, "w", ZIP_STORED) as archive:
                for name, file in sorted(files.items()):
                    info = ZipInfo(name, date_time=(2000, 1, 1, 0, 0, 0))
                    info.create_system = 3
                    info.external_attr = 0o100644 << 16
                    archive.writestr(info, file.read_bytes())
            result[filename] = target.read_bytes()
    return result


def generate(repository):
    # Ne jamais exécuter les transformations en place : elles ne sont pas idempotentes.
    with TemporaryDirectory(prefix="z03-r8-") as temporary:
        root = Path(temporary)
        for relative in ("420905_lab4", "rencontre8/classes-attributs"):
            shutil.copytree(repository / "web/static/files" / relative, root / relative)
        # Git peut extraire en CRLF sous Windows. Le contenu distribué reste en LF.
        for file in root.rglob("*"):
            if file.is_file() and file.suffix in {".html", ".css", ".js"}:
                file.write_bytes(file.read_bytes().replace(b"\r\n", b"\n"))
        return prepare(root)


def validate(folder, generated):
    for name, data in generated.items():
        path = folder / name
        if not path.exists() or path.read_bytes() != data:
            raise ValueError(f"ZIP absent ou divergent : {path}. Exécuter --write puis réviser le diff.")
        group = name.removeprefix("rencontre8-").removesuffix(".zip").removesuffix("-corriges")
        with ZipFile(path) as archive:
            if archive.testzip() is not None or set(archive.namelist()) != expected_names(group):
                raise ValueError(f"CRC ou contenu invalide : {path}")
        print(f"OK : {path}")
    for group in GROUPS:
        with ZipFile(folder / f"rencontre8-{group}.zip") as student, ZipFile(folder / f"rencontre8-{group}-corriges.zip") as solution:
            scripts = {f"exercice{i}/js/script.js" for i in range(1, GROUPS[group] + 1)}
            for script in scripts:
                if student.read(script) == solution.read(script):
                    raise ValueError(f"Départ et corrigé identiques : {group}/{script}")
            for name in expected_names(group) - scripts:
                if student.read(name) != solution.read(name):
                    raise ValueError(f"Différence inattendue hors JavaScript : {group}/{name}")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--write", action="store_true", help="Remplacer explicitement les quatre ZIP, sans modifier les sources")
    mode.add_argument("--check", action="store_true", help="Vérifier sans écrire (comportement par défaut)")
    parser.add_argument("--build-dir", type=Path, help="Vérifier aussi les ZIP copiés dans le build Docusaurus")
    args = parser.parse_args()
    generated = generate(REPO)
    folder = REPO / "web/static/files/rencontre8"
    if args.write:
        for name, data in generated.items():
            (folder / name).write_bytes(data)
    validate(folder, generated)
    if args.build_dir:
        validate(args.build_dir / "files/rencontre8", generated)


if __name__ == "__main__":
    main()
