const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer.',
};

const listar = {
    alias: 'l',
};

const completado = {
    alias: 'c',
    default: false,
    desc: 'Marca como completada o pendiente una tarea.',
};

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer.', { descripcion })
    .command('listar', 'Lista las tareas por hacer.', { listar })
    .command('actualizar', 'Actualiza el estado completado de una tarea.', {
        descripcion,
        completado,
    })
    .command('borrar', 'Borrar una tarea completada', { descripcion })
    .help().argv;

module.exports = {
    argv,
};