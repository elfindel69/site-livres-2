import { GTCDate } from './classes/GTCDate.js';
import { myDiv } from './classes/myDiv.js';

export function TimeCodeToGTCDate(time) {
    let timeArray = time.split(new RegExp('.', 'u'));
    let dateCode = timeArray[0];
    let seconds = timeArray[1];
    let dateGTC = new GTCDate();
    dateGTC.mYear = dateCode.substring(0, 6);
    dateGTC.mDays = dateCode.substring(6);
    let div1 = new myDiv();
    div1 = div1.div(seconds, 3600);
    dateGTC.mHour = div1.quot;
    let div2 = new myDiv();
    div2 = div2.div(div1.rest, 60);
    dateGTC.mMinute = div2.quot;
    dateGTC.mSecond = div2.rest;
    return dateGTC;
}