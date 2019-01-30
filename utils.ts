export const UTC_TO_GTC_YEAR = 10211;
export const GTC_TO_MIG_YEAR = 10000;

export class EchoDate {
    mDays: number;
    mYear: number;
    mTimestamp: number;
    mHour: number;
    mMinute: number;
    mSecond: number;

    constructor() {
        this.mDays = 0;
        this.mYear = 0;
        this.mTimestamp = 0;
        this.mHour = 0;
        this.mMinute = 0;
        this.mSecond = 0;
    }
}

export const GTCDateToTC = (GTCYear: number, days: number) => { return GTCYear + GTC_TO_MIG_YEAR + '.' + days; };
export const GTCDateToDC = (GTCYear: number, days: number, timestamp: number) => { return GTCYear + GTC_TO_MIG_YEAR + '' + days + '.' + timestamp; };

export function compZero(nombre: number) {
    return nombre < 10 ? '0' + nombre : nombre;
}