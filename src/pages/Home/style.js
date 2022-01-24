import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 50vw;
    align-self: center;
    flex-direction: column;
    padding: 100px 30px;
    gap: 15px;
    margin: auto;

    @media screen and (max-width: 1450px) {
        width: 80vw;
    }
`;

export const Title = styled.span`
    font-size: 28px;
    font-weight: bold;
    color: #9fa8da;
    text-align: center;
    margin-bottom: 15px;
`;

export const ContainSearch = styled.span`
    display: flex;
    justify-content: space-between;
    border: 1px solid #B7E6FC;
    padding: 10px 20px;
    border-radius: 40px;
    gap:10px;

    :hover {
        border:  1px solid #a4e2d6;
    }
`;

export const Input = styled.input`
    width: 100%; 
    height: 50px;
    border-radius: 0;
    border: none;
    background: none;
    font-size: 24px;

    @media screen and (max-width: 1000px) {
        font-size: 20px;
    }

    @media screen and (max-width: 800px) {
        font-size: 10px;
    }

    @media screen and (max-width: 500px) {
        font-size: 0px;
    }

`;

export const ImageMagnifyingGlass = styled.label`
    background: none;
    border:none;
    margin: auto;
`;

export const Btn = styled.button`
    height: 36px;
    min-width: 60px;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    background-color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 4px;
    color: #3c4043;
    margin: auto;
    padding: 0 16px;

    :hover {
        border:  1px solid #CFD3EC;
}
    @media screen and (max-width: 1100px) {
        font-size: 12px;
    }
`;

export const List = styled.li`
    font-size: 16px;
    padding: 5px 20px;
    font-weight: bold;

    @media screen and (max-width: 1100px) {
        font-size: 14px;
  }
}
`;
 

