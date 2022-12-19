import styled from "styled-components";
import { Container } from "../modal/style";

interface InfoProps {
  positionX: number,
  positionY: number,
  image: string
}

export const ContainerInfo = styled(Container)`
  z-index: 1;
  background-color: rgba(10,23,55,0.1);
`

export const InfoValues = styled.div<InfoProps>`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: ${props => props.positionY}px;
  left: ${props => props.positionX}px;
  background-image: ${props => props.image && `url(${props.image})`};
  background-size: cover;
  cursor: pointer;
`;