import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  Button,
  VStack,
  Spacer,
  Divider,
} from "@chakra-ui/react";

import React from "react";
import { Image } from "@chakra-ui/react";
import BannerImg from "../assets/img/banner.png";
import r1 from "../assets/img/residence1.jpg";
import r2 from "../assets/img/residence2.jpg";
import r3 from "../assets/img/residence3.jpg";

import cta from "../assets/img/cta.png";
import Reviews from "../components/homepage/Reviews";

function Homepage() {
  return (
    <>
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
            Gjejë Residencën tënde të re!
          </Heading>
        </Box>
      </Container>

      <Container maxW="container.md" centerContent my={20}>
        <Heading textAlign="center">
          Aty ku thjeshtësia prekë funksionalitetin
        </Heading>
        <Text textAlign="center" fontSize="2xl">
          qkado që kërkoni, e gjeni në Residencë.
        </Text>
      </Container>

      <Container maxW="container.xl" my={20}>
        <SimpleGrid columns={[1, 2, 3]} spacing={10}>
          <Box>
            <Image src={r1}></Image>
            <Box my={3}>
              <HStack color="gray.400">
                <Text>SHTEPI</Text>
                <Text>/</Text>
                <Text>22 HOURS AGO</Text>
              </HStack>
            </Box>
            <Text fontSize="xl">
              Për ty që vlerësonë hapësirën, residencë me stil modern
              Californian.
            </Text>
          </Box>

          <Box>
            <Image src={r2}></Image>
            <Box my={3}>
              <HStack color="gray.400">
                <Text>VILLE</Text>
                <Text>/</Text>
                <Text>4 DAYS AGO</Text>
              </HStack>
            </Box>
            <Text fontSize="xl">
              Villë e dizajnuar nga Frank Lloyd Wright, bëhu një me natyrën.
            </Text>
          </Box>

          <Box>
            <Image src={r3}></Image>
            <Box my={3}>
              <HStack color="gray.400">
                <Text>SHTEPI</Text>
                <Text>/</Text>
                <Text>22 HOURS AGO</Text>
              </HStack>
            </Box>
            <Text fontSize="xl">
              Shtëpi klasike me qendrueshmëri të lartë, me një oborr të
              jashtëzakonshëm.
            </Text>
          </Box>
        </SimpleGrid>
      </Container>

      <Container maxW="container.full" background="gray.400">
        <Container maxW="container.xl" py={10}>
          <Flex direction="column">
            <Box alignSelf="flex-start" alignItems="flex-start">
              <VStack alignItems="flex-start">
                <Heading
                  my={2}
                  size="lg"
                  fontWeight="medium"
                  color="blackAlpha.800"
                >
                  Nuk ke llogari?
                </Heading>
                <Button size="lg" colorScheme="blue" color="white">
                  Regjistrohu
                </Button>
              </VStack>
            </Box>

            <Box alignSelf="flex-end">
              <VStack alignItems="flex-end">
                <Heading
                  my={2}
                  size="lg"
                  fontWeight="medium"
                  color="blackAlpha.800"
                >
                  Je duke kerkuar residence?
                </Heading>
                <Button size="lg" colorScheme="blue" color="white">
                  Kerko
                </Button>
              </VStack>
            </Box>
          </Flex>
        </Container>
      </Container>

      <Reviews />
    </>
  );
}

export default Homepage;
