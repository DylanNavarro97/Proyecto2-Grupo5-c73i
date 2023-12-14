import { verificarEmail } from "./verificacionesForm.js"

const inputEmail = document.querySelector('.registroEmailInput')
const inputPassword = document.querySelector('.registroPasswordInput')
const botonDeRegistro = document.querySelector('.botonRegistro')

botonDeRegistro.addEventListener('click', (e) => {
    e.preventDefault()

    console.log(inputEmail)
    console.log(inputPassword)

    verificarEmail()

    // Verificar el input email

    // Verificar el input password

    // Obtener los valores ingresados de cada input en caso de que hayan pasado las verificaciones

    // instanciar un nuevo objeto de tipo Usuario.

    // Obtener la lista de objetos Usuario que haya en el local Storage

    // guardar ese nuevo objeto en la lista del LocalStorage

    // limpiar formulario


})