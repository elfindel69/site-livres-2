import { roundToTwo } from './classes/Utils.js';

export function eurosToRubles(euro) {
    let temp = euro / 7;
    return roundToTwo(temp);
}

export function ISCurrencyToRub(tabIS) {
    let res1 = 0.0;
    let res2 = 0.0;
    let res3 = 0.0;
    res1 = Math.trunc(tabIS[0] * 1.43);
    res2 = tabIS[1] * 0.072;
    res3 = tabIS[2] * 0.006;
    let temp = res1 + res2 + res3;
    return roundToTwo(temp);
}