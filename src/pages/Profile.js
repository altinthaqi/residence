import {
  Button,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import ProfileInfo from "../components/UI/ProfileInfo";
import { UserContext } from "../context/UserContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";

const editProfileApi = "http://localhost/residence/src/apis/editProfile.php";

export default function Profile({ onOpen, isOpen, onClose }) {
  const { currentUserData, setCurrentUserData } = useContext(UserContext);
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formInputData, setFormInputData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    city: "",
  });

  const canSubmit =
    formInputData.name !== "" &&
    formInputData.lastname !== "" &&
    formInputData.email !== "" &&
    formInputData.password !== "";

  const nameChangeHandler = (e) => {
    setFormInputData({ ...formInputData, name: e.target.value });
  };

  const lastnameChangeHandler = (e) => {
    setFormInputData({ ...formInputData, lastname: e.target.value });
  };

  const emailChangeHandler = (e) => {
    setFormInputData({ ...formInputData, email: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    setFormInputData({ ...formInputData, password: e.target.value });
  };

  const cityChangeHandler = (e) => {
    setFormInputData({ ...formInputData, city: e.target.value });
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(editProfileApi, formInputData)
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
    setIsEditing(false);
    setCurrentUserData({
      userInfo: {
        city: formInputData.city,
        id: currentUserData.userInfo.id,
        created_at: currentUserData.userInfo.created_at,
        email: formInputData.email,
        first_name: formInputData.name,
        last_name: formInputData.lastname,
        passw: formInputData.password,
        role_id: currentUserData.userInfo.role_id,
      },
      isLoggedIn: true,
    });
  };

  const handleClose = () => {
    isEditing ? setIsEditing(false) : onClose();
  };
  console.log(currentUserData);

  const handleEdit = () => {
    setIsEditing(true);
    setFormInputData({
      id: currentUserData.userInfo.id,
      name: currentUserData.userInfo.first_name,
      lastname: currentUserData.userInfo.last_name,
      email: currentUserData.userInfo.email,
      password: currentUserData.userInfo.passw,
      city: currentUserData.userInfo.city,
    });
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              {isEditing
                ? "Duke përditësuar profilin"
                : "Informatat e profilit"}
            </DrawerHeader>

            <DrawerBody>
              {!isEditing && (
                <Container>
                  <HStack justify="center" align="center">
                    <Heading my="20px" fontWeight="medium">
                      {currentUserData.userInfo.first_name}{" "}
                      {currentUserData.userInfo.last_name}
                    </Heading>
                  </HStack>
                  <Divider />
                  <ProfileInfo
                    topic="ID"
                    content={currentUserData.userInfo.id}
                  />
                  <ProfileInfo
                    topic="Roli"
                    content={
                      currentUserData.userInfo.role_id === "1"
                        ? "PERDORUES"
                        : "ADMINISTRATOR"
                    }
                  />

                  <ProfileInfo
                    topic="Emri"
                    content={currentUserData.userInfo.first_name}
                  />
                  <ProfileInfo
                    topic="Mbiemri"
                    content={currentUserData.userInfo.last_name}
                  />

                  <ProfileInfo
                    topic="Email"
                    content={currentUserData.userInfo.email}
                  />

                  <ProfileInfo
                    topic="Fjalëkalimi"
                    content={currentUserData.userInfo.passw}
                  />

                  {currentUserData?.userInfo.city && (
                    <ProfileInfo
                      topic="Qyteti"
                      content={currentUserData.userInfo.city}
                    />
                  )}

                  <ProfileInfo
                    topic="Përdorues nga"
                    content={currentUserData.userInfo.created_at}
                  />
                </Container>
              )}

              {isEditing && (
                <Container my={10} centerContent>
                  <form onSubmit={handleSubmit} style={{ width: "80%" }}>
                    <FormControl my={3}>
                      <FormLabel>Emri</FormLabel>
                      <Input
                        onChange={nameChangeHandler}
                        placeholder="Emri"
                        type="text"
                        value={formInputData.name}
                      />{" "}
                    </FormControl>

                    <FormControl my={3}>
                      <FormLabel>Mbiemri</FormLabel>
                      <Input
                        onChange={lastnameChangeHandler}
                        placeholder="Mbiemri"
                        type="text"
                        value={formInputData.lastname}
                      />
                    </FormControl>

                    <FormControl my={3}>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        onChange={emailChangeHandler}
                        placeholder="Email address"
                        type="email"
                        value={formInputData.email}
                      />{" "}
                    </FormControl>

                    <FormControl my={3}>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          onChange={passwordChangeHandler}
                          placeholder="Password"
                          type={showPassword ? "text" : "password"}
                          value={formInputData.password}
                        />
                        <InputRightElement width="3rem">
                          <Button
                            h="1.5rem"
                            size="sm"
                            onClick={handlePasswordVisibility}
                          >
                            {showPassword ? (
                              <AiFillEyeInvisible />
                            ) : (
                              <AiFillEye />
                            )}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>

                    <FormControl my={3}>
                      <FormLabel>Qyteti</FormLabel>
                      <Input
                        onChange={cityChangeHandler}
                        placeholder="Qyteti"
                        type="text"
                        value={formInputData.city}
                      />
                    </FormControl>
                  </form>
                </Container>
              )}
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={handleClose}>
                {isEditing ? "Prapa" : "Anulo"}
              </Button>
              {isEditing ? (
                <Button
                  isDisabled={!canSubmit}
                  colorScheme="teal"
                  variant="solid"
                  mr={3}
                  onClick={handleSubmit}
                >
                  Përfundo
                </Button>
              ) : (
                <Button
                  colorScheme="teal"
                  variant="solid"
                  mr={3}
                  onClick={handleEdit}
                >
                  Përditëso
                </Button>
              )}
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
