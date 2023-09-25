const c = "Objetos"
console.log(c)

const auto1 = {
    marca: 'FORD',
    modelo: 'KA',
    peso: 1550,
    color: 'Gris',
}

const auto2 = {
    marca: 'PEUGEOT',
    modelo: '208',
    peso: 1670,
    color: 'Gris oscuro',
}

const vendedor = {
    nombre: 'Pedro',
    apellido: 'Gonzalez',
    empresa: 'Auto S.A.',
    habilidadesBlandas: ['Carisma', 'Puntualidad'],
    vender: function(){
        return 'Pedro ha vendido un auto'
    },
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido
    }
}

console.log('Auto 1:', auto1)
console.log('Auto 2:', auto2)
console.log('El color del auto1 es: ', auto1.color)

auto1.marca = 'BMW'
auto1.modelo = 'X5'
console.log(auto1)
console.log(auto1["marca"])

console.log(vendedor.vender())
console.log(vendedor.nombreCompleto())
console.log(vendedor.habilidadesBlandas)