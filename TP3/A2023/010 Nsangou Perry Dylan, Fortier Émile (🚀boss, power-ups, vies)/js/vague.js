function initialiserVague(envahisseurs) {
    var special_spawn = Math.random() <= CHANCE_SPECIAL_SPAWN;

    // Si un envahisseur spécial est apparu a la derniere vague
    if (hasSpecialSpawned) {
        // Empeche un envahisseur spécial d'apparaitre 2 vague d'affilé
        hasSpecialSpawned = false;
        special_spawn = false;
    }

    // Incrémente le niveau de vague
    gNiveauVague++;

    // Calcule l'intervalle entre les tirs en fonction du niveau de vague
    gIntervalleEntreTirs = INTERVAL_TIR_DEPART - (gNiveauVague * DECREMENT_VITESSE_TIR);

    // Vide le tableau des envahisseurs existants
    envahisseurs.length = 0;

    // Calcule la quantité d'envahisseurs et la vitesse actuelle en fonction du niveau de vague
    const quantiteEnvahisseursActuelle = NB_ENVAHISSEURS_PAR_VAGUE * gNiveauVague;
    const vitesseActuelle = VITESSE_Y_MINIMALE + (gNiveauVague * INCREMENT_VITESSE);
    const nombreDeLignes = quantiteEnvahisseursActuelle / MAXIMUM_ENVAHISSEURS_PAR_LIGNE;

    // Calcule la largeur totale des envahisseurs et la marge gauche
    const largeurTotalEnvahisseurs = MAXIMUM_ENVAHISSEURS_PAR_LIGNE * ESPACE_ENTRE_ENVAHISSEURS;
    const margeGauche = ((ZoneDeJeu.width - largeurTotalEnvahisseurs) / 2) + DEPLACEMENT_MARGE_GAUCHE;

    var is_boss_wave = (gNiveauVague % 5 == 0);
    if (is_boss_wave) {
        special_spawn = false;
        envahisseurs.push({
            x: (ZoneDeJeu.width - 250) / 2,
            y: DEBUT_Y_ENVAHISSEURS - DISTANCE_Y_ENTRE_LIGNES - 60,
            largeur: 250,
            hauteur: 50,
            vitesseVerticale: vitesseActuelle,
            vitesseHorizontale: 0,
            couleur: "#ff3d1f",
            points: 200,
            is_special: false,
            flash_count: 0,
            is_boss: true,
            hp: BOSS_HP + Math.floor(gNiveauVague/2)
        });
    }

    let ligne = 0;
    while (ligne < nombreDeLignes) {
        let i = 0;
        while (i < MAXIMUM_ENVAHISSEURS_PAR_LIGNE) {
            // Détermine si l'envahisseur est rapide ou étroit en fonction d'une probabilité
            const estEnvahisseurRapideHorizontal = Math.random() > CHANCE_RAPIDE_DE_BASE - (gNiveauVague * INCREMENT_NIVEAU);
            const estEnvahisseurRapideVertical = Math.random() > CHANCE_RAPIDE_DE_BASE - (gNiveauVague * INCREMENT_NIVEAU);
            const etroit = Math.random() > CHANCE_ETROIT_DE_BASE - (gNiveauVague * INCREMENT_NIVEAU);

            /*
            Dans le code que vous avez fourni, envahisseurs est un tableau (ou array) en JavaScript.
             La méthode push est une méthode native des tableaux en JavaScript qui permet d'ajouter un nouvel élément à la fin du tableau. 
             L'élément ajouté peut être de n'importe quel type, y compris un objet, une chaîne de caractères, un nombre, etc. 
             Dans ce cas, le code utilise la méthode push pour ajouter un nouvel "envahisseur" à la fin du tableau envahisseurs.
             L'envahisseur est représenté par un objet JavaScript avec plusieurs propriétés définies, telles que x, y, largeur, hauteur, etc.
             */
            
            let is_special = false;
            random_number = Math.random();
            if (special_spawn && !hasSpecialSpawned && gNiveauVague >= SPECIAL_MIN_WAVE && random_number <= CHANCE_SPECIFIC_SPECIAL_SPAWN) {
                hasSpecialSpawned = true;
                is_special = true;
            }
             
                

            // Ajoute un nouvel envahisseur avec ses propriétés
            envahisseurs.push({
                // Position horizontale de l'envahisseur
                x: margeGauche + i * ESPACE_ENTRE_ENVAHISSEURS + (estEnvahisseurRapideHorizontal ? AJUSTEMENT_POSITION_RAPIDE : 0),

                // Position verticale de l'envahisseur
                y: DEBUT_Y_ENVAHISSEURS + ligne * DISTANCE_Y_ENTRE_LIGNES,

                // Largeur de l'envahisseur (étroite ou standard)
                largeur: (etroit ? TAILLE_ETROITE : TAILLE_STANDARD),

                // Hauteur de l'envahisseur
                hauteur: HAUTEUR_ENVAHISSEUR,

                // Vitesse verticale de l'envahisseur (rapide ou normale)
                vitesseVerticale: estEnvahisseurRapideVertical ? vitesseActuelle * MULTIPLICATEUR_VITESSE_RAPIDE_VERTICALE : vitesseActuelle,

                // Vitesse horizontale de l'envahisseur (rapide ou nulle)
                vitesseHorizontale: estEnvahisseurRapideHorizontal ? VITESSE_HORIZONTALE : 0,

                // Couleur de l'envahisseur en fonction de sa vitesse et de sa largeur
                couleur: estEnvahisseurRapideHorizontal ? (etroit ? (estEnvahisseurRapideVertical ? "#002db3": "#7700ff") : (estEnvahisseurRapideVertical ? "#00ff00" : "#00ffff")) :
                                                          (etroit ? (estEnvahisseurRapideVertical ? "#b30000": "#ffaa00") : (estEnvahisseurRapideVertical ? "#ff00ff" : "#ffff00")),

                // Nombre de points attribués au joueur pour avoir détruit cet envahisseur
                points: is_special ? 50 : (estEnvahisseurRapideHorizontal ? (estEnvahisseurRapideVertical ? 25 : 10) : (estEnvahisseurRapideVertical ? 15 : 5)),

                is_special: is_special,
                flash_count: 0,
                is_boss: false
            });

            i++;
        }
        ligne++;
    }
}   