/*

var edad = prompt ("¿Cuantos años tienes? ");

if (edad >= 18)
{
    //console.log ("Eres mayor de edad.");
    document.write ("Eres mayor de edad.");
}
else
{
    //console.log ("Eres menor de edad.");
    document.write ("Eres menor de edad.");
}

*/

var edad = prompt("¿Cuantos años tienes? ");

if (edad >= 18 && edad <= 29) {
  document.write(
    "¡Felicidades! ¡Has sido aceptado en el bootcamp de Generation!"
  );
} else {
  document.write("Lo sentimos, no cumples con los requisitos del programa");
}
