import styled from "styled-components";

interface ModalInfoContainerProps {
  positionX: number,
  positionY: number
}

interface ButtonProps {
  confirm?: boolean;
}

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: rgba(10,23,55,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  border-radius: 15px;
  background-color: url("./modal.webp");
  background-size: cover;
`;

export const ModalInfoContainer = styled.div<ModalInfoContainerProps>`
  background-size: cover;
  display: flex;
  flex-direction: column;
  border-radius: 5rem;
  height: 40rem;
  width: 60rem;
  padding: 0 6rem;
  font-family: "Roboto", "sans-serif";
  border-radius: 15px;
  border-style: solid;
  border-width: 0.1pt;

  backdrop-filter: blur(22px);
`

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
  padding: 0.3rem 8rem 0.3rem 8rem;

  div {
    width: 15rem;

    span {
      font-size: 1rem;
    }
  }

  input {
    margin-left: 1rem;
    width: 47rem;
    height: 1.5rem;
    font-size: 1rem;
    border-style: none;
    border-radius: 5px;
  }

  textarea {
    resize: none;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    border-style: none;
    border-radius: 5px;
  }

  &:first-child {
    margin-top: 2.5rem;
  }
`

export const CheckContainer = styled.div`
  display: grid;
  padding: 0.3rem 6rem 0.3rem 8rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  font-size: 1rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 0 0 3rem 0;
`;

export const Button = styled.button<ButtonProps>`
  width: 10rem;
  height: 2rem;
  font-size: 1.5rem;
  font-family: "Caramel", "sans-serif";
  border-radius: 5px;

  border-style: solid;
  border-width: 1pt;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    border-color: ${props => props.confirm ? "#00FF00" : "#F00E0E"};
  }
`;