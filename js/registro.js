import { Usuario } from "./Usuario.js";
import { verificarEmail, verificarPassword } from "./verificacionesForm.js";

const form = document.querySelector('.formularioDeRegistro')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form)

  const inputEmail = document.querySelector(".registroEmailInput").value;
  const inputPassword = document.querySelector(".registroPasswordInput").value;

  // Verificar el input email y el input Password
  verificarFormRegistro(inputEmail, inputPassword);

  // Obtener los valores ingresados de cada input en caso de que hayan pasado las verificaciones

  // instanciar un nuevo objeto de tipo Usuario.
  if (verificarFormRegistro(inputEmail, inputPassword)) {
    const usuario = new Usuario(
      crypto.randomUUID(),
      inputEmail,
      inputPassword,
      "user"
    );

    console.log(usuario.toJSON());
  }
  // Obtener la lista de objetos Usuario que haya en el local Storage

  // guardar ese nuevo objeto en la lista del LocalStorage

  // limpiar formulario
});

const verificarFormRegistro = (email, password) => {
  if (verificarEmail(email, 5, 50) && verificarPassword(password, 5, 50)) {
    return true;
  } else {
    return false;
  }
};
