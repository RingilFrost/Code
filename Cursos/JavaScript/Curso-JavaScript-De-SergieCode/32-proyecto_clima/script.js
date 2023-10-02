let urlBase = 'https://api.tomorrow.io/v4/weather/realtime'
let api_key = 'awWZz5tGEpi3GDGaXLop8CI1WowyhcsR'

document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?location=${ciudad}&apikey=${api_key}`)
        .then(respuesta => respuesta.json())
        .then(respuesta => mostrarDatosClima(respuesta))
}

function mostrarDatosClima(respuesta){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML = ''

    const ciudadNombre = respuesta.location.name
    const temperatura = respuesta.data.values.temperature

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = ciudadNombre

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es: ${temperatura}°C`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
}