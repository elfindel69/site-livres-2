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
        this.days = 0;
        this.year = 0;
        this.timestamp = 0;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
    }
}

const MIGDateToTC = (MIGYear, days) => { return MIGYear + '.' + days; };
const MIGDateToDC = (MIGYear, days, timestamp) => { return MIGYear + '' + days + '.' + timestamp; };

function compZero(nombre) {
    return nombre < 10 ? '0' + nombre : nombre;
}

function UTCToTimeStamp(now) {
    const ZEROTIME = new Date("1 January 2011");
    return new Number((now.getTime() - ZEROTIME.getTime()) / 1000).toFixed(0);
}

class GTCDate extends EchoDate {
    constructor() {
        super();
        this.type = 'GTC';
    }

    daysToGTCDate(days) {
        let months = ['Geylet', 'Lyutet', 'Daylet', 'Elet', 'Veylet', 'Kreset', 'Heylet', 'Teylet', 'Ruyet', 'Listopat', 'Aylet', 'Beylet'];
        let week = ["Niedila", "Poniedilek", "Wtorek", "Sroda", "Czwartek", "Pietek", "Sobota"];
        var dayOfWeek = days % 7;
        let month;
        if (days <= 31) {
            month = months[0];
        } else if (days >= 32 && days <= 61) {
            month = months[1];
            days = days - 31;
        } else if (days >= 62 && days <= 92) {
            month = months[2];
            days = days - 61;
        } else if (days >= 93 && days <= 123) {
            month = months[3];
            days = days - 92;
        } else if (days >= 124 && days <= 154) {
            month = months[4];
            days = days - 123;
        } else if (days >= 155 && days <= 185) {
            month = months[5];
            days = days - 154;
        } else if (days >= 186 && days <= 216) {
            month = months[6];
            days = days - 185;
        } else if (days >= 217 && days <= 247) {
            month = months[7];
            days = days - 216;
        } else if (days >= 248 && days <= 278) {
            month = months[8];
            days = days - 247;
        } else if (days >= 279 && days <= 309) {
            month = months[9];
            days = days - 278;
        } else if (days >= 310 && days <= 340) {
            month = months[10];
            days = days - 309;
        } else if (days >= 341 && days <= 371) {
            month = months[11];
            days = days - 340;
        }

        return week[dayOfWeek] + ' ' + days + ' ' + month;
    }

    getGTCDateString() {
        return this.daysToGTCDate(this.days) + ' ' + this.year + ' à ' + compZero(this.hour) + ":" + compZero(this.minute) + ":" + compZero(this.second) + " GTC";
    }
}

function UTCDateToGTCDate(UTCdate) {
    let date = new GTCDate();
    let timestamp = UTCToTimeStamp(UTCdate);
    date.year = Math.floor(timestamp / 34725600) + UTC_TO_GTC_YEAR + 1;
    timestamp = timestamp % 34725600;
    date.days = Math.floor(timestamp / 93600);
    date.timestamp = timestamp % 93600;
    date.hour = Math.floor(timestamp / 3600);
    let min = date.timestamp % 3600;
    date.minute = Math.floor(min / 60);
    date.second = min % 60;

    return date;
}

// Fonction d'affichage
function afficheHeure() {
    let date = new Date();
    document.getElementById("UTC").innerHTML = date.toLocaleString("fr-FR", optionsDate);
    let dateGTC = UTCDateToGTCDate(date);
    document.getElementById("GTC").innerHTML = dateGTC.getGTCDateString();
    var MIGYear = dateGTC.year + GTC_TO_MIG_YEAR;
    document.getElementById("DTC").innerHTML = MIGDateToTC(MIGYear, dateGTC.days);
    document.getElementById("TMC").innerHTML = MIGDateToDC(MIGYear, dateGTC.days, dateGTC.timestamp);
}

// lance affichage toutes les prochaines secondes
setInterval(afficheHeure, 1000);
// affichage immédiat
afficheHeure();