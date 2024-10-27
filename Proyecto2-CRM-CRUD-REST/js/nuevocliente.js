
// Importar funciones.js
import { validarNombre, validarEmail, validarTelefono } from './funciones.js'

const formulario = document.querySelector('#formulario')

const nombre = document.querySelector('#nombre')
const email = document.querySelector('#email')
const telefono = document.querySelector('#telefono')
const empresa = document.querySelector('#empresa')

function validarCampoNombre(){
    if (nombre.value.length > 0) {
        if (validarNombre(nombre.value)) {
            console.log('Nombre válido')
        }
    }
}
nombre.addEventListener('blur', validarCampoNombre)

function validarCampoEmail(){
    if (email.value.length > 0) {
        if (validarEmail(email.value)) {
            console.log('Email válido')
        }
    }
}
email.addEventListener('blur', validarCampoEmail)

function validarCampoTelefono(){
    if (telefono.value.length > 0) {
        if (validarTelefono(telefono.value)) {
            console.log('Teléfono válido')
        }
    }
}
telefono.addEventListener('blur', validarCampoTelefono)

function validarCampoEmpresa(){
    if (empresa.value.length > 0) {
        if (empresa.value.trim() === '') {
            alert("La empresa es obligatoria.")
            return false
        }
    }
}
empresa.addEventListener('blur', validarCampoEmpresa)

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()
    console.log('Enviando formulario...')
    console.log('Nombre: ', nombre.value)
    console.log('Email: ', email.value)
    console.log('Teléfono: ', telefono.value)
    console.log('Empresa: ', empresa.value)
    console.log('Formulario enviado')
    formulario.reset()
})