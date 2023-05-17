import { useState, useEffect} from "react";
import { api } from "../../services/api";
import ModalUploadImage from "../ModalUploadImage";


import {
  Container,
  Table,
  Th,
} from "./styles";


export default function TableImages() {
  const [images, setImages] = useState<any[]>([]);



  async function getImages() {
    try {
      const { data } = await api.get(`image/`);
      setImages(data);
    } catch (err) {
      throw new Error("Erro na api que pega todas as imagens.");
    }
  }
  useEffect(() => {
    setInterval(() =>{
      getImages();
    }, 5000)
  }, []);

  return (
    <Container>
      <Table>
        <tbody>
          <tr>
            <Th>Id</Th>
            <Th>Nome</Th>
            <Th>Extensão</Th>
            <Th>Tamanho</Th>
            <Th>Data de Criação</Th>
            <Th>Ações</Th>
          </tr>
            {images?.map((index) => {
              return <ModalUploadImage key={index.id} data={index} />;
            })}
        </tbody>
      </Table>
    </Container>
  );
}

