//definicion de una lista con tipo de dato alfanumerico
const ciudadesDisponibles = ["Bogota", "Lima", "Santiago", "Montevideo"];
console.log(ciudadesDisponibles);

//definicion de una lista en forma abreviada
const paisesDisponibles = ["Colombia", "Peru", "Chile", "Brasil", "Argentina", "Uruguay", "Venezuela"];
const cantidadCiudades = ciudadesDisponibles.length; // Corregido: usar "cantidadCiudades" en lugar de "cantidadPaises"
console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);


//remover el prime elemento de una lista
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);

//remover el ultimo elemento de una lista
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${ciudadesDisponibles.length} elementos`);


// filtar elementos de una lista
const paisesFiltrados = paisesDisponibles.filter(e => e.length > 6);
console.log(paisesFiltrados); 

//comillas invertidas alt 96 
//unificar los elementos de una cadena de caracteres
console.log(paisesDisponibles.join('-'));

//ordenar una lista
console.log(paisesDisponibles.sort());

//conociendo la posicion
console.log(`Peru esta en la posicion: ${paisesDisponibles.indexOf(`Peru`)}`);

//unificar las listas
const listaPaisesYciudades =paisesDisponibles.concat(ciudadesDisponibles);
console.log('lista de paises y ciudades:');
console.log(listaPaisesYciudades);
console.log('lista de paises');
console.log(paisesDisponibles);
