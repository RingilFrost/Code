console.log('3arraysMasMetodos.js:')

//filter 1
let array4 = ['M', 'P', 'B', 'N', 'M', 'N']
let resultado1 = array4.filter(x => x == 'M') // Filter recorre el array buscando el valor establecido y lo agrega

//filter 2
let array5 = [
    {nombre: 'Pedro', apellido:'Gonzalez'},
    {nombre: 'María', apellido:'Gonzalez'},
    {nombre: 'Lucía', apellido:'Gonzalez'},
    {nombre: 'Ricardo', apellido:'Perez'},
    {nombre: 'Glottis', apellido:'Juárez'},
    {nombre: 'Fernanda', apellido:'Fernandez'}
]
let resultado2 = array5.filter(x => x.apellido == 'Gonzalez')

//map
let array6 = ['M', 'M', 'M', 'M']
let resultado3 = array6.map(x => {
    if(x == 'M') return 'N'
})

//fill
let array7 = ['M', 'M', 'M', 'M']
let resultado4 = array7.fill('N', 1)

//find
let array8 = ['M', 'M', 'M', 'M', 'P', 'M', 'P']
let resultado5 = array8.find(x => x == 'P')

//findIndex
let array9 = ['M', 'M', 'M', 'M', 'P', 'M', 'P']
let resultado6 = array9.findIndex(x => x == 'P')

//some
let array10 = ['M', 'M', 'M', 'M', 'P', 'M', 'P']
let resultado7 = array10.some(x => x == 'P')

//every
let array11 = ['M', 'M', 'M', 'M']
let resultado8 = array11.every(x => x == 'M')

//pop
let array12 = ['M', 'M', 'M', 'P']
let resultado9 = array12.pop()

//shift
let array13 = ['M', 'M', 'M', 'P']
let resultado10 = array13.shift()

//push
let array14 = ['M', 'M', 'M', 'P']
let resultado11 = array14.push('B')

//unshift
let array15 = ['M', 'M', 'M', 'P']
let resultado12 = array15.unshift('B')

//splice(índice inicial, cuantos quiero cortar, y que agrego)
//Modifica el array
let array16 = ['M', 'N', 'L', 'P']
let resultado13 = array16.splice(2, 2, 'C', 'A', 'K')

//slice(índice inicial, índice final)
//No modifica el array, devuelve el corte
let array17 = ['M', 'N', 'L', 'P', 'C', 'K']
let resultado14 = array17.slice(2, 4)

//join
let array18 = ['M', 'N', 'L', 'P', 'C', 'K']
let resultado15 = array18.join(' - ')

//concat
let array19 = ['M', 'N', 'L', 'P', 'C', 'K']
let array20 = ['1', '7', '3', '9', '2', '9']
let resultado16 = array19.concat(array20)

//sort - Forma incorrecta
let array21 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let resultado17 = array21.sort()

//sort - Forma correcta
let array22 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
let resultado18 = array22.sort((x, y) => x-y)

//sort - Objetos
let autos = [
    {modelo: 'FIAT', año: 2020},
    {modelo: 'BMW', año: 2019},
    {modelo: 'RENAULT', año: 2021},
    {modelo: 'FORD', año: 2023}
]
let resultado19 = autos.sort((x, y) => x.año-y.año)

//Salidas
console.log('   - FILTER:')
console.log(resultado1)
console.log(resultado2)
for (let index = 0; index < resultado2.length; index++) {
    let element = resultado2[index];
    console.log(element.nombre)
}
console.log('   - MAP:')
console.log(resultado3)
console.log('   FILL:')
console.log(resultado4)
console.log('   - FIND:')
console.log(resultado5)
console.log('   - FINDINDEX:')
console.log(resultado6)
console.log('   - SOME:')
console.log(resultado7)
console.log('   - EVERY:')
console.log(resultado8)
console.log('   - POP:')
console.log(resultado9)
console.log(array12)
console.log('   - SHIFT:')
console.log(resultado10)
console.log(array13)
console.log('   - PUSH:')
console.log(resultado11)
console.log(array14)
console.log('   - UNSHIFT:')
console.log(resultado12)
console.log(array15)
console.log('   - SPLICE:')
console.log(resultado13)
console.log(array16)
console.log('   - SLICE:')
console.log(resultado14)
console.log(array17)
console.log('   - JOIN:')
console.log(resultado15)
console.log('   - CONCAT:')
console.log(resultado16)
console.log('   - SORT - Forma incorrecta:')
console.log(resultado17)
console.log('   - SORT - Forma correcta:')
console.log(resultado18)
console.log('   - SORT - Objetos:')
console.log(resultado19)