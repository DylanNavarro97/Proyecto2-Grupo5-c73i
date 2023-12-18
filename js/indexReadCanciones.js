const listaCancion = JSON.parse(localStorage.getItem("cancionKey")) || [];
const listaReproduccionCancion =
  JSON.parse(localStorage.getItem("listaReproduccionCancionKey")) || [];
const videoDetalle = document.querySelector("#frameVideo");
const idDetalle = document.querySelector("#detalleId");
const artistaDetalle = document.querySelector("#artistaDetalle");
const cancionDetalle = document.querySelector("#cancionDetalle");
const imgDetalle = document.querySelector("#imgDetalle");
const GeneroDetalle = document.querySelector("#GeneroDetalle");
const formBuscarCancion = document.querySelector("#buscarCanción");
const inputBuscarCancion = document.querySelector("#inputBuscarCancion");

for (let cancion of listaCancion) {
  const crearCard = (cancion) => {
    const contenedorCanciones = document.querySelector("#contenedorCanciones");
    contenedorCanciones.innerHTML += `
          <div class="cancion" id="${cancion.cancion}">
              <div class="d-flex justify-content-end flex-column w-100 h-100 musicaEfecto">
                  <img src=${cancion.linkImg} alt="imagen de canción">
                  <div class="d-flex justify-content-between align-items-center">
                      <div>
                          <h6 class="ms-1 textoCancion">${cancion.cancion}</h6>
                          <h6 class="ms-1 textoCancion">${cancion.banda}</h6>
                      </div>
                      <div class="d-flex flex-column">
                          <button class="btn border-0 btnPlay p-1" data-bs-toggle="modal" data-bs-target="#modalCardDetalles" onclick="detalleCancion('${cancion.id}')"><i class="bi bi-play-fill w-100 fs-2"></i></button>
                          <button class="btn border-0 btnAgregar p-1" onclick="cancionFavorita('${cancion.id}')"><i class="bi bi-plus-circle-fill fs-5"></i></button>
                      </div>
                  </div>
              </div>
          </div>
        `;
  };
  crearCard(cancion);
}

window.detalleCancion = (idCancion) => {
  const posicionCancion = listaCancion.findIndex(
    (cancion) => cancion.id === idCancion
  );

  let banda = listaCancion[posicionCancion].banda;
  let cancion = listaCancion[posicionCancion].cancion;
  let genero = listaCancion[posicionCancion].categoria;
  let img = listaCancion[posicionCancion].linkImg;
  let link = listaCancion[posicionCancion].linkCancion;

  idDetalle.innerHTML = `id: ${listaCancion[posicionCancion].id}`;
  artistaDetalle.innerHTML = `Artista: ${banda}`;
  cancionDetalle.innerHTML = `Cancion: ${cancion}`;
  GeneroDetalle.innerHTML = `Genero: ${genero}`;
  imgDetalle.setAttribute("src", img.toString());
  videoDetalle.setAttribute("src", link.toString());
};

const guardarEnLocalstorage = () => {
  localStorage.setItem(
    "listaReproduccionCancionKey",
    JSON.stringify(listaReproduccionCancion)
  );
};

window.cancionFavorita = (idCancion) => {
  const posicionCancion = listaCancion.findIndex(
    (cancion) => cancion.id === idCancion
  );
  listaReproduccionCancion.push(listaCancion[posicionCancion]);
  guardarEnLocalstorage();

  Swal.fire({
    title: "La canción fue agregada con exito a la lista de reproducción",
    icon: "success",
  });
};

const buscarCancion = (e) => {
  e.preventDefault();
  const nombre = inputBuscarCancion.value;
  const posicionCancion = listaCancion.findIndex(
    (cancion) => cancion.cancion == `${nombre}`
  );
  if (posicionCancion == -1) {
    Swal.fire({
      text: `La cancion que buscas no está en nuestro sistema D:`,
      background: "#1B2631",
      color: "#fff",
    });
  } else {
    const sombraCancion = document.querySelector(
      `#${listaCancion[posicionCancion].cancion}`
    );
    sombraCancion.className += " border border-warning ";
    console.log(sombraCancion);
  }
};

formBuscarCancion.addEventListener("submit", buscarCancion);
