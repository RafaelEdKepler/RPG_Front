import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Header from '../components/header';
import Info from '../components/info';
import Modal from '../components/modal';
import Tab from '../components/tab';
import { AppContainer, Container } from '../styles/style';
import api from "../utils/api";

interface dataArrayProps {
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

const Home: NextPage = () => {

  const [data, setData] = useState<[dataArrayProps]>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [pageX, setPageX] = useState<number>(0);
  const [pageY, setPageY] = useState<number>(0);
  const [dataModal, setDataModal] = useState<dataArrayProps>({});

  const reloadFunction = async () => {
    await fetchData();
  }

  const fetchData = async () => {
    const response = await api.get("/getAll");
    if (response.status === 200) {
      setData(response.data)
    }
  }

  const handleOpenModal = (e: any) => {
    if (e.target.id === `container_map` || e.target.id === "container_map_info") {
      if (e.target.id === `container_map`) {
        setDataModal({});
      }
      setPageX(e.pageX);
      setPageY(e.pageY);
      setIsOpen(!isOpen)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <AppContainer
      onClick={(e: any) => handleOpenModal(e)}
      id="container_map"
    >
      <Tab />
      <Header />
      {isOpen && (
        <Modal
          modalInfo={dataModal}
          positionX={pageX}
          positionY={pageY}
          reloadFunction={reloadFunction}
          functionOpenModal={setIsOpen}
        />
      )}
      <Container>
        {data && data.length > 0 && (
          <Info
            data={data}
            dataModal={setDataModal}
            handleClick={handleOpenModal}
          />
        )}
      </Container>
    </AppContainer>
  )
}

export default Home
