let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

function chequearResultado(){
    
    let numeroIngresado = parseInt(numeroEntrada.value)
    
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor, introduce un número válido entre 1 y 100'
        mensaje.style.color = 'red'
        return //con return cortamos la ejecución de la función
    }

    intentos ++
    intento.textContent = intentos 

    if(numeroIngresado == numeroAzar){
        mensaje.textContent = '¡Felicitaciónes! Has adivinado el número'
        mensaje.style.color = 'green'
        numeroEntrada.disabled = true
    } else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Mas alto! El número es mayor al ingresado'
        mensaje.style.color = 'red'
    } else {
        mensaje.textContent = '¡Mas bajo! El número es menor al ingresado'
        mensaje.style.color = 'red'
    }

}