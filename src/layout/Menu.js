import React, { useContext } from "react";
import { Container, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const logoutApi = "http://localhost/residence/src/apis/logout.php";

function Menu() {
  const { currentUserData, setCurrentUserData } = useContext(UserContext);

  const handleLogOut = () => {
    setCurrentUserData({ userInfo: [], isLoggedIn: false });

    axios
      .get(logoutApi)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <Container
      maxW="container.full"
      boxShadow="sm"
      px="6"
      py="4"
      rounded="md"
      bg="white"
      position="sticky"
      top="0"
      background="white"
      zIndex={100}
    >
      <Flex>
        <Text fontWeight="semibold" fontSize="xl">
          <NavLink to="/">residence.com</NavLink>
        </Text>
        <Spacer />
        <HStack spacing={5}>
          <Text fontWeight="medium" fontSize="lg">
            <NavLink to="/residences">kerko</NavLink>
          </Text>
          <Text fontWeight="medium" fontSize="lg">
            <NavLink to="/ofro">ofro</NavLink>
          </Text>
          <Text color="teal" fontWeight="medium" fontSize="lg">
            {!currentUserData.isLoggedIn && <NavLink to="/kyqu">kyqu</NavLink>}
            {currentUserData.isLoggedIn && (
              <NavLink onClick={handleLogOut} to="/">
                qkyqu
              </NavLink>
            )}
          </Text>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Menu;
