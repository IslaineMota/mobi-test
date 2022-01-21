import React from 'react';

const SearchInput = ({ onChange, value }) => {
    function handleChange (e) {
        onChange(e.target.value);
    }

    return (
        <input
            placeholder='Insira o nome ou parte do nome da escola a buscar'
            type='search'
            onChange={handleChange}
            value={value}
        />
    );
}

export default SearchInput;