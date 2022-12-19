import { modalProps } from "../modal";
import { ContainerInfo, InfoValues } from "./style";


export default function Info({ data, handleClick, dataModal }: any) {

  const handleInfoClick = (e: any, item: any) => {
    e.target.id === "container_map_info" ? dataModal(item) : dataModal();
    handleClick(e);
  }

  const handleIconImage = (type: string): string => {
    if (type === "0") {
      return "./obs.png";
    }
    if (type === "1") {
      return "./nao visitado.png";
    }
    if (type === "2") {
      return "./visitada.png";
    }
    if (type === "3") {
      return "./nao habitado.png";
    }
    if (type === "4") {
      return "./objetivo.png";
    }
    return "";
  }


  return (
    <ContainerInfo
      id="container_map"
    >
      {console.log(data)}
      {data && data.map((item: any) => (
        <div key={item}>
          <InfoValues id="container_map_info" key={item} positionX={item.x_mouse} positionY={item.y_mouse} onClick={(e: any) => handleInfoClick(e, item)} image={handleIconImage(item.type)} />
        </div>
      ))}
    </ContainerInfo>
  )
}