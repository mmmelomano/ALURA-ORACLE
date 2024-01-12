//operadores de comparacion
const ciudadDestino = "Bogota";
const ciudadesDisponibles = ["Bogota", "Lima", "Santiago", "Montevideo"];

//palabra reservada if 
//evalula una condicion
console.log(`verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
    console.log ('pasaje disponible para venta');
}
else{
    console.log('ciudad no disponible para viajar')
}

const valorPasaje = "1000";
// === estrictamente igual
if (valorPasaje == 1000) {
    console.log('el pasaje vale 1000');
}

//operadores logicos
// Y (AND) - O (OR) - NO (NOT) 
// AND = &&  se debe cumplir las dos condicionoes
// OR = || (alt 124) - NOT = !  se debe cumplir una condicion
let edadPasajero = 19;
let estaAcompanado = true;

console.log(`verificando pasajes para ${ciudadDestino}`);
if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) &&(edadPasajero >= 18 || estaAcompanado )) {
    console.log('pasaje disponible para venta');
}
else {
    console.log('ciudada no disponible para viajar o pasajero no cumple las reglas');
}

edadPasajero = 17;
estaAcompanado = true;
//aplicando logica negativa 
if (!((ciudadesDisponibles.indexOf(ciudadDestino) > -1) &&(edadPasajero >= 18 || estaAcompanado ))){
    console.log('ciudada no disponible para viajar o pasajero no cumple las reglas');
}
else {
    console.log('pasaje disponible para venta');
}




