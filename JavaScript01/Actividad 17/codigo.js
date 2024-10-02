
let contador = 0

for (let i = 0; i < 5; i++) {

    let edad = 0
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
        i--
    } else if (edad >= 18) {
        contador++
    }
}

alert("Total " + contador)
