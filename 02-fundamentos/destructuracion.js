let deadpool = {

    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'regeneacion',
    getNombre: function() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`
    }
}

console.log(deadpool.getNombre());

// let nombre = deadpool.nombre;
// let apellido = deadpool.apellido;
// let poder = deadpool.poder;


// destructuracion 
let { nombre, apellido, poder } = deadpool
console.log(nombre, apellido, poder);

//cambiando el nombre para acceder a la propiedad 
let { nombre: PrimerNombre, apellido: PrimerApellido, poder: SuperPoder } = deadpool
console.log(PrimerNombre, PrimerApellido, SuperPoder);