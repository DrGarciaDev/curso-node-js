const axios = require('axios');

const getLugarLatLng = async (dir) => {

    const encodeUrl = encodeURI(dir);
    
    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encodeUrl,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            'x-rapidapi-key': '7f4f2af04bmsh8b477a4b43f7f5ap19b357jsn3ff856a98d4c'
        }
    });
    
    const resp = await instance.get();
    // .then( resp => {
    //     console.log(resp.data.Results[0]);
    // })
    // .catch( err => {
    //     console.log('ERROR !!', err);
    // });

    if (resp.data.Results.length === 0) {
        throw new Error ('No hay resultados para ' + dir);
    }

    const data      = resp.data.Results[0];
    const direccion = data.name;
    const lat       = data.lat;
    const lng       = data.lon;

    return {
        direccion: direccion,
        lat: lat,
        lng: lng
    }    
}

module.exports = {
    getLugarLatLng
}