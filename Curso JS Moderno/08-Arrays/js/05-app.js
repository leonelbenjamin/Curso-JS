


const carrito = [];

const producto = {
    nombre: 'monitor',
    precio: '400',
    cantidad:   10
}

const celular = {
    nombre: 'samsung',
    precio: '700',
    cantidad: 30
}

carrito.push(producto)//Añade el elemento al final del Array
carrito.unshift(celular)//Añade el elemento al principio de la lista
console.table(carrito);