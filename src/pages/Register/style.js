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
    align-self: center;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.90);
    padding: 60px 30px;
    border-radius: 5px;
    gap: 30px;

    @media screen and (max-width: 1100px) {
        width: 70vw;
  }
`;

export const Title = styled.span`
    font-size: 28px;
    font-weight: bold;
    color: #9fa8da;
`;

export const Input = styled.input`
    width: 100%;
    min-height: 35px;
    border-radius: 0;
    border: none;
    border: 1px solid #B7E6FC;
    background: none;
    font-size: 18px;
    padding: 10px;
`;

export const Select = styled.select`
   border-radius: 5px;
   min-height: 35px; 
   line-height: 35px; 
   border: solid 1px #B7E6FC; 
   background-color: #fff;
   box-sizing: border-box;
   clear: both;
   font-size: 18px;
   outline: none;
   padding: 10px;
}
`;
export const Btn = styled.button`
    height: 36px;
    min-width: 60px;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    background-color: #f8f9fa;
    border:  1px solid #CFD3EC;
    border-radius: 4px;
    color: #3c4043;
    margin: auto;
    padding: 0 16px;

    :hover {
        transition: .5s;
        background-color: #dae0e5;
}
`;

export const Option = styled.option`
   cursor: pointer;
   font-weight: 400;
   line-height: 30px; 
   min-height: 30px; 
   list-style: none;
   outline: none;
   padding-left: 18px;
   padding-right: 29px;
   text-align: left;
   transition: all 0.2s;
} 
`;
