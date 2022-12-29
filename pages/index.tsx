import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import Header from '../components/header';
import Info from '../components/info';
import Modal from '../components/modal';
import Tab from '../components/tab';
import { useMap } from '../hooks/useMap';
import { useModal } from '../hooks/useModal';
import { AppContainer, Container } from '../styles/style';
import api from '../utils/api';

const Home: NextPage = () => {

  const {
    isOpen,
    setIsOpen,
    setPageX,
    setPageY,
    setDataModal,
    setType
  } = useModal();

  const { setData, data } = useMap();

  const handleOpenModal = (e: any) => {
    if (e.target.id === `container_map` || e.target.id === "container_map_info") {
      if (e.target.id === `container_map`) {
        setDataModal({});
      }
      setType("location");
      setPageX(e.pageX);
      setPageY(e.pageY);
      setIsOpen(!isOpen)
    }
  }

  const fetchData = async () => {
    const response = await api.get("/getAll");
    if (response.status === 200) {
        setData(response.data)
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
        <Modal />
      )}
      <Container id="container_map">
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
