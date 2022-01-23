import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 50vw;
    align-self: center;
    flex-direction: column;
    padding: 100px 30px;
    gap: 30px;
    margin: auto;
`;

export const Title = styled.span`
    font-size: 28px;
    font-weight: bold;
    color: #9fa8da;
    text-align: center;
`;

export const ContainSearch = styled.span`
    display: flex;
    justify-content: space-between;
    border: 1px solid #B7E6FC;
    padding: 10px 20px;
    border-radius: 40px;
    gap:10px;
`;

export const Input = styled.input`
    width: 100%;
    height: 55px;
    border-radius: 0;
    border: none;
    background: none;
    font-size: 18px;
`;


export const Btn = styled.label`
    background: none;
    border:none;
    margin: auto;
`;
