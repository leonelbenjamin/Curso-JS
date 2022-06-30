//Crear un nuevo arreglo con spread operator

const carrito = [];

const producto = {
    nombre: 'monitor',
    precio: '400',
    cantidad:   10
}

const producto2 = {
    nombre: 'samsung',
    precio: '700',
    cantidad: 30
}

//El spread operator se utiliza mediante "..." el cual permite crear una copia de en este caso el array y modificarlo en otra variable. 

//El orden en el que esten citados define la posicion que ocuparan en el array
resultado = [...carrito, producto,producto2]
console.table(resultado);