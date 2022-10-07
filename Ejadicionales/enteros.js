const readlineSync = require("readline-sync");

let num1 = readlineSync.questionInt("Primer numero: ");
let num2 = readlineSync.questionInt("Segundo numero: ");
let num3 = readlineSync.questionInt("Tercer numero: ");
let menor, mayor, intermedio;

let iguales = (num1 == num2 || num1 == num3 || num2==num3); //Para hacer que no puedan ser iguales.

if (iguales) 
    console.log("Datos introducidos no son correctos");
else {
    menor = Math.min(num1, num2, num3); //Math.min devuelve el menor número
    mayor = Math.max(num1, num2, num3); //Math.max devuelve el mayor número
    if (num1 > menor && num1 < mayor) intermedio = num1;
    if (num2 > menor && num2 < mayor) intermedio = num2;
    if (num3 > menor && num3 < mayor) intermedio = num3;
    console.log("Los números ordenados son: ", menor, intermedio, mayor);
}