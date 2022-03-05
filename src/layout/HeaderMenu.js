import React, { useContext } from "react";
import {
  Avatar,
  Container,
  Flex,
  HStack,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  Menu,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const logoutApi = "http://localhost/residence/src/apis/logout.php";

function HeaderMenu() {
  const { currentUserData, setCurrentUserData } = useContext(UserContext);
  let navigate = useNavigate();

  const handleLogOut = () => {
    setCurrentUserData({ userInfo: [], isLoggedIn: false });

    axios
      .get(logoutApi)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));

    navigate("/kyqu");
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
              <Menu>
                <MenuButton colorScheme="pink">
                  <Avatar
                    size="md"
                    bg="teal.500"
                    color="white"
                    name={`${currentUserData.userInfo.first_name} ${currentUserData.userInfo.last_name}`}
                  />
                </MenuButton>
                <MenuList>
                  <MenuGroup>
                    <MenuItem>Profili</MenuItem>
                    <MenuItem onClick={() => navigate("/postimet")}>
                      Postimet
                    </MenuItem>
                  </MenuGroup>
                  <MenuDivider />
                  <MenuGroup>
                    <MenuItem>Docs</MenuItem>
                    <MenuItem>FAQ</MenuItem>
                    <MenuDivider />
                  </MenuGroup>
                  <MenuGroup>
                    <MenuItem color="red" onClick={handleLogOut}>
                      Qkyqy
                    </MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            )}
          </Text>
        </HStack>
      </Flex>
    </Container>
  );
}

export default HeaderMenu;
