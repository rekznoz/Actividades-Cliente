
let baseDatosGlobal

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

function webInitonLoad(){

    // Abre la base de datos
    let solicitud = indexedDB.open('Clientes', 1)

    // Eventos de la base de datos
    solicitud.addEventListener('error', mostrarError)
    solicitud.addEventListener('success', iniciarBaseDatos )
    solicitud.addEventListener('upgradeneeded', crearAlmacen)

}
window.addEventListener('load', webInitonLoad)

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

