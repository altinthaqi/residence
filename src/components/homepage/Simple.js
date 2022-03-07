import { useState } from "react";
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";

const subscribeApi = "http://localhost/residence/src/apis/subscribeApi.php";

export default function Simple() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState("initial");
  const [error, setError] = useState(false);

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    setError(false);
    setState("submitting");
    console.log("submitted", email);

    axios
      .post(subscribeApi, { email: email })
      .then((res) => setState("success"))
      .catch((err) => {
        setError(true);
        setState("initial");
      });
  };

  return (
    <Flex
      py="100px"
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Container
        maxW={"lg"}
        bg={useColorModeValue("white", "whiteAlpha.100")}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
        direction={"column"}
      >
        <Heading
          as={"h2"}
          fontSize={{ base: "xl", sm: "2xl" }}
          textAlign={"center"}
          mb={5}
        >
          Abonohu në revisten tonë
        </Heading>
        <Stack
          direction={{ base: "column", md: "row" }}
          as={"form"}
          spacing={"12px"}
          onSubmit={handleSubscribeSubmit}
        >
          <FormControl>
            <Input
              variant={"solid"}
              borderWidth={1}
              color={"gray.800"}
              _placeholder={{
                color: "gray.400",
              }}
              borderColor={useColorModeValue("gray.300", "gray.700")}
              id={"email"}
              type={"email"}
              required
              placeholder={"Email-i yt"}
              aria-label={"Your Email"}
              value={email}
              disabled={state !== "initial"}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl w={{ base: "100%", md: "40%" }}>
            <Button
              colorScheme={state === "success" ? "green" : "blue"}
              isLoading={state === "submitting"}
              w="100%"
              type={state === "success" ? "button" : "submit"}
            >
              {state === "success" ? "Faleminderit!" : "Abonohu"}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={"center"}
          color={error ? "red.500" : "gray.500"}
        >
          {error
            ? "Ndodhi një gabim! 😢 Ju lutem provoni përsëri më vonë."
            : "Nuk do ta keqëpërdorim email-in tënd! ✌️"}
        </Text>
      </Container>
    </Flex>
  );
}
