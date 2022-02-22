import React from "react";
import { Container, Flex, HStack, Spacer, Text } from "@chakra-ui/react";

function Menu() {
  return (
    <Container
      maxW="container.full"
      boxShadow="sm"
      p="6"
      rounded="md"
      bg="white"
      position="sticky"
      top="0"
      background="white"
      zIndex={100}
    >
      <Flex>
        <Text fontWeight="semibold" fontSize="xl">
          residence.com
        </Text>
        <Spacer />
        <HStack spacing={5}>
          <Text fontWeight="medium" fontSize="lg">
            ofro
          </Text>
          <Text fontWeight="medium" fontSize="lg">
            kyqu
          </Text>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Menu;
