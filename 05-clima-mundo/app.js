const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obetener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);