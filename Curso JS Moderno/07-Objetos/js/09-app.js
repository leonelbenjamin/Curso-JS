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
//El método Object.seal() sella un objeto, previniendo que puedan añadirse nuevas propiedades al mismo, y marcando todas las propiedades existentes como no-configurables. Los valores de las propiedades presentes permanecen pudiendo cambiarse en tanto en cuanto dichas propiedades sean de escritura.
Object.seal(televisor);

televisor.disponible = false;

console.log(televisor.disponible);