import styled from "styled-components";

interface ModalInfoContainerProps {
  positionX: number,
  positionY: number
}

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const ModalInfoContainer = styled.div<ModalInfoContainerProps>`
  position: absolute;    
  top: ${props => props.positionY}px;
  left: ${props => props.positionX}px;
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  border-radius: 5rem;
  height: 100rem;
  width: 100rem;
  padding: 4rem;
`

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
  padding: 0.3rem;  

  div {
    width: 25rem;

    span {
      font-size: 4rem;
    }
  }

  input {
    margin-left: 1rem;  
    width: 55rem;
    height: 4.5rem;
    font-size: 3.5rem;
  }  

  textarea {
    resize: none;
    width: 60%;
    height: 16rem;
    font-size: 3.5rem;
  }
`

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 15rem;
  height: 5rem;
  font-size: 3.5rem;
`;