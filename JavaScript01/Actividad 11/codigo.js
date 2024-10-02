
let numero = 0

while (numero >= 0) {
    numero = prompt("Numero entero (Numero negativo para salir)")
    numero = Number(numero)
    if (isNaN(numero)) {
        alert("Numero no valido")
        numero = 0
    }
}

alert("Bucle terminado")
