var num1 = parseInt(prompt("Elige un numero:"));
var num2 = parseInt(prompt("Elige otro numero:"));

function suma(num1, num2) {
  var suma_resultado = num1 + num2;
  document.write(suma_resultado + "</br>");
}

suma(num1, num2);

function resta(num1, num2) {
  var resta_resultado = num1 - num2;
  document.write(resta_resultado + "</br>");
}

resta(num1, num2);

function multi(num1, num2) {
  var multi_resultado = num1 * num2;
  document.write(multi_resultado + "</br>");
}

multi(num1, num2);

function div(num1, num2) {
  var div_resultado = num1 / num2;
  document.write(div_resultado + "</br>");
}

div(num1, num2);
