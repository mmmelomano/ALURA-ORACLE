//array permite gestionar lista de datos
const ciudad1 = "Bogota";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

//definicion de una lista de con tipo de dato alfanumerico
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago");
console.log(ciudadesDisponibles);

//otra forma de definir una lista de forma abreviada
const paisesDisponibles = ["Colombia","Peru","Chile","Brasil","Argentina"];
const cantidadCiudades = ciudadesDisponibles.length()


//metodo para agregar elementos al final con .push
paisesDisponibles.push('Uruguay');
ciudadesDisponibles.push('Montevideo');

console.log(ciudadesDisponibles);
console.log(paisesDisponibles);

//metodo para agregar elementos al inicio con .unshift
paisesDisponibles.unshift('Ecuador');
ciudadesDisponibles.unshift('Quito');

console.log(paisesDisponibles);
console.log(ciudadesDisponibles);

//los arreglos comienzan en 0 asi se muestra el primer elemento de la lista 
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[0]);

//funcion .splice es para eliminar elementos y agregar elementos y sustituir elementos
paisesDisponibles.slice(1,2,'Venezuela',);
console.log(paisesDisponibles);




-