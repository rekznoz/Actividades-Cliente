function lanzarDado() {
    return Math.floor(Math.random() * 6)
}

function simularLanzamientos() {
    const resultados = Array(6).fill(0)

    for (let i = 0; i < 36000; i++) {
        const dado1 = lanzarDado()
        const dado2 = lanzarDado()

        resultados[dado1]++
        resultados[dado2]++
    }

    for (let i = 0; i < resultados.length; i++) {
        console.log(`La suma ${i+1} ha salido ${resultados[i]} veces.`)
    }
}

simularLanzamientos();
