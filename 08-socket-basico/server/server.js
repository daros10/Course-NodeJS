const express = require('express');

const socketIO = require('socket.io');

const http = require('http');

const path = require('path');

// el servidor de express, se lo envia explicitamente al server http 
// objeto del cual se hara uso en adelante para la consturccion en base a sockets
const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// inicializaco socketIO
// IO = esta es la comunicacion del backend
// lo exporto para poder usarlo en el archivo de la logica de los scokets  
module.exports.io = socketIO(server);
require('./sockets/sockets');


server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});