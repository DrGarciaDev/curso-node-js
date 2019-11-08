let empleados = [
    {
        id: 1,
        nombre: 'Fernando'
    },
    {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Izel'
    }
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

let getEmpleado = async (id) => {

    // return new Promise( (resolve, reject) => {
        let empleadoDB = empleados.find( (empleado) => {
            return empleado.id === id
        } );
    
        // console.log(empleadoDB);
        if (!empleadoDB) {
            // reject(`No existe un empleado con ID ${id}`)
            throw new Error (`No existe un empleado con ID ${id}`)
        }else{
            // resolve(empleadoDB)
            return empleadoDB;
        }        
    // });
}

let getSalario = async (empleado) => {
    // return new Promise( (resolve, reject) => {
        let salarioDB = salarios.find( (salario) => {
            return salario.id === empleado.id
        });
    
        if (!salarioDB) {
            throw new Error ('No se encontro salario para el empleado ' + empleado.nombre);
        }else{
            return {
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            };
        }
    // });
}


let getInformacion = async (id) => {
    let empleado    = await getEmpleado(id);
    let resp        = await getSalario(empleado);
    console.log(empleado);
    console.log(resp);

    // return `${ resp.nombre } tienen un salario de $ ${ resp.salario }`;
    return resp.nombre + 'tienen un salario de $ ' + resp.salario ;
}

// getInformacion(1);
getInformacion(2).then( (mensaje) =>{
    console.log(mensaje);
})
.catch( (error) => {
    console.log(error);
});