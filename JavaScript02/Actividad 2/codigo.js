function solicitarNumero() {
    let numero
    do {
        let entrada = prompt("Numero")
        numero = parseFloat(entrada)

        if (isNaN(numero)) {
            alert("ERROR Número invalido\nIntentalo de otra vez!")
        }

    } while (isNaN(numero)) // Bucle cuando el prompt no sea un numero
    return numero
}

function funcionRecursiva(n) {

    if (isNaN(n)) {
        return alert("ERROR Número invalido\nIntentalo de otra vez!")
    }

    // Si n es menor o igual a 0 terminar la recursividad
    if (n <= 0) {
        return ""
    }

    return "bauuuba " + funcionRecursiva(n - 1)
}

const numero = solicitarNumero()
const resultado = funcionRecursiva(numero)

alert(resultado)
