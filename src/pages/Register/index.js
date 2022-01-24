import React, {useState} from "react";

function Register() {
    const [values, setValues] = useState('')
    const handleOnchange = e => {
        const { value, name } = e.target
        setValues({
          ...values, [name]: value,
        });
        console.log(values)
      };

    const submitForm = e => {
        e.preventDefault();
      };

    return (
        <>
            <form onSubmit={submitForm}>
                <h1>Cadastro de Escolas</h1>
                <input type='text' name='school' value={values.school} placeholder='Nome da escola' required onChange={handleOnchange}></input>
                <input type='text' name='director' value={values.director} placeholder='Nome do diretor' onChange={handleOnchange}></input>
                <select required onChange={handleOnchange} name='localization'>
                    <option value={''}></option>
                    <option value={'1'}>Urbana</option>
                    <option value={'2'}>Rural</option>
                </select>
                <select required onChange={handleOnchange} name='shift'>
                    <option value={''}></option>
                    <option value={'M'}>Manhã</option>
                    <option value={'T'}>Tarde</option>
                    <option value={'N'}>Noite</option>
                    <option value={'I'}>Integral</option>
                </select>
                <button>Cadastrar</button>
            </form>
        </>
    )
}

export default Register;