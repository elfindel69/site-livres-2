import { Points } from "./classes/Points.js";

function calcDiff(diff) {
    let lDiff = Math.abs(diff);
    let res = 0;
    if (lDiff <= 5) {
        res = 1;
    }
    if (lDiff > 5 && lDiff <= 10) {
        res = 1.5;
    }
    if (lDiff > 10) {
        // eslint-disable-next-line no-mixed-operators
        res = 1.75 + (lDiff - 3) / 8;
    }

    return res;
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

/**
 * @param {number} pts1 points pays 1
 * @param {number} pts2 points pays 2
 * @param {number} coeff K
 * @param {number} diff différence de scores
 * @returns Points - nouveaux points
 */

// eslint-disable-next-line max-params
export function calcPoints(pts1, pts2, coeff, diff) {
    var newPts1 = 0;
    var newPts2 = 0;

    // calcul de G
    var lDiff = calcDiff(diff);

    // calcul de Delta
    var delta = pts1 - pts2;
    delta = delta / 400;
    delta = Math.pow(10, delta) + 1;
    delta = 1 / delta;

    delta = delta * coeff * lDiff;

    // attribution des points
    if (diff > 0) {
        newPts1 = roundToTwo(pts1 + delta);
        newPts2 = roundToTwo(pts2 - delta);
    }
    if (diff === 0) {
        newPts1 = roundToTwo(pts1 + delta);
        newPts2 = roundToTwo(pts2 + delta);
    }
    if (diff < 0) {
        newPts1 = roundToTwo(pts1 - delta);
        newPts2 = roundToTwo(pts2 + delta);
    }

    let points = new Points(newPts1, newPts2);

    return points;
}