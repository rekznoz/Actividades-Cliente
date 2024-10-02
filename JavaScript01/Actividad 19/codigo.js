

let numero
try {
    let input = prompt("Numero")
    numero = parseInt(input)

    if (isNaN(numero)) {
        throw new Error("Numero no valido")
    }
} catch (error) {
    console.error(error.message)
}

if (isNaN(numero) || !Number.isInteger(numero) || numero < 0) {
    alert("Numero no valido")
} else {
    let factorial = 1

    for (let i = 1; i <= numero; i++) {
        factorial *= i
    }

    alert("Factorial de " + numero + " = " + factorial)
}