// const multiplicar = require('./multiplicar/multiplicar.js');
const argv = require('yargs')
.command('listar', 'imprime en consola la tabla de multiplicar', {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
})
.help()
.argv;

const { crearArchivo } = require('./multiplicar/multiplicar.js');

// let base = 4;
// let argv2 = process.argv;

console.log(argv.base);
console.log('Limite: ',argv.limite);
// console.log(argv2);
// console.log(module);
// console.log(multiplicar);

// crearArchivo(base)
// .then( (archivo) =>{
//     console.log(`Archivo creado: ${ archivo }`);
// })
// .catch( (e) => {
//     console.log(e);
// });