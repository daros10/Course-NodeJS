// let getNombre = async() => {
//     return "Dario";
// };

// console.log(getNombre());

let getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Dario");
        }, 3000);
    });
};

let saludo = async() => {
    let nombre = await getNombre();

    return `Hola ${nombre}`;
};

getNombre()
    .then((nombre) => {
        console.log(nombre);
    })
    .catch((e) => {
        console.log(e);
    });

saludo()
    .then((mensaje) => {
        console.log(mensaje);
    })
    .catch((e) => {
        console.log(e);
    });