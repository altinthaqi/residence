import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const subscribeApi = "http://localhost/residence/src/apis/subscribeApi.php";

const Logo = (props) => {
  return (
    <Text fontWeight="semibold" fontSize="xl">
      <NavLink to="/">residence.com</NavLink>
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  const [state, setState] = useState("");
  const [email, setEmail] = useState("");
  const handleSubscribeSubmit = () => {
    axios
      .post(subscribeApi, { email: email })
      .then((res) => setState("success"))
      .catch((err) => {
        setState("error");
      });
  };
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>
              © 2022 residence.com. Të gjitha të drejtat të rezervuara
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Kompania</ListHeader>
            <Link href="/">Rreth nesh</Link>
            <Link href={"#"}>Na Kontaktoni</Link>
            <Link href="/ofro">Ofro</Link>
            <Link href="/residences">Kerko</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Mbështetja</ListHeader>
            <Link href={"#"}>Qendra Ndihmes</Link>
            <Link href={"#"}>Rregullat e sherbimeve</Link>
            <Link href={"#"}>Statusi</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Qëndro i informuar reth nesh</ListHeader>
            {state !== "error" && (
              <Stack direction={"row"}>
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={"Email-i yt"}
                  type="email"
                  bg="blackAlpha.100"
                  border={0}
                  _focus={{
                    bg: "whiteAlpha.300",
                  }}
                />
                {state !== "success" && (
                  <IconButton
                    bg="green.400"
                    color="white"
                    _hover={{
                      bg: "green.600",
                    }}
                    aria-label="Subscribe"
                    icon={<BiMailSend />}
                    onClick={handleSubscribeSubmit}
                  />
                )}

                {state === "success" && (
                  <IconButton
                    isDisabled
                    bg="green.400"
                    color="white"
                    _hover={{
                      bg: "green.600",
                    }}
                    aria-label="Subscribe"
                    icon={<BiMailSend />}
                  />
                )}
              </Stack>
            )}
            {state === "success" && <Text>Ju faleminderit!</Text>}
            {state === "error" && (
              <Text>Diqka shkoj gabim! Provoni përsëri më vonë!</Text>
            )}
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
