
console.log(' - Promesa síncrona')
let promesaSincrona = new Promise((response, reject) => {
    let resp = 'Respuesta síncrona'
    response(resp)
    reject('Falló')
})

promesaSincrona.then(res => {
    console.log(res)
}).catch(error => {
    console.error(error)
})