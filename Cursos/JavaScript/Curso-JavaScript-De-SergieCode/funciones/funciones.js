const x = "Funciones"
console.log(x)

const a = 3;
const b = 2;

// Función clásica
function suma(nro1, nro2){
    return (nro1 + nro2);
}

// Función de flecha o arrow function
let multi = (nro1, nro2) => console.log(nro1 * nro2);


const resultadoSuma = suma(parseInt(a),parseInt(b));
console.log(resultadoSuma);

multi(parseInt(a),parseInt(b));


