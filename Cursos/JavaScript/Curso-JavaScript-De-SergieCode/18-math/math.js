console.log(Math.PI)        //  devuelve PI
console.log(Math.E)         //  devuelve el número de Euler 
console.log(Math.SQRT2)     //  devuelve la raíz cuadrada de 2
console.log(Math.SQRT1_2)   //  devuelve la raíz cuadradade 1/2
console.log(Math.LN2)       //  devuelve el logaritmo natural de 2
console.log(Math.LN10)      //  devuelve el logaritmo natural de 10
console.log(Math.LOG2E)     //  devuelve el logaritmo de E en base 2
console.log(Math.LOG10E)    //  devuelve el logaritmo de E en base 10

console.log("Redondeo1: " + Math.round(2.3))
console.log("Redondeo2: " + Math.round(2.49))
console.log("Redondeo3: " + Math.round(2.5))
console.log("Redondeo ceil: " + Math.ceil(2.3)) // Siempre redondea hacia arriba
console.log("Redondeo floor: " + Math.floor(2.9)) // Siempre redondea hacia abajo
console.log("Redondeo trunc: " + Math.trunc(2.7)) // Saca el decimal

console.log("Random1: " + Math.random()) // devuelve un numero random del 0 al 1
console.log("Random2: " + (Math.random()*100)) // devuelve un numero random del 0 al 100
console.log("Random3conRedondeo: " + Math.round((Math.random()*100))) // devuelve un numero random del 0 al 100 redondeado