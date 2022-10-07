const readlinesync = require("readline-sync");
let num1, num2, result=0;
num1 = readlinesync.questionInt("Introduce un numero: ")
num2 = readlinesync.questionInt("Introduce otro numero mayor que el anterior: ")

if (num1 > 0 && num2 > 0) {
    for (let i = num1; i < num2; i++) {
        if (i % 2 !== 0) {result += i}
    }
    console.log("La suma de los números impares es: ", result)
} else {
    console.log("¡Los valores deben ser positivos!")
}