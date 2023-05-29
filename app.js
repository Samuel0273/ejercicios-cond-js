// ejercicios de condicionales
console.log("---ejercisio1---")
let numeroUno = 6
let numeroDos = 3
if (numeroUno>numeroDos){
    console.log("el primer numero es mayor que el segundo")
}
else{
    console.log("el primer numero es menor que el segundo")
}
console.log("---ejercisio2---")
if (numeroUno==numeroDos){
    console.log("el primer numero es igual que el segundo")
}
else{
    console.log("el primer numero es diferente que el segundo")
}
console.log("---ejercisio3---")
{
let numerouno = 4
let numerodos = 2
if (numerouno>numerodos){
    console.log("el primer numero es mas grande")
}
else{
    console.log("el primer numeor es mas pequeño")
}
}
console.log("---ejercicio4---")
{
    let numerouno = 6
    let numerodos = 4
    let numerotres = 2
    if (numerouno>numerodos && numeroUno>numerotres){
        console.log("el primer numero es mas grande de los tres")
    }
    else{
        console.log("el primer numero es mas pequeño de los tres")
    }
}
{
let nombreIngresado =prompt ("ingrese nombre")
alert (nombreIngresado)
let edadIngresada =prompt ("ingrse edad")
alert (edadIngresada>=18)
let alturaIngresada =prompt ("ingrse altura en cm")
alert (alturaIngresada>=150)
let visionIngresada =prompt ("ingrse vision de 1 - 10")
alert (visionIngresada>=8 && visionIngresada<=10)
console.log("nombre " + nombreIngresado+" edad " + edadIngresada+" altura " + alturaIngresada+" vision "+ visionIngresada);
}
console.log("---ejercicio7---")
let nombre = prompt("Ingrese su nombre:");
let pase = prompt("Ingrese el tipo de pase (VIP o NORMAL):");
let tieneEntrada = prompt("¿Posee entrada? (Si/No):");

if (nombre === "TuNombre" || pase === "VIP") {
console.log("Bienvenido");
} else if (tieneEntrada.toLowerCase() === "si") {
console.log("Bienvenido");
} else {
let deseaComprar = prompt("¿Desea comprar una entrada? (Si/No):");

if (deseaComprar.toLowerCase() === "si") {
let dineroDisponible = parseInt(prompt("Ingrese su dinero disponible:"));

if (dineroDisponible >= 1000) {
console.log("Venta de entrada realizada");
console.log("Bienvenido");
} else {
console.log("Lo siento, no tiene suficiente dinero para comprar una entrada.");
    }
} else {
    console.log("adios");
}
}
let numeroIncognita = Math.floor(Math.random() * 10) + 1;
let intentos = 3;

while (intentos > 0) {
let numeroIngresado = parseInt(prompt("Ingresa un número del 1 al 10:"));

if (numeroIngresado === numeroIncognita) {
console.log("Has adivinado el número.");
break;
} else if (numeroIngresado < numeroIncognita) {
    console.log("El número ingresado es menor. Vuelve a intentarlo.");
} else {
console.log("El número ingresado es mayor. Vuelve a intentarlo.");
}
intentos--;
}
if (intentos === 0) {
console.log("intentos agotados. El número era " + numeroIncognita + ".");
}
let edad = parseInt(prompt("Ingresa tu edad:"));
if (edad >= 0 && edad <= 12) {
console.log("Eres un infante.");
} else if (edad >= 13 && edad <= 18) {
console.log("Eres un adolescente.");
} else if (edad >= 19 && edad <= 45) {
console.log("Eres un mayor joven.");
} else if (edad > 45) {
console.log("Eres un anciano.");
} else if (edad > 100) {
let confirmacion = confirm("¿En realidad tienes " + edad + " años?");
if (confirmacion) {
console.log("Eres un centenario.");
} else {
console.log("Entendido, verifica tu edad nuevamente.");
}
} else {
console.log("La edad ingresada no es válida.");
}
    let jugador1 = prompt("Jugador 1, ingresa tu elección (PIEDRA, PAPEL o TIJERAS):").toUpperCase();
    let jugador2 = prompt("Jugador 2, ingresa tu elección (PIEDRA, PAPEL o TIJERAS):").toUpperCase();

if (jugador1 === jugador2) {
console.log("¡Es un empate!");
} else if (
(jugador1 === "PIEDRA" && jugador2 === "TIJERAS") ||
(jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
(jugador1 === "TIJERAS" && jugador2 === "PAPEL")
) {
console.log("¡Jugador 1 ha ganado!");
} else if (
(jugador1 === "TIJERAS" && jugador2 === "PIEDRA") ||
(jugador1 === "PIEDRA" && jugador2 === "PAPEL") ||
(jugador1 === "PAPEL" && jugador2 === "TIJERAS")
) {
console.log("¡Jugador 2 ha ganado!");
} else {
console.log("Uno de los jugadores ha hecho trampa.");
}
    let color = prompt("Ingresa un color:").toLowerCase();
switch (color) {
case "blanco":
case "negro":
console.log("Falta de color");
break;
case "verde":
console.log("El color de la naturaleza");
break;
case "azul":
console.log("El color del agua");
break;
case "amarillo":
console.log("El color del sol");
break;
case "rojo":
console.log("El color del fuego");
break;
case "marrón":
console.log("El color de la tierra");
break;
default:
console.log("Excelente elección, no lo teníamos pensado");
break;
}
    let numero1 = parseFloat(prompt("Ingresa el primer número:"));
    let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
    let operacion = prompt("Ingresa la operación (suma, resta, multiplicación, división):");
    let resultado;
switch (operacion) {
case "suma":
resultado = numero1 + numero2;
console.log("El resultado de la suma es: " + resultado);
break;
case "resta":
resultado = numero1 - numero2;
console.log("El resultado de la resta es: " + resultado);
break;
case "multiplicación":
resultado = numero1 * numero2;
console.log("El resultado de la multiplicación es: " + resultado);
break;
case "división":
if (numero2 !== 0) {
resultado = numero1 / numero2;
console.log("El resultado de la división es: " + resultado);
} else {
console.log("ERROR: No se puede dividir por cero");
}
break;
default:
console.log("Operación inválida");
break;
}
let nombres = prompt("Ingresa tu nombre:");
let apellido = prompt("Ingresa tu apellido:");
let fechaNacimiento = prompt("Ingresa tu fecha de nacimiento (DD/MM/AAAA):");
let numeroDocumento = prompt("Ingresa tu número de documento:");
let genero = prompt("Ingresa tu género (M/F):");
let nacionalidad = prompt("Ingresa tu nacionalidad:");
console.log("Datos ingresados:");
console.log("Nombre: " + nombres);
console.log("Apellido: " + apellido);
console.log("Fecha de nacimiento: " + fechaNacimiento);
console.log("Número de documento: " + numeroDocumento);
console.log("Género: " + genero);
console.log("Nacionalidad: " + nacionalidad);
let confirmacion = confirm("¿Los datos ingresados son correctos?");
if (confirmacion) {
    let dni = {
    nombres: nombre,
    apellido: apellido,
    fechaNacimiento: fechaNacimiento,
    numeroDocumento: numeroDocumento,
    genero: genero,
    nacionalidad: nacionalidad
};
console.log("Registro exitoso");
console.table(dni);
} else {
console.log("Vuelva a intentarlo luego");
}
