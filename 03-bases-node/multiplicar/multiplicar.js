// Requireds ever on the first line
const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

let crearArchivo = (base) => {
    return new Promise( (resolve, reject) =>{
        
        if( !Number(base) ){
            reject('El valor introducido '+ base +' No es un número');
            return;
        }
        let data = '';
        
        for (let i = 1; i <= 10; i++) {
            data += (base + ' * ' + i + ' = ' + (base * i) + '\n');    
        }
        
        fs.writeFile('tablas/tabla-'+base+'.txt', data, (err) => {
            if (err) {
                reject(err)
            } 
            else{
                resolve('tabla-'+base+'.txt')
            }
            console.log('The file has been saved!');
        });
    });
}

module.exports = {
    crearArchivo: crearArchivo
}