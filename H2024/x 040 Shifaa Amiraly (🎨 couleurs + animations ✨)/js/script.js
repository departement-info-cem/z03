// =========== DÉMARRAGE DU JEU ===========

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TOUDOU 01
// A- Sélectionnez le bouton avec l'ID 'demarrerPartie'
// Attachez l'événement 'click' au bouton, avec la fonction 'redemarrerJeu'
// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// VOTRE CODE ICI :
document.querySelector ("#demarrerPartie"). addEventListener ("click", redemarrerJeu);







// =========== LOGIQUE DU JEU ===========
let boucleAnimationId = null;
function actualiserZoneDeJeu() {
    // Vérifie si le jeu est sur pause
    if (etatTouches.pause) {
        boucleAnimationId = requestAnimationFrame(actualiserZoneDeJeu);
        return;
    }

    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    // TOUDOU 02 
    // 02 A- Avec un IF, vérifiez si tous les envahisseurs ont été éliminés, c'est à dire qu'il en reste 0 dans le tableau "envahisseurs"
    // ASTUCE : envahisseurs.length donne le nombre d'envahisseur restants du tableau 'envahisseurs'
    /// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

    // SI (condition)
    if (envahisseurs.length == 0){
    
        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        // 02 B- S'il n'y a pas d'envahisseurs, cela signifie que le joueur a éliminé la vague actuelle.
        // Appelez la fonction 'initialiserVague' pour démarrer une nouvelle vague.
        // passez en paramètre le tableau "envahisseurs"
        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        // VOTRE CODE ICI :
        initialiserVague(envahisseurs);
     
}
    // FIN SI


    // Nettoyage de la zone
    contexteZone.clearRect(0, 0, ZoneDeJeu.width, ZoneDeJeu.height);

    //Sert à visualiser une position sur le canvas
    //debug(0,10,"o",12,"#FFFFFF");


    // Mise à jour joueur
    miseAJourJoueur();

    // Gestion des tirs
    creerTir();
    gererTirs();

    // Mise à jour des envahisseurs
    miseAJourEnvahisseurs();

    // Dessin
    dessinerParticules();
    dessinerJoueur();
    dessinerEnvahisseurs();
    dessinerTirs();
    afficherScore();

    // Vérifier fin du jeu
    if (verifierFinDuJeu(envahisseurs)) {
        return;
    }


    // Boucle du jeu
    boucleAnimationId = requestAnimationFrame(actualiserZoneDeJeu);
}


