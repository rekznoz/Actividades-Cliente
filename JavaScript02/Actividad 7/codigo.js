class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
    }

    hablar() {
        return `${this.nombre} hace un sonido.`
    }
}

class Perro extends Animal {
    hablar() {
        return `${this.nombre}: Guau!`
    }
}

class Gato extends Animal {
    hablar() {
        return `${this.nombre}: Miau!`
    }
}

const perro = new Perro("Perro", 2)
const gato = new Gato("Gato", 3)

console.log(perro.hablar())
console.log(gato.hablar())