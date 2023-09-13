// IF/ELSE IF/ELSE
console.log('IF/ELSE/ELSEIF:')
let edadPersona = 50

if(edadPersona >= 18 && edadPersona < 60){
    console.log('Puede ingresar')
} 
else if(edadPersona <= 18){
    console.log('No puede ingresar por ser menor de edad')
} 
else{
    console.log('No puede ingresar por ser mayor y no se recomienda')
}


// SWITCH
console.log('SWITCH:')
let estiloDeMusica = 'Pop'

switch (estiloDeMusica) {
    case 'Punk':
        console.log('Te recomiendo Ramones')
        break;
    case 'Hard Rock':
        console.log('Te recomiendo Guns N Roses')
        break;
    case 'Metal':
        console.log('Te recomiendo Pantera')
        break;
    case 'Rock and Roll':
        console.log('Te recomiendo Rolling Stones')
        break;
    case 'Pop':
        console.log('Te recomiendo Michael Jackson')
        break;
    default:
        console.log('No conozco esta música pero te recomiendo escuchar Mozart')
        break;
}


// IF ANIDADOS
console.log('IF ANIDADOS:')
let edad = 18
let nacionalidad = 'Argentina'
let tienePasaporte = true

if(edad >= 18){
    console.log('Tienes edad para viajar, aprobado trámite 1')
    if(nacionalidad == 'Argentina'){
        console.log('La documentación está correcta, aprobado trámite 2')
        if(tienePasaporte){
            console.log('Usted puede viajar, buen viaje!')
        } else{
            console.log('No puedes viajar porque el pasaporte es obligatorio')
        }
    } else{
        console.log('Debes presentar la documentación de tu país de origen')
    }
} else{
    console.log('Debes ser mayor de edad para viajar al exterior')
}
