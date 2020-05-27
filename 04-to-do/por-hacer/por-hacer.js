const fs = require('fs');

let listadoPorHacer = [];

const guardarEnDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) {
            throw new Error('No se pudo grabar el registro en la DB', err);
        }
    });
};

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
};

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion: descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);
    guardarEnDB();

    return porHacer;
};

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(
        (tarea) => tarea.descripcion === descripcion
    );

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        // listadoPorHacer.splice(index, 1); por si se desea borrar al marcar como completada
        guardarEnDB();
        return true;
    } else {
        return false;
    }
};

const borrar = (descripcion) => {
    cargarDB();

    //tambien se puede borrar con el filter

    let index = listadoPorHacer.findIndex(
        (tarea) => tarea.descripcion === descripcion
    );

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarEnDB();
        return true;
    } else {
        return false;
    }
};

module.exports = {
    crear,
    guardarEnDB,
    cargarDB,
    getListado,
    actualizar,
    borrar,
};