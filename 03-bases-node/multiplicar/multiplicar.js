// requireds
/** Existe 3 forma de defeinir los required
 * 1. const fs = require('fs'); -- paquetes nativos que trae consigo node
 * 2. const fs = require('express'); -- paquetes que hicieron otros personas externas a nodejs
 * 3. const fs = require('./myFile'); -- paquete o path propio que tengo desarrollado dentro de mi apliacion de node
 */
const fs = require("fs");
const colors = require("colors");

let listarTabla = (base, limite) => {
    console.log("==========================".green);
    console.log(`Tabla de ${base}`.green);
    console.log("==========================".green);

    for (let i = 0; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(
                "El parametro que ingreso no es un numero.\n >>>> No se pudo crear el archivo."
            );
            return;
        }
        let data = "";

        for (let i = 0; i <= limite; i++) {
            let resultado = base * i;

            data += `${base} * ${i} = ${resultado}\n`;
        }

        fs.writeFile(`files-tablas/tabla-${base}.txt`, data, (err) => {
            if (err) {
                return reject(err);
            } else {
                resolve(`tabla-${base}.txt`);
            }
        });
    });
};

// lo exporto para poder usar en otro archivo

module.exports = {
    crearArchivo,
    listarTabla,
};