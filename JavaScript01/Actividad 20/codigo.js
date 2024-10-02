
let texto = prompt("Palabra o frase")

const textoFormateado = texto.toLowerCase().trim().replace(/ /g, "")
const invertedText = textoFormateado.reverse()

if (textoFormateado === invertedText) {
    alert("es palindromo")
} else {
    alert("no es palindromo")
}

// reconocer
// La ruta nos aporto otro paso natural