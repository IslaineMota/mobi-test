import React, { useState, useEffect } from 'react';
import SearchInput from '../../components/Inputs/SearchInput';
import './styled'

const Home = () => {
    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    console.log(name);

    useEffect(() => {
        if (name.length > 3) {
            fetch(`http://apiteste.felixsapp.com/educacao.php?request=api/escolas?nome=${name}`)
                .then(response => response.json())
                .then(data => {
                    if (data[0] > 0) {
                        // eslint-disable-next-line no-undef
                        setInfo([...new Set(data[1].map((d) => d.nome))]);
                    }
                });
        }
    }, [name]);

    return (
        <>
            <div>
                <SearchInput
                    value={name}
                    onChange={(str) => setName(str)} />
            </div>
            <div>
                <ul>
                    {info.map((schools, index) => <li key={index}>{schools}</li>)}
                </ul>
            </div>
        </>
    )
};

export default Home;