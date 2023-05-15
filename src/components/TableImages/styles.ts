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
