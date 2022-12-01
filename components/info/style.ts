import styled from "styled-components";
import { Container } from "../modal/style";

interface InfoProps {
  positionX: number,
  positionY: number
}

export const ContainerInfo = styled(Container)`
  z-index: 1;
`

export const InfoValues = styled.div<InfoProps>`
  width: 8rem;
  height: 8rem;
  background: #C0C0C0;
  border-radius: 0.8rem;
  border-color: #000;
  border-style: solid;
  border-width: 0.25rem;
  position: absolute;
  top: ${props => props.positionY}px;
  left: ${props => props.positionX}px;
`;