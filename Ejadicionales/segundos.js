const readlinesync = require("readline-sync");
let horaI, minI, segI;
horaI = readlinesync.questionInt("Dime la hora: ");
minI = readlinesync.questionInt("Dime el minuto: ");
segI = readlinesync.questionInt("Dime el segundo: ");
let horaF, minF, segF;
let zona = "AM";
horaF = horaI
minF = minI
segF = segI + 10

if (horaI > 0 && horaI < 24 && minI > 0 && minI < 60 && segI > 0 && segI < 60) {
    if (segF > 59) {
        minF = minI + 1;
        segF = segF - 60
        if (minF > 59) {
            horaF = horaF + 1
            minF = minF - 60
        }
    }
    if (horaI > 12) {
        horaI = horaI - 12
        horaF = horaF - 12
        zona = "PM"
    }
    console.log("Hora ingresada: ", horaI, zona, minI, ":", segI)
    console.log("Hora +10seg", horaF, zona, minF, ":", segF)
} else {
    console.log("La hora introducidad no es válida")
}