const http = require('http');

http
    .createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'aplication/json' });
        let salida = {
            nombre: 'Daro',
            url: request.url,
        };
        response.write(JSON.stringify(salida));
        // response.write('HOLA MUNDO');
        response.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080');