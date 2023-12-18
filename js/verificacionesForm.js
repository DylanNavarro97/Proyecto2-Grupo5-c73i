export const verificarEmail = (input, minLength, maxLength) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

    if (regex.test(input) && input.length >= minLength && input.length <= maxLength){
        return true
    }
}

export const verificarPassword = (password, minLength, maxLength) => {
    if (password.length >= minLength && password.length <= maxLength){
        return true
    }
}


export const validarCamposAdmin=(input,nombre,minLength,maxLength)=>{
    if(input.length >= minLength && input.length <= maxLength){
        return true;
    }else{
        Swal.fire({text: `revisa la cantidad de caracteres en tu campo "${nombre}", su longitud minima es de ${minLength} caracteres y la maxima de ${maxLength} caracteres`,
background:'#1B2631',
color:'#fff'}); 
        return false; 
    }
}

export const verificarURL = (input, minLength, maxLength) => {
    const regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i

    if (regex.test(input) && input.length >= minLength && input.length <= maxLength){
        return true
    }else{
        Swal.fire({text: `la url ingresada no es valida, verifica que contenga "https", no tenga espacios en blanco y que tenga como minimo ${minLength} caracteres y maximo ${maxLength}`,
background:'#1B2631',
color:'#fff'}); 
        return false
    }
}
export const verificarUrlYoutube = (input, minLength, maxLength) => {
    const regex = /^https:\/\/www\.youtube\.com\/embed\/[^\s]+$/i;

    if (regex.test(input) && input.length >= minLength && input.length <= maxLength){
        return true
    }else{
        Swal.fire({text: `por favor asegurate que el link de la canción agregada sea de "youtube" y que en el mismo esté /embed/`,
background:'#1B2631',
color:'#fff'}); 
        return false
    }
}