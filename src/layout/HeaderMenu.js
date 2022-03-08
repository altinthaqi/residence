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
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import Profile from "../pages/Profile";

const logoutApi = "http://localhost/residence/src/apis/logout.php";

function HeaderMenu() {
  const { currentUserData, setCurrentUserData } = useContext(UserContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let navigate = useNavigate();

  const handleLogOut = () => {
    axios
      .get(logoutApi)
      .then((response) =>
        setCurrentUserData({ userInfo: [], isLoggedIn: false })
      )
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
        {" "}
        {currentUserData.userInfo.role_id !== "2" && (
          <Text fontWeight="semibold" fontSize="xl">
            <NavLink to="/">residence.com</NavLink>
          </Text>
        )}
        <Spacer />
        <HStack spacing={5}>
          {currentUserData.userInfo.role_id !== "2" && (
            <>
              <Text fontWeight="medium" fontSize="lg">
                <NavLink to="/residences">kërko</NavLink>
              </Text>

              <Text fontWeight="medium" fontSize="lg">
                <NavLink to="/ofro">ofro</NavLink>
              </Text>
            </>
          )}
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
                  {currentUserData.userInfo.role_id === "1" && (
                    <>
                      <MenuGroup
                        title={`${currentUserData?.userInfo.first_name?.toUpperCase()} ${currentUserData.userInfo.last_name?.toUpperCase()}`}
                      >
                        <Divider />
                        <MenuItem onClick={onOpen}>Profili</MenuItem>
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
                    </>
                  )}

                  {currentUserData.userInfo.role_id === "2" && (
                    <MenuGroup title="ADMIN">
                      <Divider />
                      <MenuItem onClick={() => navigate("/dashboard")}>
                        Dashboard
                      </MenuItem>
                    </MenuGroup>
                  )}

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

      <Profile isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
    </Container>
  );
}

export default HeaderMenu;
