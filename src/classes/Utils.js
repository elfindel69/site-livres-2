export const UTC_TO_GTC_YEAR = 10211;
export const GTC_TO_MIG_YEAR = 10000;

export const compZero = (nombre) => { return nombre < 10 ? '0' + nombre : nombre; };

export const roundToTwo = (num) => { return +(Math.round(num + "e+2") + "e-2"); };