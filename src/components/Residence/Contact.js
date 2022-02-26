import { Box, Container, Divider, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

function Contact() {
  return (
    <Container my={20} p={5} centerContent>
      <Heading my={5} size="lg" fontWeight="medium">
        Kontakt:
      </Heading>
      <Divider />
      <Box>
        <Text my={5} fontSize="18px">
          <Box as="span" fontWeight="medium">
            Pronari:
          </Box>{" "}
          Altin Thaci
        </Text>
        <Text fontSize="18px" my={5}>
          <Box as="span" fontWeight="medium">
            Email:
          </Box>{" "}
          <Link href="mailto:altinthaqi2@gmail.com">altinthaqi2@gmail.com</Link>
        </Text>
        <Text fontSize="18px" my={5}>
          <Box as="span" fontWeight="medium">
            Tel:
          </Box>{" "}
          049111111
        </Text>
      </Box>
    </Container>
  );
}

export default Contact;
