
const anios = document.querySelector('#year');

function agregarAnios() {
    const amax = new Date().getFullYear();
    const amin = amax - 20;

    for (let i = amax; i > amin; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        anios.appendChild(option);
    }
}

document.addEventListener("DOMContentLoaded",() => {
    agregarAnios()
})

const selectores = document.querySelector('#buscador')
const minimoSelector = document.querySelector('#minimo')
const maximoSelector = document.querySelector('#maximo')

function clickSelectores(e) {
    e.preventDefault()

    if (e.target.tagName === 'SELECT') {

        const marca = document.querySelector('#marca').value
        const year = document.querySelector('#year').value
        const minimo = document.querySelector('#minimo').value
        const maximo = document.querySelector('#maximo').value
        if (minimo !== '' && maximo !== '') {
            if (parseInt(minimo) > parseInt(maximo)) {
                alert('El precio minimo se debe ser mayor al maximo!')
                minimoSelector.options.selectedIndex = 0
                maximoSelector.options.selectedIndex = 0
                return
            }
        }
        const puertas = document.querySelector('#puertas').value
        const transmision = document.querySelector('#transmision').value
        const color = document.querySelector('#color').value
        let vehiculo = filtrarAutos(coches, { marca, year, minimo, maximo, puertas, transmision, color })
        mostrarResultado(vehiculo)
    }

}
selectores.addEventListener('input', clickSelectores)

// Mostrar resultados
const resultado = document.querySelector('#resultado')

function mostrarResultado(array) {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
    if (array.length === 0) {
        const noResultado = document.createElement('p')
        noResultado.classList.add('alerta', 'error')
        noResultado.textContent = 'Nada que mostrar!'
        resultado.appendChild(noResultado)
        return
    }
   array.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto
        const autoHTML = document.createElement('p')
        autoHTML.textContent = `
        ${marca} ${modelo} - Año: ${year} - Precio: ${precio} - Puertas: ${puertas} - Color: ${color} - Transmision: ${transmision} 
        `
        resultado.appendChild(autoHTML)
   })
}


// Filtros
function filtrarAutos(array, criterios) {
    return array.filter(veh => {
        return (
            (!criterios.marca || veh.marca === criterios.marca) &&
            (!criterios.year || veh.year === parseInt(criterios.year)) &&
            (!criterios.minimo || veh.precio >= parseInt(criterios.minimo)) &&
            (!criterios.maximo || veh.precio <= parseInt(criterios.maximo)) &&
            (!criterios.puertas || veh.puertas === parseInt(criterios.puertas)) &&
            (!criterios.transmision || veh.transmision === criterios.transmision) &&
            (!criterios.color || veh.color === criterios.color)
        );
    });
}

