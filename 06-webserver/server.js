const express = require('express');
const app = express();

const hbs = require('hbs');

// creando un middleware
app.use( express.static(__dirname + '/public'));

// EXPRESS HBS engine 
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    // res.send(salida);
    res.render('home', {
        nombre: 'Luis Garcia',
        anio: new Date().getFullYear()
    })
})

app.get('/about', function (req, res) {
    // res.send(salida);
    res.render('about', {
        nombre: 'Luis Garcia',
        anio: new Date().getFullYear()
    })
})

// app.get('/data', function (req, res) {
//     res.send('Hello Data');
// })
 
app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000')
});