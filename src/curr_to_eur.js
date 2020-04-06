import { roundToTwo } from './classes/Utils.js';

export function ISCurrencyToEuros(tabIS) {
    let res1 = 0.0;
    let res2 = 0.0;
    let res3 = 0.0;
    res1 = tabIS[0] * 10;
    res2 = tabIS[1] * 0.5;
    res3 = tabIS[2] * 0.04;

    let temp = res1 + res2 + res3;
    return roundToTwo(temp);
}

export function rublesToEuros(ruble) {
    return roundToTwo(ruble / 0.142);
}