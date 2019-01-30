/**
 * module de date au format UTC
 * @author elfindel69
 * @version 0.0.200
 */

import {GTCDate} from './GTCDate';
import {UTC_TO_GTC_YEAR} from './utils';

export var optionsDate = {
    hour12: false,
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short',
    timeZone: 'UTC'
};

function UTCToTimeStamp(now: Date) {
    const ZEROTIME = new Date("1 January 2011");
    return ((now.getTime() - ZEROTIME.getTime()) / 1000);
}

export function UTCDateToGTCDate(UTCdate: Date) {
    let lDate = new GTCDate();
    let lTimestamp = UTCToTimeStamp(UTCdate);
    lDate.mYear = Math.floor(lTimestamp / 34725600) + UTC_TO_GTC_YEAR + 1;
    lTimestamp = lTimestamp % 34725600;
    lDate.mDays = Math.floor(lTimestamp / 93600);
    lDate.mTimestamp = lTimestamp % 93600;
    lDate.mHour = Math.floor(lDate.mTimestamp / 3600);
    let lMin = lDate.mTimestamp % 3600;
    lDate.mMinute = Math.floor(lMin / 60);
    lDate.mSecond = lMin % 60;

    return lDate;
}
