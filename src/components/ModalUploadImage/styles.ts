import styled from "styled-components";

export const Td = styled.td`
  color: #7d7d7d;
  border: 0.1rem solid #a8a8b3;
  padding: 0.8rem;
  text-align: center;
  width: 12rem;
`;

export const Tr = styled.tr`
  background-color: #f0f0f0;
`;
export const ContainerImage = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const DivImage1 = styled.div`
  background-color: #008ffb;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 2.5rem;
  height: auto;

  svg {
    height: 1.5rem;
    width: auto;
    path {
      fill: white;
    }
  }
  &:hover {
    filter: brightness(0.8);
  }
`;
export const DivImage2 = styled.div`
  background-color: #f63f60;
  border-radius: 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 2.5rem;
  height: auto;

  svg {
    height: 1.2rem;
    width: auto;
    path {
      fill: white;
    }
  }
  &:hover {
    filter: brightness(0.8);
  }
`;

export const ModalTitle = styled.h2`
  text-align: start;
  color: #737380;
`;

export const ContainerIconModal = styled.div`
  margin: 5rem 10rem 3rem 10rem;
  border-color: #008ffb;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 600px;
    height: 270px;
    object-fit: cover;
  }
`;

export const ContainerButtomModal = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
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
