//Programa que pide un caracter por teclado y comprueba si una letra es mayúscula.
const readlinesync = require("readline-sync")

let car;
  
car = readlinesync.question("Introduce un caracter: ")
carAscii = car.charCodeAt(0); //.charCodeAt(0) sirve para localizar un caracter de un string.
console.log(carAscii)

if(carAscii>=65 && carAscii<=90) { //Con solo seleccionar un carácter, el programa interpreta que te refieres al codigo Ascii.
    console.log("Es una letra mayuscula")
}else if(carAscii>=97 && carAscii<=122){
    console.log("Es una letra minuscula")
}else{
    console.log("Es un signo")
}