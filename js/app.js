import Cancion from "./Cancion.js";


const listaCancion = JSON.parse(localStorage.getItem("cancionKey")) || [];
const banda = document.querySelector("#artistainput");
const nombre = document.querySelector("#cancionInput");
const categoria = document.querySelector("#generoInput");
const img = document.querySelector("#imgInput");
const linkCancion = document.querySelector("#cancionLinkInput");
const formCrear = document.querySelector("#formCrear");


const cancionNueva = (e) => {
    e.preventDefault();
   
      const CancionNueva = new Cancion(
          crypto.randomUUID(),
          banda.value,
          nombre.value,
        categoria.value,
        img.value,
        linkCancion.value,
      );
      //guardar el objeto en un array agenda
      listaCancion.push(CancionNueva);
      //guardar la agenda en localstorage
      guardarEnLocalstorage();
      console.log(listaCancion);
      crearCard(CancionNueva);
      limpiarFormulario(formCrear);
  };

  const guardarEnLocalstorage = () => {
    localStorage.setItem("cancionKey", JSON.stringify(listaCancion));
  };

  const limpiarFormulario = (form) => {
    form.reset();
  };
  
  const crearCard = (cancion) => { 

    const contenedorCanciones = document.querySelector("#contenedorCanciones");
    contenedorCanciones.innerHTML += `<div class="card w-100 my-3 border-0 border-bottom">
    <div
      class="card-body d-md-flex justify-content-md-between centrarCardSm"
    >
      <div class="text-center">
        <img
          src=${cancion.getImg}
          class="imgCancion"
          alt="..."
        />
      </div>
      <div
        class="d-flex flex-column flex-wrap justify-content-center align-content-start container ps-5"
      >
        <h5 class="card-title mt-sm-2">
        ${cancion.getNombreCancion}
        </h5>
        <p class="card-text">${cancion.getBanda}</p>
      </div>
      <div
        class="d-flex flex-wrap my-2 justify-content-center align-content-center container"
      >
        <button
          class="btn btn-outline-info"
          data-bs-toggle="modal"
          data-bs-target="#modalCardDetalles"
        >
          <i class="bi bi-three-dots iconosBtn"></i>
        </button>
        <button
          class="btn btn-outline-warning mx-2"
          data-bs-toggle="modal"
          data-bs-target="#modalModificarCancion"
        >
          <i class="bi bi-pencil-square iconosBtn"></i>
        </button>
        <button
          class="btn btn-outline-danger"
          data-bs-toggle="modal"
          data-bs-target="#modalEliminar"
        >
          <i class="bi bi-trash iconosBtn"></i>
        </button>
      </div>
    </div>
  </div>`;
  };

  formCrear.addEventListener("submit",cancionNueva)
  