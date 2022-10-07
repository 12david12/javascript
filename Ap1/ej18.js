const readlinesync = require("readline-sync");
let equipo, result, puntos=0;


equipo = readlinesync.question("Como se llama tu equipo: ")
result = readlinesync.questionInt("Como ha quedado tu equipo: 1:victoria, 2:derrota o 3:empate ")

if (result) {
    if (result == 1) console.log(equipo, "Suma 3 puntos", puntos+3)
    if (result == 2) console.log(equipo, "Suma 0 puntos")
    if (result == 3) console.log(equipo, "Suma 1 punto", puntos+1)
} else {
    console.log("El valor introducido no es correcto")
}