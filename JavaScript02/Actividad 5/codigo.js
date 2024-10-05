
class Libro {
    constructor(titulo, autor, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.paginas = paginas
    }

    resumen() {
        return `${this.titulo} es un libro escrito por ${this.autor} y tiene ${this.paginas} páginas.`
    }
}

const libros = [
    new Libro ("Libro 1", "Autor 1", 101),
    new Libro ("Libro 2", "Autor 2", 202),
    new Libro ("Libro 3", "Autor 3", 303),
    new Libro ("Libro 4", "Autor 4", 404),
    new Libro ("Libro 5", "Autor 5", 505),
]

for (let libro in libros) {
    console.log(libros[libro].resumen())
}