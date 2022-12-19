import { createContext, useState, useContext } from "react";

const MapContext = createContext({});

export function MapProvider({ children }: any) {

  const [optionSelected, setOptionSelected] = useState(0);

  return (
    <MapContext.Provider
      value={{
        optionSelected,
        setOptionSelected
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