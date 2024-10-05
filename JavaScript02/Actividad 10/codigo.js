function solicitarNumero() {
    let numero
    do {
        let entrada = prompt("Numero")
        numero = parseInt(entrada)

        if (isNaN(numero)) {
            alert("ERROR Número invalido\nIntentalo de otra vez!")
        }

    } while (isNaN(numero)) // Bucle cuando el prompt no sea un numero
    return numero
}

function obtenerDiasDelMes(mes) {

    if (mes < 1 || mes > 12 || isNaN(mes)) {
        return 0
    }

    let dias

    // Determinar el número de días en el mes
    if (mes === 2) { // Febrero
        dias = 28
    } else if (mes === 4 || mes === 6 || mes === 9 || mes === 11) { // Noviembre
        dias = 30
    } else { // Enero, Marzo, Mayo, Julio, Agosto, Octubre, Diciembre
        dias = 31
    }

    return dias
}

const mes = solicitarNumero()
const dias = obtenerDiasDelMes(mes)

if (dias === 0) {
    console.log("El mes ingresado no es válido.")
} else {
    console.log(`El mes ${mes} tiene ${dias} días.`)
}
