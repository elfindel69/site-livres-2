var optionsDate = {
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

const UTC_TO_GTC_YEAR = 10211;
const GTC_TO_MIG_YEAR = 10000;

class EchoDate {
    constructor() {
        this.mDays = 0;
        this.mYear = 0;
        this.mTimestamp = 0;
        this.mHour = 0;
        this.mMinute = 0;
        this.mSecond = 0;
    }
}

const MIGDateToTC = (MIGYear, days) => { return MIGYear + '.' + days; };
const MIGDateToDC = (MIGYear, days, timestamp) => { return MIGYear + '' + days + '.' + timestamp; };

function compZero(nombre) {
    return nombre < 10 ? '0' + nombre : nombre;
}

function UTCToTimeStamp(now) {
    const ZEROTIME = new Date("1 January 2011");
    return ((now.getTime() - ZEROTIME.getTime()) / 1000).toFixed(0);
}

export class GTCDate extends EchoDate {
    constructor() {
        super();
        this.mType = 'GTC';
    }

    daysToGTCDate(days) {
        let lMonths = ['Geylet', 'Lyutet', 'Daylet', 'Elet', 'Veylet', 'Kreset', 'Heylet', 'Teylet', 'Ruyet', 'Listopat', 'Aylet', 'Beylet'];
        let lWeek = ["Niedila", "Poniedilek", "Wtorek", "Sroda", "Czwartek", "Pietek", "Sobota"];
        var dayOfWeek = days % 7;
        let lMonth;
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

    getGTCDateString() {
        return this.daysToGTCDate(this.mDays) + ' ' + this.mYear + ' à ' + compZero(this.mHour) + ":" + compZero(this.mMinute) + ":" + compZero(this.mSecond) + " " + this.mType;
    }
}

export function UTCDateToGTCDate(UTCdate) {
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

// Fonction d'affichage
function afficheHeure() {
    let lDate = new Date();
    document.getElementById("UTC").innerHTML = lDate.toLocaleString("fr-FR", optionsDate);
    let lDateGTC = UTCDateToGTCDate(lDate);
    document.getElementById("GTC").innerHTML = lDateGTC.getGTCDateString();
    var MIGYear = lDateGTC.mYear + GTC_TO_MIG_YEAR;
    document.getElementById("DTC").innerHTML = MIGDateToTC(MIGYear, lDateGTC.mDays);
    document.getElementById("TMC").innerHTML = MIGDateToDC(MIGYear, lDateGTC.mDays, lDateGTC.mTimestamp);
}

// lance affichage toutes les prochaines secondes
setInterval(afficheHeure, 1000);
// affichage immédiat
afficheHeure();