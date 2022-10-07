const readlinesync = require("readline-sync");

const suma1 = 100, suma2 = 115, suma3 = 130;

let nombre, antig, cont, pago = 0;


for (i = 0; cont !== "N"; i++) {
    nombre = readlinesync.question("Dime tu nombre: ")
    antig = readlinesync.questionInt("Dime cuantos anyos llevas en la empresa: ")
    if (antig > 3 && antig < 10) {
        pago = antig * suma1
    }
    if (antig >= 10 && antig <= 15) {
        pago = antig * suma2
    }
    if (antig > 15) {
        pago = antig * suma3
    }
    console.log("El pago que le corresponde a", nombre, "es de", pago, "€")
    cont = readlinesync.question("Desea ingresar mas usuarios? S/N: ")
}