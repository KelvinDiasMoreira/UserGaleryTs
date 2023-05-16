import {
  ContainerLogin,
  TitleLogin,
  InputUser,
  InputPassword,
  ButtonEnter,
  Container,
} from "./styles";
import { useContext } from "react";
import { UserContext } from "../../hooks/UserContext";
import { api } from "../../services/api";

export default function RegisterComponent() {
  const {
    setRegisterComplete,
    setNameToRegister,
    setPasswordToRegister,
    setLoginToRegister,
    nameToRegister,
    passwordToRegister,
    loginToRegister,
  } = useContext(UserContext);

  async function sendNameAndPasswordToApiToRegister() {
    if (nameToRegister && passwordToRegister && loginToRegister !== "") {
      try {
        const { data } = await api.post("/user/register", {
          login: loginToRegister,
          name: nameToRegister,
          password: passwordToRegister,
        });
        setRegisterComplete(true);
        return data;
      } catch (err) {
        console.log(err);
        return alert("Usuário já cadastrado ou erro no banco ;/");
      }
    } else {
      return alert("Favor preencher os campos");
    }
  }

  return (
    <Container>
      <ContainerLogin>
        <TitleLogin>Cadastre-se</TitleLogin>
        <InputUser
          placeholder="Digite seu login"
          onChange={(e) => setLoginToRegister(e.target.value)}
          type="text"
          required
        />
        <InputUser
          placeholder="Digite seu nome"
          onChange={(e) => setNameToRegister(e.target.value)}
          type="text"
          required
        />
        <InputPassword
          placeholder="Digite sua senha"
          onChange={(e) => setPasswordToRegister(e.target.value)}
          type="password"
          required
        />
        <ButtonEnter onClick={() => sendNameAndPasswordToApiToRegister()}>
          Enviar
        </ButtonEnter>
      </ContainerLogin>
    </Container>
  );
}
