import Cancion from "./Cancion.js";

const listaCancion = JSON.parse(localStorage.getItem("cancionKey")) || [];
const banda = document.querySelector("#artistainput");
const nombre = document.querySelector("#cancionInput");
const categoria = document.querySelector("#generoInput");
const img = document.querySelector("#imgInput");
const linkCancion = document.querySelector("#cancionLinkInput");
const formCrear = document.querySelector("#formCrear");
const videoDetalle = document.querySelector("#frameVideo");
const idDetalle = document.querySelector("#detalleId");
const artistaDetalle = document.querySelector("#artistaDetalle");
const cancionDetalle = document.querySelector("#cancionDetalle");
const imgDetalle = document.querySelector("#imgDetalle");
const GeneroDetalle = document.querySelector("#GeneroDetalle");
const formModCancion = document.querySelector("#formModCancion");
let posiCancion;

const cancionNueva = (e) => {
  e.preventDefault();

  const CancionNueva = new Cancion(
    crypto.randomUUID(),
    banda.value,
    nombre.value,
    categoria.value,
    img.value,
    linkCancion.value
  );

  listaCancion.push(CancionNueva);

  guardarEnLocalstorage();

  crearCard(CancionNueva, listaCancion.length);
  limpiarFormulario(formCrear);
  location.reload();
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
        src=${cancion.linkImg}
        class="imgCancion"
        alt="..."
        />
        </div>
        <div
        class="d-flex flex-column flex-wrap justify-content-center align-content-start container ps-5"
        >
        <h5 class="card-title mt-sm-2">
        ${cancion.cancion} 
        </h5>
        <p class="card-text">${cancion.banda}</p>
        </div>
        <div
        class="d-flex flex-wrap my-2 justify-content-center align-content-center container"
        >
        <button
        class="btn btn-outline-info"
        data-bs-toggle="modal"
        data-bs-target="#modalCardDetalles"
        onclick="detalleCancion('${cancion.id}')"
        >
        <i class="bi bi-three-dots iconosBtn"></i>
        </button>
        <button
        class="btn btn-outline-warning mx-2"
        data-bs-toggle="modal"
        data-bs-target="#modalModificarCancion"
        onclick="recuperarId('${cancion.id}')"
        >
        <i class="bi bi-pencil-square iconosBtn"></i>
        </button>
        <button
        class="btn btn-outline-danger"
          onclick="borrarCancion('${cancion.id}')"
        >
          <i class="bi bi-trash iconosBtn"></i>
          </button>
      </div>
      </div>
      </div>`;
};

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

window.recuperarId = (idMod) => {
  const posicionCancion = listaCancion.findIndex(
    (cancion) => cancion.id === idMod
  );

  const artistaModinput = document.querySelector("#artistaModinput");
  const cancionModInput = document.querySelector("#cancionModInput");
  const generoModInput = document.querySelector("#generoModInput");
  const imgModInput = document.querySelector("#imgModInput");
  const cancionLinkModInput = document.querySelector("#cancionLinkModInput");

  let banda = listaCancion[posicionCancion].banda;
  let cancion = listaCancion[posicionCancion].cancion;
  let genero = listaCancion[posicionCancion].categoria;
  let img = listaCancion[posicionCancion].linkImg;
  let link = listaCancion[posicionCancion].linkCancion;

  artistaModinput.value = banda;
  cancionModInput.value = cancion;
  generoModInput.value = genero;
  imgModInput.value = img;
  cancionLinkModInput.value = link;
  posiCancion = posicionCancion;
};

const guardarCambios = (e) => {
  e.preventDefault();
  const posicionCancion = posiCancion;
  listaCancion[posicionCancion].banda = artistaModinput.value;
  listaCancion[posicionCancion].cancion = cancionModInput.value;
  listaCancion[posicionCancion].categoria = generoModInput.value;
  listaCancion[posicionCancion].linkImg = imgModInput.value;
  listaCancion[posicionCancion].linkCancion = cancionLinkModInput.value;
  guardarEnLocalstorage();
  limpiarFormulario(formModCancion);
  location.reload();
  cargaInicial();
};

const cargaInicial = () => {
  if (listaCancion.length >= 0) {
    listaCancion.map((cancion) => crearCard(cancion));
  }
};

window.borrarCancion = (idContacto) => {
  const posicionCancion = listaCancion.findIndex(
    (cancion) => cancion.id === idContacto
  );
  listaCancion.splice(posicionCancion, 1);
  guardarEnLocalstorage();
  location.reload();
  cargaInicial();
};

formModCancion.addEventListener("submit", guardarCambios);
formCrear.addEventListener("submit", cancionNueva);

console.log(listaCancion)
cargaInicial();
