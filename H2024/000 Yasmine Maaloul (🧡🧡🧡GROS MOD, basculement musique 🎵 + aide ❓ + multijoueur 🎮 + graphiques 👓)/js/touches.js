// ----- INTRODUCTION -----
// Objectif : Ce fichier gère toutes les interactions de touches du jeu.

// ----- GESTION DES TOUCHES -----
// Objectif : Stocker l'état des touches (enfoncées ou non).
const etatTouches = {
    joueur1: {
        gauche: false,
        droite: false,
        tir: false,
        pause: false,
    },
    joueur2: {
        gauche: false,
        droite: false,
        tir: false,
        pause: false,
    }
};

document.addEventListener('keydown', function (e) {
    switch (e.key) {
        // Touches du joueur 2
        case 'ArrowLeft':
            etatTouches.joueur2.gauche = true;
            break;
        case 'ArrowRight':
            etatTouches.joueur2.droite = true;
            break;
        case ' ': // Barre d'espace (tir pour joueur 2)
            etatTouches.joueur2.tir = true;
            e.preventDefault();
            break;
            case 'r': // Touche "R"
            case 'R': // Touche "R" en majuscule
                redemarrerJeu(); 
break;
        // Touches du joureur 1
        case 'a':
            etatTouches.joueur1.gauche = true;
            break;
        case 'd':
            etatTouches.joueur1.droite = true;
            break;
        case 'g': // Touche "g" (tir pour joueur 1)
            etatTouches.joueur1.tir = true;
            e.preventDefault(); 
            break;
    }
});

document.addEventListener('keyup', function (e) {
    switch (e.key) {
        // Touches du joueur 2
        case 'ArrowLeft':
            etatTouches.joueur2.gauche = false;
            break;
        case 'ArrowRight':
            etatTouches.joueur2.droite = false;
            break;
        case ' ': // Barre d'espace (tir pour joueur 2)
            etatTouches.joueur2.tir = false;
            e.preventDefault(); 
            break;
        // Touches du joueur 1
        case 'a':
            etatTouches.joueur1.gauche = false;
            break;
        case 'd':
            etatTouches.joueur1.droite = false;
            break;
        case 'g': // Touche "g" (tir pour joueur 1)
            etatTouches.joueur1.tir = false;
            e.preventDefault(); 
            break;
    }
});