class Personaje {

    constructor(nombre, raza) {
        this.nombre = nombre
        this.raza = raza
        this.nivel = 1
        this.vida = 100
    }

    atacar(enemigo) {
        const danio = generarNumeroAleatorio(5, 20)
        if (enemigo.recibirDanio(danio)) {
            this.subirNivel()
            return 0
        } else {
            return danio
        }
    }

    recibirDanio(danio) {
        this.vida -= danio
        if (this.vida <= 0) {
            this.vida = 0
            return true
        } else {
            return false
        }
    }

    recuperarVida() {
        const vidaRecuperada = 20
        if (this.vida < 100) {
            this.vida += vidaRecuperada
            if (this.vida > 100) {
                this.vida = 100
            }
            return vidaRecuperada
        } else {
            return 0
        }
    }

    subirNivel() {
        this.nivel = 1
        this.vida = 100
        alert(`${this.nombre} perdio el combate!`)
    }

}

function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const personajes = [
    new Personaje("Rafa", "Humano"),
    new Personaje("Natalia", "Enana"),
    new Personaje("Aitana", "Elfa"),
    new Personaje("Marta", "Orco"),
    new Personaje("Felipe", "Troll"),
    new Personaje("Jose", "Goblin")
]

function simularCombate(personaje1, personaje2) {
    console.log(`¡Comienza la batalla entre ${personaje1.nombre} y ${personaje2.nombre}!`)
    let ronda = 1
    let ataque
    let vidaRecuperada
    while (personaje1.vida > 0 && personaje2.vida > 0) {
        console.log(`Ronda ${ronda}`)

        ataque = personaje1.atacar(personaje2)
        console.log(`${personaje1.nombre} ataca a ${personaje2.nombre} y le queda ${personaje2.vida} de vida.`)
        if (ataque === 0) {
            console.log(`${personaje2.nombre} ha sido derrotado.`)
            break
        }
        console.log(`${personaje2.nombre} tiene ${personaje2.vida} puntos de vida.`)

        ataque = personaje2.atacar(personaje1)
        console.log(`${personaje2.nombre} ataca a ${personaje1.nombre} y le queda ${personaje1.vida} de vida.`)
        if (ataque === 0) {
            console.log(`${personaje1.nombre} ha sido derrotado.`)
            break
        }
        console.log(`${personaje1.nombre} tiene ${personaje1.vida} puntos de vida.`)

        // Eleccion random si el personaje se cura o no
        if (Math.random() > 0.5) {
            vidaRecuperada = personaje1.recuperarVida()
            if (vidaRecuperada > 0) {
                console.log(`${personaje1.nombre} recupera ${vidaRecuperada} puntos de vida.`)
            }
        }
        if (Math.random() > 0.5) {
            vidaRecuperada = personaje2.recuperarVida()
            if (vidaRecuperada > 0) {
                console.log(`${personaje2.nombre} recupera ${vidaRecuperada} puntos de vida.`)
            }
        }

        ronda++
    }
}

// Seleccionar 2 personajes random
const personaje1 = personajes[Math.floor(Math.random() * personajes.length)]
const personaje2 = personajes[Math.floor(Math.random() * personajes.length)]

simularCombate(personaje1, personaje2)
