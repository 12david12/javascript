const readlinesync = require("readline-sync");

let num=Math.trunc(Math.random()*100)+1, numUsuario, intentos=0;

for(let i=0; numUsuario!==num; i++){
    numUsuario=readlinesync.questionInt("Introduce un numero del 1 al 100: ")
    intentos++
    if(numUsuario<num){
        console.log("Es menor que num")
    }
    if(numUsuario>num){
        console.log("Es mayor que num")
    }
}
console.log("El número es: ", num)
console.log("Has realizado", intentos, "intentos")