// =========== JOUEUR ===========
function miseAJourJoueur() {

    // MODIFICATEUR DE VITESSE
    let modificateurVitesse = 1.0;
    if (etatTouches.majuscule) {
        modificateurVitesse = MODIFICATION_VITESSE_MAJUSCULE;
    }

    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    // TOUDOU 04
    // 04 A- Mouvement du joueur vers la gauche
    // Vérifiez si la touche 'gauche' est enfoncée (donc si etatTouches.gauche ==true) ET si le joueur
    // n'est pas déjà au bord gauche de la zone de jeu (joueur.x > 0).
    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

    //SI (condition)+
     if (etatTouches.gauche ==true && joueur.x > 0) {
           
        
    

        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        // 04 B- Déplacez le joueur vers la gauche en soustrayant une valeur de sa position x.
        // La valeur soustraite est le produit de la 'vitesseDeplacement' du joueur (joueur.vitesseDeplacement) et de 'modificateurVitesse'.
        //
        // 'joueur.x' représente la position horizontale actuelle du joueur.
        // 'joueur.vitesseDeplacement' est une propriété définissant combien de pixels le joueur se déplace à chaque pas.
        // 'modificateurVitesse' est ajusté plus haut lorsque la touche "majuscule" est enfoncée
        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        //VOTRE CODE ICI
        joueur.x -= joueur.vitesseDeplacement * modificateurVitesse;
        
     }   
       
        
    
    //FIN du si


    // Mouvement du joueur vers la droite
    // Vérifiez si la touche 'droite' est enfoncée et si le joueur n'est pas déjà au bord droit de la zone de jeu.

    // Déplacez le joueur vers la droite en ajoutant à sa position x.
    // La vérification '(joueur.x + joueur.largeur < ZoneDeJeu.width)' s'assure que le joueur ne dépasse pas la largeur de la zone de jeu.
    // 'joueur.largeur' est la largeur du retangle du joueur.
    // Si le bord droit du joueur (calculé par 'joueur.x + joueur.largeur') est moins que la largeur de la zone de jeu,
    // le joueur peut se déplacer vers la droite.
    if (etatTouches.droite && joueur.x + joueur.largeur < ZoneDeJeu.width) {
        joueur.x += joueur.vitesseDeplacement * modificateurVitesse;
    }

}
// =========== ENVAHISSEUR ===========
function miseAJourEnvahisseurs() {
    // Commencez par initialiser un indice pour parcourir le tableau des envahisseurs.
    let indexEnvahisseur = 0;
    // Continuez à boucler tant que l'indice est inférieur à la longueur du tableau des envahisseurs.
    while (indexEnvahisseur < envahisseurs.length) {
        // Récupérez l'envahisseur actuel du tableau en utilisant l'indice.
        let envahisseur = envahisseurs[indexEnvahisseur];

        // Mettez à jour la position verticale de l'envahisseur en ajoutant sa vitesse verticale à sa position y.
        // Cela simule le mouvement vers le bas à chaque appel de la fonction.
        envahisseur.y += envahisseur.vitesseVerticale;

        // Si l'envahisseur a une vitesse horizontale (vérification pour éviter les erreurs si elle est nulle),
        // mettez à jour également sa position horizontale.
        if (envahisseur.vitesseHorizontale) {
            envahisseur.x += envahisseur.vitesseHorizontale;

            // Vérifiez si l'envahisseur a atteint le bord gauche (x < 0) ou le bord droit (x + largeur > largeur de la zone de jeu)
            // de la zone de jeu.
            if (envahisseur.x < 0 || envahisseur.x + envahisseur.largeur > ZoneDeJeu.width) {
                // Si l'envahisseur atteint un bord, inversez sa direction en changeant le signe de sa vitesse horizontale.
                envahisseur.vitesseHorizontale = -envahisseur.vitesseHorizontale;
            }
        }

        // Passez à l'envahisseur suivant en incrémentant l'indice.
        indexEnvahisseur++;
    }
}

// =========== DESSIN ET RENDU ===========
// Cette fonction est responsable de dessiner le joueur à l'écran.
function dessinerJoueur() {
    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    // TOUDOU 03
    // 03 A- Appellez la fonction 'dessinerObjet()' avec les 5 paramètres suivants:
    //
    // 'joueur.x' est la position horizontale du joueur dans la zone de jeu.
    // 'joueur.y' est la position verticale du joueur dans la zone de jeu.
    // 'joueur.largeur' est la largeur du rectangle du joueur.
    // 'joueur.hauteur' est la hauteur du rectangle du joueur.
    // 'COULEUR_JOUEUR' est une constante qui définit la couleur du joueur.
    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    //VOTRE CODE ICI
    dessinerObjet (joueur.x,joueur.y,joueur.largeur,joueur.hauteur, COULEUR_JOUEUR);
    

}

// Fonction pour dessiner tous les envahisseurs sur l'écran
function dessinerEnvahisseurs() {

    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    // 03 B- Faire une boucle for(let of) et itérer à travers le tableau des envahisseurs
    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    // Boucle
    for (let envahisseur of envahisseurs){
    
    
        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        // 03 C- Appellez la fonction 'dessinerObjet' pour dessiner l'envahisseur actuel avec les 5 paramètres suivants:
        //
        // 'envahisseur.x' et 'envahisseur.y' sont les coordonnées où l'envahisseur sera dessiné sur l'écran
        // 'envahisseur.largeur' et 'envahisseur.hauteur' sont les dimensions de l'envahisseur
        // 'envahisseur.couleur' est la couleur de l'envahisseur qui sera utilisée pour le dessin
        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        //VOTRE CODE ICI
            dessinerObjet (envahisseur.x,envahisseur.y,envahisseur.largeur,envahisseur.hauteur,envahisseur.couleur);
        }


    
    //Fin de boucle
}

