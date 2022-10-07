const readlinesync=require("readline-sync")
let ventas;

ventas=readlinesync.questionInt("Cual ha sido el total de ventas: ")

if(ventas){
    if(ventas>=0&&ventas<1000) console.log("No hay comisión")
    if(ventas>=1000&&ventas<5000) console.log("Recibirá una comisión del 3%")
    if(ventas>=5000&&ventas<20000) console.log("Recibirá una comisión del 5%")
    if(ventas>=20000) console.log("Recibirá una comisión del 8%")
}else{
    console.log("El dato introducido no es válido")
}