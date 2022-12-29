import { createContext, useState, useContext } from "react";

export interface dataArrayProps {
    name?: string,
    description?: string,
    obs?: string,
    language?: string,
    size?: string,
    domain?: string,
    actualLocation?: string
    y_mouse?: number,
    x_mouse?: number,
    objective?: string
  }

const ModalContext = createContext({});

export function ModalProvider({ children }: any) {

const [isOpen, setIsOpen] = useState<boolean>(false);
const [pageX, setPageX] = useState<number>(0);
const [pageY, setPageY] = useState<number>(0);
const [dataModal, setDataModal] = useState<dataArrayProps>({});
const [type, setType] = useState("");

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        setIsOpen,
        pageX,
        setPageX,
        pageY,
        setPageY,
        dataModal,
        setDataModal,
        type,
        setType
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal(): any {
  const context = useContext(ModalContext);

  return context;
}