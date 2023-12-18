
export default class Cancion{
    #id;
    #banda;
    #nombreCancion;
    #categoria;
    #img;
    #linkCancion;
    
    constructor (id,banda,nombreCancion,categoria,img,linkCancion){
        this.#id=id;
        this.#banda=banda;
        this.#nombreCancion=nombreCancion;
        this.#categoria=categoria;
        this.#img=img;
        this.#linkCancion=linkCancion;
    }

    get getId (){
        return this.#id;
    }
    get getBanda (){
        return this.#banda;
    }
    get getNombreCancion (){
        return this.#nombreCancion;
    }
    get getCategoria (){
        return this.#categoria;
    }
    get getImg (){
        return this.#img; 
    }
    get getLinkCancion (){
        return this.#linkCancion;
    } 

    set setBanda(banda){
        this.#banda=banda;
    }
    set setNombreCancion(nombreCancion){
        this.#nombreCancion=nombreCancion;
    }
    set setCategoria(categoria){
        this.#categoria=categoria;
    }
    set setImg(img){
        this.#img=img;
    }
    set setLinkCancion(linkCancion){
        this.#linkCancion=linkCancion;
    }

    toJSON(){
        return {
          id: this.#id,
          banda: this.#banda,
          cancion: this.#nombreCancion,
          categoria: this.#categoria,
          linkImg: this.#img,
          linkCancion: this.#linkCancion
        }
      }
}