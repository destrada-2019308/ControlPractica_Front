export const validatePassword = (password, passwordConfirm) =>{
    return password === passwordConfirm
}

export const passwordConfirmValidateMessage = 'Las contraseñas no coinciden'