"use strict";
/**
 * module de conversions de dates
 * @author elfindel69
 * @version 0.0.200
 */
exports.__esModule = true;
var UTCDate_1 = require("./UTCDate");
var utils_1 = require("./utils");
var myForm = document.getElementById('myForm');
myForm.addEventListener('reset', function () {
    var inputs = document.querySelectorAll('input[type=text]');
    var inputsLength = inputs.length;
    for (var i = 0; i < inputsLength; i += 1) {
        inputs[i].nodeValue = '';
    }
}, false);
var elem = document.getElementById('convert');
function afficheDates(UTCdate, GTCDate) {
    document.getElementById("UTCTime").innerHTML = UTCdate.toLocaleString("fr-FR", UTCDate_1.optionsDate);
    document.getElementById("GTCTime").innerHTML = GTCDate.getGTCDateString();
    document.getElementById("DTCTime").innerHTML = utils_1.GTCDateToTC(GTCDate.mYear, GTCDate.mDays);
    document.getElementById("TMCTime").innerHTML = utils_1.GTCDateToDC(GTCDate.mYear, GTCDate.mDays, GTCDate.mTimestamp);
}
function convert() {
    var lGTCTime = document.getElementById('dateGTC').nodeValue;
    var lUTCTime = document.getElementById('dateUTC').nodeValue;
    var lUTCDate;
    var lGTCDate;
    if (lUTCTime !== "") {
        lUTCDate = new Date(lUTCTime);
    }
    if (lGTCTime === "") {
        lGTCDate = UTCDate_1.UTCDateToGTCDate(lUTCDate);
    }
    afficheDates(lUTCDate, lGTCDate);
}
elem.onclick = convert;
function afficheDate() {
    var lUTCTime = new Date();
    var lGTCTime = UTCDate_1.UTCDateToGTCDate(lUTCTime);
    afficheDates(lUTCTime, lGTCTime);
}
afficheDate();
