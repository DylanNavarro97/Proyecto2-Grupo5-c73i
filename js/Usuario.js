export class Usuario {
    #id
    #email;
    #contraseña;
    #tipoDeUsuario;

    constructor(id, email, contraseña, tipoDeUsuario){
        this.#id = id;
        this.#email = email;
        this.#contraseña = contraseña;
        this.#tipoDeUsuario = tipoDeUsuario
    }

    get getId (){
        return this.#id;
    }

    set setId (nuevaId){
        this.#id = nuevaId;
    }

    get getEmail (){
        return this.#email;
    }

    set setEmail (nuevoEmail){
        this.#email = nuevoEmail;
    }

    get getContraseña(){
        return this.#contraseña;
    }

    set setContraseña (nuevaContraseña){
        this.#contraseña = nuevaContraseña;
    }

    get getTipoDeUsuario(){
        return this.#tipoDeUsuario;
    }

    set setTipoDeUsuario (nuevoTipoDeUsuario){
        this.#tipoDeUsuario = nuevoTipoDeUsuario;
    }
    
}