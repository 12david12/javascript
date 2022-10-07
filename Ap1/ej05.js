const readlinesync = require("readline-sync")

let car;

car = readlinesync.question("Introduce un caracter: ")

if(car === car.toLowerCase()) {
    console.log("Es una letra minuscula")
}
else{
    console.log("Es una letra mayuscula")
}