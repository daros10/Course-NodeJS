let empleados = [{
        id: 1,
        nombre: "Dario",
    },
    {
        id: 2,
        nombre: "Wladimir",
    },
    {
        id: 3,
        nombre: "Juan",
    },
];

let salarios = [{
        id: 1,
        salario: 1000,
    },
    {
        id: 2,
        salario: 2000,
    },
];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find((empleado) => empleado.id === id);

        if (!empleadoDB) {
            reject(`No existe el empleado con id: ${id}`);
        } else {
            resolve(empleadoDB);
        }
    });
};

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find((salario) => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`El empleado: ${empleado.nombre} no tiene un salario asigando.`);
        } else {
            resolve(
                `El salario del empleado: ${empleado.nombre} es: ${salarioDB.salario}`
            );
        }
    });
};

// encadernar promesas
getEmpleado(2)
    .then((empleado) => getSalario(empleado))
    .then((respuesta) => {
        console.log(respuesta);
    })
    .catch((error) => {
        console.log(error);
    });

// getSalario(empleados[2]).then(salario => {
//     console.log(salario);
// }, (error) => {
//     console.log(error);
// });