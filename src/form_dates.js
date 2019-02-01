/**
 * module de conversions de dates
 * @author elfindel69
 * @version 0.0.200
 */

import { UTCDate } from './classes/UTCDate';

function convert() {
    let lUTCTime = document.getElementById('dateUTC').value;

    let lGTCTime = UTCDateToGTCDate(lUTCTime);
    document.getElementById("GTC").innerHTML = lGTCTime.getGTCDateString();

}

// Utilisation d'une IIFE pour éviter les variables globales.
() => {
    var myForm = document.getElementById('myForm');

    myForm.addEventListener('reset', () => {
        let inputs = document.querySelectorAll('input[type=text]]');

        let inputsLength = inputs.length;
        for (var i = 0; i < inputsLength; i += 1) {
            inputs[i].value = '';
        }
    }, false);

    var element = document.getElementById('convert');


    element.onclick = convert();

}();