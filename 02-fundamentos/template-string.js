let nombre = 'Deadpoll';
let real = 'Brunce Banner';

console.log(nombre + ' ' + real);
console.log(`${nombre} ${real} `);

let nombreCompleto = `${nombre} ${real}`;

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre real es: ${getNombre()}`);