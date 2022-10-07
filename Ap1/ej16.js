const readlinesync = require("readline-sync");
let voc;
voc = readlinesync.question("Dime una vocal: ")

switch (voc) {
    case "a":
        console.log(1)
        break;
    case "e":
        console.log(2)
        break;
    case "i":
        console.log(3)
        break;
    case "o":
        console.log(4)
        break;
    case "u":
        console.log(5)
        break;
    default:
        console.log("Esto no es una vocal")
}