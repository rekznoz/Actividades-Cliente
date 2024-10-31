
// Importar funciones.js
import { validarCampoNombre, validarCampoEmail, validarCampoTelefono, validarCampoEmpresa } from './funciones.js'
// Importar API.js
import { webInitonLoad, actualizarCliente, obtenerCliente } from './API.js'

function onLoadWindows(){
    let conexion = webInitonLoad()
    conexion.addEventListener('success', llenarFormulario)
}
window.addEventListener('load', onLoadWindows)

let idCliente

const formulario = document.querySelector('#formulario')

const campoNombre = document.querySelector('#nombre')
const campoEmail = document.querySelector('#email')
const campoTelefono = document.querySelector('#telefono')
const campoEmpresa = document.querySelector('#empresa')

export function llenarFormulario(){
    // Obtener el id del cliente a editar
    const parametrosURL = new URLSearchParams(window.location.search)
    idCliente = parseInt(parametrosURL.get('id'))

    const cliente = obtenerCliente(idCliente)
    cliente.onsuccess = () => {
        const {nombre, email, telefono, empresa} = cliente.result
        campoNombre.value = nombre
        campoEmail.value = email
        campoTelefono.value = telefono
        campoEmpresa.value = empresa
    }
}

// Validar el formulario antes de enviarlo

function validarFormularioEnEnvio(evento){
    evento.preventDefault()

    // Validar los campos
    if (validarCampoNombre() && validarCampoEmail() && validarCampoTelefono() && validarCampoEmpresa()) {
        console.log('Todos los campos son válidos')

        // Crear un objeto con la información del cliente
        let nuevoCliente = {
            id : idCliente,
            nombre: campoNombre.value,
            email: campoEmail.value,
            telefono: campoTelefono.value,
            empresa: campoEmpresa.value
        }

        actualizarCliente(idCliente, nuevoCliente)

        formulario.reset()
    }
}
formulario.addEventListener('submit', validarFormularioEnEnvio)