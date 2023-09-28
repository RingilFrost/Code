let urlBase = 'https://jsonplaceholder.typicode.com'

// GET: pedir informacipon
let query = 'comments?postId=5'

fetch(`${urlBase}/${query}`)
    .then(response => response.json())
    .then(json => console.log(json))

// POST: enviar información
let requestBody1 = {
    title: 'Ricardo comenta sobre tu foto',
    body: 'Hermosa foto!',
    userId: 1,
}

fetch(`${urlBase}/posts`, {
    method: 'POST',
    headers: {
        'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(requestBody1)
})
    .then(response => response.json())
    .then(json => console.log(json))

// PUT: editar información
let posteo = 5

let requestBody2 = {
    id: 3,
    title: 'Ricardo comenta sobre tu foto',
    body: 'Hermosa foto!',
    userId: 1,
}

fetch(`${urlBase}/posts/${posteo}`, {
    method: 'PUT',
    headers: {
        'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(requestBody2)
})
    .then(response => response.json())
    .then(json => console.log(json))

// PATCH: editar información (sólo se edita un atributo)
let post = 10
let modificacion = {
    title: 'Este título ha sido modificado'
}

fetch(`${urlBase}/posts/${post}`, {
    method: 'PATCH',
    headers: {
        'content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(modificacion)
})
    .then(response => response.json())
    .then(json => console.log(json))

// DELETE: borrar un item
let elementoAEliminar = 7

fetch(`${urlBase}/posts/${elementoAEliminar}`, {
  method: 'DELETE',
});