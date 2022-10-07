// Programa que diga de que tipo es el triángulo según sus lados
const readlinesync = require("readline-sync")

let lado1, lado2, lado3;

lado1 = readlinesync.questionInt("Dime la longitud del primer lado: ");
lado2 = readlinesync.questionInt("Dime la longitud del segundo lado: ");
lado3 = readlinesync.questionInt("Dime la longitud del tercer lado: ");

if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
    console.log("El triángulo es equilátero")
} else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
    console.log("El triángulo es isósceles")
}else{
    console.log("El triángulo es escaleno")
}
