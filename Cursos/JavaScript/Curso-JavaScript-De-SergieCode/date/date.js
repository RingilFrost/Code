//  FORMAS DE PONER LA FECHA: 
    // AAAA-MM-DD (ISO)
    // 30/15/2020 (SHORT)
    // Mar 25 2020 (LONG)

const fecha1 = new Date()
const fecha2 = new Date("2021-5-1")
const fecha3 = new Date()
fecha3.setFullYear(2029)

console.log("Fecha1: " + fecha1)
console.log("Fecha2: " + fecha2)
console.log("AñoFecha2: " + fecha2.getFullYear())
console.log("MesFecha2: " + (fecha2.getMonth() + 1))
console.log("SetearFecha: " + fecha3)