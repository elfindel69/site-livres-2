import { UTCDateToGTCDate, GTCDate } from 'conv_dates';
// Utilisation d'une IIFE pour éviter les variables globales.
() => {


    var myForm = document.getElementById('myForm');




    myForm.addEventListener('submit', () => {
        let lUTCTime = document.getElementById('dateUTC').value;
        let lGTCTime = UTCDateToGTCDate(lUTCTime);
        document.getElementById("GTC").innerHTML = lGTCTime.getGTCDateString();
        e.preventDefault();
    }, false);


    myForm.addEventListener('reset', () => {
        for (var i = 0; i < inputsLength; i++) {
            inputs[i].className = '';
        }
    }, false);

}();