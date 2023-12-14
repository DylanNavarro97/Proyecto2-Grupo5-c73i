import { verificarEmail, verificarPassword } from "./verificacionesForm.js";

const botonDeRegistro = document.querySelector(".botonRegistro");

botonDeRegistro.addEventListener("click", (e) => {
  e.preventDefault();

  const inputEmail = document.querySelector(".registroEmailInput").value;
  const inputPassword = document.querySelector(".registroPasswordInput").value;

  // Verificar el input email y el input Password
  verificarFormRegistro(inputEmail, inputPassword)

  // Obtener los valores ingresados de cada input en caso de que hayan pasado las verificaciones

  // instanciar un nuevo objeto de tipo Usuario.
    if (verificarFormRegistro(inputEmail, inputPassword)){
        
    }
  // Obtener la lista de objetos Usuario que haya en el local Storage

  // guardar ese nuevo objeto en la lista del LocalStorage

  // limpiar formulario
});

const verificarFormRegistro = (email, password) => {
    if (
      verificarEmail(email, 5, 50) &&
      verificarPassword(password, 5, 50)
    ) {
      console.log("Paso las dos verificaciones");
    } else {
        console.log('Segui intentando')
    }
  };
