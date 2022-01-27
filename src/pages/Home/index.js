import React, { useState, useEffect } from 'react';
import SearchInput from './SearchInput';
import { FiSearch } from "react-icons/fi";
import {Container,ImageMagnifyingGlass, ContainSearch, Title, List} from './style';
import RegisterRouteBtn from './RegisterRouteBtn';
import LoadingData from './LoadingData'

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
                        // eslint-disable-next-line no-undef
                        setInfo([...new Set(data[1])]);
                    }setLoading(false)
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
                <span>
                {loading
                    ? LoadingData()
                    : info.map((schools, index) => {
                        return (
                            <ul key={index}>
                                <List>{schools.nome}</List>
                            </ul>
                        )
                    }
                    )}
                </span>
        </Container>

    )};

export default Home;