
function mostrarError(mensaje){
    alert(mensaje)
}

export function validarNombre(nombre) {

    nombre = nombre.trim()

    if (!nombre) {
        mostrarError("El nombre es obligatorio.")
        return false
    }

    if (nombre.length < 2 || nombre.length > 28) {
        mostrarError("El nombre debe tener entre 2 y 28 caracteres.")
        return false
    }

    const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s'-]+$/
    if (!regex.test(nombre)) {
        mostrarError("El nombre solo puede contener letras y espacios.")
        return false
    }

    return true
}

export function validarEmail(email) {

    email = email.trim()

    if (!email) {
        mostrarError("El email es obligatorio.")
        return false
    }

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
    if (!regex.test(email)) {
        mostrarError("El email no es válido.")
        return false
    }

    return true
}

export function validarTelefono(telefono) {

    telefono = telefono.trim()

    if (!telefono) {
        mostrarError("El teléfono es obligatorio.")
        return false
    }

    if (telefono.length < 8 || telefono.length > 15) {
        mostrarError("El teléfono debe tener entre 8 y 15 caracteres.")
        return false
    }

    const regex = /^[0-9\s+]+$/
    if (!regex.test(telefono)) {
        mostrarError("El teléfono solo puede contener números y espacios.")
        return false
    }

    return true
}