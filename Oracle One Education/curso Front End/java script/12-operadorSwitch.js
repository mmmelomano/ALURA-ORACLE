const ciudadesDisponibles = new Array ("Bogota", "Lima", "Santiago", "Montevideo");
const ciudadDestino = "Bogota";

let valorPasaje = 0;

console.log(`verificando pasajes para ${ciudadDestino}`);

// operadores logicos(<,<=,>,>=,==,!=).
//condicion con if
/*
if (ciudadDestino == "Bogota") {
    valorPasaje = 500;
} else if (ciudadDestino == "Lima"){
    valorPasaje = 400;
} else if (ciudadDestino == "Santiago"){
    valorPasaje = 380;
} else if (ciudadDestino == "Montevideo"){
    valorPasaje = 200;
}
console.log(`el valor del pasaje es: ${valorPasaje}`);
} else{
    console.log(`ciudad no disponible para viajar`)
    */
switch(ciudadDestino){
    case "Bogota":
        valorPasaje = 500;
        break;
    case "Lima" :
        valorPasaje = 400;
        break;
    case "Santiago":
        valorPasaje = 380;
        break
    case "Montevideo":
        valorPasaje = 200;
        break;
    default: 
        valorPasaje = 0;
        break;
    }
    if (valorPasaje > 0)
    console.log(`el valor del pasaje es ${valorPasaje}`);




