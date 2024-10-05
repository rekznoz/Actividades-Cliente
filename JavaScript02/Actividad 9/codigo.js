
function decodificarROT13(cadena) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const rot13 = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'

    let resultado = ''

    for (let i = 0; i < cadena.length; i++) {
        const char = cadena[i]
        const index = alphabet.indexOf(char)
        if (index !== -1) {
            resultado += rot13[index]
        } else {
            resultado += char
        }
    }

    return resultado
}


