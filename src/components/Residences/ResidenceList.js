import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ResidenceItem from "./ResidenceItem";

function ResidenceList({ residencesData }) {
  return (
    <Container maxW="container.xl" my={10}>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
        {residencesData?.map((residence) => (
          <ResidenceItem {...residence} />
        ))}

        {residencesData?.length === 0 &&
          "There isn't any residences in the DB!"}
      </SimpleGrid>
    </Container>
  );
}

export default ResidenceList;
