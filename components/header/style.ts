import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 2.5rem;
  background: #000;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    color: #fff;
    margin-right: 0.5rem;
  }
`;

export const Image = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 1rem;
`;