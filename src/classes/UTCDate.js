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
        return (this.mDate.getTime() - ZEROTIME.getTime()) / 1000;
    }

    UTCDateToGTCDate() {
        let lDate = new GTCDate();
        let lTimestamp = Math.floor(this.UTCToTimeStamp());
        lDate.mYear = Math.floor(lTimestamp / 34725600) + UTC_TO_GTC_YEAR;
        lTimestamp = lTimestamp % 34725600;
        let days = Math.floor(lTimestamp / 93600);
        lTimestamp = lTimestamp % 93600;
        lDate.mTimestamp = lTimestamp;
        lDate.mHour = Math.floor(lTimestamp / 3600);
        let lMin = lTimestamp % 3600;
        lDate.mMinute = Math.floor(lMin / 60);
        lDate.mSecond = lMin % 60;

        lDate.mDays = days + 1;

        return lDate;
    }

    getUTCTimeString() { return this.mDate.toLocaleString(this.mLang, optionsDate); }
}