import {
    GTCDateToDC,
    GTCDateToTC,
    UTCDateToGTCDate
} from './utils.js';

var optionsDate = {
    hour12: false,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    timeZone: 'UTC'
};

// Fonction d'affichage
function afficheHeure() {
    let lDate = new Date();
    document.getElementById("UTC").innerHTML = lDate.toLocaleString("fr-FR", optionsDate);
    let lDateGTC = UTCDateToGTCDate(lDate);
    document.getElementById("GTC").innerHTML = lDateGTC.getGTCDateString();

    document.getElementById("DTC").innerHTML = GTCDateToTC(lDateGTC.mYear, lDateGTC.mDays);
    document.getElementById("TMC").innerHTML = GTCDateToDC(lDateGTC.mYear, lDateGTC.mDays, lDateGTC.mTimestamp);
}

// lance affichage toutes les prochaines secondes
setInterval(afficheHeure, 1000);
// affichage immédiat
afficheHeure();