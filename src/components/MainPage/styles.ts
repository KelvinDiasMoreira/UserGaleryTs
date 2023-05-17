import styled from "styled-components";

interface Props {
  isselected: boolean;
}

export const Container = styled.div`
  height: 100vh;
`;
export const TitleNavBar = styled.h1`
  font-size: 2rem;
  color: #a8a8b3;
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 1rem 2rem 3rem 2rem;
`;

export const DivCloseSession = styled.div`
  background-color: #dbdcdd;
  padding: 1rem;
  width: 17rem;
  border-radius: 0.3rem;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const TitleDivCloseSession = styled.h2`
  text-align: center;
  color: #737380;
  font-size: 1.5rem;
`;
export const TitleDiv = styled.div`
  text-align: center;
  flex-grow: 1;
  justify-content: center;
  margin-left: 10rem;
`;
export const ContainerTitle = styled.div`
  display: flex;
`;
export const HeaderTitleChange = styled.h1`
  color: #737380;
  text-align: center;
  font-size: 2rem;
  margin-left: 9rem;
`;

export const DivIconsChangeMode = styled.div`
  margin-bottom: 3rem;
  margin-right: 2rem;
  text-align: end;
  p {
    color: #f63f60;
    font-weight: 700;
    text-align: end;
    font-size: 0.6rem;
  }
`;

export const ButtonImages = styled.button<Props>`
  width: 4rem;
  height: auto;
  cursor: pointer;
  transition: 0.5s;
  align-self: flex-end;
  ${({ isselected }) => isselected ? "background-color: grey;" : "background-color: ;"};
  &:hover {
    filter: brightness(0.8);
  }
  svg {
    width: 2.2rem;
    height: auto;
  }
`;
export const DivButtonUpload = styled.div`
  display: flex;
  justify-content: end;
  margin: 0rem 2rem 1.5rem 0rem;
`;
export const ButtonEnter = styled.button`
  width: 17rem;
  font-weight: 700;
  color: #fefefe;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #008ffb;
  transition: 0.5s;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const ModalTitle = styled.h2`
  text-align: start;
  color: #737380;
`;

export const ContainerIconModal = styled.div`
  cursor: pointer;
  margin: 5rem 10rem 3rem 10rem;
  border-style: dashed;
  border-color: #008ffb;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    fill: #008ffb;
  }
`;

export const ContainerButtomModal = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
`;

export const ButtonModal = styled.button`
  width: 10rem;
  font-weight: 700;
  color: #fefefe;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  background-color: #008ffb;
  transition: 0.5s;
  &:hover {
    filter: brightness(0.8);
  }
`;

export const ButtonModalCancel = styled.button`
  width: 10rem;
  font-weight: 700;
  color: #fefefe;
  background-color: #7d7d7d;
  font-size: 1.2rem;
  padding: 1rem;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    filter: brightness(0.8);
  }
`;
