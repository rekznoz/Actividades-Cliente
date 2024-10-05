function calcularSumaPrecios(productos) {
    const suma = productos.reduce((acumulador, producto) => {
        return acumulador + producto.precio
    }, 0)
    return suma
}

const productos = [
    {nombre: "Manzana", precio: 1.50},
    {nombre: "Naranja", precio: 2.00},
    {nombre: "Banana", precio: 0.75},
    {nombre: "Uva", precio: 3.25},
    {nombre: "Pera", precio: 2.50},
    {nombre: "Kiwi", precio: 1.15},
    {nombre: "Mango", precio: 4.00}
]

const suma = calcularSumaPrecios(productos)
console.log(`La suma de los precios es ${suma}`)
