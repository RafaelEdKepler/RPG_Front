import { useEffect, useState } from "react";
// @ts-ignore
import { toast } from 'react-nextjs-toast'
import { useMap } from "../../hooks/useMap";
import api from "../../utils/api";
import { Button, ButtonContainer, CheckContainer, Container, ModalContainer, ModalInfo, ModalInfoContainer } from "./style"

export interface modalProps {
  modalInfo: {
    id?: string,
    name?: string,
    description?: string,
    obs?: string,
    language?: string,
    size?: string,
    domain?: string,
    actualLocation?: string,
    y_mouse?: number,
    x_mouse?: number,
    objective?: string
  },
  positionX: number,
  positionY: number,
  reloadFunction: () => void,
  functionOpenModal: (isOpen: boolean) => void,
}

export default function Modal({ modalInfo, positionX, positionY, reloadFunction, functionOpenModal }: modalProps) {

  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [obs, setObs] = useState<string>();
  const [domain, setDomain] = useState<string>();
  const [xMouse, setXMouse] = useState<number>();
  const [yMouse, setYMouse] = useState<number>();
  const [actualLocation, setActualLocation] = useState<string>();
  const [size, setSize] = useState<string>();
  const [objective, setObjective] = useState<string>();
  const [loaded, setLoaded] = useState<boolean>(false);

  const { optionSelected } = useMap();


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
        y_mouse: yMouse,
        objective,
        type: optionSelected,
        width: window.screen.width,
        height: window.screen.height
      })
      if (response.status === 200) {
        toast.notify("Seus dados foram atualizados com sucesso!", {
          type: "success",
          title: "Tudo certo!",
        });
        functionOpenModal(false);
        await reloadFunction();
      } else {
        toast.notify("Seus dados não puderam ser atualizados.", {
          type: "error",
          title: "Algo deu errado...",
        });
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
        y_mouse: yMouse,
        type: optionSelected,
        objective,
        width: window.screen.width,
        height: window.screen.height
      })
      if (response.status === 200) {
        toast.notify("Seus dados foram inseridos com sucesso!", {
          type: "success",
          title: "Tudo certo!",
        });
        functionOpenModal(false);
        await reloadFunction();
      } else {
        toast.notify("Seus dados não puderam ser inseridos.", {
          type: "error",
          title: "Algo deu errado...",
        });
      }
    }
  }

  const showOption = () => {
    if (optionSelected === 1 || optionSelected === 2) {
      return true;
    }
    return false;
  }

  const handleDelete = async () => {
    if (modalInfo && modalInfo.id) {
      const response = await api.delete(`/remove/${modalInfo.id}`);
      if (response.status === 200) {
        toast.notify("Seus dados foram excluídos com sucesso!", {
          type: "success",
          title: "Tudo certo!",
        });
        functionOpenModal(false);
        await reloadFunction();
      }
    }
  }

  function objetoVazio(obj: Object) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  }

  useEffect(() => {
    if (!objetoVazio(modalInfo)) {
      setName(modalInfo.name);
      setDescription(modalInfo.description);
      setObs(modalInfo.obs);
      setDomain(modalInfo.domain);
      setActualLocation(modalInfo.actualLocation);
      setSize(modalInfo.size);
      setXMouse(xMouse);
      setYMouse(yMouse);
      setObjective(modalInfo.objective);
    } else {
      setXMouse(positionX);
      setYMouse(positionY);
    }
    setLoaded(true);
  }, [])

  let modalPositionX = (window.screen.width * 5) / 100;
  let modalPositionY = (window.screen.height * 5) / 100;
  if (window.screen.width === 1080) {
    modalPositionX = (window.screen.width * 50) / 100;
    modalPositionY = (window.screen.height * 25) / 100;
  }

  return (
    <>
      {loaded && (

        <Container
          id="container_map"
        >
          <ModalContainer>
            <ModalInfoContainer
              positionX={modalPositionX}
              positionY={modalPositionY}
            >
              <ModalInfo>
                <div>
                  <span>Nome:</span>
                </div>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
              </ModalInfo>
              <ModalInfo>
                <div>
                  <span>Descrição:</span>
                </div>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
              </ModalInfo>
              <ModalInfo>
                <div>
                  <span>Anotações:</span>
                </div>
                <textarea value={obs} onChange={(e) => setObs(e.target.value)} />
              </ModalInfo>
              {showOption() && (
                <>
                  <ModalInfo>
                    <div>
                      <span>Tamanho:</span>
                    </div>
                  </ModalInfo>
                  <CheckContainer>
                    <input type="radio" name="size" value="tribo" checked={size === "tribo"} onChange={(e) => e.target.checked && (setSize("tribo"))} />
                    <div>
                      <span>Tribo</span>
                    </div>
                    <input type="radio" name="size" value="vilarejo" checked={size === "vilarejo"} onChange={(e) => e.target.checked && (setSize("vilarejo"))} />
                    <div>
                      <span>Vilarejo</span>
                    </div>
                    <input type="radio" name="size" value="vila" checked={size === "vila"} onChange={(e) => e.target.checked && (setSize("vila"))} />
                    <div>
                      <span>Vila</span>
                    </div>
                    <input type="radio" name="size" value="cidade" checked={size === "cidade"} onChange={(e) => e.target.checked && (setSize("cidade"))} />
                    <div>
                      <span>Cidade</span>
                    </div>
                  </CheckContainer>
                  <ModalInfo>
                    <div>
                      <span>Domínio:</span>
                    </div>
                    <input type="text" value={domain} onChange={(e) => setDomain(e.target.value)} />
                  </ModalInfo>
                </>
              )}
              <ModalInfo>
                <div>
                  <span>Local Atual:</span>
                </div>
                <input type="checkbox" checked={actualLocation === "1"} onChange={(e) => setActualLocation(e.target.checked ? "1" : "0")} />
              </ModalInfo>
              <ModalInfo>
                <div>
                  <span>Objetivo:</span>
                </div>
                <input type="checkbox" checked={objective === "1"} onChange={(e) => setObjective(e.target.checked ? "1" : "0")} />
              </ModalInfo>
              <ButtonContainer>
                <Button confirm onClick={handleSave}>Salvar</Button>
                <Button onClick={handleDelete}>Excluir</Button>
              </ButtonContainer>
            </ModalInfoContainer>
          </ModalContainer>
        </Container>
      )}
    </>
  )
}