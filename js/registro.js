import { Usuario } from "./Usuario.js";
import { verificarEmail, verificarPassword } from "./verificacionesForm.js";

const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
const form = document.querySelector(".formularioDeRegistro");

const crearUsuario = (e) => {
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

    guardarEnLocalStorage();

    alertaOkSwal();

    limpiarFormulario();
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
  localStorage.setItem(`usuarios`, JSON.stringify(usuarios));
};

const limpiarFormulario = () => {
  form.reset();
};

const usuarioAdmin = () => {
  let existeUserAdmin = false;

  for (let usuario of usuarios) {
    if (usuario.tipoDeUsuario === "admin") {
      existeUserAdmin = true;
    }
  }

  if (!existeUserAdmin) {
    const usuarioAdmin = new Usuario(
      crypto.randomUUID(),
      "admin@admin.com",
      "admin",
      "admin"
    );

    usuarios.push(usuarioAdmin);
    guardarEnLocalStorage();
  }
};

const alertaOkSwal = () => {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Se ha creado el usuario correctamente.",
    showConfirmButton: false,
    timer: 1500,
  });
};

// const cerrarModalYSweetAlert = () => {
//   const botonConfirmSw = document.querySelector(".swal2-confirm");
//   const swalBackground = document.querySelector(".swal2-container");

//   agregarAtributosSwal(botonConfirmSw);
//   eliminarAtributosSwal(botonConfirmSw);
//   agregarAtributosSwal(swalBackground);
//   eliminarAtributosSwal(swalBackground);
// };

// const agregarAtributosSwal = (elementoSwal) => {
//   elementoSwal.setAttribute("aria-expanded", "false");
//   elementoSwal.setAttribute("data-bs-toggle", "modal");
//   elementoSwal.setAttribute("data-bs-target", "#modalDeIngreso");
// };

// const eliminarAtributosSwal = (elementoSwal) => {
//   elementoSwal.addEventListener("click", () => {
//     elementoSwal.removeAttribute("aria-expanded", "false");
//     elementoSwal.removeAttribute("data-bs-toggle", "modal");
//     elementoSwal.removeAttribute("data-bs-target", "#modalDeIngreso");
//   });
// };

usuarioAdmin();
form.addEventListener("submit", crearUsuario);
