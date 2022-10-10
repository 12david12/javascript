const readlinesync = require("readline-sync")

let precio, IVA, precioFinal;

for (i = 0; precio !== 0; i++) {

    precio = readlinesync.questionInt("Introduce precio: ");
    IVA = readlinesync.questionInt("Introduce el IVA a aplicar: ");

    if (IVA >= 16 && IVA <= 20) {
        precioFinal = precio + precio * (IVA / 100);
        console.log("El precio sin IVA es: ", precio, "€");
        console.log("El IVA aplicado es del: ", IVA, "%");
        console.log("El precio con IVA es: ", precioFinal, "€");
    } else {
        console.log("El IVA debe estar entre el 16% y el 20%");
    }
}
