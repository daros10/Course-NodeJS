let empleados = [{
        id: 1,
        nombre: 'Dario'
    },
    {
        id: 2,
        nombre: 'Wladimir'
    },
    {
        id: 3,
        nombre: 'Juan'
    }
];

let salarios = [{
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];


let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        callback(`El empleado: ${ empleado.nombre } no tiene un salario asigando.`);
    } else {
        callback(null, `El salario del empleado: ${ empleado.nombre } es: ${salarioDB.salario}`)
    }
}


let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id === id);

    if (!empleadoDB) {
        callback(`No existe el empleado con id: ${id}`);
    } else {
        callback(null, empleadoDB);
    }


};

getEmpleado(2, (error, empleado) => {

    if (error) {
        return console.log(error);
    }

    console.log(`Respuesta de BD:${ empleado }`);
});

getSalario(empleados[2], (error, empleado) => {

    if (error) {
        return console.log(error);
    }

    console.log(`Respuesta de BD:${ empleado }`);
});