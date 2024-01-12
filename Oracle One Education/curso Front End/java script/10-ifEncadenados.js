const ciudadDestino = "Lima"; 
const CiudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");

let edadPasajero = 17;
let estaAcompañado = true;

console.log(`verificando pasajes para ${ciudadDestino}`);

//verificamos que el pasajero cumple las reglas (or = alt 124)
if(edadPasajero >= 18 || estaAcompañado) {
    //evaluamos si la ciudad esta disponible para viajar
    if(CiudadesDisponibles.indexOf(ciudadDestino) -1){
        console.log('pasaje disponible para venta');
    }
    else{
        console.log('ciudad disponible para viajar');
    }
}
else{
    if (edadPasajero >= 16 && ciudadDestino == 'Lima') {
        console.log('pasaje disponible para venta');
    }
    else{
        console.log('pasajero no cumple las reglas');
    }
}