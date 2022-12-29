import { useEffect, useState } from "react";
import { Container, Image, Menu } from "./style";
import { useMap } from "../../hooks/useMap";
import { iconImageWithoutObjective, iconToolTipProps } from "../../utils/icons";
import { useModal } from "../../hooks/useModal";

export default function Header() {

  const [icon, setIcon] = useState("");
  const [sizeFixed, setSizeFixed] = useState(true);
  const { optionSelected } = useMap();
  const { setType, setIsOpen } = useModal();

  useEffect(() => {
    setIcon(iconImageWithoutObjective[optionSelected as keyof iconToolTipProps])
  }, [optionSelected])

  const handleOpenModal = () => {
    setType("npc");
    setIsOpen(true);
  }

  return (
    <Container fixed={sizeFixed}>
      <div>
        <input checked={sizeFixed} type="checkbox" onChange={() => setSizeFixed(!sizeFixed)} id="check" />
        <label htmlFor="check" />
        <Menu>
          <span onClick={() => handleOpenModal()}>Gerar NPC</span>
        </Menu>
      </div>
      <div>
        <span>Opção selecionada:</span>
        <Image src={icon} alt="Opção selecionada" />
      </div>
    </Container>
  )
}