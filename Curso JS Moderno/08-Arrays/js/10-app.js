const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'tv', precio: 600},
    {nombre: 'PC', precio: 700},
    {nombre: 'tablet', precio: 800}
]

//El foreach es un metodo para recorrer arrays  
console.log('');
carrito.forEach(function (producto) {
    console.log(`${producto.nombre} -Precio ${producto.precio}`)

})
//Map a simple vista actua de la misma manera pero permite crear un nuevo array y foreach no 
//Un uso que se le podria dar es querer crear un nuevo array con los objeto que valgan mas de $700 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map
console.log('');
carrito.map(function (producto) {
    console.log(`${producto.nombre} -Precio ${producto.precio}`)

})