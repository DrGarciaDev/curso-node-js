const argv = require('yargs')
    .command('crear', 'Crear un elememto por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualizar el estaod completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente'
        }
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de la tarea por hacer'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}