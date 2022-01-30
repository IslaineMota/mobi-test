import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
/*     width: 100vw;
    height: 100vh; */
    margin: 0;
    overflow: hidden;
    background: linear-gradient(45deg,#b3e5fc,#9fa8da);
    font-family: Poppins;
`;

export const PlacementDiv = styled.div`
    height: 100vh;
    display: flex;
    align-items: center; 
    justify-content: center;
    flex-direction: column;
    weight: 100vw;
    margin: auto;
  }
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

export const ContainTable = styled.table`
    display: flex;
    min-width: 60vw;
    font-size: 16px;
    align-self: center;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.90);
    padding: 30px;
    border-radius: 5px;
   /*  gap: 30px; */
`;

export const RowHead = styled.tr`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  top: 0px;
  bottom: 0px;
  border-bottom: 0.1px solid #B7E6FC;
`;

export const TableHeader = styled.th`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;
  width: 15vw;
  /* width: ${props => props.width ? '20vw' : '10vw' }; */
  /* border: 1px solid yellow; */
`;

export const TableBobyItems = styled(TableHeader)`
    font-weight: 100;
    /* border: 1px solid purple; */
`;

export const RowBody = styled(RowHead)`
`;

