/**
 * module de conversions de dates
 * @author elfindel69
 * @version 0.0.200
 */

import { GTCDate, TimeStringToGTCDate } from './classes/GTCDate.js';
import { TimeCodeToGTCDate } from './TimeCodeToGTCDate.js';
import { UTCDate } from './classes/UTCDate.js';


function convert() {
    let lLocalTime = document.getElementById('dateUTC').value;
    let lGTCTime = document.getElementById('dateGTC').value;
    let lTMCTime = document.getElementById('timeCode').value;

    let lUTCDate = new UTCDate();
    let lGTCDate = new GTCDate();

    if (lLocalTime !== '' && lGTCTime === '' && lTMCTime === '') {
        let UTCTime = lLocalTime + 'Z';
        lUTCDate.mDate = new Date(UTCTime);
        lGTCDate = lUTCDate.UTCDateToGTCDate();
    } else if (lLocalTime === '' && lGTCTime !== '' && lTMCTime === '') {
        lGTCDate = TimeStringToGTCDate(lGTCTime);
        lUTCDate = lGTCDate.GTCDateToUTCDate();
    } else if (lLocalTime === '' && lGTCTime === '' && lTMCTime !== '') {
        lGTCDate = TimeCodeToGTCDate(lTMCTime);
        lUTCDate = lGTCDate.GTCDateToUTCDate();
    }

    document.getElementById("ul").style.display = 'block';
    document.getElementById("UTC").innerHTML = lUTCDate.getUTCTimeString();
    document.getElementById("GTC").innerHTML = lGTCDate.getGTCTimeString();
    document.getElementById("TMC").innerHTML = lGTCDate.GTCDateToTC();

}

// Utilisation d'une IIFE pour éviter les variables globales.
function show() {
    document.getElementById("ul").style.display = 'none';

    var myForm = document.getElementById('myForm');

    myForm.addEventListener('reset', () => {
        let inputs = document.querySelectorAll('input[type="text"]');

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