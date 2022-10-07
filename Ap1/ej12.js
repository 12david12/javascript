const readlinesync = require("readline-sync");

let num1, num2, num3;

num1 = readlinesync.question("Dame un numero: ");
num2 = readlinesync.question("Dame otro numero: ");
num3 = readlinesync.question("Dame otro numero: ");

if (num1 != num2 && num1 != num3 && num2 != num3) {
    if (num1 > num2 && num1 > num3) console.log("Este es el mayor: ", num1);
    if (num2 > num1 && num2 > num3) console.log("Este es el mayor: ", num2);
    if (num3 > num1 && num3 > num2) console.log("Este es el mayor: ", num3);
}else {
    console.log("Los numeros introducidos no deben ser iguales")
}