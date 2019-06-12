const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado'
};

const argv = require('yargs')
    .command('crear', 'crear un elemento por hacer', {
        descripcion
    })

    .command('actualizar', 'actualiza el estado completado de una tarea', {
        descripcion, completado
    })

    .command('borrar', 'borra un elemento existente', {
        descripcion
    })

    .help()
    .argv;

module.exports = { argv }