#!/usr/bin/env python3
"""Prépare les exercices et les corrigés R8 dans quatre ZIP distincts."""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED
import shutil, re
root=Path(__file__).resolve().parents[1]/"web/static/files"
dest=root/"rencontre8"
source=root/"420905_lab4"
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
    if index==0:
        return '''let gNouveauTexte = "La hippopotomonstrosesquippedaliophobie est la phobie des longs mots. 😨";
let gTexteAlerte = "COMMENT OSEZ-VOUS SURVOLER CE BOUTON ? 😡";
function init(){
document.querySelector(".bouton1").addEventListener("click",changerTexte);
document.querySelector(".bouton2").addEventListener("mouseover",lancerAlerte);
document.querySelector(".bouton3").addEventListener("mouseout",imprimerDansConsole);
}
function changerTexte(){document.querySelector(".texte").textContent=gNouveauTexte;}
function lancerAlerte(){alert(gTexteAlerte);}
function imprimerDansConsole(){console.log("Tu as arrêté de survoler le 3e bouton 😠 !");}
'''
    if index==1:
        return '''let gCompteur=0;
function init(){
document.querySelector(".up").addEventListener("click",augmenterCompteur);
document.querySelector(".down").addEventListener("click",reduireCompteur);
}
function augmenterCompteur(){gCompteur=gCompteur+1;document.querySelector(".compteur").textContent=gCompteur;}
function reduireCompteur(){gCompteur=gCompteur-1;document.querySelector(".compteur").textContent=gCompteur;}
'''
    if index==2:
        rules=[("couleurTexte","bouton1","color",'"red"'),("couleurFond","bouton2","backgroundColor",'"gold"'),("couleurBordure","bouton3","borderColor",'"blue"'),("largeurBordure","bouton4","borderWidth",'"10px"'),("opaciteBouton","bouton6","opacity","0.2"),("visibiliteBouton","bouton7","display",'"none"')]
        s=original[:original.index("// ▄▄▄",original.index("function init()"))]
        for fn,button,prop,value in rules:
            s+=f'\nfunction {fn}(){{document.querySelector(".{button}").style.{prop}={value};}}\n'
        s+='''function tailleBouton(){
document.querySelector(".bouton5").style.width="300px";
document.querySelector(".bouton5").style.height="100px";
}
'''
        return s
    if index==3:
        return '''function init(){
document.querySelector(".lightOff").addEventListener("mouseover",on);
document.querySelector(".lightOn").addEventListener("mouseout",off);
}
function on(){
document.querySelector(".lightOff").style.display="none";
document.querySelector(".lightOn").style.display="block";
}
function off(){
document.querySelector(".lightOn").style.display="none";
document.querySelector(".lightOff").style.display="block";
}
'''
    if index==4:
        head=original[:original.index("// ▄▄▄")]
        return head+'''
function ajouterClasse(){document.querySelector(".texte1").classList.add("brun");}
function retirerClasse(){document.querySelector(".texte1").classList.remove("brun");}
function basculerClasse(){document.querySelector(".texte1").classList.toggle("brun");}
function ajouterAttribut(){document.querySelector(".objetBrun").title="Trop mignon ! 💩";}
function retirerAttribut(){document.querySelector(".objetBrun").title="";}
function modifierAttribut(){
document.querySelector(".objetBrun").src="images/chocolate.png";
document.querySelector(".objetBrun").alt="Morceau de chocolat";
}
'''
    return re.sub(r'document\.querySelector\("\.image"\)',"imageMario",original).replace("function styleFlashy(){",'function styleFlashy(){\nlet imageMario=document.querySelector(".image");').replace("function styleSobre(){",'function styleSobre(){\nlet imageMario=document.querySelector(".image");')
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
    page.write_text(html,encoding="utf-8")
    css=target/"css/styles.css"
    css.write_text(css.read_text(encoding="utf-8")+'\n#description h3{font-size:1.05em;margin:12px 0 5px}\n',encoding="utf-8")
    js=target/"js/script.js"
    old=js.read_text(encoding="utf-8")
    if i==4:
        old=old.replace('".bouton5"','".bouton4"').replace('".bouton6"','".bouton5"').replace('".bouton7"','".bouton6"')
        old=old.replace("Remplacez la valeur de l'attribut src par", "Changez src et alt : valeur de l'attribut src par")
    if i==1:old=old.replace("variale globale","variable globale")
    if i==5:old=old.replace("Pour tous les futurs exercices", "Pour ces deux fonctions")
    js.write_text(old,encoding="utf-8")
    cor=dest/"corriges"/group/f"exercice{number}"
    if cor.exists():shutil.rmtree(cor)
    shutil.copytree(target,cor)
    (cor/"js/script.js").write_text(corrections(i,old),encoding="utf-8")
for group,count in [("evenements-styles",4),("classes-attributs",2)]:
    for solution in [False,True]:
        folder=dest/("corriges" if solution else "")/group
        filename=f"rencontre8-{group}"+("-corriges" if solution else "")+".zip"
        with ZipFile(dest/filename,"w",ZIP_DEFLATED) as z:
            for file in sorted(folder.rglob("*")):
                if file.is_file():z.write(file,file.relative_to(folder))
        with ZipFile(dest/filename) as z:
            assert z.testzip() is None
            assert len([n for n in z.namelist() if n.endswith("index.html")])==count
            assert all("corrige" not in n for n in z.namelist())
        print(filename)
