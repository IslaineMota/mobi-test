import React from "react";
import { useNavigate } from "react-router-dom";
import {Btn} from './style'

const RegisterRouteBtn = () => {
    const navigate = useNavigate();

    return (
        <Btn onClick={() => navigate('/register')}>Casdastre uma nova escola</Btn>
    )
}

export default RegisterRouteBtn;