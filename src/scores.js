// /Module scores

function convert_s() {
    let pts1 = document.getElementById('pts1').value;
    let pts2 = document.getElementById('pts2').value;
    var score1 = 0;
    var score2 = 0;


    let diff = Math.abs(pts1 - pts2);
    let rng = 0;

    if (diff <= 5) {
        rng = 3;
    } else if (diff < 6 && diff <= 10) {
        rng = 5;
    } else if (diff < 11 && diff <= 15) {
        rng = 8;
    } else if (diff < 16 && diff <= 20) {
        rng = 13;
    } else {
        rng = 20;
    }

    const FORMULA = (Math.random() * rng * 5) + (Math.random() * rng * 2);
    score1 = FORMULA;
    score2 = FORMULA;

    document.getElementById("score1").innerHTML = score1;
    document.getElementById("score2").innerHTML = score2;
}