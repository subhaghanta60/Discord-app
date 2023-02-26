import React from "react";
import CustomPrimaryButton from "../../shared/components/CustomPrimaryButton";
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from 'react-router-dom';
import {Tooltip} from "@mui/material";



const getFormNotValidMessage = () => {
    return ' Username Should Contains Between 3 and 12 characters and Password should contains between 6 and 12 character and Email address should be provide';

};
const getFormValidMessage = () => {
    return 'Press to Register!';

};

const RegisterPageFooter = ({handleRegister, isFormValid}) => {

    const navigate = useNavigate();
   

    const handlePushToLoginPage = ()=> {
        navigate('/login');
    };

    



    return (
        <>
        <Tooltip
        title = {!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}
        >
        <div>
            <CustomPrimaryButton
                label="Register"
                additionalStyles={{ marginTop: "30px"}}
                disabled = {!isFormValid}
                onClick={handleRegister}
            />
        </div>
        </Tooltip>
        <RedirectInfo 
            text =" "
            redirectText = "Already have a account ?"
            additionalStyles={{marginTop :"5px"}}
            redirectHandler = {handlePushToLoginPage}
        />
        </>
    );
};
    

export default RegisterPageFooter;