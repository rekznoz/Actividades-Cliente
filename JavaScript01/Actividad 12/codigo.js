
let password

do {
    password = prompt("Contraseña")
    if (password !== "1234") {
        alert("Contraseña incorrecta")
    }
} while (password !== "1234")

alert("¡Contraseña correcta!")
