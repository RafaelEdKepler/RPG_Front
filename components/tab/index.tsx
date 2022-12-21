import { useState } from "react";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { useMap } from "../../hooks/useMap";
import Header from "../header";
import ToolTip from "../tooltip";
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
        <ToolTip text="Observação">
          <Image src="./Obs.png" alt="Observação" onClick={() => setOptionSelected(0)} selected={optionSelected === 0} display={display} />
        </ToolTip>
        <ToolTip text="Cidade Visitada">
          <Image src="./visitada.png" alt="Cidade visitada" onClick={() => setOptionSelected(1)} selected={optionSelected === 1} display={display} />
        </ToolTip>
        <ToolTip text="Cidade não visitada">
          <Image src="./nao_visitado.png" alt="Cidade não visitada" onClick={() => setOptionSelected(2)} selected={optionSelected === 2} display={display} />
        </ToolTip>
        <ToolTip text="Local não habitado">
          <Image src="./nao habitado.png" alt="Local não habitado" onClick={() => setOptionSelected(3)} selected={optionSelected === 3} display={display} />
        </ToolTip>
        <ToolTip text="Objetivo atual">
          <Image src="./objetivo.png" alt="Objetivo atual" onClick={() => setOptionSelected(4)} selected={optionSelected === 4} display={display} />
        </ToolTip>
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