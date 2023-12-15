import { verificarEmail, verificarPassword } from "./verificacionesForm.js"


const form = document.querySelector('.formularioIngresar')
console.log(form)

const realizarIngreso = (e) => {
    e.preventDefault()
    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const inputEmail = document.querySelector('.ingresoEmailInput').value
    const inputPassword = document.querySelector('.ingresoPasswordInput').value

    if ( verificarEmail(inputEmail, 5, 50) && verificarPassword(inputPassword, 5, 50)){
        compararEmailConUsuarios(inputEmail, usuarios)
    }
}

const compararEmailConUsuarios = (email, usuarios) => {
    if (usuarios.length > 0){
        for (let usuario of usuarios){
            if (usuario.email === email){
                guardarUserEnLocalStorage(usuario)
            }
            console.log(usuario)
        }
    }
}

const guardarUserEnLocalStorage = (usuario) => {
    localStorage.setItem('usuarioLogeado', JSON.stringify(usuario))
}

form.addEventListener('submit', realizarIngreso)
