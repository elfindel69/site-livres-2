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

const TOGTCYEAR = 8200;
const TOMIGYEAR = 10000;

// Fonction d'affichage
function afficheHeure() {
    let date = new Date();
    document.getElementById("UTC").innerHTML = date.toLocaleString("fr-FR", optionsDate);
    let timestamp = toTimeStamp(date);
    var GTCyear = Math.floor(timestamp / 2901600) + TOGTCYEAR;
    var GTCDate = year;
    document.getElementById("GTC").innerHTML = year;



}

function toTimeStamp(now) {
    const ZEROTIME = new Date("1 January 2011");
    return new Number((now.getTime() - ZEROTIME.getTime()) / 1000).toFixed(0);
}
// lance affichage toutes les prochaines secondes
setInterval(afficheHeure, 1000);
// affichage immédiat
afficheHeure();