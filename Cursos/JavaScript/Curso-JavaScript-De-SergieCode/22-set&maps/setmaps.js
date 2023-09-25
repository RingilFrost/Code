
//SET
console.log('- SET:')
let conjunto = new Set(['Pedro', 'Ricardo', 'Maria', 'Pedro', 'Ricardo', 'Ricardo'])

//Agregar
conjunto.add('Luciana')
//Eliminar
conjunto.delete('Ricardo')
//Pregunta si está el elemento
console.log(conjunto.has('Ricardo'))
//Tamaño
console.log(conjunto.size)

console.log(conjunto)

//MAP
console.log('- MAP:')
let mapa = new Map([
    ['Computadoras', 10],
    ['Tablets', 5],
    ['Celulares', 15]
])

//Agregar
mapa.set('Teclados', 20)
//Tamaño
console.log(mapa.size)
//Eliminar
mapa.delete('Computadoras')
//Pregunta si está el elemento
console.log(mapa.has('Tablets'))

console.log(mapa)

//Para eliminar duplicados de un array
let array = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
let unico = new Set(array)
let nuevoArray = [...unico]

console.log(nuevoArray)