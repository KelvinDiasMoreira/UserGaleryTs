import {
  Container,
  Image,
  ContainerLogin,
  TitleLogin,
  InputUser,
  InputPassword,
  ButtonEnter,
} from "./styles";

import { ChangeEvent, useContext, useEffect, useState } from "react";

import image from "../../assets/images/image.jpg";
import { UserContext } from "../../hooks/UserContext";
import { api } from "../../services/api";

export default function LoginLabel() {
  // const { isLogged, registerComponent, registerComplete } = useContext(UserContext);
  const {
    setRegisterComponent,
    setIsLogged,
    setUser,
  } = useContext(UserContext);

  const [login, setLogin] = useState({
    name: '',
    password: ''
  })
  
    function test(event: ChangeEvent<HTMLInputElement>) {
      const {name, value} = event.target
  
      setLogin(prevState => ({
        ...prevState,
       [name]: value
      }))
    }

  async function sendNameAndPasswordAPI() {
    if (login.name && login.password.trim()) {
      try {
        const { data } = await api.post("/user/login", {
          login: login.name,
          password: login.password,
        });
        setIsLogged(true);
        localStorage.setItem("token", data.token);
        setUser(data)
      } catch (err : any) {
        return alert(err);
      }
    } else {
      return alert("Favor preencher os campos");
    }
  }

  useEffect(()=>{
    console.log(login);
  
  }, [login])

  return (
    <Container>
      <Image src={image} />
      <ContainerLogin>
        <TitleLogin>Entrar</TitleLogin>
        <InputUser
          name="name"
          placeholder="Digite seu usuário"
          onChange={test}
          type="text"
          required
        />
        <InputPassword
          name="password"
          placeholder="Digite sua senha"
          onChange={test}
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
