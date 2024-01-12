const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 380, 200);
const presupuestoDisponible = 210;

//usamos un contador bucle
let i = 0;
//while  0 o mas veces
//do 1 o mas veces
/*while(precioCiudad [i] < presupuestoDisponible){
    // otras formas de incrementar contadores i= i+1 / i+=1
    i++;
}*/
//do 
while(precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length){
    i++;
}
if (i== ciudadesDisponibles.length){
    console.log("no tenemos pasajes disponibles");
}
    
else{
    console.log("puedes comprar pasajes para: "+ciudadesDisponibles[i]);

}
   

    