import { GTCDate } from './classes/GTCDate.js';
import { GTC_TO_MIG_YEAR } from './classes/Utils.js';
import { myDiv } from './classes/myDiv.js';


export function TimeCodeToGTCDate(time) {
    let timeArray = time.split(".");
    let dateCode = timeArray[0];
    let seconds = timeArray[1];
    let dateGTC = new GTCDate();
    let yearMIG = dateCode.substring(0, 5);
    dateGTC.mYear = yearMIG - GTC_TO_MIG_YEAR;
    let strDays = dateCode.substring(5);
    dateGTC.mDays = parseInt(strDays, 10);
    dateGTC.mTimestamp = parseInt(seconds, 10);
    let div1 = new myDiv();
    div1 = div1.div(seconds, 3600);
    dateGTC.mHour = div1.quot;
    let div2 = new myDiv();
    div2 = div2.div(div1.rest, 60);
    dateGTC.mMinute = div2.quot;
    dateGTC.mSecond = div2.rest;
    return dateGTC;
}