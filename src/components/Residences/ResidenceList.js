import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ResidenceItem from "./ResidenceItem";

const residenceItemProps = {
  title: "Apartament Shtepiak Familjare",
  city: "Peje",
  residenceType: "Banese",
  rooms: "2",
  price: "220",
};

function ResidenceList() {
  return (
    <Container maxW="container.xl" my={10}>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
        <ResidenceItem {...residenceItemProps} />
        <ResidenceItem {...residenceItemProps} />
        <ResidenceItem {...residenceItemProps} />
        <ResidenceItem {...residenceItemProps} />
        <ResidenceItem {...residenceItemProps} />
        <ResidenceItem {...residenceItemProps} />
        <ResidenceItem {...residenceItemProps} />
      </SimpleGrid>
    </Container>
  );
}

export default ResidenceList;