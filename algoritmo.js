var num1 = prompt("Ingresa numero 1");
var num2 = prompt("Ingresa numero 2");
var num3 = prompt("Ingresa numero 3");

listaNumeros(num1, num2, num3);

function listaNumeros(num1, num2, num3) {
  var arreglo = [num1, num2, num3];
  arreglo.sort();
  console.log(arreglo);
}
