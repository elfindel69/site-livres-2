/**
 * module de conversions de dates
 * @author elfindel69
 * @version 0.0.200
 */


import { ISCurrencyToRub, eurosToRubles } from './cur_to_rub.js';
import { eurosToISCurrency, rublesToISCurrency } from './curr_to_IS.js';
import { ISCurrencyToEuros, rublesToEuros } from './curr_to_eur.js';

function strToTabIS(sIS) {
    let tab = sIS.split(' ');
    let tabRes = [];
    tabRes[0] = tab[0].substring(0, tab[0].length - 1);
    tabRes[1] = tab[1].substring(0, tab[1].length - 1);
    tabRes[2] = tab[2].substring(0, tab[2].length - 1);

    return tabRes;
}

function convert() {
    let leuros = document.getElementById('euros').value;
    let stringImp = document.getElementById('impero').value;
    let lruble = document.getElementById('rouble').value;

    let sIS = "";
    let lRub = 0.0;
    let lEuro = 0.0;

    if (leuros !== '' && stringImp === '' && lruble === '') {
        lEuro = leuros;
        let tabIS = eurosToISCurrency(leuros);
        sIS = tabIS[0] + " A " + tabIS[1] + " D " + tabIS[2] + " S";
        lRub = eurosToRubles(leuros);
    } else if (leuros === '' && stringImp !== '' && lruble === '') {
        sIS = stringImp;
        let temp = strToTabIS(stringImp);
        lEuro = ISCurrencyToEuros(temp);
        lRub = ISCurrencyToRub(temp);
    } else if (leuros === '' && stringImp === '' && lruble !== '') {
        lRub = lruble;
        let tabIS = rublesToISCurrency(lruble);
        sIS = tabIS[0] + " A " + tabIS[1] + " D " + tabIS[2] + " S";
        lEuro = rublesToEuros(lruble);
    }

    document.getElementById("ul").style.display = 'block';
    document.getElementById("n_euro").innerHTML = lEuro;
    document.getElementById("n_is").innerHTML = sIS;
    document.getElementById("n_rub").innerHTML = lRub;

}

// Utilisation d'une IIFE pour éviter les variables globales.
function show() {
    document.getElementById("ul").style.display = 'none';

    var myForm = document.getElementById('myForm');

    myForm.addEventListener('reset', () => {
        let inputs = document.querySelectorAll('input[type="number"]');

        let inputsLength = inputs.length;
        for (var i = 0; i < inputsLength; i += 1) {
            inputs[i].value = '';
        }
        document.getElementById("ul").style.display = 'none';

    }, false);

    var element = document.getElementById('convert');
    element.addEventListener("click", convert);
}

show();