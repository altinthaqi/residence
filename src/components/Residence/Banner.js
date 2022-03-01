import { Container, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

// import residenceImage from "../../assets/img/apartment1.jpg";

function Banner({ residenceImage }) {
  return (
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
  );
}

export default Banner;
