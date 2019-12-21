const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obetener el clima',
        demand: true
    }
}).argv;

const axios = require('axios');

// console.log(argv.direccion);

const encodeUrl = encodeURI(argv.direccion);

const instance = axios.create({
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encodeUrl,
    headers: {
        "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        'x-rapidapi-key': '7f4f2af04bmsh8b477a4b43f7f5ap19b357jsn3ff856a98d4c'
    }
  });

instance.get()
.then( resp => {
    console.log(resp.data.Results[0]);
})
.catch( err => {
    console.log('ERROR !!', err);
});