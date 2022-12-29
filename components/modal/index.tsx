import { useModal } from "../../hooks/useModal";
import { Location } from "./location";
import { Npc } from "./npc";
import { Container, ModalContainer, ModalInfoContainer } from "./style"


export default function Modal() {
  let modalPositionX;
  let modalPositionY;

 modalPositionX = (window.screen.width * 5) / 100;
  modalPositionY = (window.screen.height * 5) / 100;
  if (window.screen.width === 1080) {
    modalPositionX = (window.screen.width * 50) / 100;
    modalPositionY = (window.screen.height * 25) / 100;
  }

  const { type } = useModal();

  return (
    <>
        <Container
          id="container_map"
        >
          <ModalContainer>
            <ModalInfoContainer
              positionX={modalPositionX}
              positionY={modalPositionY}
            >
              {type === "location" && (
                <Location />
              )}
              {type === "npc" && (
                <Npc/>
              )}
            </ModalInfoContainer>
          </ModalContainer>
        </Container>
    </>
  )
}