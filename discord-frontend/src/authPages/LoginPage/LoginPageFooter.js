import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";

import {Tooltip} from "@mui/material";

import { useNavigate } from 'react-router-dom';


const getFormNotValidMessage = () => {
    return ' Enter Correct E-mail Address and Password Should Contains Between 6 and 12 Characters';

};
const getFormValidMessage = () => {
    return 'Press to Log in!';

};


const LoginPageFooter = ({handleLogin, isFormValid}) => {
    const navigate = useNavigate();

    const handlePushToRegisterPage = ()=> {
        navigate('/register');
        
  

    };

    



    return (
        <>
        <Tooltip
        title = {!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
        <div>
            <CustomPrimaryButton
                label="Log in"
                additionalStyles={{ marginTop: "30px"}}
                disabled = {!isFormValid}
                onClick={handleLogin}
            />
        </div>
        </Tooltip>
        <RedirectInfo 
            text ="Need An Account? "
            redirectText = "Create An Account"
            additionalStyles={{marginTop :"5px"}}
            redirectHandler = {handlePushToRegisterPage}
        />
        </>
    );
};
    

export default LoginPageFooter;