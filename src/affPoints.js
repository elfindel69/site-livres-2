import { Country } from "./classes/countries.js";
import { calcPoints } from "./calcPoints.js";

/**
 * Module d'affichage de points
 * @author elfindel69
 * @version 0.2.0
 */

// Affichage des nouveaux scores
function showPoints(Ct1, Ct2) {
    document.getElementById("ul").style.display = 'block';
    document.getElementById("ct1").innerHTML = Ct1.name;
    document.getElementById("newPts1").innerHTML = Ct1.oldPts;
    document.getElementById("ct2").innerHTML = Ct2.name;
    document.getElementById("newPts2").innerHTML = Ct2.oldPts;
}

// Calcul des scores
function runPoints() {
    let score1 = document.getElementById('score1').value;
    let score2 = document.getElementById('score2').value;
    let pts1 = document.getElementById('pts1').value;
    let pts2 = document.getElementById('pts2').value;
    pts1 = parseFloat(pts1);
    pts2 = parseFloat(pts2);
    let ct1 = document.getElementById('pays1').value;
    let ct2 = document.getElementById('pays2').value;
    let index = document.getElementById('coeff').selectedIndex;
    let coeff = document.getElementById('coeff').children[index].value;
    var Ct1 = new Country(ct1, 0, pts1);
    var Ct2 = new Country(ct2, 0, pts2);

    var diff = score1 - score2;

    let points = calcPoints(pts1, pts2, coeff, diff);
    Ct1.oldPts = points.pts1;
    Ct2.oldPts = points.pts2;
    showPoints(Ct1, Ct2);
}

// Pré-affichage et ajout listener.
function show() {
    var myForm = document.getElementById('myForm');
    var element = document.getElementById('runPoints');
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
    }, false);


    element.addEventListener("click", runPoints);
}

show();