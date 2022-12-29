import styled from "styled-components";

interface ContainerProps {
  display: string;
}

interface ImageProps {
  display: string;
  selected: boolean;

}

export const TabContainer = styled.div`
  width: 10rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  width: ${props => props.display === "flex" ? "5rem" : "0"};
  border-style: solid;
  border-width: 1pt;
  backdrop-filter: blur(12px);

  transition: 0.2s;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

export const Image = styled.img<ImageProps>`
  transition: 0.2s;
  padding: 0.5rem 0.25rem;
  width: ${props => props.display === "flex" ? "4rem" : "0"};
  height: 4rem;
  margin-top: 2rem;
  cursor: pointer;
  border-style: ${props => props.display === "flex" ? "solid" : "none"};
  border-color: ${props => props.selected ? "#000" : "rgba(0, 0, 0, 0.0)"};
  border-width: 1pt;
  border-radius: 5px;

  @media (min-width: 1200px) {
    height: ${props => props.display === "flex" ? "3rem" : "0"};
    width: ${props => props.display === "flex" ? "3rem" : "0"};
  }
`;

export const HandleTab = styled.div`
  backdrop-filter: blur(12px);
  width: 2rem;
  height: 8rem;
  border-radius: 0 5px 5px 0;
  border-style: solid;
  border-width: 1pt 1pt 1pt 0pt;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  cursor: pointer;
`;