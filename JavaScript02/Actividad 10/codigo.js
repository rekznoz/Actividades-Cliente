
function solicitarNumero() {
    let numero;
    do {
        let entrada = prompt("Numero")
        numero = parseFloat(entrada)

        if (isNaN(numero)) {
            alert("ERROR Número invalido\nIntentalo de otra vez!")
        }

    } while (isNaN(numero)) // Bucle cuando el prompt no sea un numero
    return numero
}

function sumarEnteros(num1, num2) {

    // Pasar las entradas a enteros
    const numero1 = parseInt(num1)
    const numero2 = parseInt(num2)

    let suma = numero1 + numero2

    // Agrega un numero aleatorio entre 0 y 1 a la suma
    suma += Math.random()

    // Redondear a 2 decimales
    return suma.toFixed(2)
}

const numero1 = solicitarNumero()
const numero2 = solicitarNumero()

const resultado = sumarEnteros(numero1, numero2)
alert(`El resultado es ${resultado}`)
