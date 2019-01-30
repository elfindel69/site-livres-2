import {
    GTCDateToDC,
    GTCDateToTC,
    UTCDateToGTCDate
} from './utils.js';

var optionsDate = {
    hour12: false,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    timeZone: 'UTC'
};

var myForm = document.getElementById('myForm');

myForm.addEventListener('reset', () => {
    let inputs = document.querySelectorAll('input[type=text], input[type=password]');

    let inputsLength = inputs.length;
    for (var i = 0; i < inputsLength; i += 1) {
        inputs[i].value = '';
    }
}, false);

var elem = document.getElementById('convert');

function afficheDates(UTCdate, GTCDate) {
    document.getElementById("UTCTime").innerHTML = UTCdate.toLocaleString("fr-FR", optionsDate);
    document.getElementById("GTCTime").innerHTML = GTCDate.getGTCDateString();
    document.getElementById("DTCTime").innerHTML = GTCDateToTC(GTCDate.mYear, GTCDate.mDays);
    document.getElementById("TMCTime").innerHTML = GTCDateToDC(GTCDate.mYear, GTCDate.mDays, GTCDate.mTimestamp);
}

function convert() {
    let lUTCTime = document.getElementById('dateUTC').value;
    let lGTCTime = document.getElementById('dateGTC').value;
    if (lUTCTime === "") {
        lUTCTime = new Date();
    }
    if (lGTCTime === "") {
        lGTCTime = UTCDateToGTCDate(lUTCTime);
    }

    afficheDates(lUTCTime, lGTCTime);

}

elem.onclick = convert;

function afficheDate() {
    let lUTCTime = new Date();
    let lGTCTime = UTCDateToGTCDate(lUTCTime);
    afficheDates(lUTCTime, lGTCTime);
}

afficheDate();