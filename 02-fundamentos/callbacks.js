// setTimeout(() => {
//     console.log('Hola prro!!');
// }, 3000);

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Dario',
        id: id
    };

    if (id === 20) {
        // el primer parametro del callback es el error/
        callback(`El usuario con id: ${ id } no existe en la base de datos`);
    } else {
        //asigno null xq aqui no existe error
        callback(null, usuario)
    }

}

getUsuarioById(10, (error, usuario) => {
    if (error) {
        return console.log(error);
    }
    console.log('Fuera del error el valor de la rp es:');
    console.log(usuario);
});