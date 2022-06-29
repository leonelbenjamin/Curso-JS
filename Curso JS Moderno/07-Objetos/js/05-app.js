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

console.log(televisor.fabricacion.origen);
console.log(televisor.medidas.ancho);
console.log(televisor.medidas.alto);