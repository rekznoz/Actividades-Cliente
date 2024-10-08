class Estudiante {
    constructor(nombre, edad) {
        this.nombre = nombre
        this.edad = edad
        this.notas = []
    }

    agregarNota(nota) {
        if (nota < 0 || nota > 10) {
            throw new alert("La nota debe estar entre 0 y 10")
        } else if (isNaN(nota)) {
            throw new alert("La nota debe ser un número")
        }
        this.notas.push(nota);
    }

    calcularPromedio() {
        if (this.notas.length !== 0) {
            const suma = this.notas.reduce((acumulador, notaActual) => acumulador + notaActual, 0)
            return (suma / this.notas.length).toFixed(2)
        } else {
            return 0
        }
    }

    haAprobado() {
        const media = this.calcularPromedio()
        return media >= 5
    }
}

const estudiante = new Estudiante("Rafita", 28)

estudiante.agregarNota(10)
estudiante.agregarNota(5)
estudiante.agregarNota(8)

console.log(estudiante.calcularPromedio())
console.log(estudiante.haAprobado())