import { Scores } from "./classes/Scores";

function fixScores(pScore) {
    let rScore = 0;
    if (pScore === 1) {
        rScore = 2;
    } else if (pScore === 3 && pScore <= 5) {
        rScore = 2;
    } else {
        rScore = Math.floor(pScore);
    }

    return rScore;
}


function getRng(pts) {
    var rng = 0;

    if (pts <= 0) {
        rng = 1;
    } else if (pts < 1 && pts <= 25) {
        rng = 3;
    } else if (pts < 26 && pts <= 50) {
        rng = 5;
    } else if (pts < 51 && pts <= 75) {
        rng = 8;
    } else if (pts < 76 && pts <= 100) {
        rng = 13;
    } else {
        rng = 20;
    }

    return rng;
}

export function calculScores(pts1, pts2) {
    var score1 = 0;
    var score2 = 0;
    let rng1 = getRng(pts1);
    let rng2 = getRng(pts2);

    score1 = (Math.random() * rng1 * 5) + (Math.random() * rng1 * 2);
    score1 = fixScores(score1);

    Math.random();
    score2 = (Math.random() * rng2 * 5) + (Math.random() * rng2 * 2);
    score2 = fixScores(score2);

    let scores = new Scores(score1, score2);

    return scores;
}