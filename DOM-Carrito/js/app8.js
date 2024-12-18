
const tablaCursos = document.querySelector('#lista-cursos')
const tablaCarrito = document.querySelector('#lista-carrito tbody')
const botonVaciarCarrito = document.querySelector('#vaciar-carrito')

let arrayCursos = []

function agregarCurso(evento) {
    evento.preventDefault()
    if (evento.target.classList.contains('agregar-carrito')) {
        const curso = evento.target.parentElement.parentElement
        const infoCurso = obtenerInfoCurso(curso)
        const existingCurso = arrayCursos.find(c => c.id === infoCurso.id)

        if (existingCurso) {
            existingCurso.quantity += 1
            modificarCantidad(infoCurso.id, existingCurso.quantity)
        } else {
            infoCurso.quantity = 1
            arrayCursos.push(infoCurso)
            agregarCarrito(infoCurso)
        }

        guardarCarritoLocalStorage()
    }
}
tablaCursos.addEventListener('click', agregarCurso)

function obtenerInfoCurso(curso) {
    return {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        quantity: 1
    }
}

function modificarCantidad(id, cantidad) {
    const botonBorrar = document.querySelector(`a[data-id="${id}"]`)
    const cantidadElemento = botonBorrar.parentElement.previousElementSibling
    cantidadElemento.textContent = cantidad
}

function agregarCarrito(curso) {
    const row = document.createElement('tr')

    /*

    row.innerHTML = `
        <td>
            <img src="${curso.imagen}">
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td id="cantidad">${cantidad}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `
 */

    // Imagen
    const tdImagen = document.createElement('td')
    const img = document.createElement('img')
    img.src = curso.imagen
    img.width = 100
    tdImagen.appendChild(img)

    // Titulo
    const tdTitulo = document.createElement('td')
    tdTitulo.textContent = curso.titulo

    // Precio
    const tdPrecio = document.createElement('td')
    tdPrecio.textContent = curso.precio

    // Cantidad
    const tdCantidad = document.createElement('td')
    tdCantidad.id = 'cantidad'
    tdCantidad.textContent = curso.quantity

    // Boton de Eliminar
    const tdBorrar = document.createElement('td')
    const borrarLink = document.createElement('a')
    borrarLink.href = '#'
    borrarLink.classList.add('borrar-curso')
    borrarLink.setAttribute('data-id', curso.id)
    borrarLink.textContent = 'X'
    tdBorrar.appendChild(borrarLink)

    row.appendChild(tdImagen)
    row.appendChild(tdTitulo)
    row.appendChild(tdPrecio)
    row.appendChild(tdCantidad)
    row.appendChild(tdBorrar)

    tablaCarrito.appendChild(row)
}

function borrarCurso(evento) {
    evento.preventDefault()
    if (evento.target.classList.contains('borrar-curso')) {
        const curso = evento.target.parentElement.parentElement
        const cursoId = curso.querySelector('a').getAttribute('data-id')
        const cantidad = parseInt(curso.querySelector('#cantidad').textContent)

        if (cantidad > 1) {
            modificarCantidad(cursoId, cantidad - 1)
            const existingCurso = arrayCursos.find(c => c.id === cursoId)
            existingCurso.quantity -= 1
        } else {
            curso.remove()
            arrayCursos = arrayCursos.filter(curso => curso.id !== cursoId)
        }

        guardarCarritoLocalStorage()
    }
}
tablaCarrito.addEventListener('click', borrarCurso)

function vaciarCarrito(evento) {
    evento.preventDefault()
    while (tablaCarrito.firstChild) {
        tablaCarrito.removeChild(tablaCarrito.firstChild)
    }
    arrayCursos = []
    localStorage.removeItem('carrito')
}
botonVaciarCarrito.addEventListener('click', vaciarCarrito)

// Local Storage

function guardarCarritoLocalStorage() {
    let toString = JSON.stringify(arrayCursos)
    localStorage.setItem('carrito', toString)
}

function cargarCarritoLocalStorage() {
    arrayCursos = JSON.parse(localStorage.getItem('carrito')) || []
    if (arrayCursos.length) {
        arrayCursos.forEach(curso => agregarCarrito(curso))
    }
}
document.addEventListener('DOMContentLoaded', cargarCarritoLocalStorage)