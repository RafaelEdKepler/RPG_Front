import styled from "styled-components";

interface ModalInfoContainerProps {
  positionX: number,
  positionY: number
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

export const ModalInfoContainer = styled.div<ModalInfoContainerProps>`
  background-image: url("./modal.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  border-radius: 5rem;
  height: 40rem;
  width: 60rem;
  padding: 0 6rem;
  font-family: "Caramel", "sans-serif";
`

export const ModalInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.5rem 0;
  padding: 0.3rem 8rem 0.3rem 8rem;

  div {
    width: 25rem;

    span {
      font-size: 1.75rem;

    }
  }

  input {
    margin-left: 1rem;
    width: 47rem;
    height: 1.5rem;
    font-size: 1rem;
    border-style: none;
  }

  textarea {
    resize: none;
    width: 100%;
    height: 4rem;
    font-size: 1rem;
    border-style: none;
  }

  &:first-child {
    margin-top: 8rem;
  }
`

export const CheckContainer = styled.div`
  display: grid;
  padding: 0.3rem 6rem 0.3rem 8rem;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  font-size: 1.5rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  width: 10rem;
  height: 2rem;
  font-size: 1.5rem;
  font-family: "Caramel", "sans-serif";
  border-style: none;
`;