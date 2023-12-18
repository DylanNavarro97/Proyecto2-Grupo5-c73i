const listaReproduccionCancion = JSON.parse(localStorage.getItem("listaReproduccionCancionKey")) || [];
const videoDetalle = document.querySelector("#frameVideo");
const idDetalle = document.querySelector("#detalleId");
const artistaDetalle = document.querySelector("#artistaDetalle");
const cancionDetalle = document.querySelector("#cancionDetalle");
const imgDetalle = document.querySelector("#imgDetalle");
const GeneroDetalle = document.querySelector("#GeneroDetalle");


const crearCard = (cancion) => {
  const contenedorCanciones = document.querySelector("#contenedorCanciones");
  contenedorCanciones.innerHTML += `
        <div class="cancion my-1 px-1">
            <div class="d-flex justify-content-end flex-column w-100 h-100 musicaEfecto">
                <img src=${cancion.linkImg} alt="imagen de canción">
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <h6 class="ms-1 textoCancion">${cancion.cancion}</h6>
                        <h6 class="ms-1 textoCancion">${cancion.banda}</h6>
                    </div>
                    <div class="d-flex flex-column">
                        <button class="btn border-0 btnPlay p-1" data-bs-toggle="modal" data-bs-target="#modalCardDetalles" onclick="detalleCancion('${cancion.id}')"><i class="bi bi-play-fill w-100 fs-2"></i></button>
                        <button class="btn btn-outline-danger p-1 m-1" onclick="borrarCancion('${cancion.id}')"><i class="bi bi-trash iconosBtn fs-6"></i></button>
                    </div>
                </div>
            </div>
        </div>
        `;
    };

    const cargaInicial = () => {
        if (listaReproduccionCancion.length >= 0) {
          listaReproduccionCancion.map((cancion) => crearCard(cancion));
        }
      };

      const guardarEnLocalstorage = () => {
        localStorage.setItem("listaReproduccionCancionKey", JSON.stringify(listaReproduccionCancion));
      };

window.detalleCancion = (idCancion) => {
    const posicionCancion = listaReproduccionCancion.findIndex(
      (cancion) => cancion.id === idCancion
    );
  
    let banda = listaReproduccionCancion[posicionCancion].banda;
    let cancion = listaReproduccionCancion[posicionCancion].cancion;
    let genero = listaReproduccionCancion[posicionCancion].categoria;
    let img = listaReproduccionCancion[posicionCancion].linkImg;
    let link = listaReproduccionCancion[posicionCancion].linkCancion;
  
    idDetalle.innerHTML = `id: ${listaReproduccionCancion[posicionCancion].id}`;
    artistaDetalle.innerHTML = `Artista: ${banda}`;
    cancionDetalle.innerHTML = `Cancion: ${cancion}`;
    GeneroDetalle.innerHTML = `Genero: ${genero}`;
    imgDetalle.setAttribute("src", img.toString());
    videoDetalle.setAttribute("src", link.toString());
  };



window.borrarCancion = (idContacto) => {
    Swal.fire({
    text: "¿Estas seguro de eliminar la cancion?",
    background: '#1B2631',
    color: '#fff  ',
    showCancelButton: true,
    confirmButtonColor: "#C2224B",
    cancelButtonColor: "#11CC2D",
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar",
    }).then((result) => {
    if(result.isConfirmed) {
    const posicionCancion = listaReproduccionCancion.findIndex(
        (cancion) => cancion.id === idContacto
    );
    listaReproduccionCancion.splice(posicionCancion, 1);
    guardarEnLocalstorage();
    location.reload();
    cargaInicial();
    }
    })
}

cargaInicial();