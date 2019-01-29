// Utilisation d'une IIFE pour éviter les variables globales.
() => {


    var myForm = document.getElementById('myForm');




    myForm.addEventListener('submit', () => { e.preventDefault(); }, false);


    myForm.addEventListener('reset', () => {
        for (var i = 0; i < inputsLength; i++) {
            inputs[i].className = '';
        }
    }, false);

}();