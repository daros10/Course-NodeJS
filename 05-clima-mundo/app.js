const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la cuidad para obtener el clima',
        demand: true,
    },
}).argv;

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lat);

        return `El clima de [${coords.dir}] es de ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima de ${data.dir}`;
    }
};

getInfo(argv.direccion)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));