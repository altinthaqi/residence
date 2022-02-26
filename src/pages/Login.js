import {
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import LoginRegisterCTA from "../components/UI/LoginRegisterCTA";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const [formInputData, setFormInputData] = useState({
    email: "",
    password: "",
  });

  const canLogin = formInputData.email !== "" && formInputData.password !== "";

  const emailChangeHandler = (e) => {
    setFormInputData({ ...formInputData, email: e.target.value });
  };

  const passwordChangeHandler = (e) => {
    setFormInputData({ ...formInputData, password: e.target.value });
  };

  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputData);

    setFormInputData({
      email: "",
      password: "",
    });
  };
  return (
    <Container maxWidth="600px" my={10} centerContent>
      <Heading my={15} fontWeight="medium">
        Kyqu
      </Heading>

      <form onSubmit={handleSubmit} style={{ width: "80%" }}>
        <FormControl my={3}>
          <FormLabel>Email address</FormLabel>
          <Input
            onChange={emailChangeHandler}
            placeholder="Email address"
            type="email"
            value={formInputData.email}
          />
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

        <Center>
          <Button isDisabled={!canLogin} type="submit" colorScheme="teal">
            Kyqu
          </Button>
        </Center>
      </form>

      <LoginRegisterCTA action="login" />
    </Container>
  );
}

export default Login;
