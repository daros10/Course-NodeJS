const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    const encodeUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        timeout: 1000,
        headers: {
            'x-rapidapi-key': '9cfbd1403fmshe68ee39a049a42fp16ff5fjsne8de180e81e6',
        },
    });

    const respuesta = await instance.get();

    if (respuesta.data.Results.length === 0) {
        throw new Error(`No hay resultados para: ${direccion}`);
    }

    const data = respuesta.data.Results[0];

    const dir = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        dir,
        lat,
        lon,
    };
};

module.exports = {
    getLugarLatLng,
};