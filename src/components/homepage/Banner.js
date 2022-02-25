import { Box, Container, Heading, Image } from "@chakra-ui/react";
import React from "react";
import BannerImg from "../../assets/img/banner.png";

function Banner() {
  return (
    <Container position="relative" maxW="container.full">
      <Box>
        <Image
          my={5}
          width="100%"
          height="50vh"
          objectFit="cover"
          src={BannerImg}
        />
        <Heading
          textAlign="center"
          transform="translate(50%, 50%)"
          right="50%"
          bottom="50%"
          position="absolute"
          color="gray.200"
        >
          Gjejë Residencen tënde të re!
        </Heading>
      </Box>
    </Container>
  );
}

export default Banner;
