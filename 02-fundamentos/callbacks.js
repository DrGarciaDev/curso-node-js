// Misma función que la de abajo pero definida de manera normal
// setTimeout( function() {
//     console.log('Hola Mundo');
// }, 3000 );

// con función de flecha
// setTimeout( () => {
//     console.log('Hola Mundo');
// }, 3000 );

let getUsuarioById = (id_r, callback) => {
    let usuario = {
        nombre: 'Luis',
        id: id_r
    }

    if(id_r === 20) {
        callback('EL usuario con id ' + id_r + ' No existe ');
    }
    else { 
        callback(null, usuario);
    }
}

getUsuarioById(20, (err, usuario) => {

    if (err) {
        return console.log(err);
    }
    else {

    }
    console.log('Usuario de base de datos', usuario);
});