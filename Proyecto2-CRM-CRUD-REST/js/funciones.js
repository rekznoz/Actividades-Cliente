
function mostrarError(mensaje){
    alert(mensaje)
}

function validarNombre(nombre) {

    nombre = nombre.trim()

    if (!nombre) {
        mostrarError("El nombre es obligatorio.")
        return false
    }

    if (nombre.length < 2 || nombre.length > 28) {
        mostrarError("El nombre debe tener entre 2 y 28 caracteres.")
        return false
    }

    // Expresión regular para validar un nombre
    // La expresión regular permite letras, espacios, apóstrofes y guiones
    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/
    if (!regex.test(nombre)) {
        mostrarError("El nombre solo puede contener letras y espacios.")
        return false
    }

    return true
}

function validarEmail(email) {

    email = email.trim()

    if (!email) {
        mostrarError("El email es obligatorio.")
        return false
    }

    // Expresión regular para validar un email
    // La expresión regular permite letras, números, puntos, guiones y guiones bajos con el formato:
    // de texto@texto
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (!regex.test(email)) {
        mostrarError("El email no es válido.")
        return false
    }

    return true
}

function validarTelefono(telefono) {

    telefono = telefono.trim()

    if (!telefono) {
        mostrarError("El teléfono es obligatorio.")
        return false
    }

    if (telefono.length < 8 || telefono.length > 15) {
        mostrarError("El teléfono debe tener entre 8 y 15 caracteres.")
        return false
    }

    // Expresión regular para validar un teléfono
    // La expresión regular permite números y espacios
    const regex = /^[0-9\s+]+$/
    if (!regex.test(telefono)) {
        mostrarError("El teléfono solo puede contener números y espacios.")
        return false
    }

    return true
}

// Validar los campos del formulario

const campoNombre = document.querySelector('#nombre')
const campoEmail = document.querySelector('#email')
const campoTelefono = document.querySelector('#telefono')
const campoEmpresa = document.querySelector('#empresa')

export function validarCampoNombre(){
    if (campoNombre.value.length > 0) {
        if (validarNombre(campoNombre.value)) {
            console.log('Nombre válido')
            return true
        }
    }
    return false
}
campoNombre.addEventListener('blur', validarCampoNombre)

export function validarCampoEmail(){
    if (campoEmail.value.length > 0) {
        if (validarEmail(campoEmail.value)) {
            console.log('Email válido')
            return true
        }
    }
    return false
}
campoEmail.addEventListener('blur', validarCampoEmail)

export function validarCampoTelefono(){
    if (campoTelefono.value.length > 0) {
        if (validarTelefono(campoTelefono.value)) {
            console.log('Teléfono válido')
            return true
        }
    }
    return false
}
campoTelefono.addEventListener('blur', validarCampoTelefono)

export function validarCampoEmpresa(){
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
