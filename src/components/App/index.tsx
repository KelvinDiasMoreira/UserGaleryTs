import { UserContext } from "../../hooks/UserContext";
import LoginLabel from "../LoginLabel/index";
import MainPage from "../MainPage";
import RegisterComponent from "../RegisterComponent";
import {Routes, Route} from "react-router-dom"

import { useContext } from "react";

function App() {
  return(
    <Routes>
      <Route path="/" element={<LoginLabel />}/>
      <Route path="/register" element={<RegisterComponent />}/>
      <Route path="/mainpage" element={<MainPage />}/>
    </Routes>
  )
}

export default App;

// const { isLogged, registerComponent, registerComplete } =
//   useContext(UserContext);

// if (isLogged || registerComplete) {
//   return <MainPage />;
// }
// if (registerComponent) {
//   return <RegisterComponent />;
// }
// return <LoginLabel />;