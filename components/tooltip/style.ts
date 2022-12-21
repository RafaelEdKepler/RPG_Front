import styled from "styled-components";

export const Message = styled.div`
  height: 2rem;
  border-style: solid;
  border-width: 0.1pt;
  border-color: #fff;
  border-radius: 5px;
  background: #000;
  padding: 0.1rem 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #fff;
    font-size: 0.75rem;
    font-family: "Roboto", "sans-serif";
  }
`;