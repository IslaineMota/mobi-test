import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthContext';
import { FiUser, FiLock } from "react-icons/fi";
import { Container, ContainForm, Btn, Input,Title, ContainLabelInput, Label} from './style';

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
    <Container>
      <ContainForm onSubmit={submitForm}>
        <Title>Login</Title>
        <ContainLabelInput>
          <Label><FiUser size={20} color="#9fa8da"/></Label>
          <Input type='text' name='user' placeholder='Usuário' value={values.user} onChange={onChange}></Input>
        </ContainLabelInput>
        <ContainLabelInput>
          <Label><FiLock size={20} color="#9fa8da"/></Label>
          <Input type='password' name='password' placeholder='Senha' value={values.password} onChange={onChange}></Input>
        </ContainLabelInput>
        <Btn>Entrar</Btn>
      </ContainForm>
    </Container>
  );
}

export default Login;