import {
  Container,
  Image,
  ContainerLogin,
  TitleLogin,
  InputUser,
  InputPassword,
  ButtonEnter,
} from "./styles";

import { useState } from "react";
import { isloggedContext } from "../../hooks/isloggedContext";

import image from "../../assets/images/image.jpg";

export default function LoginLabel() {
  const [name, setName] = useState<any>(false);
  const [password, setPassword] = useState<any>(false);

    const [logged] = isloggedContext(name, password)

  return (
    <Container>
      <Image src={image} />
      <ContainerLogin>
        <TitleLogin>Entrar</TitleLogin>
        <InputUser
          placeholder="Digite seu usuário"
          onChange={() => setName(true)}
          type="text"
          required
        />
        <InputPassword
          placeholder="Digite sua senha"
          onChange={() => setPassword(true)}
          type="password"
          required
        />
        <ButtonEnter onClick={() => ""}>Acessar a Plataforma</ButtonEnter>
      </ContainerLogin>
    </Container>
  );
}
