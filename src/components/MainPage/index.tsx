import {
  Container,
  Navbar,
  DivCloseSession,
  TitleDivCloseSession,
  TitleNavBar,
  HeaderTitleChange,
  DivIconsChangeMode,
  FirstIcon,
  SecondIcon,
} from "./styles";

export default function MainPage() {
  return (
    <Container>
      <Navbar>
        <TitleNavBar>Gallery</TitleNavBar>
        <h1>
          <DivCloseSession>
            <TitleDivCloseSession>Encerrar sessão</TitleDivCloseSession>
          </DivCloseSession>
        </h1>
      </Navbar>
      <HeaderTitleChange>Carrossel</HeaderTitleChange>
      <DivIconsChangeMode>
        <FirstIcon/>
        <SecondIcon/>
      </DivIconsChangeMode>
    </Container>
  );
}
