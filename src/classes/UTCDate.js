import { GTCDate } from './GTCDate.js';
import { UTC_TO_GTC_YEAR } from './Utils.js';


var optionsDate = {
    hour12: false,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
};

export class UTCDate {
    constructor(timeZone = 'UTC', lang = 'en-US', date = new Date()) {
        this.mDate = date;
        this.mLang = lang;
        optionsDate.timeZone = timeZone;
    }

    UTCToTimeStamp() {
        const ZEROTIME = new Date("2011-01-01T00:00:00Z");
        return this.mDate.getTime() - ZEROTIME.getTime();
    }

    UTCDateToGTCDate() {
        let lDate = new GTCDate();
        let lTimestamp = Math.floor(this.UTCToTimeStamp());
        lDate.mYear = Math.floor(lTimestamp / 34725600000) + UTC_TO_GTC_YEAR;
        lTimestamp = lTimestamp % 34725600000;
        let days = Math.floor(lTimestamp / 93600000);
        lTimestamp = lTimestamp % 93600000;
        lDate.mTimestamp = Math.floor(lTimestamp / 1000);
        lDate.mHour = Math.floor(lTimestamp / 3600000);
        let lMin = lTimestamp % 3600000;
        lDate.mMinute = Math.floor(lMin / 60000);
        lDate.mSecond = Math.floor(lMin % 60000 / 1000);

        lDate.mDays = days + 1;

        if (lDate.mYear < UTC_TO_GTC_YEAR) {
            lDate.mDays += 371;
            if (lDate.mHour < 0) {
                lDate.mHour += 26;
            }
            if (lDate.mMinute < 0) {
                lDate.mMinute += 60;
            }
            if (lDate.mSecond < 0) {
                lDate.mSecond += 60;
            }
            if (lDate.mTimestamp < 0) {
                lDate.mTimestamp += 93600;
            }
        }

        return lDate;
    }

    getUTCTimeString() { return this.mDate.toLocaleString(this.mLang, optionsDate); }
}