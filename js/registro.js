import { Usuario } from "./Usuario.js";
import { verificarEmail, verificarPassword } from "./verificacionesForm.js";

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const form = document.querySelector(".formularioDeRegistro");

const crearUsuario = () => {
  e.preventDefault();

  const inputEmail = document.querySelector(".registroEmailInput").value;
  const inputPassword = document.querySelector(".registroPasswordInput").value;

  if (verificarFormRegistro(inputEmail, inputPassword)) {
    const usuario = new Usuario(
      crypto.randomUUID(),
      inputEmail,
      inputPassword,
      "user"
    );

    usuarios.push(usuario);

    guardarEnLocalStorage("usuarios", usuarios);

    limpiarFormulario()
  }
};

const verificarFormRegistro = (email, password) => {
  if (verificarEmail(email, 5, 50) && verificarPassword(password, 5, 50)) {
    return true;
  } else {
    return false;
  }
};

const guardarEnLocalStorage = () => {
  localStorage.setItem(`usuarios`, JSON.stringify(usuario));
};

const limpiarFormulario = () => {
  form.reset();
};

const usuarioAdmin = () => {
  
}

form.addEventListener("submit", crearUsuario);
