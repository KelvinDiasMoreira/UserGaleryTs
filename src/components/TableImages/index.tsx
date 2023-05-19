import { useState, useEffect, useContext } from "react";
import { api } from "../../services/api";
import ModalUploadImage from "../ModalUploadImage";
import { UserContext } from "../../hooks/UserContext";

import {
  ButtonModalCancel,
  Container,
  ContainerButtomModal,
  ContainerIconModal,
  ModalTitle,
  Table,
  Th,
} from "./styles";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "60rem",
    height: "auto",
  },
};

export default function TableImages() {
  const [images, setImages] = useState<any[]>([]);
  const { setModalImageIsOpen, modalImageIsOpen, image } =
    useContext(UserContext);

  function closeModalImage() {
    setModalImageIsOpen(false);
  }


  async function getImages() {
    try {
      const { data } = await api.get(`image/`);
      setImages(data);
    } catch (err) {
      throw new Error("Erro na api que pega todas as imagens.");
    }
  }
  useEffect(() => {
    const timer = setInterval(() => {
      getImages();
    }, 1000);
    return (
      clearInterval(timer)
    )
  }, []);

  return (
    <Container>
      <Table>
        <tbody>
          <tr>
            <Th>Id</Th>
            <Th>Nome</Th>
            <Th>Extensão</Th>
            <Th>Tamanho</Th>
            <Th>Data de Criação</Th>
            <Th>Ações</Th>
          </tr>
          {images?.map((index) => {
            return <ModalUploadImage key={index.id} data={index} />;
          })}
        </tbody>
      </Table>

      <Modal
        ariaHideApp={false}
        isOpen={modalImageIsOpen}
        onRequestClose={closeModalImage}
        style={customStyles}
      >
        <ModalTitle>Visualizar imagem</ModalTitle>
        <ContainerIconModal>
          {image ? (
            <img src={`data:${image.extension};base64, ${image.data}`} />
          ) : (
            ""
          )}
        </ContainerIconModal>
        <ContainerButtomModal>
          <ButtonModalCancel onClick={closeModalImage}>
            Fechar
          </ButtonModalCancel>
        </ContainerButtomModal>
      </Modal>
    </Container>
  );
}
