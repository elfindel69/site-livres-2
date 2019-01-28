// constante
const HEURE = 1000 * 60 * 60;
// Données d'affichage et de traitement
var data = [
    { 'id': 'papeete', 'utc': -10 }, // -10 UTC
    { 'id': 'martinique', 'utc': -4 }, // -04 UTC
    { 'id': 'saint-pierre', 'utc': -3 }, // -03 UTC
    { 'id': 'brest', 'utc': +1 }, // +01 UTC
    { 'id': 'reunion', 'utc': +4 }, // +04 UTC
    { 'id': 'noumea', 'utc': +11 }, // +11 UTC
    { 'id': 'londres', 'utc': 0 }
];
// format d'affichage pour les navigateurs récents ;)
// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Date/toLocaleString
var optionsDate = {
    //  hour12: false,
    weekday: 'long',
    //  year:     'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
};
// Différence entre le fuseau horaire UTC, et celui de l'heure locale.
var offsetDate = new Date().getTimezoneOffset() / 60;
// Fonction d'affichage
function afficheHeure() {
    let i,
        nb = data.length,
        dTemp,
        date = new Date();
    // boucle sur les infos à afficher
    for (i = 0; i < nb; i += 1) {
        dTemp = new Date();
        dTemp.setTime(date.getTime() + ((data[i].utc + offsetDate) * HEURE));
        document.getElementById(data[i].id).innerHTML = dTemp.toLocaleString('fr-FR', optionsDate);
    }
}
// lance affichage toutes les prochaines secondes
setInterval(afficheHeure, 1000);
// affichage immédiat
afficheHeure();