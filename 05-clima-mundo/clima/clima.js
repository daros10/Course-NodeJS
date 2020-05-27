const axios = require('axios');

const getClima = async(lat, lng) => {
    const respusta = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=bf79c6246cd574b350bc52b872c68605&units=metric`
    );

    return respusta.data.main.temp;
};

module.exports = {
    getClima,
};