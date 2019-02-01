/**
 * module utilitaire
 * @author elfindel69
 * @version 0.0.200
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UTC_TO_GTC_YEAR = 10211;
    exports.UTC_TO_GTC_YEAR = UTC_TO_GTC_YEAR;
    var GTC_TO_MIG_YEAR = 10000;
    exports.GTC_TO_MIG_YEAR = GTC_TO_MIG_YEAR;
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
    var GTCDateToTC = function (GTCYear, days) { return GTCYear + GTC_TO_MIG_YEAR + '.' + days; };
    exports.GTCDateToTC = GTCDateToTC;
    var GTCDateToDC = function (GTCYear, days, timestamp) { return GTCYear + GTC_TO_MIG_YEAR + '' + days + '.' + timestamp; };
    exports.GTCDateToDC = GTCDateToDC;
    function compZero(nombre) {
        return nombre < 10 ? '0' + nombre : nombre;
    }
    exports.compZero = compZero;
});
