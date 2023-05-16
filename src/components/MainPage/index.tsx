import {
  Container,
  Navbar,
  DivCloseSession,
  TitleDivCloseSession,
  TitleNavBar,
  HeaderTitleChange,
  DivIconsChangeMode,
  ButtonImages,
  ContainerTitle,
  TitleDiv,
  ButtonEnter,
  DivButtonUpload,
  ModalTitle,
  ContainerIconModal,
  ContainerButtomModal,
  ButtonModal,
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

import { ReactComponent as ImageIcon } from "../../assets/images/ImageIcon.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/MenuIcon.svg";
import { ReactComponent as UploadIcon } from "../../assets/images/UploadIcon.svg";
import { useState, useContext, } from "react";
import { useDropzone } from "react-dropzone";
import Modal from "react-modal";

import TableImages from "../TableImages";
import CarrouselComponent from "../CarrouselComponent";
import { api } from "../../services/api";
import { UserContext } from "../../hooks/UserContext";

export default function MainPage() {
  const [carrouselIsOpen, setCarrouselIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { user } =
    useContext(UserContext)
  

  const { acceptedFiles, getRootProps, getInputProps } =
    useDropzone({
      maxFiles: 1,
      accept: {
        "image/jpeg" : [".jpeg", ".png", ".svg"],
      },
    });

  const files =  acceptedFiles.map(file => file);
  console.log(user)

  // userId,
  //     name: data.originalname,
  //     nmStored: data.filename,
  //     vlSize: data.size / 1000,
  //     extension: data.mimetype,

  async function sendImage() {
      try {
        const { data } = await api.post("/image/upload", {
          "userId": user.token,
          "name": files[0].name,
	        "nmStored": "image",
	        "vlSize": files[0].size / 1000,
	        "extension": ".svg",
        });
        return data;
      } catch (err) {
        return alert(err);
      }
    } 


  function handleIsOpen(nome: boolean) {
    setCarrouselIsOpen(nome);
  }

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  return (
    <Container>
      <Navbar>
        <TitleNavBar>GALLERY</TitleNavBar>
        <DivCloseSession>
          <TitleDivCloseSession>Encerrar sessão</TitleDivCloseSession>
        </DivCloseSession>
      </Navbar>
      <ContainerTitle>
        <TitleDiv>
          <HeaderTitleChange>
            {carrouselIsOpen ? "Carrosel" : "Tabela"}
          </HeaderTitleChange>
        </TitleDiv>
        <DivIconsChangeMode>
          <ButtonImages
            isselected={carrouselIsOpen}
            onClick={() => handleIsOpen(true)}
          >
            <ImageIcon />
          </ButtonImages>
          <ButtonImages
            isselected={!carrouselIsOpen}
            onClick={() => handleIsOpen(false)}
          >
            <MenuIcon />
          </ButtonImages>
          <p>
            {carrouselIsOpen
              ? "*Obs: Botão Toggle para mudar de carrossel para tabela"
              : "*Obs: Botão Toggle para mudar de tabela para carrosel"}
          </p>
        </DivIconsChangeMode>
      </ContainerTitle>
      <DivButtonUpload onClick={openModal}>
        {carrouselIsOpen ? "" : <ButtonEnter>Upload de imagem</ButtonEnter>}
      </DivButtonUpload>
      {carrouselIsOpen ? <CarrouselComponent /> : <TableImages />}
      <Modal
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ModalTitle>Upload de imagem</ModalTitle>
        <form onSubmit={sendImage}>
        <ContainerIconModal {...getRootProps({className: "dropzone"})}>
          <input {...getInputProps()} />
          <UploadIcon />
        </ContainerIconModal>
        <ContainerButtomModal>
          <ButtonModal onClick={sendImage}>Cadastrar</ButtonModal>
          
          <ButtonModalCancel onClick={closeModal}>Cancelar</ButtonModalCancel>
        </ContainerButtomModal>
        </form>
      </Modal>
    </Container>
  );
}
