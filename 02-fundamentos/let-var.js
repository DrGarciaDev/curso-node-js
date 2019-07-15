let nombre = 'Wolverine';
var nombre = 'Wolverine';

if (true) {
    nombre = 'Magneto';
}

/*

Declarar las variables con let, por decirlo de alguna manera
las aisla para que su valor no sea modificado por otra declaración
de la misma más adelante
if (true) {
    let nombre = 'Magneto';
}

Si se declaran las variables con var, estas pueden ser redeclaradas 
en cualquier parte del código y sus valores alterados de una forma 
que no puede ser conveniente
if (true) {
    var nombre = 'Magneto';
}
*/

console.log(nombre);