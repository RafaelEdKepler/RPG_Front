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
`;

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  width: ${props => props.display === "flex" ? "5rem" : "0"};
  border-style: solid;
  border-width: 1pt;
  background: #CCC;

  transition: 0.8s;

  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

export const Image = styled.img<ImageProps>`
  transition: 0.4s;
  padding: 0.5rem 0;
  width: ${props => props.display === "flex" ? "4rem" : "0"};
  height: 4rem;
  margin-top: 2rem;
  cursor: pointer;
  border-style: ${props => props.display === "flex" ? "solid" : "none"};
  border-color: ${props => props.selected ? "#daa520" : "#CCC"};

  &:hover {
    border-color: #daa520;
  }
`;

export const HandleTab = styled.div`
  background-color: #CCC;
  width: 2rem;
  height: 8rem;
  border-radius: 0 5px 5px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;