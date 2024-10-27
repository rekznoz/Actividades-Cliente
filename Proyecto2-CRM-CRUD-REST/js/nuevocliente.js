
// Importar funciones.js
import { validarNombre, validarEmail, validarTelefono } from './funciones.js'
import { webInitonLoad, agregarCliente } from './API.js'

const formulario = document.querySelector('#formulario')

const campoNombre = document.querySelector('#nombre')
const campoEmail = document.querySelector('#email')
const campoTelefono = document.querySelector('#telefono')
const campoEmpresa = document.querySelector('#empresa')

function onLoadWindows(){
    let conexion = webInitonLoad()
}
window.addEventListener('load', onLoadWindows)

// Validar los campos del formulario

function validarCampoNombre(){
    if (campoNombre.value.length > 0) {
        if (validarNombre(campoNombre.value)) {
            console.log('Nombre válido')
            return true
        }
    }
    return false
}
campoNombre.addEventListener('blur', validarCampoNombre)

function validarCampoEmail(){
    if (campoEmail.value.length > 0) {
        if (validarEmail(campoEmail.value)) {
            console.log('Email válido')
            return true
        }
    }
    return false
}
campoEmail.addEventListener('blur', validarCampoEmail)

function validarCampoTelefono(){
    if (campoTelefono.value.length > 0) {
        if (validarTelefono(campoTelefono.value)) {
            console.log('Teléfono válido')
            return true
        }
    }
    return false
}
campoTelefono.addEventListener('blur', validarCampoTelefono)

function validarCampoEmpresa(){
    if (campoEmpresa.value.length > 0) {
        if (campoEmpresa.value.trim() === '') {
            alert("La empresa es obligatoria.")
            return false
        }
        return true
    }
    alert("La empresa es obligatoria.")
    return false
}
campoEmpresa.addEventListener('blur', validarCampoEmpresa)

// Validar el formulario antes de enviarlo

function validarFormularioEnEnvio(evento){
    evento.preventDefault()

    if (validarCampoNombre() && validarCampoEmail() && validarCampoTelefono() && validarCampoEmpresa()) {
        console.log('Todos los campos son válidos')

        let nuevoCliente = {
            nombre: campoNombre.value,
            email: campoEmail.value,
            telefono: campoTelefono.value,
            empresa: campoEmpresa.value
        }

        agregarCliente(nuevoCliente)

        formulario.reset()
    }
}
formulario.addEventListener('submit', validarFormularioEnEnvio)