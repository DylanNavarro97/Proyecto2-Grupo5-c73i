const listaCancion = JSON.parse(localStorage.getItem("cancionKey")) || [];

for (let cancion of listaCancion) {
  const crearCard = (cancion) => {
    const contenedorCanciones = document.querySelector("#contenedorCanciones");
    contenedorCanciones.innerHTML += `
          <div class="cancion">
              <div class="d-flex justify-content-end flex-column w-100 h-100 musicaEfecto">
                  <img src=${cancion.linkImg} alt="imagen de canción">
                  <div class="d-flex justify-content-between align-items-center">
                      <div>
                          <h6 class="ms-1 textoCancion">${cancion.cancion}</h6>
                          <h6 class="ms-1 textoCancion">${cancion.banda}</h6>
                      </div>
                      <div class="d-flex flex-column">
                          <button class="btn border-0 btnPlay p-1"><i class="bi bi-play-fill w-100 fs-2"></i></button>
                          <button class="btn border-0 btnAgregar p-1 mx-lg-2" onclick="cancionFavorita('${cancion.id}')"><i class="bi bi-plus-circle-fill fs-5"></i></button>
                      </div>
                  </div>
              </div>
          </div>
        `;
  };
  crearCard(cancion);
}
