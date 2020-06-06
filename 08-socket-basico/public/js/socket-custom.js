 // LOS on -- sirven para escuchar 
 // io() viene gracias a la importacion de socket.io/.. definido en la linea de arribo 
 var socket = io();

 // conecto el front al servidor 
 socket.on('connect', function() {
     console.log('Conectado al servidor.');
 });

 // detectar cuando el servidor esta desconectado desde el front 
 socket.on('disconnect', function() {
     console.log('Perdimos conexion con el servidor.');
 })

 // emitir desde el front al back
 // para obtener una retroalimetnacion del servidor
 // si todo salio bien, se puede usar como tercer argumento un callbak
 socket.emit('enviarMensaje', {
     usuario: 'Dario Herrera',
     mensaje: 'Hola mundo'
 }, (resp) => {
     console.log('Respuesta del server:', resp);
 });

 // escuchar informacion 
 socket.on('enviarMensaje', function(mensaje) {
     console.log(`Servidor dice:`, mensaje);
 });