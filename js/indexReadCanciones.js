const listaCancion = JSON.parse(localStorage.getItem("cancionKey")) || [];

for (let cancion of listaCancion) {
  const crearCard = (cancion) => {
    const contenedorCanciones = document.querySelector("#contenedorCanciones");
    contenedorCanciones.innerHTML += `
        <li class="list-unstyled w-25 cancion">
            <div class="d-flex justify-content-end flex-column w-100 h-100 musicaEfecto">
                <img src=${cancion.linkImg} alt="">
                <button class="btn border-0 btnPlay"><i class="fa-solid fa-play"></i></button>
                <button class="btn border-0 btnAgregar" onclick="cancionFavorita('${cancion.id}')"><i class="fa-solid fa-circle-plus"></i></button>
                <h6 class="ms-1 textoCancion">${cancion.cancion}</h6>
                <h6 class="ms-1 textoCancion">${cancion.banda}</h6>
            </div>
        </li>
        `;
  };
  crearCard(cancion);
}
