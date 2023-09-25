console.log(' - Ejemplo 1:')
try{
    // Llamado al backend (a trav'es de un API)
    console.log('Llamando al backend')
    throw('Este cliente no está apto para la compra')
    console.log('Esto no se ejecuta por throw')
}catch(error1){
    // Tomamos el error y hacemos algo que nos parezca correcto
    console.log('Algo falló', error1)
}finally{
    // Se ejecuta siempre por más que falle o no
    console.log('Se ejecuta siempre')
}

console.log(' - Ejemplo 2:')
try{
    // Llamado al backend (a trav'es de un API)
    console.log('Llamando al backend')
    setTimeout(() => {
        console.log('---------------------------')
        console.log('El backend nos responde: ')
        console.log('Cliente apto para la compra')
        console.log('---------------------------')
    }, 1000)
}catch(error2){
    // Tomamos el error y hacemos algo que nos parezca correcto
    console.log('Algo falló', error2)
}finally{
    // Se ejecuta siempre por más que falle o no
    console.log('Se ejecuta siempre')
}

console.log(' - Ejemplo 3(No se captura el error por ser asíncrono(throw)):')
try{
    // Llamado al backend (a trav'es de un API)
    console.log('Llamando al backend')
    setTimeout(() => {
        console.log('El backend nos responde: ')
        throw('El cliente no está apto para la compra')
    }, 1000)
}catch(error3){
    // Tomamos el error y hacemos algo que nos parezca correcto
    console.log('Algo falló', error3)
}finally{
    // Se ejecuta siempre por más que falle o no
    console.log('Se ejecuta siempre')
}