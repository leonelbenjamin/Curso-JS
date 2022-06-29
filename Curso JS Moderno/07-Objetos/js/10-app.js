//Como juntar dos objetos 

const televisor  = {
    nombre: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
    fabricacion : {
        origen: 'china' 
    }
}
const medidas = {
    alto: '50cm',
    ancho: '120cm'
}
//El método Object.assign() copia todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino. 
const resultado = Object.assign(medidas, televisor );

console.log(resultado);
 
//La sintaxis extendida o spread syntax permite a un elemento iterable tal como un arreglo o cadena ser expandido en lugares donde cero o más argumentos (para llamadas de  función) o elementos (para Array literales) son esperados, o a un objeto ser expandido en lugares donde cero o más pares de valores clave (para literales Tipo Objeto) son esperados.

const resultado2 = {...televisor,...medidas}

console.log(resultado2);