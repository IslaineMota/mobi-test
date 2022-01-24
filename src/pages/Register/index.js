import React, {useState, useEffect} from "react";
import {Btn, Container, ContainForm, Input, Title, Select, Option } from './style'

const useStateWithLocalStorage = localStorageKey => {
    const [values, setValues] = useState(
      localStorage.getItem(localStorageKey) || ''
    );
  
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(values));
    }, [values]);
  
    return [values, setValues];
  };
  

function Register() {
    const [values, setValues] = useStateWithLocalStorage(
        'myValueInLocalStorage'
      );
    const handleOnchange = e => {
        const { value, name } = e.target
        setValues({
          ...values, [name]: value,
        });
        console.log(values)
      };

    const submitForm = e => {
        e.preventDefault();
            localStorage.setValues('scholl', JSON.stringify(values.school));
            localStorage.setValues('director', values.director);
      };

    return (
        <Container>
          <ContainForm onSubmit={submitForm}>
            <Title>Cadastro</Title>
            <Input type='text' name='school' value={values.school} placeholder='Nome da escola' required onChange={handleOnchange}></Input>
            <Input type='text' name='director' value={values.director} placeholder='Nome do diretor' onChange={handleOnchange}></Input>
            <Select required onChange={handleOnchange} name='localization'>
              <Option value={''} disabled selectedex>Localidade</Option>
              <Option value={'1'}>Urbana</Option>
              <Option value={'2'}>Rural</Option>
            </Select>
            <Select required onChange={handleOnchange} name='shift'>
              <Option value={''} disabled selected>Turno</Option>
              <Option value={'M'}>Manhã</Option>
              <Option value={'T'}>Tarde</Option>
              <Option value={'N'}>Noite</Option>
              <Option value={'I'}>Integral</Option>
            </Select>
            <Btn>Cadastrar</Btn>
            </ContainForm>
        </Container>
    )
}

export default Register;