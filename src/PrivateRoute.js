import React from "react";
import { Route, useNavigate } from "react-router-dom";


export default function PrivateRoute(props) {
    console.log(props);
    const navigate = useNavigate();
    const authenticatedUser = () => {
        const user = localStorage.getItem('user');
        if (user !== null) {
            return true
        }
        return false
    }
    if (!authenticatedUser()) {
        navigate('/')
    }
    return (<Route {...props} />);
}