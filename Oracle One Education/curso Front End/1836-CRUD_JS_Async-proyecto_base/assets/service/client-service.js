const crearNuevaLinea = (nombre,email) => {
    //backticks
    const linea = document.createElement("tr");
    const contenido = 
    `<td class="td" data-td>
        ${nombre}
    Gabriela</td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html"
            class="simple-button simple-button--edit"
            >Editar</a
          >
        </li>
        <li>
          <button
            class="simple-button simple-button--delete"
            type="button"
          >
            Eliminar
          </button>
        </li>
      </ul>
    </td> `;
    linea.innerHTML = contenido;
    return linea;

    const table = document.querySelector("[data-table-]");
    const http = new XMLHttpRequest();
};

const http = new XMLHttpRequest();

//abrir http (metodo, url)

/* CRUD - Metodos HTTP
   Create - POST
   Read - GET
   Update - PUT/PATCH
   Delete- DELETE */

http.open("GET", "http//localhost:3000/perfil");

http.send();

http.onload = () =>{
    const data = http.response;
    data.forEach(element => {
     const nuevaLinea = crearNuevaLinea(perfil.nombre,perfil.email)
     table.appenchilid(nuevaLinea);
    });
    console.log(data);
}

