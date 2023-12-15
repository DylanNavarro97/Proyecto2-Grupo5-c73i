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
    esconderBotonCerrarSesion()
};

const compararEmailConUsuarios = (email, usuarios) => {
  if (usuarios.length > 0) {
    for (let usuario of usuarios) {
      if (usuario.email === email) {
        guardarUserEnLocalStorage(usuario);
        esconderBotonIngreso();
      } else {
        alert("No existe el usuario");
      }
    }
  } else {
    alert("No existe el usuario");
  }
};

const esconderBotonIngreso = () => {
  botonIngreso.className = "btn btn-primary btnIngresar d-none";
  botonLogOut.className = "btn btn-primary btnIngresar";
};

const esconderBotonCerrarSesion = () => {
  botonLogOut.className = "btn btn-primary btnIngresar d-none";
  botonIngreso.className = "btn btn-primary btnIngresar";
};

const guardarUserEnLocalStorage = (usuario) => {
  localStorage.setItem("usuarioLogeado", JSON.stringify(usuario));
};

form.addEventListener("submit", realizarIngreso);
botonLogOut.addEventListener("click", cerrarSesion);
