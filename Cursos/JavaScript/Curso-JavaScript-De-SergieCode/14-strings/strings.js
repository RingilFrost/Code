let string1 = 'Para mostrar comillas \'\' se usa el simbolo de escape \\'
let string2 = 'Para generar\nun salto de líne'
let string3 = 'Murciélago'.length
let string4 = 'Educación'.slice(4,7) // Recorta - substring funciona igual
let string5 = 'La educación es muy importante en Argentina'.replace('Argentina', 'el mundo') // Reemplaza
let string6 = 'ringil'.toUpperCase() // toLowerCase, etc
let string7 = '      Ringil - Espada de Fingolfin                   '.trim() // Elimina espacion adelante y atras - trimStart y trimEnd tanmbién
let string8 = 'Akallabeth'.charAt(7) // o .[5]
let string9 = 'Este texto te lo manda el backend. Este texto es importante. Dividí el texto'.split('. ')
let string10 = 'Separame'.split('')

console.log("1: " + string1)
console.log("2: " + string2)
console.log("3: " + string3)
console.log("4: " + string4)
console.log("5: " + string5)
console.log("6: " + string6)
console.log("7: " + string7)
console.log("8: " + string8)
console.log(string9)
console.log(string10)