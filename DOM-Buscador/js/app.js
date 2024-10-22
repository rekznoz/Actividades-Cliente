
const anios = document.querySelector('#year');

function agregarAnios() {
    const max = new Date().getFullYear();
    const min = max - 20;

    for (let i = max; i > min; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        anios.appendChild(option);
    }
}

agregarAnios()

// Filtros
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
   array.forEach(auto => {
        const { marca, modelo, year, precio, puertas, color, transmision } = auto
        const autoHTML = document.createElement('p')
        autoHTML.textContent = `
        Marca: ${marca} - Modelo: ${modelo} - Año: ${year} - Precio: ${precio} - Puertas: ${puertas} - Color: ${color} - Transmision: ${transmision} 
        `
        resultado.appendChild(autoHTML)
   })
}


// Filtros

function filtrarAutos(array, criterios) {
    return array.filter(auto => {
        return (
            (!criterios.marca || auto.marca === criterios.marca) &&
            (!criterios.year || auto.year === parseInt(criterios.year)) &&
            (!criterios.minimo || auto.precio >= parseInt(criterios.minimo)) &&
            (!criterios.maximo || auto.precio <= parseInt(criterios.maximo)) &&
            (!criterios.puertas || auto.puertas === parseInt(criterios.puertas)) &&
            (!criterios.transmision || auto.transmision === criterios.transmision) &&
            (!criterios.color || auto.color === criterios.color)
        );
    });
}

