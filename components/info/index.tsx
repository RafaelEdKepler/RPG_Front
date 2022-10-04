import { modalProps } from "../modal";
import { ContainerInfo, InfoValues } from "./style";


export default function Info({data, handleClick, dataModal} : any) {  
  
  const handleInfoClick = (e : any, item : any) => {    
    e.target.id === "container_map_info" ? dataModal(item) : dataModal();
    handleClick(e);
  }


  return (
    <ContainerInfo      
      id="container_map"
    >
      {data && data.map((item : any) => (
        <>          
          <InfoValues id="container_map_info" key={item} positionX={item.x_mouse} positionY={item.y_mouse} onClick={(e) => handleInfoClick(e, item)}/>
        </>
      ))}
    </ContainerInfo>
  )
}