import { Container, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

function Characteristics({ rooms, residenceSize, price }) {
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
            <Td>{residenceSize}m2</Td>
            <Td>{rooms} dhoma</Td>
            <Td isNumeric>{price}&euro;</Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
}

export default Characteristics;
