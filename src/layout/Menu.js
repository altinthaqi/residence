import React from "react";
import { Container, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

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
          <NavLink to="/">residence.com</NavLink>
        </Text>
        <Spacer />
        <HStack spacing={5}>
          <Text fontWeight="medium" fontSize="lg">
            <NavLink to="/residences">kerko</NavLink>
          </Text>
          <Text fontWeight="medium" fontSize="lg">
            ofro
          </Text>
          <Text color="teal" fontWeight="medium" fontSize="lg">
            <NavLink to="/kyqu">kyqu</NavLink>
          </Text>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Menu;
