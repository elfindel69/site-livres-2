/**
 * module d'horloge
 * affiche l'heure au format UTC, GTC et TimeCode
 * @author elfindel69
 * @version 0.0.200
 */
define(["require", "exports", "./utils", "./UTCDate"], function (require, exports, utils_1, UTCDate_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Fonction d'affichage
    function afficheHeure() {
        var lDate = new Date();
        document.getElementById("UTC").innerHTML = lDate.toLocaleString("fr-FR", UTCDate_1.optionsDate);
        var lDateGTC = UTCDate_1.UTCDateToGTCDate(lDate);
        document.getElementById("GTC").innerHTML = lDateGTC.getGTCDateString();
        document.getElementById("DTC").innerHTML = utils_1.GTCDateToTC(lDateGTC.mYear, lDateGTC.mDays);
        document.getElementById("TMC").innerHTML = utils_1.GTCDateToDC(lDateGTC.mYear, lDateGTC.mDays, lDateGTC.mTimestamp);
    }
    // lance affichage toutes les prochaines secondes
    setInterval(afficheHeure, 1000);
    // affichage immédiat
    afficheHeure();
});
