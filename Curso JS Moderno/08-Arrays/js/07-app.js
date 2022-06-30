//Borrar un elementos con Splice

const carrito = [];

carrito2 = [0,1,2,3,4,5,6,7]

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
const producto3 = {
    nombre: 'LG',
    precio: '600',
    cantidad: 10
}
const producto4 = {
    nombre: 'LG2',
    precio: '600',
    cantidad: 10
}

carrito.push(producto,producto2,producto3)
console.table(carrito);


//Eliminar el ultimo elemento de un arreglo
carrito.pop()
console.table(carrito);

//Eliminiar el inicio del arreglo 

carrito.shift()
console.table(carrito);



//Permite borrar elementos en una determinada cordenada de la lista. Como primer parametro se utiliza se define la cordenada y como segundo parametro la cantidad de componentes posterores a eliminar.
 carrito2.splice(1,2)

 console.table(carrito2);