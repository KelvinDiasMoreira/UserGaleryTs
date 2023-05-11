import { useState } from "react"



interface Log {
    name: any
    password: any
}



export function isloggedContext( name: Log, password : Log){
    const [islogged, setIsLogged] = useState<boolean>(false);

    const logged = () => {
        if (name && password) {
          return setIsLogged(true);
        } else {
          return alert("Favor preencher os campos");
        }
      };


    return [logged, islogged];
}