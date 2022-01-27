import React, { useState, useEffect } from 'react';
import SearchInput from '../../components/Inputs/SearchInput';
import LoadingData from './LoadingData'
import './styled'

const Home = () => {
    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState([]);
    const [name, setName] = useState('');
    console.log(name);

    useEffect(() => {
        if (name.length > 3) {
            setLoading(true);
            fetch(`http://apiteste.felixsapp.com/educacao.php?request=api/escolas?nome=${name}`)
                .then(response => response.json())
                .then(data => {
                    if (data[0] > 0) {
                        /* setInfo(data[1]) */
                        // eslint-disable-next-line no-undef
                        setInfo([...new Set(data[1])]);
                    }setLoading(false)
                });
        }
    }, [name]);

    return (
        <div>
            <div>
                <SearchInput
                    value={name}
                    onChange={(str) => setName(str)} />
            </div>
            <span>
                {loading
                    ? LoadingData()
                    : info.map((schools, index) => {
                        return (
                            <ul key={index}>
                                <li>{schools.nome}</li>
                            </ul>
                        )
                    }
                    )}
            </span>
        </div>
    )
};

export default Home;