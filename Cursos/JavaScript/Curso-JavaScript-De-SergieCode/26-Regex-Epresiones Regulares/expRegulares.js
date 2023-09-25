let texto = "Este curso es de Javascript y está dado por Sergie Code 4"
let busqueda1 = texto.search(/Sergie/)
let busqueda2 = texto.search(/sergie/)
let busqueda3 = texto.search(/sergie/i)

console.log("Encontrado a partir del caracter " + busqueda1)
console.log("No encontrado " + busqueda2)
console.log("Encontrado - ignora case sensitive " + busqueda3)

let pattern1 = /sergie/i
let resultadoTest = pattern1.test(texto)
let resultadoExec = pattern1.exec(texto)

console.log("Resultado test: " + resultadoTest)
console.log("Resultado exec: " + resultadoExec)

let pattern2 = /[0-9]/
let pattern3 = /\d/ // dígito
let resultado2 = pattern2.test(texto)
let resultado3 = pattern3.test(texto)

console.log("Resultado2: " + resultado2)
console.log("Resultado3: " + resultado3)

// Modificadores
// i: Ignorar mayúsculas y minúsculas
// g: Buscar en todo el texto pasado
// m: Búsqueda multilínea
// s: Permite usar punto(.)

// Patrón para validar mail
let pattern4 = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
let resultado4 =  pattern4.test('r1ng1l@fr0st.com')

console.log("Resultado4: " + resultado4)