import {Container, Navbar, DivCloseSession, TitleDivCloseSession, TitleNavBar} from "./styles"

export default function MainPage(){
    return(
        <Container>
            <Navbar>
                <TitleNavBar>
                    Gallery
                </TitleNavBar>
                <h1>
                    <DivCloseSession>
                        <TitleDivCloseSession>
                            Encerrar sessão
                        </TitleDivCloseSession>
                    </DivCloseSession>
                </h1>
            </Navbar>
        </Container>
    )
}