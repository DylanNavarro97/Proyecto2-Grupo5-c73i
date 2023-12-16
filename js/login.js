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
  alertaCerrarSesionSwal();
};

const compararEmailConUsuarios = (email, usuarios) => {
  let usuarioOk = false;

  if (usuarios.length > 0) {
    for (let usuario of usuarios) {
      if (usuario.email === email) {
        usuarioOk = usuario;
      }
    }
    if (usuarioOk) {
      compararPasswordUsuario(usuarioOk);
    } else {
      console.log("No existe el usuario");
    }
  } else {
    alert("No existe el usuario");
  }
};

const compararPasswordUsuario = (usuario) => {
  const inputPassword = document.querySelector(".ingresoPasswordInput").value;

  if (usuario.contraseña === inputPassword) {
    guardarUserEnLocalStorage(usuario);
    esconderBotonIngreso();
    limpiarFormulario(form);
    alertaOkSwal();
    // cerrarModalYSweetAlert();
    console.log("es la misma contraseña");
  } else {
    console.log('contraseña incorrecta')
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
  localStorage.removeItem("usuarioLogeado");
};

const limpiarFormulario = (form) => {
  form.reset();
};

const recargarPagina = () => {
  location.reload();
};

const alertaOkSwal = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Se ha iniciado sesión correctamente",
    showConfirmButton: true,
    timer: false,
  }).then((result) => {
    recargarPagina()
  });
};

const alertaCerrarSesionSwal = () => {
  Swal.fire({
    title: "¿Cerrar sesión?",
    showCancelButton: true,
    confirmButtonText: "Cerrar sesión",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      esconderBotonCerrarSesion();
      borrarUserDeLocalStorage();
      recargarPagina();
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
};



form.addEventListener("submit", realizarIngreso);
botonLogOut.addEventListener("click", cerrarSesion);
