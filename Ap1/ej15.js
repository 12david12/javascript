// Programa que transforme los números enteros en romanos
const readlinesync = require("readline-sync");

let num;
num = readlinesync.questionInt("Dime un numero: "); //Importante el questionInt cuando se pide un número.

switch (num) {
    case 1:
        console.log("I");
        break;
    case 2:
        console.log("II");
        break;
    case 3:
        console.log("III");
        break;
    case 4:
        console.log("IV");
        break;
    case 5:
        console.log("V");
        break;
    case 6:
        console.log("VI");
        break;
    case 7:
        console.log("VII");
        break;
    case 8:
        console.log("VIII");
        break;
    case 9:
        console.log("IX");
        break;
    case 10:
        console.log("X");
        break;
    default:
        console.log("El valor introducido es incorrecto")
        console.log("El valor introucido debe ser un número entre el 1 y el 10")
}