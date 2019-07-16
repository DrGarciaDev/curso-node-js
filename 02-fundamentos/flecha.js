//Funcion normal
//function sumar(a, b) {
//    return a + b;
//}

//Funcion de flecha
//let sumar = (a, b) => {
//    return a + b;
//}

//Otro tipo de funcion de flecha 
//let sumar = (a, b) => a + b;

//console.log(sumar(10, 20));

//let saludar = () => 'Hola Mundo';

//console.log(saludar());

/*
let saludar = nombre => {
    return `Hola ${ nombre }`;
}

console.log(saludar('Luis'));
*/

//Las siguientes lineas son lo mismo
//let saludar = (nombre) => `Hola ${ nombre }`;
//let saludar = nombre => `Hola ${ nombre }`;

//console.log(saludar('Luis'));

let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regeneracion',
    getNombre() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
};

console.log(deadpool.getNombre());