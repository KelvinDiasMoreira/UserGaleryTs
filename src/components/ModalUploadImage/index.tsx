import { useContext } from "react";
import { UserContext } from "../../hooks/UserContext";

import Modal from "react-modal";

import { ReactComponent as DeleteIcon } from "../../assets/images/DeleteIcon.svg";
import { ReactComponent as EyeIcon } from "../../assets/images/EyeIcon.svg";

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

import {
  ContainerImage,
  ModalTitle,
  ContainerIconModal,
  ContainerButtomModal,
  ButtonModalCancel,
  Tr,
  Td,
  DivImage1,
  DivImage2,
} from "./styles";
import { api } from "../../services/api";
interface Props {
  data: dataImage;
}

interface dataImage {
  createdAt: string;
  data: string;
  extension: string;
  id: number;
  name: string;
  vlSize: number;
}

export default function ModalUploadImage({ data }: Props) {
  const { setModalImageIsOpen, modalImageIsOpen } = useContext(UserContext);
  
  function closeModalImage() {
    setModalImageIsOpen(false);
  }

  function openModalImage() {
    setModalImageIsOpen(true);
  }

//   function b64_to_utf8() {
//     return decodeURIComponent(escape(window.atob(data.data)));
//  }

  async function removeImages() {
    try {
      await api.delete(`image/${data.id}`);
    } catch (err) {
      console.log("Não deu erro ;>");
    }
  }

  return (
    <>
      <Tr>
        <Td>{data.id}</Td>
        <Td>{data.name}</Td>
        <Td>{data.extension}</Td>
        <Td>{data.vlSize}</Td>
        <Td>{data.createdAt}</Td>
        <Td>
          <ContainerImage>
            <div></div>
            <DivImage1 onClick={openModalImage}>
              <EyeIcon />
            </DivImage1>
            <DivImage2 onClick={() => removeImages()}>
              <DeleteIcon />
            </DivImage2>
            <div></div>
          </ContainerImage>
        </Td>
      </Tr>
      <Modal
        isOpen={modalImageIsOpen}
        onRequestClose={closeModalImage}
        style={customStyles}
      >
        <ModalTitle>Visualizar imagem</ModalTitle>
        <ContainerIconModal>
        <img src={`data:image/png;base64, ${data.data}`} />
        </ContainerIconModal>
        <ContainerButtomModal>
          <ButtonModalCancel onClick={closeModalImage}>
            Fechar
          </ButtonModalCancel>
        </ContainerButtomModal>
      </Modal>
    </>
  );
}
