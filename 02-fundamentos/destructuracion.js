let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regeneracion',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
};

//console.log(deadpool.getNombre());

//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;

//La destructuración se hace por medio de la siguiente linea, además se le puede cambiar el nombre a la variable de salida 
//poniendo : y después el nombre nuevo, y para hacer referencia a ella se utilizará el nombre dado
let { nombre: nuevoNombre, apellido, poder } = deadpool;

console.log(nuevoNombre, apellido, poder);