document.querySelector("#demarrerPartie").addEventListener("click", redemarrerJeu);


let boucleAnimationId = null;
function actualiserZoneDeJeu() {

    if (etatTouches.pause) {
        boucleAnimationId = requestAnimationFrame(actualiserZoneDeJeu);
        return;
    }

    if(envahisseurs.length == 0){
       initialiserVague(envahisseurs);
    }

    contexteZone.clearRect(0, 0, ZoneDeJeu.width, ZoneDeJeu.height);

    miseAJourJoueur();
    miseAJourJoueur2();

    creerTir();
    creerTir2();
    gererTirs();
    gererTirs2();

    miseAJourEnvahisseurs();

    dessinerParticules();
    dessinerJoueur();
    dessinerJoueur2();
    dessinerEnvahisseurs();
    dessinerTirs();
    dessinerTirs2();
    afficherScore();
    afficherScore2();


    if (verifierFinDuJeu(envahisseurs)) {
        return;
    }

    boucleAnimationId = requestAnimationFrame(actualiserZoneDeJeu);
}


function miseAJourJoueur() {

    let modificateurVitesse = 1.0;
    if (etatTouches.majuscule) {
        modificateurVitesse = MODIFICATION_VITESSE_MAJUSCULE;
    }

    if (etatTouches.gauche == true && joueur.x > 0) {
        joueur.x -= joueur.vitesseDeplacement * modificateurVitesse;
    }

    if (etatTouches.droite && joueur.x + joueur.largeur < ZoneDeJeu.width) {
        joueur.x += joueur.vitesseDeplacement * modificateurVitesse;
    }

}

function miseAJourJoueur2() {

    let modificateurVitesse = 1.0;
    if (etatTouches.majuscule) {
        modificateurVitesse = MODIFICATION_VITESSE_MAJUSCULE;
    }

    if (etatTouches.gauche2 == true && joueur2.x > 0) {
        joueur2.x -= joueur2.vitesseDeplacement * modificateurVitesse;
    }

    if (etatTouches.droite2 && joueur2.x + joueur2.largeur < ZoneDeJeu.width) {
        joueur2.x += joueur2.vitesseDeplacement * modificateurVitesse;
    }

}

function miseAJourEnvahisseurs() {

    let indexEnvahisseur = 0;

    while (indexEnvahisseur < envahisseurs.length) {

        let envahisseur = envahisseurs[indexEnvahisseur];

        envahisseur.y += envahisseur.vitesseVerticale;

        if (envahisseur.vitesseHorizontale) {
            envahisseur.x += envahisseur.vitesseHorizontale;

            if (envahisseur.x < 0 || envahisseur.x + envahisseur.largeur > ZoneDeJeu.width) {
                envahisseur.vitesseHorizontale = -envahisseur.vitesseHorizontale;
            }
        }
        indexEnvahisseur++;
    }
}

function dessinerJoueur() {

dessinerObjet(joueur.x, joueur.y, joueur.largeur, joueur.hauteur, COULEUR_JOUEUR);
}

function dessinerJoueur2() {

dessinerObjet(joueur2.x, joueur2.y, joueur2.largeur, joueur2.hauteur, COULEUR_JOUEUR2);
}

function dessinerEnvahisseurs() {

    for(let envahisseur of envahisseurs) {

        dessinerObjet(envahisseur.x, envahisseur.y, envahisseur.largeur, envahisseur.hauteur, envahisseur.couleur )
    }
}

function dessinerTirs() {

    let indexTir = 0;

    while (indexTir < tirs.length) {
        let tir = tirs[indexTir];
        dessinerObjet(tir.x, tir.y, tir.largeur, tir.hauteur, COULEUR_TIR);
        indexTir++;
    }
}

function dessinerTirs2() {

    let indexTir2 = 0;

    while (indexTir2 < tirs2.length) {
        let tir2 = tirs2[indexTir2];
        dessinerObjet(tir2.x, tir2.y, tir2.largeur, tir2.hauteur, COULEUR_TIR2);
        indexTir2++;
    }
}

function creerTir() {
    const momentActuel = Date.now();

    if (etatTouches.tir && momentActuel - gMomentDernierTir >= gIntervalleEntreTirs) {
        tirs.push({
            x: joueur.x + joueur.largeur / 2 - TIR_LARGEUR / 2,
            y: joueur.y,
            vitesseVerticale: VITESSE_DEPLACEMENT_TIR,
            largeur: TIR_LARGEUR,
            hauteur: TIR_HAUTEUR
        });

        gMomentDernierTir = momentActuel;

        jouerSonAleatoire(sonTir);
    }
}

function creerTir2() {

    const momentActuel2 = Date.now();

    if (etatTouches.tir2 && momentActuel2 - gMomentDernierTir2 >= gIntervalleEntreTirs2) {
        tirs2.push({
            x: joueur2.x + joueur2.largeur / 2 - TIR_LARGEUR2 / 2,
            y: joueur2.y,
            vitesseVerticale: VITESSE_DEPLACEMENT_TIR2,
            largeur: TIR_LARGEUR2,
            hauteur: TIR_HAUTEUR2
        });

        gMomentDernierTir2 = momentActuel2;

        jouerSonAleatoire(sonTir);
    }
}

