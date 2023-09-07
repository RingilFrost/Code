console.log('2arraysConBucle.js:')

let arrayConBucleFor = ['Ringil', 'Fingolfin', 'Akallabeth', 'Sauron']

let texto = ''
for (let index = 0; index < arrayConBucleFor.length; index++){
    texto += '<li>' + arrayConBucleFor[index] + '</li>'
}

console.log(texto)
document.getElementById('listaArrayConBucleFor').innerHTML = texto