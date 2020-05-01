export const UTC_TO_GTC_YEAR = 10211;
export const GTC_TO_MIG_YEAR = 10000;

export const compZero = (nombre) => { return nombre < 10 ? '0' + nombre : nombre; };

export const roundToTwo = (num) => { return +(Math.round(num + "e+2") + "e-2"); };


export function compDoubleZero(number) {
    let res = number;
    if (number < 10) {
        res = '00' + number;
    } else if (number >= 10 && number < 100) {
        res = '0' + number;
    }
    return res;
}

export function compFiveZeros(number) {
    let res = number;
    if (number < 10) {
        res = '0000' + number;
    } else if (number >= 10 && number < 100) {
        res = '000' + number;
    } else if (number >= 100 && number < 1000) {
        res = '00' + number;
    } else if (number >= 1000 && number < 10000) {
        res = '0' + number;

    }
    return res;
}