
let numeros = [5, 12, 8, 130, 44]

function validarArrayNumeros(array) {
    if (array.every(num => !isNaN(num))) {
        return true
    } else {
        return false
    }
}

// Filtrado
function filtrarMayores10(array) {
    if (!validarArrayNumeros(array)) {
        return alert("El array no solo contiene numeros!")
    }
    return array.filter(num => num > 10)
}

// Reduccion
function sumarNumeros(array) {
    if (!validarArrayNumeros(array)) {
        return alert("El array no solo contiene numeros!")
    }
    return array.reduce((acumulador, actual) => acumulador + actual, 0)
}

// Recoleccion
function multiplicarDos(array) {
    if (!validarArrayNumeros(array)) {
        return alert("El array no solo contiene numeros!")
    }
    return array.map(num => num * 2)
}

let numerosFiltrados = filtrarMayores10(numeros)
let sumaDeNumeros = sumarNumeros(numeros)
let numerosMultiplicados = multiplicarDos(numeros)

console.log("Numeros mayor a 10", numerosFiltrados)
console.log("Suma de los numeros", sumaDeNumeros)
console.log("Multiplicaciion sobre 2", numerosMultiplicados)
