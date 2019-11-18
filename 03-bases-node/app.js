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
.command('crear', 'Genera un archivo con la tabla de multiplicar', {
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

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

// let base = 4;
// let argv2 = process.argv;

let comando = argv._[0]; 

switch( comando ){
    case 'listar':
        // console.log('listar');
        listarTabla( argv.base, argv.limite );
        break;

    case 'crear':
        // console.log( argv.base, argv.limite );
        crearArchivo( argv.base, argv.limite )
        .then( (archivo) =>{
            console.log(`Archivo creado: ${ archivo }`);
        })
        .catch( (e) => {
            console.log(e);
        });

        break;

    default:
        console.log('Comando no reconocido...');
}
// console.log(argv.base);
// console.log('Limite: ',argv.limite);

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