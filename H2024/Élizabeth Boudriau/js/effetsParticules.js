// Un tableau pour stocker les particules individuelles de l'effet d'explosion.
const particules = [];

// ----- EFFET EXPLOSION -----
// Définition d'une classe Particule pour créer des objets particules individuels.
class Particule {
    constructor(x, y) {
        this.x = x; // Position horizontale de la particule.
        this.y = y; // Position verticale de la particule.
        // Vitesse horizontale et verticale aléatoire pour chaque particule.
        this.vitesseX = (Math.random() - 0.5) * 10;
        this.vitesseY = (Math.random() - 0.5) * 10;
        // Taille aléatoire pour chaque particule.
        this.taille = Math.random() * 5 + 1;
        // Durée de vie initiale de la particule.
        this.dureeDeVie = 100;

        // Choix aléatoire de couleur entre rouge, orange et jaune.
        const choix = Math.random();
        this.couleurOriginale = choix < 0.33 ? { r: 255, g: 0, b: 0 } : // Rouge
                               choix < 0.66 ? { r: 255, g: 165, b: 0 } : // Orange
                                              { r: 255, g: 255, b: 0 };  // Jaune
    }

    // Fonction pour mettre à jour la position et la durée de vie de la particule.
    update() {
        this.x += this.vitesseX;
        this.y += this.vitesseY;
        // Occasionnellement, change la couleur à blanc pour un effet scintillant.
        this.couleur = Math.random() > 0.9 ? { r: 255, g: 255, b: 255 } : this.couleurOriginale;
        this.dureeDeVie--;
    }

    // Fonction pour dessiner la particule sur le canvas.
    draw(ctx) {
        // Définit la couleur de remplissage et l'ombre pour la particule.
        ctx.fillStyle = `rgb(${this.couleur.r}, ${this.couleur.g}, ${this.couleur.b})`;
        ctx.shadowBlur = 15; // Flou de l'ombre pour un effet lumineux.
        ctx.shadowColor = `rgb(${this.couleur.r}, ${this.couleur.g}, ${this.couleur.b})`;
        // Dessine la particule comme un cercle.
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.taille, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}

// Fonction pour créer une explosion en générant plusieurs particules.
function creerExplosion(x, y) {
    // Génère un nombre aléatoire de particules pour l'explosion.
    const nombreDeParticules = Math.floor(Math.random() * 20 + 10);
    for (let i = 0; i < nombreDeParticules; i++) {
        // Ajoute chaque nouvelle particule au tableau des particules.
        particules.push(new Particule(x, y));
    }
}

// Fonction pour mettre à jour et dessiner toutes les particules.
function dessinerParticules() {
    // Itère à travers le tableau des particules à l'envers pour pouvoir les supprimer en place.
    for (let i = particules.length - 1; i >= 0; i--) {
        // Met à jour et dessine chaque particule.
        particules[i].update();
        particules[i].draw(contexteZone);
        // Supprime les particules dont la durée de vie est épuisée.
        if (particules[i].dureeDeVie <= 0) {
            particules.splice(i, 1);
        }
    }
}

