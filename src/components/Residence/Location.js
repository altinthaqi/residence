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

function Location() {
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
            <Td>Prishtinë</Td>
            <Td>Tophane</Td>
            <Td>Rr. Azem Balija 2</Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
}

export default Location;
