
let numero

do {
    numero = prompt("Numero")

    numero = Number(numero)

    if (isNaN(numero)) {
        alert("Numero no valido")
    }

} while (isNaN(numero))

alert("Nmero valido " + numero)
