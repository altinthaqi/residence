import { Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import r1 from "../../assets/img/residence1.jpg";
import r2 from "../../assets/img/residence2.jpg";
import r3 from "../../assets/img/residence3.jpg";
import Post from "./Post";

function LatestPosts() {
  return (
    <>
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
          <Post
            img={r1}
            residenceType="BANESE"
            description="Për ty që vlerësonë hapësirën, residencë me stil modern
              Californian."
            time="22 HOURS AGO"
          />
          <Post
            img={r2}
            residenceType="VILLE"
            description="Villë e dizajnuar nga Frank Lloyd Wright, bëhu një me natyrën."
            time="4 DAYS AGO"
          />
          <Post
            img={r3}
            residenceType="SHTEPI"
            description="Shtëpi klasike me qendrueshmëri të lartë, me një oborr të
              jashtëzakonshëm."
            time="22 HOURS AGO"
          />
        </SimpleGrid>
      </Container>
    </>
  );
}

export default LatestPosts;
