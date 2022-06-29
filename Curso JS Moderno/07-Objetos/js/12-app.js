//Objet Literal
const producto = {
    nombre: 'tablet',
    precio: 300,
    disponible: true
}

//Objet constructor 

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this,disponible = true;
}

const producto2 = new Producto('monitor', 400);
console.log(producto2);