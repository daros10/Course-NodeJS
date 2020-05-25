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

let getEmpleado = async(id) => {
    let empleadoDB = empleados.find((empleado) => empleado.id === id);

    if (!empleadoDB) {
        throw new Error(`No existe el empleado con id: ${id}`);
    } else {
        return empleadoDB;
    }
};

let getSalario = async(empleado) => {
    let salarioDB = salarios.find((salario) => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(
            `El empleado: ${empleado.nombre} no tiene un salario asigando.`
        );
    } else {
        return `El salario del empleado: ${empleado.nombre} es: ${salarioDB.salario}`;
    }
};

let getMensaje = async(id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);

    return `${empleado.nombre} --> ${salario}`;
};

getMensaje(1)
    .then((mensaje) => {
        console.log(`Message: ${mensaje}`);
    })
    .catch((err) => {
        console.log(err);
    });