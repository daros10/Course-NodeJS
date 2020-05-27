const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');

const comando = argv._[0];
switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        if (tarea.descripcion.length > 0) {
            console.log('Data guardara satisfactoriamente.');
        } else {
            console.log('No se pudo guardar la data.');
        }
        break;
    case 'listar':
        let listado = porHacer.getListado();
        if (listado.length === 0) {
            console.log(
                '========== No existen tareas pendientes por realizar. =========='.red
            );
            return;
        }
        for (let tarea of listado) {
            console.log('========= Por hacer ========='.green);
            console.log(`>> Descripcion: ${tarea.descripcion}`.blue);
            console.log(`>> Completado: ${tarea.completado}`.blue);
            console.log('============================='.green);
        }
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (!actualizado) {
            console.log('No se pudo actualizar la tarea.');
        } else {
            console.log('Data actualizada satisfactoriamente.');
        }
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        if (borrado) {
            console.log('Tarea eliminada satisfactoriamente');
        } else {
            console.log('No se pudo borrar la tarea.');
        }
        break;

    default:
        console.log('Comando no recnonocido.');
}