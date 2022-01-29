import React, { useState} from "react";
import { Btn, Container, ContainForm, Input, Title, Select, Option } from './style'

function getRegisterValues() {
  const dataLocalStorage = localStorage.getItem('data')
  if (!dataLocalStorage) {
    return []
  } return JSON.parse(dataLocalStorage)
}

function Register() {
  const [values, setValues] = useState({
    school: '',
    director:'',
    localization:'',
    shift: '',
  });

  const [schools, setSchools] = useState(getRegisterValues ())

  const handleOnchange = e => {
    const { value, name } = e.target
    setValues(
      {...values,[name]: value}
    );
    console.log(values)
  };

  const submitForm = e => {
    e.preventDefault();
    const newSchools = [...schools, values];
    setSchools(newSchools);
    localStorage.setItem('data', JSON.stringify(newSchools))
    setValues({
      school: '',
      director:'',
      localization:'',
      shift: '',
    });
  };

  return (
    <Container>
      <ContainForm onSubmit={submitForm}>
        <Title>Cadastro</Title>
        <Input type='text' name='school' value={values.school} placeholder='Nome da escola' required onChange={handleOnchange}></Input>
        <Input type='text' name='director' value={values.director} placeholder='Nome do diretor' onChange={handleOnchange}></Input>
        <Select required onChange={handleOnchange} name='localization' value={values.localization}>
          <Option value='' disabled>Localidade</Option>
          <Option value={'1'}>Urbana</Option>
          <Option value={'2'}>Rural</Option>
        </Select>
        <Select required onChange={handleOnchange} name='shift' value={values.shift}>
          <Option value='' disabled>Turno</Option>
          <Option value={'M'}>Manhã</Option>
          <Option value={'T'}>Tarde</Option>
          <Option value={'N'}>Noite</Option>
          <Option value={'I'}>Integral</Option>
        </Select>
        <Btn>Cadastrar</Btn>
      </ContainForm>
      {/* <div>
      {values.map((item, index) => {
          return (
            <ul key={index}>
            <li>{item.school}</li>
            </ul>
         
      )})}
      </div> */}
    </Container>
  )
}

export default Register;