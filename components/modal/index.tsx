import { useEffect, useState } from "react";
import api from "../../utils/api";
import { Button, ButtonContainer, Container, ModalInfo, ModalInfoContainer } from "./style"

export interface modalProps {
  modalInfo: {
    name: string,
    description: string,
    obs: string,
    language: string,
    size: string,
    domain: string,
    actualLocation: string ,
    y_mouse: number,
    x_mouse: number
  },
  positionX: number,
  positionY: number,
  reloadFunction: () => void
}

export default function Modal({modalInfo, positionX, positionY, reloadFunction} : modalProps) {

  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [obs, setObs] = useState<string>();
  const [domain, setDomain] = useState<string>();
  const [xMouse, setXMouse] = useState<number>();
  const [yMouse, setYMouse] = useState<number>();
  const [actualLocation, setActualLocation] = useState<string>();
  const [size, setSize] = useState<string>();

  const handleSave = async () => {
    if (modalInfo && modalInfo.id) {
      const response = await api.put("/update", {
        id: modalInfo.id,
        name,
        description,
        obs,
        domain,
        actualLocation,
        size,
        x_mouse: xMouse,
        y_mouse: yMouse
      })
      if (response.status === 200) {
        alert('Deu certo!');
        await reloadFunction();
      }
    } else {
      const response = await api.post("/save", {
        name,
        description,
        obs,
        domain,
        actualLocation,
        size,
        x_mouse: xMouse,
        y_mouse: yMouse
      })
      if (response.status === 200) {
        alert('Deu certo!');
        await reloadFunction();
      }
    }
  }

  const handleDelete = async () => {
    if (modalInfo && modalInfo.id) {
      const response = await api.delete(`/remove/${modalInfo.id}`);
      if (response.status === 200) {
        alert('Deu certo!');
        await reloadFunction();
      }
    }
  }

  useEffect(() => {
    if (modalInfo) {
      setName(modalInfo.name);
      setDescription(modalInfo.description);
      setObs(modalInfo.obs);
      setDomain(modalInfo.domain);
      setActualLocation(modalInfo.actualLocation);
      setSize(modalInfo.size);
      setXMouse(xMouse);
      setYMouse(yMouse);
    } else {
      setXMouse(positionX);
      setYMouse(positionY);
    }
  }, [])

  return (
    <Container
      id="container_map"
    >
      <ModalInfoContainer
        positionX={50}
        positionY={50}
      >
        <ModalInfo>
          <div>
            <span>Nome:</span>
          </div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </ModalInfo>
        <ModalInfo>
          <div>
            <span>Descrição:</span>
          </div>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
        </ModalInfo>
        <ModalInfo>
          <div>
            <span>Anotações:</span>
          </div>
          <textarea value={obs} onChange={(e) => setObs(e.target.value)}/>
        </ModalInfo>
        <ModalInfo>
          <div>
            <span>Tamanho:</span>
          </div>
        </ModalInfo>
        <ModalInfo>
          <div>
            <span>Tribo</span>
          </div>
          <input type="radio" name="size" value="tribo" checked={size === "tribo"} onChange={(e) => e.target.checked && (setSize("tribo"))}/>
        </ModalInfo>
        <ModalInfo>
          <div>
            <span>Vilarejo</span>
          </div>
          <input type="radio" name="size" value="vilarejo" checked={size === "vilarejo"} onChange={(e) => e.target.checked && (setSize("vilarejo"))}/>
        </ModalInfo>
        <ModalInfo>
          <div>
            <span>Vila</span>
          </div>
          <input type="radio" name="size" value="vila" checked={size === "vila"} onChange={(e) => e.target.checked && (setSize("vila"))}/>
        </ModalInfo>
        <ModalInfo>
          <div>
            <span>Cidade</span>
          </div>
          <input type="radio" name="size" value="cidade" checked={size === "cidade"} onChange={(e) => e.target.checked && (setSize("cidade"))}/>
        </ModalInfo>
        <ModalInfo>
          <div>
            <span>Domínio:</span>
          </div>
          <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)}/>
        </ModalInfo>
        <ModalInfo>
          <div>
            <span>Local Atual:</span>
          </div>
          <input type="checkbox" checked={actualLocation === "1"} onChange={(e) => setActualLocation(e.target.checked ? "1" : "0")}/>
        </ModalInfo>
        <ButtonContainer>
          <Button onClick={handleSave}>Salvar</Button>
          <Button onClick={handleDelete}>Excluir</Button>
        </ButtonContainer>
      </ModalInfoContainer>
    </Container>
  )
}