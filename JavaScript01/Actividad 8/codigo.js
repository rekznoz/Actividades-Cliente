
let edad
try {
    let input = prompt("Edad")
    edad = parseInt(input)

    if (isNaN(edad)) {
        throw new Error("Numero no valido")
    }
} catch (error) {
    console.error(error.message)
}

if (isNaN(edad) || edad <= 0) {
    alert("Numero no valido")
} else {
    if (edad >= 18) {
        if (edad <= 25) {
            alert("Mayor de Edad, entre 18 y 25 años")
        } else {
            alert("Mayor de edad")
        }
    } else {
        alert("Menor de edad")
    }
}
