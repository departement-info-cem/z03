// ----- INTRODUCTION -----
// Objectif : Ce fichier gère toutes les interactions de touches du jeu.

// ----- GESTION DES TOUCHES -----
// Objectif : Stocker l'état des touches (enfoncées ou non).
const etatTouches = {
    gauche: false,
    droite: false,
    tir: false,
    majuscule: false,
    pause: false,
};

// Objectif : Gérer les touches enfoncées.
document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'ArrowLeft': // Flèche gauche
            etatTouches.gauche = true;
            break;
        case 'ArrowRight': // Flèche droite
            etatTouches.droite = true;
            break;
        case ' ': // Barre d'espace (tir)
            etatTouches.tir = true;
            e.preventDefault();
            break;
        case 'r': // Touche "R"
        case 'R': // Touche "R" en majuscule
            redemarrerJeu(); // Objectif : Redémarrage du jeu lors de la pression sur la touche R.
            break;
        case 'Shift': // Touche "Majuscule gauche"
            etatTouches.majuscule = true;
            console.log("MAJ");
            break;
        case 's': // Touche "S"
        case 'S': // Touche "S" en majuscule
            gSonActif = !gSonActif;
            break;
        case 'p':
        case 'P':
            etatTouches.pause = !etatTouches.pause;
            break;

        //MODS
        case 'm':
        case 'M':
            if(document.querySelector("#magasinOverlay").style.display == "block"){
                fermerMagasin();
            }
            else {
                ouvrirMagasin();
            }
            break;

    }
});

// Objectif : Gérer les touches relâchées.
document.addEventListener('keyup', function (e) {
    switch (e.key) {
        case 'ArrowLeft': // Flèche gauche
            etatTouches.gauche = false;
            break;
        case 'ArrowRight': // Flèche droite
            etatTouches.droite = false;
            break;
        case ' ': // Barre d'espace (tir)
            etatTouches.tir = false;
            e.preventDefault();
            break;
        case 'Shift': // Touche "Majuscule gauche"
            etatTouches.majuscule = false;
    }
});
