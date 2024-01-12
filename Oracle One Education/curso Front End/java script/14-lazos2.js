const ciudadesDisponibles = new Array("Bogota", "Lima", "Santiago", "Montevideo");
const precioCiudad = new Array(500, 400, 380, 200);
const datos = [{
    'ciudad': 'Bogota',
    'precio': 500
},
{
    'ciudad': 'Lima',
    'precio': 400
},
{
    'ciudad': 'Santiago',
    'precio': 380
},
{
    'ciudad': 'Montevideo',
    'precio': 200
},
]

const presupuestoDisponible = 600;

//usamos un contador bucle
let i = 0;
//while  0 o mas veces
//do if 1 o mas veces

let ciudadSeleccionada = '';
do{
    if(datos[i].precio < presupuestoDisponible){
        ciudadSeleccionada = datos[i].ciudad;
        break;
    }
} while(i < datos.length && ciudadSeleccionada == '')

if (ciudadSeleccionada == '')
    console.log("no tenemos pasajes disponibles");
else
console.log("puedes comprar pasajes para: "+ciudadSeleccionada);