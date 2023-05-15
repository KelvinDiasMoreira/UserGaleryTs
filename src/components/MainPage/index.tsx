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
} from "./styles";

import { ReactComponent as ImageIcon } from "../../assets/images/ImageIcon.svg";
import { ReactComponent as MenuIcon } from "../../assets/images/MenuIcon.svg";
import { useState } from "react";

import TableImages from "../TableImages";
import CarrouselComponent from "../CarrouselComponent";

export default function MainPage() {
  const [carrouselIsOpen, setCarrouselIsOpen] = useState(false);
  console.log("teste", carrouselIsOpen);

  function handleIsOpen(nome: boolean) {
    setCarrouselIsOpen(nome);
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
          <HeaderTitleChange>Tabela</HeaderTitleChange>
        </TitleDiv>
        <DivIconsChangeMode>
          <ButtonImages isSelected={carrouselIsOpen} onClick={()=> handleIsOpen(true)}>
            <ImageIcon />
          </ButtonImages>
          <ButtonImages isSelected={!carrouselIsOpen} onClick={()=> handleIsOpen(false)}>
            <MenuIcon />
          </ButtonImages>
        </DivIconsChangeMode>
      </ContainerTitle>
      {carrouselIsOpen? <CarrouselComponent /> : <TableImages />}
    </Container>
  );
}
