const array1 = new Array (4)
const array2 = [4,2,5,1,3]
const array3 = ['Ringil', 'Fingolfin', 'Akallabeth', 'Sauron']

array1[0] = 'Curso de HTML'
array1[1] = {nombre:'Ringil'}
array1[2] = 27
array1[3] = [10,20,30,40,50]

array3[array3.length] =  'Galadriel' // Agrega un elemento al final
array3[array3.length] =  'Gandalf'  //  Agrega otro elemento al final
array3[8] = 'Mordor' // Agrega un elemento en el indice establecido

//Salida en consola
console.log(array1)
console.log(array1.length)
console.log(array2.sort())
console.log(array3)
console.log(array3[array3.length-1])

//Salida en web
document.getElementById('array1').innerHTML = "array1: " + array1 + " - Lenght: " + array1.length
document.getElementById('array2ordenado').innerHTML = "array2 ordenado: " +  array2.sort()
document.getElementById('array3ultimoelemento').innerHTML = "Ultimo elemento del array3: " + array3[array3.length-1]
document.getElementById('array3').innerHTML = "array3: " + array3