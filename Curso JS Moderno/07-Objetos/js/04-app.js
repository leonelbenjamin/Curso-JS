const televisor  = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

const consola = {
    nombre:  'Play Station 4',
    precio:  400,
    disponible:  true 
}

//asignar atributos de un objeto a una variable forma atigua 

//let nombre = televisor.nombre;


//objet distructuring 

//let {precio} = televisor;

const {nombre, precio, disponible}  = consola;

console.log(nombre);
console.log(precio);
console.log(disponible);