import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    background: linear-gradient(45deg,#b3e5fc,#9fa8da);
    font-family: Poppins;
`;

export const ContainForm = styled.form`
    display: flex;
    width: 30vw;
    height: 50vh;
    align-self: center;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.90);
    padding: 60px 30px;
    border-radius: 5px;
    gap: 30px;

    @media screen and (max-width: 1100px) {
        width: 70vw;
        height: 50vh;
  }
`;

export const Title = styled.span`
    font-size: 28px;
    font-weight: bold;
    color: #9fa8da;
`;

export const ContainLabelInput = styled.div`
    display: flex;
    justify-content: space-between;
    align: center;
`;

export const Label = styled.label`
    margin: auto;
`;

export const Input = styled.input`
    width: 100%;
    height: 55px;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #B7E6FC;
    background: none;
    font-size: 18px;
    padding: 10px;
`;

export const Btn = styled.button`
    width: 100%;
    height: 65px;
    border-radius: 0;
    border: none;
    text-align: center;
    background: #9fa8da;
    color: rgba(255, 255, 255, 1);
    text-shadow: black 0.05em 0.05em 0em;
    font-size: 26px;
    font-weight: bold;

    :hover {
        transition: 1s ease-in-out;
        background: #5A5DBC;
}
    @media screen and (max-width: 1100px) {
        height: 45px;
        font-size: 20px;

  }
`;