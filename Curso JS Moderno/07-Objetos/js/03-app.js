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


//añadir un atributo nuevo al objeto 
televisor.imagen = 'imagen.jpg'

console.log(televisor);
console.log(televisor.imagen);

//Elinar un atributo 
delete televisor.imagen;

console.log(televisor);

//Al querer imprimir el atributo del objeto no lo ermite ya que no esta definido 'is not defined'
console.log(televior.imagen);