// Cette fonction est responsable de dessiner tous les tirs actuellement à l'écran.
function dessinerTirs() {
    // Commencez avec un indice pour itérer sur le tableau des tirs.
    let indexTir = 0;

    // Continuez à boucler tant que vous n'avez pas atteint la fin du tableau des tirs.
    while (indexTir < tirs.length) {
        // Obtenez le tir courant en utilisant l'indice.
        let tir = tirs[indexTir];

        // Utilisez la fonction 'dessinerObjet' pour dessiner le tir à l'écran.
        // 'tir.x' et 'tir.y' indiquent la position actuelle du tir dans la zone de jeu.
        // 'tir.largeur' et 'tir.hauteur' définissent les dimensions du rectangle représentant le tir.
        // 'COULEUR_TIR' est une constante ou une variable définie ailleurs qui indique la couleur des tirs.
        dessinerObjet(tir.x, tir.y, tir.largeur, tir.hauteur, COULEUR_TIR);

        // Incrémentez l'indice pour passer au tir suivant dans le tableau.
        indexTir++;
    }
}



// =========== GESTION DES TIRS ===========
// Cette fonction crée un nouveau tir si la touche de tir est enfoncée et que suffisamment de temps s'est écoulé depuis le dernier tir.
function creerTir() {
    // Obtenez le temps actuel (sert à établir un délais entre les tirs).
    const momentActuel = Date.now();

    // Vérifiez si la touche de tir est enfoncée et que l'intervalle de temps depuis le dernier tir est respecté.
    // 'etatTouches.tir' est un booléen qui est vrai si la touche de tir est actuellement enfoncée.
    // 'gMomentDernierTir' est le moment du dernier tir, et 'gIntervalleEntreTirs' est le temps minimum entre les tirs.
    if (etatTouches.tir && momentActuel - gMomentDernierTir >= gIntervalleEntreTirs) {
        // Créez un objet tir et ajoutez-le au tableau des tirs.
        tirs.push({
            x: joueur.x + joueur.largeur / 2 - TIR_LARGEUR / 2, // Positionnez le tir au milieu horizontalement du joueur.
            y: joueur.y, // La position verticale du tir est la même que celle du joueur.
            vitesseVerticale: VITESSE_DEPLACEMENT_TIR, // Définissez la vitesse à laquelle le tir se déplace.
            largeur: TIR_LARGEUR, // Largeur du tir.
            hauteur: TIR_HAUTEUR // Hauteur du tir.
        });

        // Mettez à jour le moment du dernier tir pour empêcher la création d'un nouveau tir avant l'intervalle.
        gMomentDernierTir = momentActuel;

        // Jouez un son de tir pour donner un retour audio sur l'action de tir.
        jouerSonAleatoire(sonTir);
    }
}


// Cette fonction gère la logique de mise à jour pour tous les tirs actifs dans le jeu.
function gererTirs() {
    // Commencez à partir du dernier élément du tableau des tirs et itérez vers le premier.
    let i = tirs.length - 1;
    // Continuez tant que 'i' est supérieur ou égal à 0, ce qui signifie qu'il reste des tirs à traiter.
    while (i >= 0) {
        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        // TOUDOU 05
        // 05 A- Déplacez chaque tir vers le haut en ajustant sa position 'y'.
        // 'tirs[i].vitesseVerticale' détermine la vitesse du tir.
        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        //VOTRE CODE ICI
        tirs[i].y += tirs [i].vitesseVerticale;
        

        

        

        // Vérifiez si le tir actuel a touché un envahisseur.
        // La fonction 'verifierCollisionTirEnvahisseurs' renvoie 'true' si le tir a touché un envahisseur.

        let tirASupprimer = verifierCollisionTirEnvahisseurs(i);
        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        // 05 B- Si le tir n'a pas touché un envahisseur (donc si tirASupprimer==false) et qu'il est sorti de l'écran (position 'y' inférieure à 0),
        // il doit être retiré du tableau des tirs
        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

        //SI (condition)
        if ( tirASupprimer ==false && tirs [i].y < 0) {
        
        

            // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
            // 05 C- Retirez du tableau des tirs
            // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
            //VOTRE CODE ICI
            tirs.splice (i,1);
       

        //FIn SI
    }

        // Décrémentez 'i' pour passer au tir précédent dans le tableau.
        i--;
    }
}


