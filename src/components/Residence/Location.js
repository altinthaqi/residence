import {
  Container,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

function Location({ city, neighborehood, street }) {
  return (
    <Container maxW="container.md" mt={20}>
      <Table variant="striped">
        <TableCaption>Lokacioni ku gjendet residenca</TableCaption>
        <Thead>
          <Tr>
            <Th>Qyteti</Th>
            <Th>Lagjia</Th>
            <Th>Rruga</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>{city}</Td>
            <Td>{neighborehood}</Td>
            <Td>{street}</Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
}

export default Location;
