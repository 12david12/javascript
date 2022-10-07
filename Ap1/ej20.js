const readlinesync = require("readline-sync")
let prInicial, prFinal, IVA, desc;
prInicial = readlinesync.questionInt("Introduce el precio del producto: ");

desc = readlinesync.questionInt("Marca 1 si eres de Catarroja. Marca 2 si estas cursando DAM. Marca 3 si es el 1er curso")

if (prInicial) {
    if (desc == 1) prFinal = prInicial + prInicial * 0.05; console.log("Su precio final sin IVA es: ", prFinal, "€"); {
        IVA = readlinesync.question("Marca 1 para IVA=16%, Marca 2 para IVA=21%")
        if (IVA == 1) prFinal = prFinal + prFinal * 0.16; console.log("Su precio final con IVA incluido es: ", prFinal, "€");
        if (IVA == 2) prFinal = prFinal + prFinal * 0.21; console.log("Su precio final con IVA incluido es: ", prFinal, "€");
    }
    if (desc == 2) prFinal = prInicial + prInicial * 0.1; console.log("Su precio final sin IVA es: ", prFinal, "€"); {
        IVA = readlinesync.question("Marca 1 para IVA=16%, Marca 2 para IVA=21%")
        if (IVA == 1) prFinal = prFinal + prFinal * 0.16; console.log("Su precio final con IVA incluido es: ", prFinal, "€");
        if (IVA == 2) prFinal = prFinal + prFinal * 0.21; console.log("Su precio final con IVA incluido es: ", prFinal, "€");
    }
    if (desc == 3) prFinal = prInicial + prInicial * 0.15; console.log("Su precio final sin IVA es: ", prFinal, "€"); {
        IVA = readlinesync.question("Marca 1 para IVA=16%, Marca 2 para IVA=21%")
        if (IVA == 1) prFinal = prFinal + prFinal * 0.16; console.log("Su precio final con IVA incluido es: ", prFinal, "€");
        if (IVA == 2) prFinal = prFinal + prFinal * 0.21; console.log("Su precio final con IVA incluido es: ", prFinal, "€");
    }
} else {
    console.log("La información introducida es incorrecta");
}