// Cette fonction vérifie si un tir donné a touché un envahisseur.
function verifierCollisionTirEnvahisseurs(indexTir) {
    // Commencez à vérifier à partir du dernier envahisseur.
    let indexEnvahisseur = envahisseurs.length - 1;
    // Continuez à vérifier tant que vous n'avez pas atteint le premier envahisseur.
    while (indexEnvahisseur >= 0) {
        // Utilisez la fonction 'collision' pour vérifier si le tir touche l'envahisseur 'indexEnvahisseur'.
        if (collision(tirs[indexTir], envahisseurs[indexEnvahisseur])) {

            // Si une collision est détectée entre un tir et un envahisseur, exécutez le bloc de code suivant.
            // L'index 'indexEnvahisseur' correspond à l'envahisseur actuellement vérifié dans la liste des envahisseurs.

            // Créez une explosion à la position centrale de l'envahisseur touché.
            // La position centrale est calculée en prenant la position x et y de l'envahisseur,
            // et en ajoutant la moitié de sa largeur et de sa hauteur, respectivement.
            creerExplosion(envahisseurs[indexEnvahisseur].x + envahisseurs[indexEnvahisseur].largeur / 2,
                envahisseurs[indexEnvahisseur].y + envahisseurs[indexEnvahisseur].hauteur / 2);

            // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
            // TOUDOU 07
            // 07 A- Incrémentez le score global 'gScore' par le nombre de points que vaut l'envahisseur.
            // Chaque envahisseur a une propriété 'points' qui indique combien de points il rapporte lorsqu'il est détruit.
            // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
            //VOTRE CODE ICI
            gScore += envahisseurs [indexEnvahisseur].points;
            

            // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
            // 07 B- Retirez le tir qui a touché l'envahisseur de la liste des tirs.
            // 'splice' est utilisé pour retirer des éléments d'un tableau; ici, il retire 1 élément à la position 'indexTir'.
            // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
            //VOTRE CODE ICI
            tirs.splice (indexTir,1);
            


            // Retirez également l'envahisseur qui a été touché de la liste des envahisseurs.
            // 'splice' retire 1 élément à la position 'indexEnvahisseur', l'index actuel de l'envahisseur dans le tableau.
            envahisseurs.splice(indexEnvahisseur, 1);


            // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
            // 07 C- Jouez un son d'explosion pour donner un retour audio que l'envahisseur a été détruit.
            // Appelez la fonction 'jouerSonAleatoire' passez 'sonExplosion' en paramètre
            // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
            //VOTRE CODE ICI
            jouerSonAleatoire(sonExplosion);

            


            // Retournez 'true' pour indiquer qu'une collision a été traitée.
            return true;
        }
        // Décrémentez 'indexEnvahisseur' pour vérifier l'envahisseur précédent dans le prochain tour de boucle.
        indexEnvahisseur--;
    }
    // Si aucune collision n'est détectée, retournez 'false'.
    return false;
}

// ***** FIN DE PARTIE *****
// Définition de la fonction pour vérifier si le jeu doit se terminer
function verifierFinDuJeu(envahisseurs) {
    // Initialisation de l'indice (indexEnvahisseur) pour parcourir les envahisseurs
    let indexEnvahisseur = 0;

    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    // TOUDOU 08
    // 08 A- Faire une boucle WHILE et itérer à travers le tableau des envahisseurs
    // Servez-vous de la variable "indexEnvahisseur" comme index de votre boucle
    // ASTUCE : envahisseurs.length donne le nombre d'envahisseur restants du tableau 'envahisseurs'
    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

    //BOUCLE (condition)
    while (indexEnvahisseur < envahisseurs.length){

    
    

        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        // 08 B-Déclarer une variable nommé "envahisseur" et assigner l'envahisseur courant à partir du tableau
        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄    
        //VOTRE CODE ICI
        let envahisseur = envahisseurs [ indexEnvahisseur];
        

        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        // 08 C- Ajouter une condition pour vérifier si l'envahisseur est arrivé en bas de la zone de jeu
        //
        // 'envahisseur.y' est la position verticale actuelle de l'envahisseur dans la zone de jeu.
        // 'envahisseur.hauteur' est la hauteur de l'envahisseur, qui, ajoutée à 'envahisseur.y',
        // donne la position verticale la plus basse de l'envahisseur dans la zone de jeu.
        //
        // 'ZoneDeJeu.height' est la hauteur totale de la zone de jeu.
        // Si la position la plus basse de l'envahisseur est supérieure ou égale à la hauteur de la zone de jeu,
        // cela signifie qu'un envahisseur a atteint le bas de la zone de jeu et la partie est perdue.
        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄

        //SI (condition)
        if ( envahisseur.y + envahisseur.hauteur >= ZoneDeJeu.height){

        
        

            // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
            // 08 D- Si oui, affichage de la fin du jeu (applelez la méthode afficherFinDuJeu)
            // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ 
            //VOTRE CODE ICI :
            afficherFinDuJeu ()
            

            // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
            // 08 E- Ensuite on retourne vrai avec l'instruction return 
            // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
            //VOTRE CODE ICI :
            return true;
        
        }  
        //FIN du SI
    

        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        // 08 F- Incrémentation de l'indice (indexEnvahisseur) pour passer à l'envahisseur suivant
        // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
        //VOTRE CODE ICI :
        indexEnvahisseur ++;
        
    
    //FIN de boucle
}

    // Si aucun envahisseur n'a atteint le bas, on retourne false
    return false;
}


