import { modalProps } from "../modal";
import ToolTip from "../tooltip";
import { ContainerInfo, InfoValues } from "./style";

interface iconToolTipProps {
  "0": string;
  "1": string;
  "2": string;
  "3": string;
  "4": string;
}

export default function Info({ data, handleClick, dataModal }: any) {

  const handleInfoClick = (e: any, item: any) => {
    e.target.id === "container_map_info" ? dataModal(item) : dataModal();
    handleClick(e);
  }

  const handleIconImage = (type: string, objective: string): string => {
    const iconImageWithoutObjective: iconToolTipProps = {
      "0": "./obs.png",
      "1": "./nao_visitado.png",
      "2": "./visitada.png",
      "3": "./nao habitado.png",
      "4": "./objetivo.png"
    }
    const iconImageWithObjective: iconToolTipProps = {
      "0": "./obs_obj.png",
      "1": "./nao_visitado_obj.png",
      "2": "./visitada_obj.png",
      "3": "./nao_habitado_obj.png",
      "4": "./objetivo_obj.png"
    }
    if (objective === "1") {
      return iconImageWithObjective[type as keyof iconToolTipProps];
    }
    console.log('aqui', iconImageWithoutObjective[type as keyof iconToolTipProps])
    return iconImageWithoutObjective[type as keyof iconToolTipProps];
  }

  const handleInfoPosition = (type: string, mouse: number, valueScreen: number) => {
    if ((type === "width" && valueScreen !== window.screen.width) || (type === "height" && valueScreen !== window.screen.height)) {
      let proportion = (mouse * 100) / valueScreen;
      if (type === "width") {
        return (proportion * window.screen.width) / 100;
      } else {
        return (proportion * window.screen.height) / 100;
      }
    }
    return mouse;
  }

  const handleTooltip = (type: string): string => {
    const tooltips: iconToolTipProps = {
      "0": "Observação",
      "1": "Local não visitado",
      "2": "Local visitado",
      "3": "Não habitado",
      "4": "Objetivo atual"
    }
    return tooltips[type as keyof iconToolTipProps];
  }


  return (
    <ContainerInfo
      id="container_map"
    >
      {console.log(data)}
      {data && data.map((item: any) => (
        <div key={item.id}>
          <ToolTip text={handleTooltip(item.type)}>
            <InfoValues id="container_map_info" key={item} positionX={handleInfoPosition("width", item.x_mouse, item.width)} positionY={handleInfoPosition("height", item.y_mouse, item.height)} onClick={(e: any) => handleInfoClick(e, item)} image={handleIconImage(item.type, item.objective)} />
          </ToolTip>
        </div>
      ))}
    </ContainerInfo>
  )
}