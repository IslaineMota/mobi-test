import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import { FiSearch } from "react-icons/fi";
import {Container,ImageMagnifyingGlass, ContainSearch, Title, List} from './style';
import RegisterRouteBtn from './RegisterRouteBtn';

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
        <Container>
            <Title>Busca</Title>
            <ContainSearch>
                <ImageMagnifyingGlass><FiSearch size={30} color="#9fa8da"/></ImageMagnifyingGlass>
                <SearchInput
                    value={name}
                    onChange={(str) => setName(str)} />
            </ContainSearch>
                <RegisterRouteBtn/>
            <ul>
                {info.map((schools, index) => <List key={index}>{schools}</List>)}
            </ul>
        </Container>
    )
};

export default Home;