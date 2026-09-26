// Variables globales
let gCouleur = "pink";
let gStyle = "bordure";

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Bogues simples 😇
// - Les cinq boutons dans la page fonctionnent mal. Teste les, identifie
//   ce qui fonctionne mal, et tente de corriger les bogues dans le code.
//
// Corrigez les bugs.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function init(){
    document.queryselector(".bleu").addEventListener("click", texteBleu);
    document.querySelector(".rouge").addEventListener("click", texteRouge);
    document.querySelector(".vert").addEventListener("click", texteVert);
    document.querySelector(".variable").addEventListener("click", texteVariable);
    document.querySelector(".styleBoite").addEventListener("click", bordureOuFond);

    document.querySelector(".bouton1").addEventListener("click", changerCouleur);
    document.querySelector(".bouton2").addEventListener("click", changerStyle);
}


// Cette fonction rend le texte dans la boîte bleu.
function texteBleu(){
    document.querySelector(".texte").style.color = "blue";
}


// Cette fonction rend le texte dans la boîte rouge.
function texteRouge(){
    document.querySelector("texte").color = "red";
}


// Cette fonction rend le texte dans la boîte vert.
function texteVert(){
    document.querySelector(".vert").style.color = "green";
}


// Cette fonction rend le texte dans la boîte rose ou jaune (selon la valeur de gCouleur)
function texteVariable(){
    document.querySelector(".texte").style.color = "gCouleur";
}


// Cette fonction change la couleur de fond ou la couleur de la bordure selon la valeur
// de gStyle. La couleur utilisée est celle dans la variable gCouleur. (Donc pink ou gold)
function bordureOuFond(){

    if(gStyle == "bordure"){
        document.querySelector(".texte").style.borderColor = gCouleur;
    }
    if(gCouleur == "pink"){
        document.querySelector(".texte").style.backgroundColor = gCouleur;
    }

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// Ne pas toucher le code à partir d'ici. Ce sont seulement les fonctions qui
// permettent de modifier les valeurs des variables globales en jouant avec
// les boutons dans la pages.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function changerCouleur(){
    gCouleur = gCouleur == "pink" ? "gold" : "pink";
    document.querySelector(".couleur").textContent = gCouleur;
}

function changerStyle(){
    gStyle = gStyle == "bordure" ? "fond" : "bordure";
    document.querySelector(".style").textContent = gStyle;
}