const arrayFilter1 = ['M', 'P', 'B', 'N', 'M', 'N']
const resultado1 = arrayFilter1.filter(x => x == 'M') // Filter recorre el array buscando el valor establecido y lo agrega

const arrayFilter2 = [
    {nombre: 'Pedro', apellido:'Gonzalez'},
    {nombre: 'María', apellido:'Gonzalez'},
    {nombre: 'Lucía', apellido:'Gonzalez'},
    {nombre: 'Ricardo', apellido:'Perez'},
    {nombre: 'Glottis', apellido:'Juárez'},
    {nombre: 'Fernanda', apellido:'Fernandez'}
]
const resultado2 = arrayFilter2.filter(x => x.apellido == 'Gonzalez')

console.log(resultado1)
console.log(resultado2)
for (let index = 0; index < resultado2.length; index++) {
    const element = resultado2[index];
    console.log(element.nombre)
}
