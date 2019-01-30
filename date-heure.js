"use strict";
/**
 * module d'horloge
 * affiche l'heure des différentes capitales
 * @author elfindel69
 * @version 0.0.200
 */
exports.__esModule = true;
var UTCDate_1 = require("./UTCDate");
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
    var i, nb = data.length, date = new Date();
    // boucle sur les infos à afficher
    for (i = 0; i < nb; i += 1) {
        UTCDate_1.optionsDate.timeZone = data[i].utc;
        document.getElementById(data[i].id).innerHTML = date.toLocaleString('fr-FR', UTCDate_1.optionsDate);
    }
}
// lance affichage toutes les prochaines secondes
setInterval(afficheHeure, 1000);
// affichage immédiat
afficheHeure();
