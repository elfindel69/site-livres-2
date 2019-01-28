var optionsDate = {
    hour12: false,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
};

// Fonction d'affichage
function afficheHeure() {
    let i,
        nb = data.length,
        date = new Date();
    // boucle sur les infos à afficher
    for (i = 0; i < nb; i += 1) {
        dTemp = new Date();
        optionsDate.timeZone = data[i].utc;
        document.getElementById(data[i].id).innerHTML = date.toLocaleString('fr-FR', optionsDate);
    }

    optionsDate.timeZone = "UTC";
    document.getElementById("londres").innerHTML = date.toLocaleString("fr-FR", optionsDate);
}
// lance affichage toutes les prochaines secondes
setInterval(afficheHeure, 1000);
// affichage immédiat
afficheHeure();