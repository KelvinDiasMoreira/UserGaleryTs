import {
  Container,
  Table,
  Td,
  Th,
  Tr,
  DivImage1,
  DivImage2,
  ContainerImage,
  ModalTitle,
  ContainerIconModal,
  ContainerButtomModal,
  ButtonModalCancel,
} from "./styles";

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

import Modal from "react-modal";
import { useState } from "react";

import { ReactComponent as DeleteIcon } from "../../assets/images/DeleteIcon.svg";
import { ReactComponent as EyeIcon } from "../../assets/images/EyeIcon.svg";


export default function TableImages() {
  const [modalImageIsOpen, setModalImageIsOpen] = useState(false);

  function openModalImage() {
    setModalImageIsOpen(true);
  }
  function closeModalImage() {
    setModalImageIsOpen(false);
  }

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
          <Tr>
            <Td>1</Td>
            <Td>Teste</Td>
            <Td>JPEG</Td>
            <Td>100 KB</Td>
            <Td>01/01/1050</Td>
            <Td>
              <ContainerImage>
                <div></div>
                <DivImage1 onClick={openModalImage}>
                  <EyeIcon />
                </DivImage1>
                <DivImage2>
                  <DeleteIcon />
                </DivImage2>
                <div></div>
              </ContainerImage>
            </Td>
          </Tr>
        </tbody>
      </Table>
      <Modal
        isOpen={modalImageIsOpen}
        onRequestClose={closeModalImage}
        style={customStyles}
      >
        <ModalTitle>Visualizar imagem</ModalTitle>
        <ContainerIconModal>
          <img src="https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg" />
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
