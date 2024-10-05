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

// Determinar si un año es bisiesto
function esBisiesto(anio) {
    return (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)
}

function isLeapYear(inicio, fin) {

    if (inicio < 2001 || inicio > 2500 || fin < 2001 || fin > 2500 || isNaN(inicio) || isNaN(fin)) {
        console.log("Solo números entre 2001 y 2500.")
        return
    }

    if (inicio > fin) {
        console.log("El numero de inicio debe ser superior al final");
        return;
    }

    let aniosBisiestos = []

    // Recorrer el rango de años y almacenar los bisiestos
    for (let anio = inicio; anio <= fin; anio++) {
        if (esBisiesto(anio)) {
            aniosBisiestos.push(anio)
        }
    }

    if (aniosBisiestos.length > 0) {
        console.log(`Los años bisiestos entre ${inicio} y ${fin} son: ${aniosBisiestos.join(', ')}`)
    } else {
        console.log(`No tienen años bisiestos entre ${inicio} y ${fin}.`)
    }
}

let inicio = solicitarNumero()
let fin = solicitarNumero()

isLeapYear(inicio, fin)
