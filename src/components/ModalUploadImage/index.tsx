import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../hooks/UserContext";
import { api } from "../../services/api";
import moment from "moment";

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
  Tr,
  Td,
  DivImage1,
  DivImage2,
  ButtonModalCancel,
} from "./styles";
interface Props {
  data: dataImage;
}

interface dataImage {
  createdAt: string;
  extension: string;
  id: number;
  name: string;
  vlSize: number;
}

export default function ModalUploadImage({ data }: Props) {
  const { setModalImageIsOpen, modalImageIsOpen, getImagesModal } = useContext(UserContext);

  function closeModalImage() {
    setModalImageIsOpen(false);
  }

  function openModalImage() {
    setModalImageIsOpen(true);
  }

  function formatName() {
    let string = data.name.indexOf("_");
    return data.name.slice(0, string);
  }

  async function removeImages() {
    try {
      await api.delete(`image/${data.id}`);
    } catch (err) {
      console.log("");
    }
  }

  return (
    <>
      <Tr>
        <Td>{data.id}</Td>
        <Td>{formatName()}</Td>
        <Td>{data.extension}</Td>
        <Td>{data.vlSize * 1000} KB</Td>
        <Td>{moment.utc(data.createdAt).format("DD/MM/YYYY")}</Td>
        <Td>
          <ContainerImage>
            <div></div>
            <DivImage1
              onClick={() => {
                openModalImage();
                getImagesModal(data.id);
              }}
            >
              <EyeIcon />
            </DivImage1>
            <DivImage2 onClick={() => removeImages()}>
              <DeleteIcon />
            </DivImage2>
            <div></div>
          </ContainerImage>
        </Td>
      </Tr>

    </>
  );
}
