import React, { useState } from 'react';
import { Input } from './style';
import UseDebounce from './UseDebounce';

const SearchInput = ({ onChange, value }) => {
   const [displayValue, setDisplayValue] = useState(value)
   const debounceChange = UseDebounce(onChange, 1000) 
   function handleChange (e) {
        setDisplayValue(e.target.value);
        debounceChange(e.target.value);
    }

    return (
        <Input 
            placeholder='Insira o nome ou parte do nome da escola a buscar'
            onChange={handleChange}
            value={displayValue}
        />
    );
}

export default SearchInput;