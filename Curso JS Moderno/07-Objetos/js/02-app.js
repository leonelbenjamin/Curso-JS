const nobre = 'monitor 20 pulgadas';
const precio = 300;
const disponible = true;

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


//En este caso se imprime todos los atributos del objeto

console.log(televisor);

console.log(consola);

//En este caso se imprimir el atributo seleccionado 

console.log(televisor.nombre);  //con punto 
console.log(televisor['precio']);  //con corchetes 
    
console.log(consola.nombre);    


