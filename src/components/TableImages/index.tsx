import {
  Container,
  Table,
  Td,
  Th,
  Tr,
  DivImage1,
  DivImage2,
  ContainerImage,
} from "./styles";
import { ReactComponent as DeleteIcon } from "../../assets/images/DeleteIcon.svg";
import { ReactComponent as EyeIcon } from "../../assets/images/EyeIcon.svg";
export default function TableImages() {
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
          <Tr>
            <Td>1</Td>
            <Td>Teste</Td>
            <Td>JPEG</Td>
            <Td>100 KB</Td>
            <Td>01/01/1050</Td>
            <Td>
              <ContainerImage>
                <div></div>
                <DivImage1>
                  <EyeIcon />
                </DivImage1>
                <DivImage2>
                  <DeleteIcon />
                </DivImage2>
                <div></div>
              </ContainerImage>
            </Td>
          </Tr>
        </tbody>
      </Table>
    </Container>
  );
}
