import { Center, Container, Divider, Heading } from "@chakra-ui/react";
import React from "react";
import ResidenceList from "../components/Residences/ResidenceList";
import Banner from "../components/Residence/Banner";
import Characteristics from "../components/Residence/Characteristics";
import Location from "../components/Residence/Location";
import Contact from "../components/Residence/Contact";

function Residence() {
  return (
    <>
      <Banner />

      <Center my={10}>
        <Heading textAlign="center">Apartament Shtepiak Familjare</Heading>
      </Center>

      <Characteristics />

      <Location />

      <Contact />

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
