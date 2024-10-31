
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

    // Clientes de prueba
    const clientes = [
        {nombre: 'Rafael', email: 'prueba1@asd.com', telefono: '123456789', empresa: 'ASD 123'},
        {nombre: 'Natasha', email: 'prueba2@asd.com', telefono: '123456789', empresa: 'ASD 123'},
        {nombre: 'Marta', email: 'prueba3@asd.com', telefono: '123456789', empresa: 'ASD 123'},
        {nombre: 'Serafin', email: 'prueba4@asd.com', telefono: '123456789', empresa: 'ASD 123'},
        {nombre: 'Aitana', email: 'prueba5@asd.com', telefono: '123456789', empresa: 'ASD 123'},
        {nombre: 'Jose', email: 'prueba6@asd.com', telefono: '123456789', empresa: 'ASD 123'},
        {nombre: 'Felipe', email: 'prueba7@asd.com', telefono: '123456789', empresa: 'ASD 123'},
        {nombre: 'Gustavo', email: 'prueba8@asd.com', telefono: '123456789', empresa: 'ASD 123'},
    ]

    // Agregar los clientes de prueba
    clientes.forEach(cliente => {
        almacen.add(cliente)
    })

}

export function agregarCliente(cliente){
    let transaction = baseDatosGlobal.transaction(['clientes'], 'readwrite')
    let almacen = transaction.objectStore('clientes')
    let agregar = almacen.add(cliente)

    agregar.onerror = (evento) => {
        if (evento.target.error.name === 'ConstraintError') {
            alert('El email ya existe')
        } else {
            alert('No se pudo agregar el cliente')
        }
    }
}

export function eliminarCliente(id){
    let transaction = baseDatosGlobal.transaction(['clientes'], 'readwrite')
    let almacen = transaction.objectStore('clientes')
    let eliminar = almacen.delete(id)

    //eliminar.addEventListener('success', mostrarClientes)
    eliminar.onerror = (evento) => {
        alert('No se pudo eliminar el cliente')
    }
    return eliminar
}

export function obtenerCliente(id){
    let transaction = baseDatosGlobal.transaction(['clientes'], 'readonly')
    let almacen = transaction.objectStore('clientes')
    let cliente = almacen.get(id)

    cliente.onerror = (evento) => {
        alert('No se pudo obtener el cliente')
    }
    return cliente
}

export function actualizarCliente(id, cliente){
    let transaction = baseDatosGlobal.transaction(['clientes'], 'readwrite')
    let almacen = transaction.objectStore('clientes')
    let obtener = almacen.get(id)
    obtener.onsuccess = (evento) => {
        almacen.put(cliente)
    }
}

export function obtenerClientes(){
    let transaction = baseDatosGlobal.transaction(['clientes'], 'readonly')
    let almacen = transaction.objectStore('clientes')
    return almacen.openCursor()
}
