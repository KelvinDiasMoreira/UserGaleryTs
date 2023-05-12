import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;

  name: string;
  setName: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;

  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
  
  nameToRegister: string;
  setNameToRegister: Dispatch<SetStateAction<string>>;
  passwordToRegister: string;
  setPasswordToRegister: Dispatch<SetStateAction<string>>;
  loginToRegister: string;
  setLoginToRegister:  Dispatch<SetStateAction<string>>;

  registerComplete: boolean;
  setRegisterComplete: Dispatch<SetStateAction<boolean>>
};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProps) {
  const [isLogged, setIsLogged] = useState(false);

  const [name, setName] = useState("")
  const [password, setPassword] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [nameToRegister, setNameToRegister] = useState("");
  const [passwordToRegister, setPasswordToRegister] = useState("");
  const [loginToRegister, setLoginToRegister] = useState("");

  const [registerComplete, setRegisterComplete] = useState(false);

  return (
    <UserContext.Provider
      value={{
        isLogged,
        setIsLogged,

        name,
        setName,

        password,
        setPassword,

        modalIsOpen,
        setModalIsOpen,

        nameToRegister,
        setNameToRegister,

        passwordToRegister,
        setPasswordToRegister,

        loginToRegister,
        setLoginToRegister,

        registerComplete,
        setRegisterComplete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
