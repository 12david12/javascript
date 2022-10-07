const readlinesync = require("readline-sync")
let hora, min;

hora = readlinesync.question("Introduce la hora: ")
min = readlinesync.question("Introduce los minutos: ")

if (hora >= 0 && hora < 24 && min > 0 && min < 60) {
    if (hora > 0 && hora < 13) console.log("Son las" + hora + ":" + min + " AM")
    if (hora == 12) console.log("Son las 12:" + min + " PM")
    if (hora == 13) console.log("Son la 01:" + min + " PM")
    if (hora == 14) console.log("Son las 02:" + min + " PM")
    if (hora == 15) console.log("Son las 03:" + min + " PM")
    if (hora == 16) console.log("Son las 04:" + min + " PM")
    if (hora == 17) console.log("Son las 05:" + min + " PM")
    if (hora == 18) console.log("Son las 06:" + min + " PM")
    if (hora == 19) console.log("Son las 07:" + min + " PM")
    if (hora == 20) console.log("Son las 08:" + min + " PM")
    if (hora == 21) console.log("Son las 09:" + min + " PM")
    if (hora == 22) console.log("Son las 10:" + min + " PM")
    if (hora == 23) console.log("Son las 11:" + min + " PM")
    if (hora == 00) console.log("Son las 12:" + min + " AM")
}
else {
    console.log("La hora no es válida")
}