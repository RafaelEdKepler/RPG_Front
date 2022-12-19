import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useMap } from "../../hooks/useMap";
import { Container, HandleTab, Image, TabContainer } from "./style";

export default function Tab() {

  const [display, setDisplay] = useState("none");
  const { setOptionSelected, optionSelected } = useMap();

  const handleTab = () => {
    setDisplay(display === "flex" ? "none" : "flex");
  }

  return (
    <TabContainer>
      <Container
        display={display}
      >
        <Image src="./Obs.png" alt="Observação" onClick={() => setOptionSelected(0)} selected={optionSelected === 0} display={display} />
        <Image src="./visitada.png" alt="Cidade visitada" onClick={() => setOptionSelected(1)} selected={optionSelected === 1} display={display} />
        <Image src="./nao visitado.png" alt="Cidade não visitada" onClick={() => setOptionSelected(2)} selected={optionSelected === 2} display={display} />
        <Image src="./nao habitado.png" alt="Local não habitado" onClick={() => setOptionSelected(3)} selected={optionSelected === 3} display={display} />
        <Image src="./objetivo.png" alt="Objetivo atual" onClick={() => setOptionSelected(4)} selected={optionSelected === 4} display={display} />
      </Container>
      <HandleTab
        onClick={handleTab}
      >
        {display === "none" ? (
          <MdArrowForwardIos />
        ) : (
          <MdArrowBackIos />
        )}
      </HandleTab>
    </TabContainer>
  )
}