// STRING
let a = typeof 'Ringil'
// NUMBER
let b = typeof 3.14
// NUMBER (caso especial)
let c = typeof NaN
// BOOBLEAN
let d = typeof true
// ARRAY (caso especial: ARRAY)
let e = typeof ['asd', 'qwerty', 'lala']
e instanceof Array
// OBJETO
let f = typeof {curso: 'JAVASCRIPT'}
// OBJETO (caso especial: DATE, SET, MAP, etc...)
let g = typeof new Date()
g instanceof Date
// FUNCION
let h = typeof function(){}
// UNDEFINED (por error)
let i = typeof Variable1
// OBJETO (caso especial: NULL, no se puede hacer instaceof a null)
let j = typeof null