//Variables

var nombre = "Ángel Bryan";
var apellidos = "Gallegos Guzmán";
var edad = 23;

alert(nombre + " " + apellidos);

let telefono;
let colorFavorito = "Azul";
let comidaFavorita = "Pizza";
telefono = 12345;

//Let y var diferencias

var numero = 40;

if (true) {
  var numero = 50;
  console.log(numero);
}

var numero2 = "100";
console.log(numero2); //

if (true) {
  let numero2 = "5";
  console.log(numero2);
}

console.log(numero2);

//Tipos de datos

console.log(typeof nombre);
console.log(typeof edad);
