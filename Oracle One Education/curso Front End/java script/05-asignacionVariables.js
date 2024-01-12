//palabra reservada const = espacio que luego de asignar su valor no cambia en el tiempo.

const valorPasaje = 1650;

console.log(valorPasaje);

const nombrePasajero = "leonardo";
const apeliidoPasajero = "lacruz";

console.log(nombrePasajero);
console.log(apeliidoPasajero);

//let = espacio de memoria que puede cambiar en el tiempo 

let nombreCompletoPasajero = nombrePasajero + "" + apeliidoPasajero;
console.log(nombreCompletoPasajero);


//bloque 

{
    let nombreCompletoPasajero = nombrePasajero + "" + apeliidoPasajero;

//var espacio de memoria que puede variar en el tiempo durante la ejecucion del programa
//el alcance

var nombreCompletoPasajero = nombrePasajero + "" + apeliidoPasajero;

    console.log("variable con let: "+nombreCompletoPasajero);
    console.log("variable con var: "+nombreCompletoPasajero);
}

console.log("variable con var: "+nombreCompletoPasajero);
console.log("variable con let: "+nombreCompletoPasajero);







