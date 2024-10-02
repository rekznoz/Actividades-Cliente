
let edad
try {
    let input = prompt("Numero")
    edad = parseInt(input)

    if (isNaN(edad)) {
        throw new Error("Numero no valido")
    }
} catch (error) {
    console.error(error.message)
}

let nacionalidad = prompt("Nacionalidad:")

nacionalidad = nacionalidad.toLowerCase()

if (isNaN(edad) || edad <= 0) {
    alert("Numero no valido")
} else {
    if (edad >= 18 && nacionalidad === "española") {
        alert("Puedes votar.")
    } else {
        alert("No puedes votar.")
    }
}
