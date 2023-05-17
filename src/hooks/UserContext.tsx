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

// interface User{
//   login: string,
//   name: string,
//   token: string,
// }

type UserContextType = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;

  name: string;
  setName: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;

  registerComponent: boolean;
  setRegisterComponent: Dispatch<SetStateAction<boolean>>;
  
  nameToRegister: string;
  setNameToRegister: Dispatch<SetStateAction<string>>;
  passwordToRegister: string;
  setPasswordToRegister: Dispatch<SetStateAction<string>>;
  loginToRegister: string;
  setLoginToRegister:  Dispatch<SetStateAction<string>>;

  registerComplete: boolean;
  setRegisterComplete: Dispatch<SetStateAction<boolean>>;

  user: any;
  setUser: Dispatch<SetStateAction<any>>;
  userId: any;
  setUserId: Dispatch<SetStateAction<any>>

  modalImageIsOpen: boolean,
  setModalImageIsOpen: Dispatch<SetStateAction<boolean>>;

};

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProps) {
  const [isLogged, setIsLogged] = useState(false);

  const [name, setName] = useState("")
  const [password, setPassword] = useState("");

  const [registerComponent, setRegisterComponent] = useState(false);

  const [nameToRegister, setNameToRegister] = useState("");
  const [passwordToRegister, setPasswordToRegister] = useState("");
  const [loginToRegister, setLoginToRegister] = useState("");

  const [registerComplete, setRegisterComplete] = useState(false);

  const [user, setUser] = useState();
  const [userId, setUserId] = useState();

  const [modalImageIsOpen, setModalImageIsOpen] = useState(false);


  return (
    <UserContext.Provider
      value={{
        isLogged,
        setIsLogged,

        name,
        setName,

        password,
        setPassword,

        registerComponent,
        setRegisterComponent,

        nameToRegister,
        setNameToRegister,

        passwordToRegister,
        setPasswordToRegister,

        loginToRegister,
        setLoginToRegister,

        registerComplete,
        setRegisterComplete,

        user,
        setUser,

        userId,
        setUserId,

        modalImageIsOpen,
        setModalImageIsOpen,

      }}
    >
      {children}
    </UserContext.Provider>
  );
}
