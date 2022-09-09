const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'tv', precio: 600},
    {nombre: 'PC', precio: 700},
    {nombre: 'tablet', precio: 800}
]
//Accede a el array de todos los objetos
for (let i = 0; i < carrito.length; i++) {
    console.log( carrito[i]);
}

//Accede a las propiedades de los objetos con la contatenacion y el nombre de la propiedad
for (let i = 0; i < carrito.length; i++) {
    console.log( carrito[i].nombre);
}
for (let i = 0; i < carrito.length; i++) {
    console.log( carrito[i].precio);
}
//
for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

//El foreach es un metodo para recorrer arrays  
console.log('');
carrito.forEach(function (producto) {
    console.log(`${producto.nombre} -Precio ${producto.precio}`)

})