class Producto {
    constructor(nombre, categoria, precio) {
        this.nombre = nombre
        this.categoria = categoria
        this.precio = this.validarPrecio(precio)
        this.cantidadEnStock = 0
    }

    validarPrecio(precio) {
        if (precio < 0) {
            throw new Error("El precio no puede ser negativo.")
        }
        return precio
    }

    actualizarStock(cantidad) {
        this.cantidadEnStock += cantidad

        // La cantidad en stock no sera menor que 0
        if (this.cantidadEnStock < 0) {
            this.cantidadEnStock = 0
        }
        console.log(`El stock de ${this.nombre} ahora es ${this.cantidadEnStock}.`)
    }
}

class Inventario {
    constructor() {
        this.productos = []
    }

    agregarProducto(producto) {
        if (!(producto instanceof Producto)) {
            throw new Error("El objeto debe ser un Producto.")
        }
        this.productos.push(producto)
        console.log(`Producto ${producto.nombre} agregado`)
        return true
    }

    eliminarProducto(nombre) {
        const index = this.productos.findIndex(producto => producto.nombre === nombre)
        if (index === -1) {
            console.log(`Producto ${nombre} no encontrado `)
            return false
        } else {
            this.productos.splice(index, 1)
            console.log(`Producto ${nombre} eliminado`)
            return true
        }
    }

    buscarProducto(nombre) {
        const producto = this.productos.find(producto => producto.nombre === nombre)
        if (producto) {
            return producto
        } else {
            return false
        }
    }
}

try {

    const inventario = new Inventario()

    // Crear algunos productos
    const pocion = new Producto("Pocion 1", "Pocion", 50)
    const varita = new Producto("Varita 1", "Varita", 100)
    const libro = new Producto("Libro 1", "Libro", 30)

    // Agregar productos
    inventario.agregarProducto(pocion)
    inventario.agregarProducto(varita)
    inventario.agregarProducto(libro)

    // Actualizar productos
    pocion.actualizarStock(10)
    varita.actualizarStock(5)
    libro.actualizarStock(2)

    // Buscar producto
    const producto = inventario.buscarProducto("Libro 1")
    console.log(producto)

    // Eliminar producto
    const eliminado = inventario.eliminarProducto("Libro 1")
    console.log(eliminado)

    // Buscar producto eliminado
    const productoEliminado = inventario.buscarProducto("Libro 1")
    console.log(productoEliminado)

} catch (error) {
    console.error(error.message)
}
