const axios = require('axios');

const getClima = async  (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ba4b68d3aa24c3e0708d0479d5c9586f&units=metric`)
    
    return resp.data.main.temp;
}

module.exports = {
    getClima
}