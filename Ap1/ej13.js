const readlinesync = require("readline-sync");

let hora, min, seg;

hora = readlinesync.questionInt("Dime que hora es: ");
min = readlinesync.questionInt("Dime que minuto es: ");
seg = readlinesync.questionInt("Dime que segundo es: ");

if (hora >= 0 && hora <= 24 && min >= 0 && min < 60 && seg >= 0 && seg < 60) {
    console.log(hora, ":", min, ":", seg)
} else {
    console.log("Los datos introducidos son incorrectos")
}
