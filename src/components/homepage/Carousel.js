import React, { useState } from "react";
import { Text, Box, Flex, Image, Container, Heading } from "@chakra-ui/react";
import s1 from "../../assets/img/slider1.jpg";
import s2 from "../../assets/img/slider2.jpg";
import s3 from "../../assets/img/slider3.jpg";
import s4 from "../../assets/img/slider4.jpg";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: "white",
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: "gray",
    },
  };

  const slides = [
    {
      img: s1,
    },
    {
      img: s2,
    },
    {
      img: s3,
    },
    {
      img: s4,
    },
  ];
  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  return (
    <Container maxW="container.full" background="#d7d7d7">
      <Heading
        size="2xl"
        fontWeight="medium"
        textAlign="center"
        color="blackAlpha"
        pt={20}
      >
        Revista Jonë
      </Heading>
      <Text py={2} fontSize="xl" color="blackAlpha.600" textAlign="center">
        Gjëra të mira, gjëra të bukura!
      </Text>
      <Container p={10} maxW="container.md">
        <Flex w="full" pos="relative" overflow="hidden">
          <Flex w="full" {...carouselStyle}>
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} boxSize="full" flex="none">
                <Image src={slide.img} boxSize="full" backgroundSize="cover" />
              </Box>
            ))}
          </Flex>

          <Text {...arrowStyles} left="0" onClick={prevSlide}>
            &#10094;
          </Text>

          <Text {...arrowStyles} right="0" onClick={nextSlide}>
            &#10095;
          </Text>
        </Flex>
      </Container>
    </Container>
  );
}
