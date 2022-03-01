import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function ResidenceItem({
  id,
  img,
  title,
  city,
  residenceType,
  rooms,
  price,
  category_id,
}) {
  return (
    <Box boxShadow="sm">
      <Flex>
        <Image p={2} maxWidth={["180px", "250px"]} src={img} />
        <Box px={2} width="50%">
          <Flex direction="column" justifyContent="space-around" height="100%">
            <Box>
              <Heading
                mb={2}
                fontWeight="medium"
                color="teal.700"
                fontSize={["16px", "21px"]}
              >
                <NavLink to={`/residences/${id}`}>{title}</NavLink>
              </Heading>
              <Text fontSize={["14px", "16px"]}>
                <Box as="span" fontWeight="medium">
                  Qyteti:
                </Box>{" "}
                {city}
              </Text>
              <Text fontSize={["14px", "16px"]}>
                <Box as="span" fontWeight="medium">
                  Tipi:
                </Box>{" "}
                {category_id == 1 ? "Banese" : "Shtepi"}
              </Text>
            </Box>
            <Box>
              <Text fontSize={["14px", "16px"]}>
                <Box as="span" fontWeight="medium">
                  Dhoma:
                </Box>{" "}
                {rooms}
              </Text>
              <Text fontSize={["14px", "16px"]}>
                <Box as="span" fontWeight="medium">
                  Cmimi:
                </Box>{" "}
                {price}&euro;
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}

export default ResidenceItem;
