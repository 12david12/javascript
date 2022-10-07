const readlinesync = require("readline-sync");
const capCD = 700;
let capHD, udCD;

capHD = readlinesync.question("Cual es la capacidad de tu ordenador: ")

udCD = capHD/(capCD/1024)

console.log("La cantidad de CD's necesaria es: ", udCD, "GB")