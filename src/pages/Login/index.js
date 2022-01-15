import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext';

const Login = () => {

  const { setUser } = useContext(authContext);

  const authenticatedUser = {
    user: 'mobi',
    password: '2022'
  };

  const [values, setValues] = useState({ user: '', password: '' });
  
  const onChange = e => {
    const { value, name } = e.target
    setValues({
      ...values, [name]: value,
    });
  };

  const navigate = useNavigate();

  const submitForm = e => {
    e.preventDefault();

    const userString = JSON.stringify(authenticatedUser);
    setUser(authenticatedUser);

    if (authenticatedUser.user == values.user ?? authenticatedUser.password == values.password) {
      return (localStorage.setItem('user', userString), navigate('/home'));
      }
    };

  return (
    <form onSubmit={submitForm}>
      <input type='text' name='user' placeholder='Usuário' value={values.user} onChange={onChange}></input>
      <input type='password' name='password' placeholder='Senha' value={values.password} onChange={onChange}></input>
      <button>ENTRAR</button>
    </form>
  );
}

export default Login;