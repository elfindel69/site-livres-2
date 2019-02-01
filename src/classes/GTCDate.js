/**
 * module de date au format GTC
 * @author elfindel69
 * @version 0.0.200
 */

import { GTC_TO_MIG_YEAR, UTC_TO_GTC_YEAR, compZero } from './Utils.js';
import { UTCDate } from './UTCDate.js';

function compDoubleZero(number) {
    let res = number;
    if (number < 10) {
        res = '00' + number;
    } else if (number >= 10 && number < 100) {
        res = '0' + number;
    }
    return res;
}

function compFiveZeros(number) {
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

export class GTCDate {


    constructor() {
        this.mDays = 1;
        this.mYear = 0;
        this.mTimestamp = 0;
        this.mHour = 0;
        this.mMinute = 0;
        this.mSecond = 0;
        this.mType = 'GTC';
    }

    daysToGTCDate() {
        let lMonths = ['Geylet', 'Lyutet', 'Daylet', 'Elet', 'Veylet', 'Kreset', 'Heylet', 'Teylet', 'Ruyet', 'Listopat', 'Aylet', 'Beylet'];
        let lWeek = ["Niedila", "Poniedilek", "Wtorek", "Sroda", "Czwartek", "Pietek", "Sobota"];
        let days = this.mDays > 0 ? this.mDays : 1;
        var dayOfWeek = days % 7;
        let lMonth = '0';
        if (days <= 31) {
            lMonth = lMonths[0];
        } else if (days >= 32 && days <= 61) {
            lMonth = lMonths[1];
            days = days - 31;
        } else if (days >= 62 && days <= 92) {
            lMonth = lMonths[2];
            days = days - 61;
        } else if (days >= 93 && days <= 123) {
            lMonth = lMonths[3];
            days = days - 92;
        } else if (days >= 124 && days <= 154) {
            lMonth = lMonths[4];
            days = days - 123;
        } else if (days >= 155 && days <= 185) {
            lMonth = lMonths[5];
            days = days - 154;
        } else if (days >= 186 && days <= 216) {
            lMonth = lMonths[6];
            days = days - 185;
        } else if (days >= 217 && days <= 247) {
            lMonth = lMonths[7];
            days = days - 216;
        } else if (days >= 248 && days <= 278) {
            lMonth = lMonths[8];
            days = days - 247;
        } else if (days >= 279 && days <= 309) {
            lMonth = lMonths[9];
            days = days - 278;
        } else if (days >= 310 && days <= 340) {
            lMonth = lMonths[10];
            days = days - 309;
        } else if (days >= 341 && days <= 371) {
            lMonth = lMonths[11];
            days = days - 340;
        }

        return lWeek[dayOfWeek] + ' ' + days + ' ' + lMonth;
    }

    getGTCTimeString() {
        return this.daysToGTCDate(this.mDays) + ' ' + this.mYear + ' à ' + compZero(this.mHour) + ":" + compZero(this.mMinute) + ":" + compZero(this.mSecond) + " " + this.mType;
    }

    GTCDateToTC() {
        return this.mYear + GTC_TO_MIG_YEAR + '' + compDoubleZero(this.mDays) + '.' + compFiveZeros(this.mTimestamp);
    }

    GTCDateToUTCDate() {
        var UTCYear = this.mYear - UTC_TO_GTC_YEAR;
        var offsetYear = UTCYear * 34725600;
        var offsetDays = (this.mDays - 1) * 93600;
        var GTCTimestamp = (offsetYear + offsetDays + this.mTimestamp) * 1000;
        var UTCTimestamp = 1293840000000;
        if (this.mYear >= 10211) {
            UTCTimestamp += GTCTimestamp;
        }
        var date = new UTCDate();
        date.mDate = new Date(UTCTimestamp);

        return date;
    }

}

export function TimeStringToGTCDate(time) {
    var timeArray = time.split(new RegExp('T', 'u'));
    var dateArray = timeArray[0].split(new RegExp('-', 'u'));

    var month = dateArray[1];
    var monthsArray = [0, 31, 61, 92, 123, 154, 185, 216, 247, 278, 309, 340];

    var hourArray = timeArray[1].split(new RegExp(':', 'u'));

    var date = new GTCDate();
    date.mYear = Number(dateArray[0]);
    var day = Number(dateArray[2]);
    var offset = monthsArray[Number(month) - 1];
    date.mDays = day + offset;

    date.mHour = Number(hourArray[0]);
    date.mMinute = Number(hourArray[1]);
    date.mSecond = Number(hourArray[2]);

    var offsetHour = date.mHour * 3600;
    var offsetMin = date.mMinute * 60;
    date.mTimestamp = offsetHour + offsetMin + date.mSecond;
    return date;
}