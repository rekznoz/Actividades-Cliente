
import { webInitonLoad, obtenerClientes, eliminarCliente } from './API.js'

const tablaBody = document.querySelector('#listado-clientes')

function onLoadWindows(){
    let conexion = webInitonLoad()
    conexion.addEventListener('success', mostrarClientes)
}
window.addEventListener('load', onLoadWindows)

function mostrarClientes(){
    limpiarHTML()
    let clientes = obtenerClientes()
    clientes.addEventListener('success', mostrarClientesCursor)
}

function mostrarClientesCursor(evento) {
    let cursor = evento.target.result
    if (cursor) {
        const {nombre, email, telefono, empresa, id} = cursor.value

        /*

        <tbody id="listado-clientes" class="bg-white">
            <tr>
                <td class="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    Rafael
                </td>
                <td class="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    123 456 789
                </td>
                <td class="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    ASD
                </td>
                <td class="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                    <button class="text-blue-500 hover:underline">Editar</button>
                    <button class="text-red-500 hover:underline ml-4">Eliminar</button>
                </td>
            </tr>
        </tbody>

         */

        const row = document.createElement('tr')

        const nombreTd = document.createElement('td')
        nombreTd.className = 'px-6 py-4 border-b border-gray-200 text-sm text-gray-700'
        nombreTd.textContent = nombre
        row.appendChild(nombreTd)

        const telefonoTd = document.createElement('td')
        telefonoTd.className = 'px-6 py-4 border-b border-gray-200 text-sm text-gray-700'
        telefonoTd.textContent = telefono
        row.appendChild(telefonoTd)

        const empresaTd = document.createElement('td')
        empresaTd.className = 'px-6 py-4 border-b border-gray-200 text-sm text-gray-700'
        empresaTd.textContent = empresa
        row.appendChild(empresaTd)

        const accionesTd = document.createElement('td')
        accionesTd.className = 'px-6 py-4 border-b border-gray-200 text-sm text-gray-700'

        const editarBoton = document.createElement('button')
        editarBoton.className = 'text-blue-500 hover:underline'
        editarBoton.textContent = 'Editar'
        accionesTd.appendChild(editarBoton)

        editarBoton.onclick = () => {
            window.location.href = `editar-cliente.html?id=${id}`
        }

        const eliminarBoton = document.createElement('button')
        eliminarBoton.className = 'text-red-500 hover:underline ml-4'
        eliminarBoton.textContent = 'Eliminar'
        accionesTd.appendChild(eliminarBoton)

        eliminarBoton.onclick = () => {
            let eliminar = eliminarCliente(id)
            eliminar.addEventListener('success', mostrarClientes)
        }

        row.appendChild(accionesTd)

        tablaBody.appendChild(row)
        cursor.continue()
    }
}

function limpiarHTML(){
    while (tablaBody.firstChild) {
        tablaBody.removeChild(tablaBody.firstChild)
    }
}