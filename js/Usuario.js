export class Usuario {
    #email;
    #contraseña;

    constructor(email, contraseña){
        this.#email = email;
        this.#contraseña = contraseña;
    }
}