// Requireds ever on the first line
const fs = require('fs');
const colors = require('colors/safe');

// const fs = require('express');
// const fs = require('./fs');

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(base, ' * ', i ,' = ', (base * i) );    
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise( (resolve, reject) =>{
        
        if( !Number(base) ){
            reject(colors.red('El valor introducido '+ base +' No es un número'));
            return;
        }
        let data = '';
        
        for (let i = 1; i <= limite; i++) {
            data += (base + ' * ' + i + ' = ' + (base * i) + '\n');    
        }
        
        fs.writeFile('tablas/tabla-'+base+'-al-'+limite+'.txt', data, (err) => {
            if (err) {
                reject(colors.red(err))
            } 
            else{
                resolve(colors.blue('tabla-'+base+'-al'+limite+'.txt'))
            }
            console.log(colors.green('The file has been saved!'));
        });
    });
}

module.exports = {
    crearArchivo: crearArchivo,
    listarTabla: listarTabla
}