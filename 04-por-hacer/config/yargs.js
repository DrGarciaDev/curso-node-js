const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente'
}

const argv = require('yargs')
    .command('crear', 'Crear un elememto por hacer', {
        descripcion: descripcion
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion: descripcion,
        completado:  completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion: descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}