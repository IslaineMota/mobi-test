import React from 'react';
import { Input } from './style';

const SearchInput = ({ onChange, value }) => {
    function handleChange (e) {
        onChange(e.target.value);
    }

    return (
        <Input 
            placeholder='Insira o nome ou parte do nome da escola a buscar'
            type='search'
            onChange={handleChange}
            value={value}
        />
    );
}

export default SearchInput;