function gererTirs() {

    let i = tirs.length - 1;

    while (i >= 0) {
        tirs[i].y += tirs[i].vitesseVerticale;
        let tirASupprimer = verifierCollisionTirEnvahisseurs(i);

        if (tirASupprimer==false && tirs[i] < 0) {
            tirs.splice(indexTir, 1);
        }

        i--;
    }
}

function gererTirs2() {

    let i = tirs2.length - 1;

    while (i >= 0) {
        tirs2[i].y += tirs2[i].vitesseVerticale;
        let tirASupprimer2 = verifierCollisionTirEnvahisseurs2(i);

        if (tirASupprimer2==false && tirs2[i] < 0) {
            tirs2.splice(indexTir2, 1);
        }

        i--;
    }
}

function verifierCollisionTirEnvahisseurs(indexTir) {

    let indexEnvahisseur = envahisseurs.length - 1;

    while (indexEnvahisseur >= 0) {

        if (collision(tirs[indexTir], envahisseurs[indexEnvahisseur])) {
            creerExplosion(envahisseurs[indexEnvahisseur].x + envahisseurs[indexEnvahisseur].largeur / 2,
                envahisseurs[indexEnvahisseur].y + envahisseurs[indexEnvahisseur].hauteur / 2);

            gScore += indexEnvahisseur;
            tirs.splice(indexTir, 1);
            envahisseurs.splice(indexEnvahisseur, 1);
            jouerSonAleatoire(sonExplosion);
            return true;
        }
        indexEnvahisseur--;
    }

    return false;
}

function verifierCollisionTirEnvahisseurs2(indexTir2) {

    let indexEnvahisseur = envahisseurs.length - 1;

    while (indexEnvahisseur >= 0) {

        if (collision(tirs2[indexTir2], envahisseurs[indexEnvahisseur])) {
            creerExplosion(envahisseurs[indexEnvahisseur].x + envahisseurs[indexEnvahisseur].largeur / 2,
                envahisseurs[indexEnvahisseur].y + envahisseurs[indexEnvahisseur].hauteur / 2);

            gScore2 += indexEnvahisseur;
            tirs2.splice(indexTir2, 1);
            envahisseurs.splice(indexEnvahisseur, 1);
            jouerSonAleatoire(sonExplosion);
            return true;
        }
        indexEnvahisseur--;
    }

    return false;
}

function verifierFinDuJeu(envahisseurs) {
 
    let indexEnvahisseur = 0;

    while (indexEnvahisseur < envahisseurs.length) {
        let envahisseur = envahisseurs[indexEnvahisseur];

        if (envahisseur.y + envahisseur.hauteur >= ZoneDeJeu.height) {
            afficherFinDuJeu();
            return true;
        }
        indexEnvahisseur += 1 ;
    }
    return false;
}


function redemarrerJeu() {

    if (boucleAnimationId !== null) {
        cancelAnimationFrame(boucleAnimationId);
        boucleAnimationId = null;
    }

    gMomentDernierTir = 0;
    gMomentDernierTir2 = 0
    gIntervalleEntreTirs = INTERVAL_TIR_DEPART;
    gIntervalleEntreTirs2 = INTERVAL_TIR_DEPART2;
    gNiveauVague = 0;
    gScore = 0;
    gScore2 = 0;

    joueur.x = ZoneDeJeu.width / 2;
    joueur.y = ZoneDeJeu.height - 40;

    joueur2.x = ZoneDeJeu.width / 4;
    joueur2.y = ZoneDeJeu.height - 40;

    envahisseurs.length = 0;
    tirs.length = 0;
    particules.length = 0;
    tirs2.length = 0;

    arreterSon(sonMusique);
    jouerSonAleatoire(sonMusique);

    cacherFinDuJeu();

    initialiserVague(envahisseurs);

    actualiserZoneDeJeu();
}

function afficherScore() {

    document.querySelector("#scoreJoueur").textContent = "Score J1: " + gScore;
    document.querySelector("#numeroVague").textContent = "Vague: " + gNiveauVague;
    document.querySelector("#nbEnvahisseurs").textContent = "#Envahisseurs: " + envahisseurs.length;
}

function afficherScore2() {

    document.querySelector("#scoreJoueur2").textContent = "Score J2: " + gScore2;
    document.querySelector("#numeroVague").textContent = "Vague: " + gNiveauVague;
    document.querySelector("#nbEnvahisseurs").textContent = "#Envahisseurs: " + envahisseurs.length;
}

function afficherFinDuJeu() {

    document.querySelector("#finalScore").textContent = gScore;
    document.querySelector("#finalScore2").textContent = gScore2;
    document.querySelector('.game-over-overlay').style.display = 'flex';

}

function cacherFinDuJeu() {
 
    document.querySelector(".game-over-overlay").style.display = "none";

}

function jouerSonAleatoire(listeSon) {

    if (gSonActif == false) return;

    const indexAleatoire = Math.floor(Math.random() * listeSon.length);

    listeSon[indexAleatoire].play();
}

function arreterSon(listeSon) {
    for (let son of listeSon) {
        son.pause();
    }
}

function collision(a, b) {

    return a.x < b.x + b.largeur &&
        a.x + a.largeur > b.x &&
        a.y < b.y + b.hauteur &&
        a.y + a.hauteur > b.y;
}

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

function debug(positionX, positionY, texte, fontsize, couleur) {

    contexteZone.fillStyle = couleur;
    contexteZone.font = fontsize;
    contexteZone.fillText(texte + "(" + positionX + "," + positionY + ")", positionX, positionY);

}