console.log(' - Promesa Asíncrona')
let promesaAsincrona = new Promise((response, reject) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Respuesta asíncrona'
        }
        response(resp)
        reject('Falló')
    }, 3000);
})

promesaAsincrona.then(resp => {
    console.log(resp.description)
}).catch(error => {
    console.error(error)
})