import { useEffect, useState } from "react";
import { Container, Image } from "./style";
import { useMap } from "../../hooks/useMap";
import { iconImageWithoutObjective, iconToolTipProps } from "../../utils/icons";

export default function Header() {

  const { optionSelected } = useMap();
  const [icon, setIcon] = useState("");

  useEffect(() => {
    setIcon(iconImageWithoutObjective[optionSelected as keyof iconToolTipProps])
  }, [optionSelected])

  return (
    <Container>
      <span>Opção selecionada:</span>
      <Image src={icon} alt="Opção selecionada" />
    </Container>
  )
}