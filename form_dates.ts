/**
 * module de conversions de dates
 * @author elfindel69
 * @version 0.0.200
 */

import {optionsDate, UTCDateToGTCDate} from './UTCDate'
import {GTCDateToDC, GTCDateToTC} from './utils';
import { GTCDate } from './GTCDate';

var myForm = document.getElementById('myForm');

myForm.addEventListener('reset', () => {
    let inputs = document.querySelectorAll('input[type=text]');

    let inputsLength = inputs.length;
    for (var i = 0; i < inputsLength; i += 1) {
        inputs[i].nodeValue = '';
    }
}, false);

var elem = document.getElementById('convert');

function afficheDates(UTCdate: Date, GTCDate: GTCDate) {
    document.getElementById("UTCTime").innerHTML = UTCdate.toLocaleString("fr-FR", optionsDate);
    document.getElementById("GTCTime").innerHTML = GTCDate.getGTCDateString();
    document.getElementById("DTCTime").innerHTML = GTCDateToTC(GTCDate.mYear, GTCDate.mDays);
    document.getElementById("TMCTime").innerHTML = GTCDateToDC(GTCDate.mYear, GTCDate.mDays, GTCDate.mTimestamp);
}

function convert() {
    let lGTCTime = document.getElementById('dateGTC').nodeValue;
    let lUTCTime = document.getElementById('dateUTC').nodeValue;
    let lUTCDate: Date;
    let lGTCDate: GTCDate;
    if (lUTCTime !== "") {
        lUTCDate = new Date(lUTCTime);
    }
    if (lGTCTime === "") {
        lGTCDate = UTCDateToGTCDate(lUTCDate);
    }

    afficheDates(lUTCDate, lGTCDate);

}

elem.onclick = convert;

function afficheDate() {
    let lUTCTime = new Date();
    let lGTCTime = UTCDateToGTCDate(lUTCTime);
    afficheDates(lUTCTime, lGTCTime);
}

afficheDate();
