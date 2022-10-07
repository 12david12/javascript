const readlinesync = require("readline-sync");

let car1, car2;

car1 = readlinesync.question("Introduce el primer caracter: ")
car2 = readlinesync.question("Introduce el segundo caracter: ")

if(car1.toLowerCase() === car2.toLowerCase()){
    console.log("son dos letras minúsculas")
}
else{
    console.log("no son dos letras minúsculas")
}