import { UTCDate } from './classes/UTCDate.js';

/**
 * module d'horloge
 * affiche l'heure au format UTC, GTC et TimeCode
 * @author elfindel69
 * @version 0.0.200
 */

// Fonction d'affichage
function afficheHeure() {
    let lDate = new UTCDate();
    document.getElementById("UTC").innerHTML = lDate.getUTCTimeString();
    let lDateGTC = lDate.UTCDateToGTCDate();
    document.getElementById("GTC").innerHTML = lDateGTC.getGTCTimeString();
    document.getElementById("DTC").innerHTML = lDateGTC.GTCDateToTC();
}

// lance affichage toutes les prochaines secondes
setInterval(afficheHeure, 1000);
// affichage immédiat
afficheHeure();