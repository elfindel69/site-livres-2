// Données d'affichage et de traitement
var data = [
    { 'id': 'TFR', 'utc': 'America/Toronto' },
    { 'id': 'AFR', 'utc': 'Africa/Nairobi' },
    { 'id': 'CAC', 'utc': 'America/Guyana' },
    { 'id': 'NAM', 'utc': 'America/New_York' },
    { 'id': 'SAM', 'utc': 'America/Montevideo' },
    { 'id': 'EUA', 'utc': 'Europe/Moscow' },
    { 'id': 'EUR', 'utc': 'Europe/Brussels' },
    { 'id': 'MES', 'utc': 'Africa/Cairo' },
    { 'id': 'SEA', 'utc': 'Asia/Jakarta' },
    { 'id': 'SWA', 'utc': 'Asia/Tehran' },
    { 'id': 'OCN', 'utc': 'Pacific/Auckland' },
    { 'id': 'UTC', 'utc': 'UTC' }
];
// format d'affichage pour les navigateurs récents ;)
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toLocaleString
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
        optionsDate.timeZone = data[i].utc;
        document.getElementById(data[i].id).innerHTML = date.toLocaleString('fr-FR', optionsDate);
    }
}
// lance affichage toutes les prochaines secondes
setInterval(afficheHeure, 1000);
// affichage immédiat
afficheHeure();