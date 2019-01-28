function compZero(nombre) {
    return nombre < 10 ? '0' + nombre : nombre;
}

function date_heure() {
    const infos = new Date();

    //Heure
    document.getElementById('date_heure').innerHTML = 'Il est ' + compZero(infos.getHours()) + ' heures ' + compZero(infos.getMinutes()) + ', ' + compZero(infos.getSeconds());

    //Date
    const mois = new Array('janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre');
    const jours = new Array('dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi');
    document.getElementById('date_heure').innerHTML += ' et nous sommes le ' + jours[infos.getDay()] + ' ' + infos.getDate() + ' ' + mois[infos.getMonth()] + ' ' + infos.getFullYear() + '.';
}

window.onload = function() {
    setInterval(date_heure(), 1000); //Actualisation de l'heure
};