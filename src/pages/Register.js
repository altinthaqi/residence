import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function Register() {
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
    console.log(formInputData);

    setFormInputData({
      name: "",
      lastname: "",
      email: "",
      password: "",
      city: "",
    });
  };
  return (
    <Container maxWidth="600px" my={10} centerContent>
      <Heading my={15} fontWeight="medium">
        Regjistrohu
      </Heading>

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
          <FormHelperText>Email-i juaj eshte i sigurte tek ne</FormHelperText>
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
              <Button h="1.5rem" size="sm" onClick={handlePasswordVisibility}>
                {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
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
          <FormHelperText>opsionale*</FormHelperText>
        </FormControl>
        <Center>
          <Button isDisabled={!canSubmit} type="submit" colorScheme="teal">
            Regjistrohu
          </Button>
        </Center>
      </form>

      <Text mt={10}>
        Keni llogari?
        <br /> Atehere{" "}
        <NavLink to="/kyqu">
          <Box as="span" color="teal.500" fontWeight="medium">
            {" "}
            kyquni ketu.
          </Box>
        </NavLink>
      </Text>
    </Container>
  );
}

export default Register;
