import { useEffect, useState } from "react";
import { Container, Dropdown, Image, Layer, Menu } from "./style";
import { AiOutlineCheck } from "react-icons/ai";
import { useMap } from "../../hooks/useMap";
import { iconImageWithoutObjective, iconToolTipProps } from "../../utils/icons";

export default function Header() {

  const { optionSelected } = useMap();
  const [icon, setIcon] = useState("");
  const [dropdownVisible, setDropdowVisible] = useState(false);
  const [sizeFixed, setSizeFixed] = useState(true);

  useEffect(() => {
    setIcon(iconImageWithoutObjective[optionSelected as keyof iconToolTipProps])
  }, [optionSelected])

  return (
    <Container fixed={sizeFixed}>
      <div>
        <input checked={sizeFixed} type="checkbox" onChange={() => setSizeFixed(!sizeFixed)} id="check" />
        <label htmlFor="check" />
        <Menu
          onClick={() => setDropdowVisible(!dropdownVisible)}
        >Camada</Menu>
        <Dropdown
          visible={dropdownVisible}
        >
          <Layer>
            Opcao 1
            <div>
              <AiOutlineCheck />
            </div>
          </Layer>
          <Layer>Opcao maior</Layer>
          <Layer>Opcao 3</Layer>
        </Dropdown>
      </div>
      <div>
        <span>Opção selecionada:</span>
        <Image src={icon} alt="Opção selecionada" />
      </div>
    </Container>
  )
}