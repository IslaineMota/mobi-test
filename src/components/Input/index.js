import React from 'react';

const Input = ({ placeholder, type, name, onChange,value,}) => {
    return(
        <input         
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}/>
    );
}

export default Input;