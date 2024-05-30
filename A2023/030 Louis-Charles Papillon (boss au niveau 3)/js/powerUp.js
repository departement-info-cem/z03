let IntervalleTirNormal = 0;

function powerUp() {                                                     
    if (Date.now() - gTempsDernierPowerUp >= gCooldownPowerUp && gScore >= gCoutPowerUp) {
        gScore -= gCoutPowerUp;
        etatTouches.powerup = true;
        setTimeout(finPowerUp, gDurationPowerUp);
        gTempsDernierPowerUp = Date.now();
        IntervalleTirNormal = gIntervalleEntreTirs;
        gIntervalleEntreTirs = 100;
    }
}

function finPowerUp() {
    if (etatTouches.powerup == true) {
        etatTouches.powerup = false;
        gCoutPowerUp += 100;
        gCooldownPowerUp += 5000;

        gIntervalleEntreTirs = IntervalleTirNormal;
    }
}