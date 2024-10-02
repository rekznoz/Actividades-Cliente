
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

if (isNaN(numero) || !Number.isInteger(numero)) {
    alert("Numero no valido")
} else {
    if (numero % 2 === 0) {
        alert("Numero " + numero + " par")
    } else {
        alert("Numero " + numero + " impar")
    }
}
