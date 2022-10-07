const readlinesync = require("readline-sync")
let mes;
mes = readlinesync.questionInt("En que mes estamos: ")

if (mes > 0 && mes < 13) {
    if (mes == 2) console.log("Estamos en febrero, este mes tiene 28 días");
    if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
        console.log("Este mes tiene 30 días")
        if (mes == 4) console.log("Abril")
        if (mes == 6) console.log("Junio")
        if (mes == 9) console.log("Septiembre")
        if (mes == 11) console.log("Noviembre")
    }
    if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
        console.log("Este mes tiene 31 días")
        if (mes == 1) console.log("Enero")
        if (mes == 3) console.log("Marzo")
        if (mes == 5) console.log("Mayo")
        if (mes == 7) console.log("Julio")
        if (mes == 8) console.log("Agosto")
        if (mes == 10) console.log("Octubre")
        if (mes == 12) console.log("Diciembre")
    }
} else {
    console.log("El valor introducido es incorrecto")
}