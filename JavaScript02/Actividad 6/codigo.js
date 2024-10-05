function validarArrayNumeros(array) {
    if (array.every(num => !isNaN(num))) {
        return true
    } else {
        return false
    }
}

function filtrarYTransformar(array) {
    if (!validarArrayNumeros(numeros)) {
        return alert("El array no solo contiene numeros!")
    }
    return array
        .filter(num => num % 2 !== 0)
        .map(num => num * 2)
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let resultado = filtrarYTransformar(numeros)
if (resultado) {
    console.log(resultado)
}