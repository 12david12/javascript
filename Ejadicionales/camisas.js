const readlinesync = require("readline-sync");
const desc1 = 0.125, desc2 = 0.2, desc3 = 0.315, precioCamisa = 20;
let numCamisas = readlinesync.questionInt("Introduce el numero de camisas que has comprado: "), precio, precioFinal, montoDesc;


if (numCamisas > 0) {
    if (numCamisas > 0 && numCamisas <= 4) {
        precio = numCamisas * precioCamisa;
        montoDesc = precio * desc1;
        precioFinal = precio - montoDesc;
    }
    else if (numCamisas > 5 && numCamisas <= 8) {
        precio = numCamisas * precioCamisa;
        montoDesc = precio * desc2;
        precioFinal = precio - montoDesc;
    }

    else {
        precio = numCamisas * precioCamisa;
        montoDesc = precio * desc3;
        precioFinal = precio - montoDesc;
    }
    console.log("El precio sin descuento es: ", precio, "€");
    console.log("La cantidad que se descuenta es: ", montoDesc, "€");
    console.log("El precio con descuento es: ", precioFinal, "€");
} else {
    console.log("El precio no puede ser negativo");
}