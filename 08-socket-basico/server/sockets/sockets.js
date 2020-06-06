const { io } = require('../server');

// saber si un usuario se conecto al servidor 
io.on('connection', (client) => {
    // LOS on -- sirven para escuchar 
    console.log('Usuario conectado.');

    // emitir desde el server al client
    client.emit('enviarMensaje', {
        usario: 'Admin',
        mensaje: 'Bienvenido a la aplicacion.'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado.');
    })

    // escuchar al cliente 
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {

        //     callback({
        //         resp: 'Todo salio bien'
        //     });

        // } else {

        //     callback({
        //         resp: 'Todo salio mal'
        //     });
        // }
    });

});