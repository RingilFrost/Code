let tecnologias = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'ANGULAR']

let seleccionable = document.getElementById('seleccionable')
let texto = ''

console.log('- Bucle For:')
for (let index = 0; index < tecnologias.length; index++) {
    console.log(tecnologias[index])
    texto += tecnologias[index]
    if (index < tecnologias.length - 1) {
        texto += ', '
    }
    seleccionable.textContent = texto
}

console.log('- Bucle For-Of:')
for (tecnologia of tecnologias) {
    console.log(tecnologia)
}

console.log('- Bucle For-In:')
const alumno = {
    nombre: 'Ringil',
    edad: '40',
    tecnologias: ['HTML', 'CSS']
}

for (const clave in alumno) {
    console.log(alumno[clave])
}

console.log('- Bucle For-Each:')
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

numeros.forEach(numero => {
    console.log(numero)
});

console.log('- Bucle While')
let edad = 0
while (edad < 18) {
    console.log(`Tienes ${edad} años y aún eres un niño`)
    edad++
}
console.log(`Tienes ${edad} años y ya eres mayor de edad`)

console.log('- Bucle DoWhile')
edad = 0
do {
    console.log(`Tienes ${edad} años y aún eres un niño`)
    edad++
} while (edad < 18);
console.log(`Tienes ${edad} años y ya eres mayor de edad`)

console.log('- Uso de break:')
edad = 0
while (edad < 30) {
    console.log(edad)
    edad++
    if(edad == 25) break;
}
console.log(`Saliste del bucle porque tenés ${edad} años`)