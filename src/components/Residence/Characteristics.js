import { Container, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

function Characteristics() {
  return (
    <Container mb={20}>
      <Table variant="striped">
        <Thead>
          <Tr>
            <Th>Hapësira</Th>
            <Th>Dhoma Gjumi</Th>
            <Th isNumeric>Cmimi</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>74m2</Td>
            <Td>2 dhoma</Td>
            <Td isNumeric>250&euro;</Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
}

export default Characteristics;