function redemarrerJeu() {
    // Annuler la boucle d'animation précédente
    if (boucleAnimationId !== null) {
        cancelAnimationFrame(boucleAnimationId);
        boucleAnimationId = null;
    }

    // Réinitialiser les variables globales
    gMomentDernierTir = 0;
    gIntervalleEntreTirs = INTERVAL_TIR_DEPART;
    gNiveauVague = 0;
    gScore = 0;

    // Réinitialiser la position du joueur
    joueur.x = ZoneDeJeu.width / 2;
    joueur.y = ZoneDeJeu.height - 40;

    // Vider les tableaux
    envahisseurs.length = 0;
    tirs.length = 0;
    particules.length = 0;

    //Jouer musique
    arreterSon(sonMusique);
    jouerSonAleatoire(sonMusique);

    cacherFinDuJeu();

    // Initialiser la première vague d'envahisseurs
    initialiserVague(envahisseurs);

    // Redémarrer la boucle du jeu
    actualiserZoneDeJeu();
}



// =========== GESTION AFFICHAGE ===========
// Cette fonction met à jour les éléments d'interface utilisateur avec les informations de score et de jeu actuelles.
function afficherScore() {
    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    // TOUDOU 06
    // 06 A- Sélectionnez l'élément HTML avec l'ID 'scoreJoueur' et mettez à jour son contenu textuel.
    // 'gScore' est une variable qui représente le score actuel du joueur dans le jeu.
    // Le contenu textuel est défini pour afficher le mot 'Score:' suivi de la valeur de 'gScore'.
    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    //VOTRE CODE ICI
    document.querySelector("#scoreJoueur").textContent = "Score" + gScore;
    

    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    // 06 B- Sélectionnez l'élément HTML avec l'ID 'numeroVague' et mettez à jour son contenu textuel.
    // 'gNiveauVague' est une variable qui représente le numéro de la vague actuelle d'envahisseurs.
    // Le contenu textuel est défini pour afficher le mot 'Vague:' suivi de la valeur de 'gNiveauVague'.
    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    //VOTRE CODE ICI
    document.querySelector("#numeroVague").textContent = " Vague" + gNiveauVague;
    

    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    // 06 C- Sélectionnez l'élément HTML avec l'ID 'nbEnvahisseurs' et mettez à jour son contenu textuel.
    // 'envahisseurs.length' donne le nombre actuel d'envahisseurs dans le jeu.
    // Le contenu textuel est défini pour afficher '#Envahisseurs:' suivi du nombre d'envahisseurs.
    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    //VOTRE CODE ICI
    document.querySelector ("#nbEnvahisseurs").textContent = "Envahisseurs" + envahisseurs.length;
    
}

// Cette fonction affiche l'écran de fin de jeu et le score final du joueur.
function afficherFinDuJeu() {
    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    // TOUDOU 09
    // 09 A- Sélectionnez l'élément où le score final doit être affiché (finalScore).
    // Assigner la valeur de 'gScore' (variable globale qui tient le score du joueur)
    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    //VOTRE CODE ICI
    document.querySelector("finalScore").textContent = gScore;
    


    //Sélectionnez l'élément du DOM qui sert d'overlay pour la fin du jeu en utilisant sa classe CSS.
    // Cet overlay est supposé masquer l'écran de jeu et afficher le message de fin de jeu.
    // Modifiez le style de l'overlay de fin de jeu pour le rendre visible.
    // Assignez la valeur 'flex' à la propriété 'display', ce qui implique que l'overlay utilise un affichage flexible
    // et sera maintenant visible à l'utilisateur.
    document.querySelector('.game-over-overlay').style.display = 'flex';

}

