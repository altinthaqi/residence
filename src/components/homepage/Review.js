import { Container, Flex, Image, Text, WrapItem } from "@chakra-ui/react";

const Review = ({ card }) => {
  return (
    <WrapItem borderRadius="15px" boxShadow="md" maxW="350px">
      <Container maxW="container.md" my={4}>
        <Flex direction="row">
          <Image borderRadius="full" boxSize="45px" src={card.profile} mr={4} />

          <Flex direction="column">
            <Flex direction="row">
              <Text textAlign="start" color="gray.500" mr={2}>
                {card.name}
              </Text>
              <Text fontWeight="normal" color="gray.400">
                {card.account}
              </Text>
            </Flex>
            {card.text.map((text) => (
              <Text color="gray.500" fontWeight="normal" my={3}>
                {text}
              </Text>
            ))}
          </Flex>
        </Flex>
      </Container>
    </WrapItem>
  );
};

export default Review;
