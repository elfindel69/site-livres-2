import { myDiv } from './classes/myDiv.js';

export function eurosToISCurrency(euro) {
    let aur = 0;
    let den = 0.0;
    let ses = 0.0;
    let temp = 0.0;

    let div1 = new myDiv();
    let res1 = div1.div(euro, 10);
    aur = res1.quot;
    temp = res1.rest;

    let res2 = temp / 0.5;
    den = Math.floor(res2);
    temp = res2 % 1;

    ses = Math.trunc(temp * 12);

    let tabIS = [aur, den, ses];

    return tabIS;
}

export function rublesToISCurrency(ruble) {
    let aur = 0;
    let den = 0.0;
    let ses = 0.0;
    let temp = 0.0;

    let div1 = new myDiv();
    let res1 = div1.div(ruble, 1.43);
    aur = res1.quot;
    temp = res1.rest;

    let res2 = temp * 20;
    den = Math.floor(res2);
    if (den > 19) {
        aur += 1;
        den -= 20;
    }
    temp = res2 % 1;

    ses = Math.trunc(temp * 12);
    if (ses > 11) {
        den += 1;
        ses -= 12;
    }
    let tabIS = [aur, den, ses];

    return tabIS;
}