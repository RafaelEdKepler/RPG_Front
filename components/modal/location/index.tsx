import { useState, useEffect } from "react";
import { useMap } from "../../../hooks/useMap";
import api from "../../../utils/api";
// @ts-ignore
import { toast } from 'react-nextjs-toast'
import { Button, ButtonContainer, CheckContainer, Field, LargeField, ModalInfo } from "../../modal/style"
import { useModal } from "../../../hooks/useModal";

export const Location = () => {

  const [name, setName] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [obs, setObs] = useState<string>();
  const [domain, setDomain] = useState<string>();
  const [xMouse, setXMouse] = useState<number>();
  const [yMouse, setYMouse] = useState<number>();
  const [actualLocation, setActualLocation] = useState<string>();
  const [size, setSize] = useState<string>();
  const [objective, setObjective] = useState<string>();

  const { optionSelected, reloadFunction } = useMap();

  const { modalInfo, positionX, positionY, functionOpenModal, } = useModal();

  useEffect(() => {

  }, [])

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
  }, [])

  return (
    <>
      <ModalInfo>
        <div>
          <span>Nome:</span>
        </div>
        <Field type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </ModalInfo>
      <ModalInfo>
        <div>
          <span>Descrição:</span>
        </div>
        <LargeField value={description} onChange={(e) => setDescription(e.target.value)} />
      </ModalInfo>
      <ModalInfo>
        <div>
          <span>Anotações:</span>
        </div>
        <LargeField value={obs} onChange={(e) => setObs(e.target.value)} />
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
            <Field type="text" value={domain} onChange={(e) => setDomain(e.target.value)} />
          </ModalInfo>
        </>
      )}
      <ModalInfo>
        <div>
          <span>Local Atual:</span>
        </div>
        <Field type="checkbox" checked={actualLocation === "1"} onChange={(e) => setActualLocation(e.target.checked ? "1" : "0")} />
      </ModalInfo>
      <ModalInfo>
        <div>
          <span>Objetivo:</span>
        </div>
        <Field type="checkbox" checked={objective === "1"} onChange={(e) => setObjective(e.target.checked ? "1" : "0")} />
      </ModalInfo>
      <ButtonContainer>
        <Button confirm onClick={handleSave}>Salvar</Button>
        <Button onClick={handleDelete}>Excluir</Button>
      </ButtonContainer>
    </>
  )
}