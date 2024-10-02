
let numero
try {
    let input = prompt("Numero entero de varios dígitos")
    numero = parseInt(input)

    if (isNaN(numero)) {
        throw new Error("Numero no valido")
    }
} catch (error) {
    console.error(error.message)
}

let suma = 0

for (let i = 0; i < numero.length; i++) {
    let caracter = Number(numero[i])
    if (!isNaN(caracter)) {
        suma += caracter
    }
}

alert("Suma de los dígitos (" + numero + ") = " + suma)
