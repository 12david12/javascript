let esprimo, x = 0;

for (let numero = 2; x <= 50; numero++) {
    esprimo = true;

    for (let divisor = 2; divisor < numero; divisor++) {
        if (numero % divisor == 0)
            esprimo = false;
    }
    if (esprimo == true) {
        x++;
        console.log(numero);

    }

}