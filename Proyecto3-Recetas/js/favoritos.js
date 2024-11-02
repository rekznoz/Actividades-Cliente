import { webInitonLoad, obtenerElementos, eliminarElemento } from './api.js'

function onLoadWindows(){
    let conexion = webInitonLoad()
    conexion.addEventListener('success', mostrarFavoritos)
}
window.addEventListener('load', onLoadWindows)

const listaFavoritos = document.querySelector('#resultado')

function mostrarFavoritos(){
    let conexion = obtenerElementos()
    conexion.addEventListener('success', () => {
        let cursor = conexion.result
        if(cursor){
            mostrarFavorito(cursor.value)
            cursor.continue()
        }
    })
}

function mostrarFavorito(favorito){
    const {id, nombre, imagen, categoria} = favorito
    console.log(favorito)
    const div = document.createElement('div')
    div.classList.add('col-md-4')
    div.innerHTML = `
        <div class="card">
            <img src="${imagen}" class="card-img-top" alt="${nombre}">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${categoria}</p>
                <button class="btn btn-danger" data-id="${id}">Eliminar</button>
            </div>
        </div>
    `
    listaFavoritos.appendChild(div)
}