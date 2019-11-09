// const multiplicar = require('./multiplicar/multiplicar.js');
const { crearArchivo } = require('./multiplicar/multiplicar.js');

let base = 4;

// console.log(module);
// console.log(multiplicar);

crearArchivo(base)
.then( (archivo) =>{
    console.log(`Archivo creado: ${ archivo }`);
})
.catch( (e) => {
    console.log(e);
});