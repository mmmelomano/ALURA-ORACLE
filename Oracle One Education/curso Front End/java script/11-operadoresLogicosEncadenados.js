const ciudadDestino = "Bogota";
const CiudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

let edadPasajero = 17;
let estaAcompañado = true;
let tienePasaporte = true;
let estaCasado = true;

//A && B || C
console.log(`verificando pasajer para ${ciudadDestino}`);
if (CiudadesDisponibles.indexOf(ciudadDestino) > -1 &&
    edadPasajero >=18 &&
    estaAcompañado) {
    console.log('paquete de solteros disponible para venta');
}
else{
    console.log('ciudad no disponible para viajar o pasajero no cumple las reglas');
}