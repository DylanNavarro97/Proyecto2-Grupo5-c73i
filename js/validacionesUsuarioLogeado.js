export const verificarUsuarioLogeado = () => {
    let usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'))

    if (usuarioLogeado !== null){
        return true
    }
}

export const verificarUsuarioAdmin = () => {
    let usuarioLogeado = JSON.parse(localStorage.getItem('usuarioLogeado'))
    if (usuarioLogeado !== null){
        if (usuarioLogeado.tipoDeUsuario === 'admin'){
            return true
        }
    }
}

