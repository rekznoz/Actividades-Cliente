
// https://www.themealdb.com/api.php

// Categorias
// www.themealdb.com/api/json/v1/1/categories.php

// Filtrar categorias
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

const categorias = document.querySelector('#categorias')

function cargarCategorias (){
    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            const {categories} = datos
            categories.forEach(categoria => {
                const {strCategory} = categoria
                const option = document.createElement('option')
                option.textContent = strCategory
                option.value = strCategory
                categorias.appendChild(option)
            })
            //console.log(datos)
        })
        .catch(error => {
            console.log(error)
        })
}
window.addEventListener('load', cargarCategorias)

function filtrarPorCategoria(evento){
    evento.preventDefault()
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categorias.value}`
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            console.log(datos)
        })
        .catch(error => {
            console.log(error)
        })
}
categorias.addEventListener('change', filtrarPorCategoria)