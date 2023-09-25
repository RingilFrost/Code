console.log(' - Promesa secuencial')
let promesa1 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Respuesta secuencial 1'
        }
        response(resp)
    }, 3000);
})

let promesa2 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Respuesta secuencial 2'
        }
        response(resp)
    }, 5000);
})

let promesa3 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Respuesta secuencial 3'
        }
        response(resp)
    }, 2500);
})

promesa1.then(resp => {
    console.log(resp.description)
    promesa2.then(resp => {
        console.log(resp.description)
        promesa3.then(resp => {
            console.log(resp.description)
        }).catch(error => {
            console.warn(error)
        })
    }).catch(error => {
        console.warn(error)
    })
}).catch(error => {
    console.warn(error)
})