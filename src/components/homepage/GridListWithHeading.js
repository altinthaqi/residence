import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";

import { AiOutlineCheck } from "react-icons/ai";
import { functionalityData } from "../../data/aboutData";

export default function GridListWithHeading() {
  return (
    <Box my="100px" p={4}>
      <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
        <Heading fontSize={"3xl"}>Funksionaliteti i Residence.com</Heading>
        <Text color={"gray.600"} fontSize={"xl"}>
          Në residence.com mund të bëni shumë gjëra që të ngrisin mundësinë për
          të gjetur ose ofruar vendbanimin e juaj. Më poshtë do ti tregojmë
          hapat e parë që duhet të ndërmerrni.
        </Text>
      </Stack>

      <Container maxW={"6xl"} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {functionalityData &&
            functionalityData?.map((feature) => (
              <HStack key={feature.id} align={"top"}>
                <Box color={"green.400"} px={2}>
                  <Icon as={AiOutlineCheck} />
                </Box>
                <VStack align={"start"}>
                  <Text fontWeight={600}>{feature.title}</Text>
                  <Text color={"gray.600"}>{feature.text}</Text>
                </VStack>
              </HStack>
            ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
