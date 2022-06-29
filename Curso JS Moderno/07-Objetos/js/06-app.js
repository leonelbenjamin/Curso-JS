"use strict";

const televisor  = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    fabricacion : {
        origen: 'china' 
    },
    medidas : {
        alto: '50cm',
        ancho: '120cm'
    }
}

//metodo el cual no permite modificar o añadir atributos al objeto  los atriburtos del objeto 
Object.freeze(televisor)

const {fabricacion: {origen}} = televisor
const {medidas :{alto}} = televisor

televisor.disponible = false

console.log(origen);
console.log(alto);
console.log(televisor);