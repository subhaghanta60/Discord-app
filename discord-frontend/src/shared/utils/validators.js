
export const validateLoginForm = ({ mail, password}) => {
    const isMailValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);

return isMailValid && isPasswordValid;

};

export const validateRegisterForm = ({ mail, username, password}) => {
    const isMAilValid = validateMail(mail);
    const isPasswordValid = validatePassword(password);
    const isUsernameValid = validateUsername(username);

    return isMAilValid && isPasswordValid && isUsernameValid;
}

const validatePassword = (password) => {
    return password.length > 6 && password.length <12 ;
};


export const validateMail = (mail) => {
    

    // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    const emailPattern =/^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/;
    return emailPattern.test(mail);
};
const validateUsername =(username) => {
    return username.length >2 && username.length<13;
};
