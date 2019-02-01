import { UTCDate } from "./classes/UTCDate.js";

/**
 * module d'horloge
 * affiche l'heure des différentes capitales
 * @author elfindel69
 * @version 0.0.200
 */

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
// Fonction d'affichage
function afficheHeure() {

    // boucle sur les infos à afficher
    for (var i = 0; i < data.length; i += 1) {
        var date = new UTCDate(data[i].utc);
        document.getElementById(data[i].id).innerHTML = date.getUTCTimeString();
    }
}
// lance affichage toutes les prochaines secondes
setInterval(afficheHeure, 1000);
// affichage immédiat
afficheHeure();