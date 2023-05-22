import { useContext } from "react";
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
  const { setModalImageIsOpen, modalImageIsOpen, image, images } = useContext(UserContext);

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
          {images?.map((index: any) => {
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

