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