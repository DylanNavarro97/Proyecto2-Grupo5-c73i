import { verificarEmail, verificarPassword } from "./verificacionesForm.js";

const form = document.querySelector(".formularioIngresar");
const botonLogOut = document.querySelector(".btnCerrarSesion");
const botonIngreso = document.querySelector(".btnIngresar");

const realizarIngreso = (e) => {
  e.preventDefault();
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const inputEmail = document.querySelector(".ingresoEmailInput").value;
  const inputPassword = document.querySelector(".ingresoPasswordInput").value;

  if (
    verificarEmail(inputEmail, 5, 50) &&
    verificarPassword(inputPassword, 5, 50)
  ) {
    compararEmailConUsuarios(inputEmail, usuarios);
  }
};

const cerrarSesion = () => {
  esconderBotonCerrarSesion();
  borrarUserDeLocalStorage()
};

const compararEmailConUsuarios = (email, usuarios) => {
  let usuarioOk = false;

  if (usuarios.length > 0) {
    for (let usuario of usuarios) {
      console.log(usuario.email);
      if (usuario.email === email) {
        usuarioOk = usuario
      }
    }
    if (usuarioOk){
      guardarUserEnLocalStorage(usuarioOk);
      esconderBotonIngreso();
      limpiarFormulario(form)
      alertaOkSwal()
      cerrarModalYSweetAlert()
    } else {
      console.log('No existe el usuario')
    }
  } else {
    alert("No existe el usuario");
  }
};

const esconderBotonIngreso = () => {
  botonIngreso.className = "btn btn-primary btnIngresar d-none";
  botonLogOut.className = "btn btn-primary btnCerrarSesion";
};

const esconderBotonCerrarSesion = () => {
  botonLogOut.className = "btn btn-primary btnCerrarSesion d-none";
  botonIngreso.className = "btn btn-primary btnIngresar";
};

const guardarUserEnLocalStorage = (usuario) => {
  localStorage.setItem("usuarioLogeado", JSON.stringify(usuario));
};

const borrarUserDeLocalStorage = () => {
  localStorage.removeItem("usuarioLogeado")
}

const limpiarFormulario = (form) => {
  form.reset()
}

const alertaOkSwal = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Se ha iniciado sesión correctamente",
    showConfirmButton: true,
    timer: false,
  });
};

const cerrarModalYSweetAlert = () => {
  const botonConfirmSw = document.querySelector('.swal2-confirm')
  botonConfirmSw.setAttribute('aria-expanded', 'false');
  botonConfirmSw.setAttribute('data-bs-toggle', 'modal');
  botonConfirmSw.setAttribute('data-bs-target', '#modalDeIngreso');

  botonConfirmSw.addEventListener('click', () => {
  botonConfirmSw.removeAttribute('aria-expanded', 'false');
  botonConfirmSw.removeAttribute('data-bs-toggle', 'modal');
  botonConfirmSw.removeAttribute('data-bs-target', '#modalDeIngreso');
  })
}

form.addEventListener("submit", realizarIngreso);
botonLogOut.addEventListener("click", cerrarSesion);
