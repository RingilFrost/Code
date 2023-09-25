console.log(' - Async/Await')
let promesa1 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Respuesta 1'
        }
        response(resp)
    }, 3000);
})

let promesa2 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Respuesta 2'
        }
        response(resp)
    }, 5000);
})

let promesa3 = new Promise((response) => {
    setTimeout(() => {
        let resp = {
            response: 200,
            description: 'Respuesta 3'
        }
        response(resp)
    }, 2500);
})

async function ejecutarPromesas(){
    let respuestaProm1 = await promesa1
    console.log(respuestaProm1.description)
    let respuestaProm2 = await promesa2
    console.log(respuestaProm2.description)
    let respuestaProm3 = await promesa3
    console.log(respuestaProm3.description)
}

ejecutarPromesas()