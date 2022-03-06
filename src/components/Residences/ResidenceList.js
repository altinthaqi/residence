import {
  Container,
  Flex,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import ResidenceItem from "./ResidenceItem";

function ResidenceList({ residencesData = [] }) {
  console.log(residencesData);
  return (
    <Container maxW="container.xl" my={10}>
      <SimpleGrid columns={[1, 1, 2, 3]}>
        {residencesData &&
          residencesData.length > 0 &&
          residencesData?.map((residence) => (
            <Flex p={50} w="full" alignItems="center" justifyContent="center">
              <ResidenceItem {...residence} />{" "}
            </Flex>
          ))}

        {residencesData &&
          residencesData?.length === 0 &&
          "There isn't any residences in the DB!"}
      </SimpleGrid>
    </Container>
  );
}

export default ResidenceList;
