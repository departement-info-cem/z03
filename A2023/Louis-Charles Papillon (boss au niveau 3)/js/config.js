// ----- INITIALISATION DU CANVAS -----
// Ces deux constantes initialisent le canvas sur lequel le jeu se déroulera.
const ZoneDeJeu = document.getElementById('zoneJeu');

//Plus d'info sur l'objet Canvas
//https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API
const contexteZone = ZoneDeJeu.getContext('2d');

// ----- VARIABLES GLOBALES -----
// Ces variables stockent des informations telles que le moment du dernier tir, l'intervalle entre les tirs, le niveau actuel et le score.
let gMomentactuel = 0;
let gTempsDernierPowerUp = 0;
let gMomentDernierTir = 0; // Heure à laquelle le dernier tir a été effectué, initialisé à 0.
let gIntervalleEntreTirs = 0; // Temps minimum en millisecondes à attendre entre deux tirs.
let gNiveauVague = 0; // Indicateur du niveau ou de la vague actuelle à laquelle le joueur se trouve.
let gNiveauVagueBoss = 0;
let gCooldownPowerUp = 30000;
let gCoutPowerUp = 500;
let gDurationPowerUp = 5000;
let gScore = 0; // Score actuel du joueur dans le jeu.
let gSonActif = true; // Commutateur pour activer ou désactiver les effets sonores dans le jeu.
let gLeaderboard = document.querySelectorAll('#leaderboard li');
let gHighScores = Array.from(gLeaderboard).map(element => parseInt(element.textContent));

// ----- CARACTÉRISTIQUES DU JOUEUR -----
// Objet représentant le joueur et ses propriétés.
const COULEUR_JOUEUR = "#0000ff";
const joueur = {
    x: ZoneDeJeu.width / 2,
    y: ZoneDeJeu.height - 40,
    largeur: 50,
    hauteur: 20,
    vitesseDeplacement: 8
};
const MODIFICATION_VITESSE_MAJUSCULE= 0.5;

// ----- TIR -----

const tirs = []; // Tableau pour stocker et gérer tous les tirs actifs à l'écran.
const INTERVAL_TIR_DEPART = 400; // Intervalle de temps de départ en millisecondes entre les tirs successifs.
const VITESSE_DEPLACEMENT_TIR = -5; // Vitesse de déplacement des tirs sur l'axe Y; une valeur négative indique un mouvement vers le haut.
const COULEUR_TIR = "#00ff00"; // Couleur des tirs, ici un vert vif.
const TIR_LARGEUR=5; // Largeur des tirs 
const TIR_HAUTEUR=25; // Hauteur des tirs 
const DURATION_POWER_UP = 0; //changer??

// ----- AUDIO -----
const sonTir = [] ;
sonTir[0]= document.getElementById("sonTir1");
sonTir[1]= document.getElementById("sonTir2");
sonTir[2]= document.getElementById("sonTir3"); 

const sonExplosion = [];
sonExplosion[0]= document.getElementById("sonExplosion1");
sonExplosion[1]= document.getElementById("sonExplosion2");
sonExplosion[2]= document.getElementById("sonExplosion3");


const sonMusique = [];
sonMusique[0]= document.getElementById("musique1");
sonMusique[1]= document.getElementById("musique2");

// ----- CONSTRUCTION DES ENVAHISSEURS -----


const envahisseurs = []; // Tableau pour stocker les objets envahisseurs.
const NB_ENVAHISSEURS_PAR_VAGUE = 5; // Nombre d'envahisseurs à générer par vague.
const VITESSE_Y_MINIMALE = 0.11; // Vitesse minimale sur l'axe Y pour les envahisseurs, détermine la vitesse de descente.
const MAXIMUM_ENVAHISSEURS_PAR_LIGNE = 10; // Nombre maximal d'envahisseurs qui peuvent être alignés horizontalement.
const ESPACE_ENTRE_ENVAHISSEURS = 80; // Espace horizontal entre chaque envahisseur.
const DEPLACEMENT_MARGE_GAUCHE = 40; // Marge de déplacement sur le côté gauche pour les envahisseurs, détermine où la ligne d'envahisseurs commence sur l'axe X.
const DISTANCE_Y_ENTRE_LIGNES = 40; // Distance verticale entre chaque ligne d'envahisseurs.
const TAILLE_STANDARD = 50; // Taille standard pour la largeur de l'envahisseur.
const TAILLE_ETROITE = 35; // Taille réduite pour la largeur de l'envahisseur, utilisée pour des envahisseurs plus difficiles à toucher.
const HAUTEUR_ENVAHISSEUR = 20; // Hauteur standard pour tous les envahisseurs.
const VITESSE_HORIZONTALE = 0.9; // Vitesse horizontale de base pour les envahisseurs rapides.
const MULTIPLICATEUR_VITESSE_RAPIDE_VERTICALE = 2; // Multiplicateur appliqué à la vitesse des envahisseurs rapides, augmente leur vitesse verticale.
const CHANCE_RAPIDE_DE_BASE = 0.95; // Probabilité de base qu'un envahisseur soit rapide, influençant la variété des ennemis.
const CHANCE_ETROIT_DE_BASE = 0.95; // Probabilité de base qu'un envahisseur soit de taille étroite.
const INCREMENT_NIVEAU = 0.03; // Incrément appliqué au niveau de difficulté après chaque vague, augmente la difficulté du jeu progressivement.
const AJUSTEMENT_POSITION_RAPIDE = 10; // Ajustement de la position X pour les envahisseurs rapides, pour les aligner correctement avec les autres.
const DEBUT_Y_ENVAHISSEURS = 30; // Position de départ sur l'axe Y pour la première vague d'envahisseurs.
const INCREMENT_VITESSE = 0.005; // Incrément de vitesse appliqué aux envahisseurs à chaque niveau, les rendant progressivement plus rapides.
const DECREMENT_VITESSE_TIR = 8; // Diminution du délai de tir (plus rapide à chaque vague)
