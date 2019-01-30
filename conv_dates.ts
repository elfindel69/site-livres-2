import { GTCDateToDC, GTCDateToTC} from './utils';

import {optionsDate, UTCDateToGTCDate} from './UTCDate';

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