// Cette fonction cache l'écran de fin de jeu, préparant l'interface pour une nouvelle partie.
function cacherFinDuJeu() {
    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    // TOUDOU 10
    // Sélectionnez l'élément du DOM qui sert d'overlay pour la fin du jeu en utilisant sa classe CSS.
    // Cet overlay a été affiché lors de la fin du jeu et doit maintenant être caché.
    // Changez le style de l'overlay de fin de jeu pour le cacher.
    // Assignez la valeur 'none' à la propriété 'display' ce qui enlève l'overlay de l'affichage et le rend invisible.
    // ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
    //VOTRE CODE ICI
    document.querySelector (".game-over-overlay").style.display = 'none';

}

// =========== FONCTIONS UTILITAIRES ===========

// Cette fonction joue un son au hasard à partir d'une liste de sons, si le son est activé.
function jouerSonAleatoire(listeSon) {
    // Vérifie si la fonctionnalité de son est activée dans le jeu.
    // Si le son n'est pas activé ('gSonActif' est false), la fonction s'arrête ici et ne joue pas de son.
    if (!gSonActif) return;

    // Sélectionne un index au hasard pour choisir un son dans le tableau 'listeSon'.
    // 'Math.random()' génère un nombre aléatoire entre 0 (inclus) et 1 (exclus).
    // Ce nombre est multiplié par la longueur du tableau 'listeSon' pour obtenir un intervalle correct.
    // 'Math.floor()' arrondit le résultat à l'entier inférieur, donnant un index valide du tableau.
    const indexAleatoire = Math.floor(Math.random() * listeSon.length);

    // Joue le son correspondant à l'index aléatoire.
    // 'listeSon[indexAleatoire]' accède au son à l'index choisi aléatoirement dans le tableau.
    // '.play()' est une méthode qui démarre la lecture du son.
    listeSon[indexAleatoire].play();
}

//Arrete les sons/musique
function arreterSon(listeSon) {
    for (let son of listeSon) {
        son.pause();
    }
}

// Fonction pour vérifier la collision entre deux objets rectangulaires 'a' et 'b'.
function collision(a, b) {
    // Vérifiez si les côtés de 'a' et 'b' se chevauchent.
    // La collision est vraie si toutes les conditions suivantes sont vraies:

    // Le côté droit de 'a' (a.x + a.largeur) est plus loin à droite que le côté gauche de 'b' (b.x).
    // Cela signifie que 'a' se chevauche avec 'b' du côté gauche de 'b'.
    //  a.x + a.largeur > b.x &&

    // Le côté gauche de 'a' (a.x) est plus à gauche que le côté droit de 'b' (b.x + b.largeur).
    // Cela signifie que 'a' se chevauche avec 'b' du côté droit de 'b'.
    // a.x < b.x + b.largeur &&

    // Le bas de 'a' (a.y + a.hauteur) est plus bas que le haut de 'b' (b.y).
    // Cela signifie que 'a' se chevauche avec 'b' au-dessus de 'b'.
    //a.y + a.hauteur > b.y &&

    // Le haut de 'a' (a.y) est plus haut que le bas de 'b' (b.y + b.hauteur).
    // Cela signifie que 'a' se chevauche avec 'b' en dessous de 'b'.
    //a.y < b.y + b.hauteur;

    // Si toutes ces conditions sont remplies, les deux objets se chevauchent et la fonction return 'true'.
    // Sinon, ils ne se chevauchent pas et la fonction return 'false'.


    return a.x < b.x + b.largeur &&
        a.x + a.largeur > b.x &&
        a.y < b.y + b.hauteur &&
        a.y + a.hauteur > b.y;
}


// =========== DESSINER OBJET ===========
function dessinerObjet(positionX, positionY, largeur, hauteur, couleur) {
    let gradient = contexteZone.createLinearGradient(positionX, positionY, positionX, positionY + hauteur);
    gradient.addColorStop(0, couleur);
    gradient.addColorStop(1, "#000000");

    contexteZone.fillStyle = gradient;
    contexteZone.shadowColor = couleur;
    contexteZone.shadowBlur = 15;
    contexteZone.fillRect(positionX, positionY, largeur, hauteur);

    contexteZone.shadowColor = 'transparent';
    contexteZone.shadowBlur = 0;
}

// =========== DEBUG ===========
function debug(positionX, positionY, texte, fontsize, couleur) {
    //Sert à debugger en affichant une position dans le canvas

    contexteZone.fillStyle = couleur;
    contexteZone.font = fontsize;
    contexteZone.fillText(texte + "(" + positionX + "," + positionY + ")", positionX, positionY);


}