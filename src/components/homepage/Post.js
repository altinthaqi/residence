import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

function Post({ img, residenceType, time, description }) {
  return (
    <Box>
      <Image src={img}></Image>
      <Box my={3}>
        <HStack color="gray.400">
          <Text>{residenceType}</Text>
          <Text>/</Text>
          <Text>{time}</Text>
        </HStack>
      </Box>
      <Text fontSize="xl">{description}</Text>
    </Box>
  );
}

export default Post;
