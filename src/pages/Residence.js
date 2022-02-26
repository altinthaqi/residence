import {
  Box,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Flex,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import residenceImage from "../assets/img/apartment1.jpg";
import ResidenceList from "../components/Residences/ResidenceList";
import { IoIosArrowBack } from "react-icons/io";

import { NavLink } from "react-router-dom";

function Residence() {
  return (
    <>
      <Container position="relative" maxW="container.full">
        <Image
          my={5}
          width="100%"
          height="30vh"
          objectFit="cover"
          src={residenceImage}
        />
        <NavLink to="/residences">
          <Flex
            position="absolute"
            top="2"
            left="6"
            bg="white"
            border="2px"
            borderColor="gray.200"
            justify="center"
            align="center"
            cursor="pointer"
            p={2}
          >
            <IoIosArrowBack style={{ color: "gray" }} />
          </Flex>
        </NavLink>
      </Container>

      <Center my={10}>
        <Heading textAlign="center">Apartament Shtepiak Familjare</Heading>
      </Center>

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

      <Container maxW="container.md" mt={20}>
        <Table variant="striped">
          <TableCaption>Lokacioni ku gjendet residenca</TableCaption>
          <Thead>
            <Tr>
              <Th>Qyteti</Th>
              <Th>Lagjia</Th>
              <Th>Rruga</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Prishtinë</Td>
              <Td>Tophane</Td>
              <Td>Rr. Azem Balija 2</Td>
            </Tr>
          </Tbody>
        </Table>
      </Container>

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
            <Link href="mailto:altinthaqi2@gmail.com">
              altinthaqi2@gmail.com
            </Link>
          </Text>
          <Text fontSize="18px" my={5}>
            <Box as="span" fontWeight="medium">
              Tel:
            </Box>{" "}
            049111111
          </Text>
        </Box>
      </Container>

      <Container maxW="container.xl" my={20}>
        <Heading my={5} size="lg" fontWeight="medium">
          Të ngjajshme:
        </Heading>
        <Divider />

        <ResidenceList />
      </Container>
    </>
  );
}

export default Residence;
