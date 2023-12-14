import { Usuario } from "./Usuario.js";
import { verificarEmail, verificarPassword } from "./verificacionesForm.js";

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

const form = document.querySelector('.formularioDeRegistro')

form.addEventListener("submit", (e) => {
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

    usuarios.push(usuario)

    guardarEnLocalStorage('usuarios', usuarios)
  }

  // limpiar formulario
});

const verificarFormRegistro = (email, password) => {
  if (verificarEmail(email, 5, 50) && verificarPassword(password, 5, 50)) {
    return true;
  } else {
    return false;
  }
};

const guardarEnLocalStorage = (Key, itemAGuardar) => {
  localStorage.setItem(`${Key}`, JSON.stringify(itemAGuardar));
}
