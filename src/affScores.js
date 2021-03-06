/**
 * Module d'affichage de scores
 * @author elfindel69
 * @version 0.2.0
 */

import { Country } from "./classes/countries.js";
import { calcScores } from "./calcScores.js";


// Affichage des nouveaux scores
function showScores(Ct1, Ct2) {
    document.getElementById("ul").style.display = 'block';
    document.getElementById("ct1").innerHTML = Ct1.name;
    document.getElementById("score1").innerHTML = Ct1.score;
    document.getElementById("ct2").innerHTML = Ct2.name;
    document.getElementById("score2").innerHTML = Ct2.score;
}

// Calcul des scores
function runScores() {
    let pts1 = document.getElementById('pts1').value;
    let pts2 = document.getElementById('pts2').value;
    let ct1 = document.getElementById('pays1').value;
    let ct2 = document.getElementById('pays2').value;

    var Ct1 = new Country(ct1, pts1, 0);
    var Ct2 = new Country(ct2, pts2, 0);

    let scores = calcScores(pts1, pts2);
    Ct1.score = scores.score1;
    Ct2.score = scores.score2;
    showScores(Ct1, Ct2);
}

// Pré-affichage et ajout listener.
function show() {
    var myForm = document.getElementById('myForm');
    var element = document.getElementById('runScores');
    document.getElementById("ul").style.display = 'none';


    myForm.addEventListener('reset', () => {
        let inputs = document.querySelectorAll([
            'input[type="number"]',
            'input[type="text"]'
        ]);

        let inputsLength = inputs.length;
        for (let cpt = 0; cpt < inputsLength; cpt += 1) {
            inputs[cpt].value = '';
        }
        document.getElementById("ul").style.display = 'none';
    }, false);


    element.addEventListener("click", runScores);
}

show();