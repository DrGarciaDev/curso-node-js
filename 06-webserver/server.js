const express = require('express')
const app = express()

// creando un middleware
app.use( express.static(__dirname + '/public'));

// app.get('/', function (req, res) {
//     // res.send('Hello World');

//     let salida = {
//         nombre: 'Luis',
//         edad: 37,
//         url: req.url
//     }

//     res.send(salida);
// })

// app.get('/data', function (req, res) {
//     res.send('Hello Data');
// })
 
app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
});