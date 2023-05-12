import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #d6ecdf;
  gap: 2rem;
  width: 50%;
  height: 50%;
  border-radius: 1rem;

`;

export const TitleLogin = styled.h1`
  font-size: 3rem;
  color: #393939;
`;

export const InputUser = styled.input`
  color: #393939;
  cursor: text;
  outline: 0;
  border-style: solid;
  font-weight: 700;
  font-size: 0.8rem;
  border-radius: 8px;
  width: 300px;
  padding: 0.6rem;
  border-color: #a8a8b3;
  transition: 500ms ease-in-out;
  border-width: thin;
  &:hover,
  :valid {
    border-color: #008ffb;
  }
`;

export const InputPassword = styled.input`
  width: 300px;
  color: #393939;
  cursor: text;
  outline: 0;
  border-style: solid;
  border-width: thin;
  font-weight: 700;
  font-size: 0.8rem;
  border-radius: 8px;
  padding: 0.6rem;
  border-color: #a8a8b3;
  transition: 500ms ease-in-out;
  &:hover,
  :valid {
    border-color: #008ffb;
  }
`;

export const ButtonEnter = styled.button`
  font-weight: 700;
  color: #fefefe;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #008ffb;
  width: 300px;
  transition: 1s;
  &:hover{
    background-color: #19274e;
  }
`;
