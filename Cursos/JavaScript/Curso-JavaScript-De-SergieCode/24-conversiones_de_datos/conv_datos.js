// STRING A NUMBER
// Number, parseInt, parseFloat, +'string'
console.log(' - STRING A NUMBER')
let n1 = Number('3.14')
let n2 = +'100'

console.log(n1)
console.log(typeof n1)
console.log(n2)
console.log(typeof n2)

//NUMBER A STRING
// String, .toString
console.log(' - NUMBER A STRING')
let s1 = String(1)
let s2 = 2
let s21 = s2.toString()

console.log(s1)
console.log(typeof s1)
console.log(s21)
console.log(typeof s21)

// DATE A NUMBER

console.log(' - DATE A NUMBER')
let d1 = new Date()
let d11 = Number(d1)

console.log(d11)
console.log(typeof d11)

// DATE A STRING
console.log(' - DATE A STRING')

let d2 = new Date() // o también: new Date().toString()
let d21 = String(d2)

console.log(d21)
console.log(typeof d21)

// NUMBER A BOOLEAN
console.log(' - NUMBER A BOOLEAN')
let b0 = Boolean(0)
let b1 = Boolean(1)

console.log(b0)
console.log(typeof b0)
console.log(b1)
console.log(typeof b1)