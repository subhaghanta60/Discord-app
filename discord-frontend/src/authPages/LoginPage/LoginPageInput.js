import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";


const LoginPageInput = ({mail, setMail, password, setPassword}) => {
    return  <>
        <InputWithLabel 
        value = {mail}
        setValue ={setMail}
        label = "E-mail"
        type="text"
        placeholder = "Enter e-mail Address"
        />
        <InputWithLabel 
        value = {password}
        setValue ={setPassword}
        label = "password"
        type="password"
        placeholder = "Enter Your Password"
        />


    </>
       
    
};

export default LoginPageInput;