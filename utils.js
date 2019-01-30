"use strict";
exports.__esModule = true;
exports.UTC_TO_GTC_YEAR = 10211;
exports.GTC_TO_MIG_YEAR = 10000;
var EchoDate = /** @class */ (function () {
    function EchoDate() {
        this.mDays = 0;
        this.mYear = 0;
        this.mTimestamp = 0;
        this.mHour = 0;
        this.mMinute = 0;
        this.mSecond = 0;
    }
    return EchoDate;
}());
exports.EchoDate = EchoDate;
exports.GTCDateToTC = function (GTCYear, days) { return GTCYear + exports.GTC_TO_MIG_YEAR + '.' + days; };
exports.GTCDateToDC = function (GTCYear, days, timestamp) { return GTCYear + exports.GTC_TO_MIG_YEAR + '' + days + '.' + timestamp; };
function compZero(nombre) {
    return nombre < 10 ? '0' + nombre : nombre;
}
exports.compZero = compZero;
