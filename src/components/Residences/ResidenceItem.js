import {
  Badge,
  Box,
  Flex,
  Image,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function ResidenceItem({
  id,
  img,
  title,
  city,
  residenceType,
  rooms,
  price,
  category_id,
  square_meters,
}) {
  let category = category_id === "1" ? "Banese" : "Shtepi";

  return (
    <Box bg="white" maxW="sm" borderWidth="1px" rounded="lg" shadow="md">
      <Image src={img} alt={title} roundedTop="lg" height={["auto", "330px"]} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" px="2" colorScheme="teal">
            {category}
          </Badge>

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {rooms} Dhoma &bull; {square_meters} m2
          </Box>
        </Box>

        <Box
          fontWeight="semibold"
          as={"h4"}
          lineHeight="tight"
          isTruncated
          my="10px"
          color="teal.600"
          fontSize="21px"
        >
          <NavLink to={`/residences/${id}`}>{title}</NavLink>
        </Box>

        <Text mb="10px" fontSize="14px" color="gray.500">
          Qyteti: {city}
        </Text>

        <Box>
          {price}&euro;
          <Box as="span" color="gray.600" fontSize="sm">
            {" "}
            / muaj
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
