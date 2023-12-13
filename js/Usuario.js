export class Usuario {
    #email;
    #contraseña;

    constructor(email, contraseña){
        this.#email = email;
        this.#contraseña = contraseña;
    }

    get getEmail (){
        return this.#email
    }

    set setEmail (nuevoEmail){
        this.#email = nuevoEmail
    }

    get getContraseña(){
        return this.#contraseña
    }

    set setContraseña (nuevaContraseña){
        this.#email = nuevaContraseña
    }
}