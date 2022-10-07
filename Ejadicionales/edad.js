const readlinesync=require("readline-sync");

let edad, sexo;
edad=readlinesync.question("Dime tu edad: ")
sexo=readlinesync.question("Dime tu sexo: 1.Masculino 2.Femenino")

if(edad>0){
    if(sexo==1&&edad>67){
        console.log("Ya te puedes jubilar")
    }
    else if(sexo==2&&edad>65){
        console.log("Ya te puedes jubilar")
     }
    else if(sexo==1&&edad<67){
        console.log("No tienes edad para jubilarte")
    }
    else if(sexo==2&&edad<65){
        console.log("No tienes edad para jubilarte")
}
    else{
        console.log("El sexo introducido no es válido")
    }
}else{
    console.log("La edad no puede ser negativa");
}