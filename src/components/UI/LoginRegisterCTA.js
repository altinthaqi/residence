import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function LoginRegisterCTA({ action }) {
  let missingAction;
  let pathToGo;
  let whatAction;

  if (action === "login") {
    missingAction = "Nuk keni llogari?";
    pathToGo = "regjistrohu";
    whatAction = "regjistrohuni ketu.";
  } else {
    missingAction = "Keni llogari?";
    pathToGo = "kyqu";
    whatAction = "kyquni ketu.";
  }
  return (
    <Text mt={10}>
      {missingAction}
      <br /> Atehere{" "}
      <NavLink to={`/${pathToGo}`}>
        <Box as="span" color="teal.500" fontWeight="medium">
          {" "}
          {whatAction}
        </Box>
      </NavLink>
    </Text>
  );
}

export default LoginRegisterCTA;
