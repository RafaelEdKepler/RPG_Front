import ToolTip from "../tooltip";
import { ContainerInfo, InfoValues } from "./style";
import { iconImageWithoutObjective, iconImageWithObjective, iconToolTipProps } from "../../utils/icons";
import { tooltips } from "../../utils/tooltips";

export default function Info({ data, handleClick, dataModal }: any) {

  const handleInfoClick = (e: any, item: any) => {
    e.target.id === "container_map_info" ? dataModal(item) : dataModal();
    handleClick(e);
  }

  const handleIconImage = (type: string, objective: string): string => {
    if (objective) {
      return iconImageWithObjective[type as keyof iconToolTipProps];
    }
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

  const handleTooltip = (type: string, name: string): string => {
    return `${tooltips[type as keyof iconToolTipProps]} - ${name}`;
  }


  return (
    <ContainerInfo
      id="container_map"
    >
      {console.log(data)}
      {data && data.map((item: any) => (
        <div key={item.id}>
          <ToolTip text={handleTooltip(item.type, item.name)}>
            <InfoValues id="container_map_info" key={item} positionX={handleInfoPosition("width", item.x_mouse, item.width)} positionY={handleInfoPosition("height", item.y_mouse, item.height)} onClick={(e: any) => handleInfoClick(e, item)} image={handleIconImage(item.type, item.objective)} />
          </ToolTip>
        </div>
      ))}
    </ContainerInfo>
  )
}