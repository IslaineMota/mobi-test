import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterRouteBtn = () => {
    const navigate = useNavigate();

    return (
        <button onClick={() => navigate('/register')}>Casdastre uma nova escola</button>
    )
}

export default RegisterRouteBtn;