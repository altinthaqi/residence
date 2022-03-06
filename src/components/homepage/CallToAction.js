import { Box, Button, Container, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function CallToAction({ ctaText, btnText, contentPosition, path }) {
  let alignContent;
  if (contentPosition === "left") {
    alignContent = "flex-start";
  } else {
    alignContent = "flex-end";
  }
  return (
    <Container
      py={10}
      maxW="container.full"
      background="gray.50"
      boxShadow="md"
    >
      <Container maxW="container.xl">
        <Box alignSelf="flex-start" alignItems={alignContent}>
          <VStack alignItems={alignContent}>
            <Heading
              mb={5}
              size="xl"
              fontWeight="medium"
              color="blackAlpha.800"
            >
              {ctaText}
            </Heading>
            <Button
              as={NavLink}
              to={`/${path}`}
              size="lg"
              colorScheme="teal"
              color="white"
            >
              {btnText}
            </Button>
          </VStack>
        </Box>
      </Container>
    </Container>
  );
}

export default CallToAction;
