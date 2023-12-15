const listaCancion = JSON.parse(localStorage.getItem("cancionKey")) || [];

for (let cancion of listaCancion) {
  const crearCard = (cancion) => {
    const contenedorCanciones = document.querySelector("#contenedorCanciones");
    contenedorCanciones.innerHTML += `
        <li class="list-unstyled w-25 cancion">
            <div class="d-flex justify-content-end flex-column w-100 h-100 musicaEfecto">
                <img src=${cancion.linkImg} alt="">
                <button class="btn border-0 btnPlay"><i class="fa-solid fa-play"></i></button>
                <button class="btn border-0 btnAgregar" onclick="borrarCancion('${cancion.id}')"><i class="fa-solid fa-circle-plus"></i></button>
                <h6 class="ms-1 textoCancion">${cancion.cancion}</h6>
                <h6 class="ms-1 textoCancion">${cancion.banda}</h6>
            </div>
        </li>
        `;

    //`<div class="card w-100 my-3 border-0 border-bottom">
    // <div
    // class="card-body d-md-flex justify-content-md-between centrarCardSm"
    //   >
    //   <div class="text-center">
    //       <img
    //       src=${cancion.linkImg}
    //       class="imgCancion"
    //       alt="..."
    //       />
    //       </div>
    //       <div
    //       class="d-flex flex-column flex-wrap justify-content-center align-content-start container ps-5"
    //       >
    //       <h5 class="card-title mt-sm-2">
    //       ${cancion.cancion}
    //       </h5>
    //       <p class="card-text">${cancion.banda}</p>
    //       </div>
    //       <div
    //       class="d-flex flex-wrap my-2 justify-content-center align-content-center container"
    //       >
    //       <button
    //       class="btn btn-outline-info"
    //       data-bs-toggle="modal"
    //       data-bs-target="#modalCardDetalles"
    //       onclick="detalleCancion('${cancion.id}')"
    //       >
    //       <i class="bi bi-three-dots iconosBtn"></i>
    //       </button>
    //       <button
    //       class="btn btn-outline-warning mx-2"
    //       data-bs-toggle="modal"
    //       data-bs-target="#modalModificarCancion"
    //       onclick="recuperarId('${cancion.id}')"
    //       >
    //       <i class="bi bi-pencil-square iconosBtn"></i>
    //       </button>
    //       <button
    //       class="btn btn-outline-danger"
    //         onclick="borrarCancion('${cancion.id}')"
    //       >
    //         <i class="bi bi-trash iconosBtn"></i>
    //         </button>
    //     </div>
    //     </div>
    //     </div>`;
  };
  crearCard(cancion);
}
