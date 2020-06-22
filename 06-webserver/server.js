const express = require('express')
const app = express()

// creando un middleware
app.use( express.static(__dirname + '/public'));

// EXPRESS HBS engine 
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    // res.send(salida);
    res.render('home', {
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