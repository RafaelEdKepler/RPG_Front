import { useEffect, useState } from "react";
import { Container, Image } from "./style";
import { useMap } from "../../hooks/useMap";
import { iconImageWithoutObjective, iconToolTipProps } from "../../utils/icons";

export default function Header() {

  const { optionSelected } = useMap();
  const [icon, setIcon] = useState("");
  const [sizeFixed, setSizeFixed] = useState(true);

  useEffect(() => {
    setIcon(iconImageWithoutObjective[optionSelected as keyof iconToolTipProps])
  }, [optionSelected])

  return (
    <Container fixed={sizeFixed}>
      <div>
        <input checked={sizeFixed} type="checkbox" onClick={() => setSizeFixed(!sizeFixed)} id="check" />
        <label htmlFor="check" />
      </div>
      <div>
        <span>Opção selecionada:</span>
        <Image src={icon} alt="Opção selecionada" />
      </div>
    </Container>
  )
}