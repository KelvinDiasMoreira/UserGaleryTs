import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        box-sizing: border-box;
        padding: 0;
    }

    body{
        height: 100vh;
        font-family: 'Montserrat', sans-serif;
    }
`;
