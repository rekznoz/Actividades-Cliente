
function solicitarNumero() {
    let numero;
    do {
        let entrada = prompt("Numero")
        numero = parseFloat(entrada)

        if (isNaN(numero)) {
            alert("ERROR Número invalido\nIntentalo de otra vez!")
        }

    } while (isNaN(numero)) // Bucle cuando el prompt no sea un numero
    return numero
}

function findPairs(inicio, fin) {

    if (inicio < 1 || inicio > 100 || fin < 1 || fin > 100 || isNaN(inicio) || isNaN(fin)) {
        console.log("Solo números entre 1 y 100.");
        return;
    }

    if (inicio > fin) {
        console.log("El numero de inicio debe ser superior al final");
        return;
    }

    let pares = [];

    for (let i = inicio; i <= fin; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }

    if (pares.length > 0) {
        console.log(`Los numeros pares entre ${inicio} y ${fin} son: ${pares.join(', ')}`);
    } else {
        console.log(`No hay numeros pares entre ${inicio} y ${fin}.`);
    }

}

let numero1 = solicitarNumero()
let numero2 = solicitarNumero()

findPairs(numero1, numero2);
