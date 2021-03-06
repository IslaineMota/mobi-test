import React, { useContext } from "react"
import { Routes, Route, Navigate, /* useNavigate */ } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { authContext } from "./AuthContext";
import Register from "./pages/Register";

const MainRoutes = () => {

    const { user, setUser } = useContext(authContext);

    if (!user) {
        setUser(JSON.parse(localStorage.getItem("user")));
    }
    console.log(user);

    return (
        <Routes>
            <Route path='/home' element={user ? <Home /> : <Navigate replace to="/" />} />
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register/>}/>
        </Routes>
    );
}

export default MainRoutes;