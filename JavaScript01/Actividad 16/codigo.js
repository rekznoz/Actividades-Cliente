
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

// 1. ENTRADA: 4
//    SALIDA : "Numero 4 par."
// 2. ENTRADA: 3
//    SALIDA : "Numero 3 impar."
// 3. ENTRADA: 3.5
//    SALIDA : "Numero no valido"
// 4. ENTRADA: hola
//    SALIDA : "Numero no valido"
// 5. ENTRADA: -2
//    SALIDA : "Numero -2 par."
// 6. ENTRADA: 0
//    SALIDA : "Numero 0 par."
