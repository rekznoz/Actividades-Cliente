
export let baseDatosGlobal

/*
{
  "clientes": [
    {
      "nombre": "Luis!",
      "email": "correo@correo.com",
      "telefono": "12",
      "empresa": "12212",
      "id": 26
    }
  ]
}
 */

export function webInitonLoad(){

    // Abre la base de datos
    let solicitud = indexedDB.open('DB-Clientes', 1)

    // Eventos de la base de datos
    solicitud.addEventListener('error', mostrarError)
    solicitud.addEventListener('success', iniciarBaseDatos)
    solicitud.addEventListener('upgradeneeded', crearAlmacen)
    return solicitud
}
//window.addEventListener('load', webInitonLoad)

// Mustra un mensaje de error en la consola si la base de datos no se puede abrir
function mostrarError(evento){
    console.log('Error: ', evento)
}

// Inicia la base de datos si se puede abrir
function iniciarBaseDatos(evento){
    baseDatosGlobal = evento.target.result
    console.log('Base de datos iniciada')
}

// Crea un almacen en la base de datos si no existe
function crearAlmacen(evento){
    const basedatos = evento.target.result
    const almacen = basedatos.createObjectStore('clientes', {keyPath: 'id', autoIncrement: true})
    almacen.createIndex('buscarNombre', 'nombre', {unique: false})
    almacen.createIndex('buscarEmail', 'email', {unique: true})
    almacen.createIndex('buscarTelefono', 'telefono', {unique: false})
    almacen.createIndex('buscarEmpresa', 'empresa', {unique: false})
    console.log('Almacen creado')
}

export function agregarCliente(cliente){
    let transaction = baseDatosGlobal.transaction(['clientes'], 'readwrite')
    let almacen = transaction.objectStore('clientes')
    let agregar = almacen.add(cliente)

    agregar.addEventListener('error', mostrarError)
}

export function eliminarCliente(id){
    let transaction = baseDatosGlobal.transaction(['clientes'], 'readwrite')
    let almacen = transaction.objectStore('clientes')
    let eliminar = almacen.delete(id)

    //eliminar.addEventListener('success', mostrarClientes)
    //eliminar.addEventListener('error', mostrarError)
    return eliminar
}

export function obtenerCliente(id){
    let transaction = baseDatosGlobal.transaction(['clientes'], 'readonly')
    let almacen = transaction.objectStore('clientes')
    let cliente = almacen.get(id)

    cliente.addEventListener('error', mostrarError)
    return cliente
}

export function actualizarCliente(id, cliente){
    let transaction = baseDatosGlobal.transaction(['clientes'], 'readwrite')
    let almacen = transaction.objectStore('clientes')
    let actualizar = almacen.put(cliente)
    actualizar.addEventListener('error', mostrarError)
}

export function obtenerClientes(){
    let transaction = baseDatosGlobal.transaction(['clientes'], 'readonly')
    let almacen = transaction.objectStore('clientes')
    return almacen.openCursor()
}
