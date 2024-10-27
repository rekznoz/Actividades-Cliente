
// Importar funciones.js
import { validarCampoNombre, validarCampoEmail, validarCampoTelefono, validarCampoEmpresa } from './funciones.js'
import { webInitonLoad, agregarCliente } from './API.js'

function onLoadWindows(){
    let conexion = webInitonLoad()
}
window.addEventListener('load', onLoadWindows)

const formulario = document.querySelector('#formulario')

const campoNombre = document.querySelector('#nombre')
const campoEmail = document.querySelector('#email')
const campoTelefono = document.querySelector('#telefono')
const campoEmpresa = document.querySelector('#empresa')

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