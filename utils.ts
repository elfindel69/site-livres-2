/**
 * module utilitaire
 * @author elfindel69
 * @version 0.0.200
 */

export {compZero, EchoDate, GTCDateToDC, GTCDateToTC, GTC_TO_MIG_YEAR, UTC_TO_GTC_YEAR}; 

const UTC_TO_GTC_YEAR = 10211;
const GTC_TO_MIG_YEAR = 10000;

class EchoDate {
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

const GTCDateToTC = (GTCYear: number, days: number) => { return GTCYear + GTC_TO_MIG_YEAR + '.' + days; };
const GTCDateToDC = (GTCYear: number, days: number, timestamp: number) => { return GTCYear + GTC_TO_MIG_YEAR + '' + days + '.' + timestamp; };

function compZero(nombre: number) {
    return nombre < 10 ? '0' + nombre : nombre;
}
