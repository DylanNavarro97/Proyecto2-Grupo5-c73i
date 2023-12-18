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

export const redireccionSinAdmin = () => {
    var paginaActual = window.location.href;

    if (!verificarUsuarioAdmin() && paginaActual.includes("admin.html")){
        window.location.href = "404.html";
    }
}



