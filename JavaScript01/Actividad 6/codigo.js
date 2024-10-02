

let numero
try {
    let input = prompt("Numero")
    numero = parseFloat(input)

    if (isNaN(numero)) {
        throw new Error("Numero no valido")
    }
} catch (error) {
    console.error(error.message)
}

let resultado =  (numero > 0) ? "Numero positivo":
                        (numero < 0) ? "Numero negativo":
                        (numero === 0 ) ? "Numero cero":
                        "Numero no valido";

alert(resultado)
