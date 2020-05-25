// // let vive o se ejecta dentro de un scope

var nombre = 'Wolverine'

if (true) {
    nombre = 'Magneto';
}

console.log(nombre);

let i = 'Hola prro'; // vive en un scope

for (let i = 0; i <= 5; i++) { // vive en el scope de las llaves
    console.log(` i: ${ i } `);
}

console.log(i);