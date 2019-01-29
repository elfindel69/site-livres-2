import {
    UTCDateToGTCDate
} from './conv_dates.js';
// Utilisation d'une IIFE pour éviter les variables globales.
() => {
    var myForm = document.getElementById('myForm');

    myForm.addEventListener('reset', () => {
        let inputs = document.querySelectorAll('input[type=text], input[type=password]');

        let inputsLength = inputs.length;
        for (var i = 0; i < inputsLength; i += 1) {
            inputs[i].value = '';
        }
    }, false);

    var element = document.getElementById('convert');


    element.onclick = convert();

}();


function convert() {
    let lUTCTime = document.getElementById('dateUTC').value;
    let lGTCTime = UTCDateToGTCDate(lUTCTime);
    document.getElementById("GTC").innerHTML = lGTCTime.getGTCDateString();

}