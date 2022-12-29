import { createContext, useState, useContext } from "react";
import api from "../utils/api";
import { dataArrayProps } from "./useModal";

const MapContext = createContext({});

export function MapProvider({ children }: any) {

  const [optionSelected, setOptionSelected] = useState(0);
  const [data, setData] = useState<[dataArrayProps]>();

  const fetchData = async () => {
    const response = await api.get("/getAll");
    if (response.status === 200) {
        setData(response.data)
    }
}

const reloadFunction = async () => {
    await fetchData();
}

  return (
    <MapContext.Provider
      value={{
        optionSelected,
        setOptionSelected,
        fetchData,
        reloadFunction,
        data,
        setData
      }}
    >
      {children}
    </MapContext.Provider>
  )
}

export function useMap(): any {
  const context = useContext(MapContext);

  return context;
}