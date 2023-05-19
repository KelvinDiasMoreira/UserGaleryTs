import styled from "styled-components";

export const Container = styled.div`
  justify-content: center;
`;

export const Table = styled.table`
  border: 0.1rem solid #a8a8b3;
  border-collapse: collapse;
  margin: auto;
  background-color: #e4e4e4;
`;

export const Th = styled.th`
  padding: 0.5rem;
  text-align: center;
  width: 12rem;
  border: 0.1rem solid #a8a8b3;
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
