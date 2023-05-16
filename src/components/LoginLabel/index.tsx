import {
  Container,
  Image,
  ContainerLogin,
  TitleLogin,
  InputUser,
  InputPassword,
  ButtonEnter,
} from "./styles";

import { useContext } from "react";

import image from "../../assets/images/image.jpg";
import { UserContext } from "../../hooks/UserContext";
import { api } from "../../services/api";

export default function LoginLabel() {
  const {
    setRegisterComponent,
    setIsLogged,
    setName,
    setPassword,
    setUser,
    name,
    password,
  } = useContext(UserContext);

  async function sendNameAndPasswordAPI() {
    if (name && password !== "") {
      try {
        const { data } = await api.post("/user/login", {
          login: name,
          password: password,
        });
        setIsLogged(true);
        setUser(data)
      } catch (err) {
        return alert("Usuário ou senha incorretos");
      }
    } else {
      return alert("Favor preencher os campos");
    }
  }

  return (
    <Container>
      <Image src={image} />
      <ContainerLogin>
        <TitleLogin>Entrar</TitleLogin>
        <InputUser
          placeholder="Digite seu usuário"
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
        />
        <InputPassword
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        />
        <ButtonEnter onClick={sendNameAndPasswordAPI}>
          Acessar a Plataforma
        </ButtonEnter>
        <ButtonEnter onClick={() => setRegisterComponent(true)}>
          Cadastre-se
        </ButtonEnter>
      </ContainerLogin>
    </Container>
  );
}
