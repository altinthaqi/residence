import { Box, Text } from "@chakra-ui/react";
import React from "react";

function ProfileInfo({ topic, content }) {
  return (
    <Text my={5} fontWeight="medium">
      <Box color="gray.400" fontWeight="normal" as="span">
        {topic}:
      </Box>{" "}
      {content}
    </Text>
  );
}

export default ProfileInfo;
