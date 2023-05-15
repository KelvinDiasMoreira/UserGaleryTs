import { UserContext } from "../../hooks/UserContext";
import LoginLabel from "../LoginLabel/index";
import  MainPage  from "../MainPage";
import { ModalRegister } from "../ModalRegister";

import { useContext } from "react";

function App() {
  const { isLogged, modalIsOpen, name, registerComplete } =
    useContext(UserContext);

  if (isLogged || registerComplete) {
    return <h1>Bem vindo {name} </h1>;
  }
  if (modalIsOpen) {
    return <ModalRegister />;
  }
    return <MainPage />
}

export default App;
