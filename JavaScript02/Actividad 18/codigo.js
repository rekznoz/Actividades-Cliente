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

function calcularPrecioFinal(precioBase, descuentos) {

    if (typeof precioBase !== 'number' || precioBase <= 0) {
        throw new Error("Solo numero positivo.")
    }

    descuentos.forEach(descuento => {
        if (typeof descuento !== 'number' || descuento < 0 || descuento > 100) {
            throw new Error(`El descuento ${descuento} solo es entre 0 y 100.`)
        }
    })

    let precioFinal = precioBase
    descuentos.forEach(descuento => {
        precioFinal -= precioFinal * (descuento / 100)
    })

    return precioFinal
}

function mostrarPrecioFinal(precioBase, descuentos) {
    try {
        const precio = calcularPrecioFinal(precioBase, descuentos)
        console.log(`Precio con descuentos: ${precio.toFixed(2)}.`)
    } catch (error) {
        console.error(error.message)
    }
}

const precioBase = solicitarNumero()
const descuentos = [10, 20]
mostrarPrecioFinal(precioBase, descuentos)
