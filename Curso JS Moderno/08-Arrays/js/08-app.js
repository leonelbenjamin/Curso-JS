//Destructuring con Arrays
const numeros = [10,20,30,40,50,60]

const [priero,segundo,tercero] = numeros
console.log(tercero);

const [ , , ,cuarto] = numeros // Ecceder a un componente especifico sin necesidad de declarar variables inecesarias 
console.log(cuarto);

const [ , ...segundo1 ] = numeros //Mediante el spread operator el restante de componentes no definidos los añadimos a una array
console.log(segundo1);

