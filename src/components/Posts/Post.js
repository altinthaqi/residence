import { Button, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

function Post({ title, id, indx, onDelete }) {
  return (
    <>
      <Tr>
        <Td color="gray.400">#{indx + 1}</Td>
        <Td color="teal.600" fontWeight="semibold">
          <NavLink to={`/residences/${id}`}>{title}</NavLink>
        </Td>
        <Td isNumeric>
          <Button onClick={() => onDelete(id)} size="sm" colorScheme="red">
            Fshijë
          </Button>
        </Td>
      </Tr>
    </>
  );
}

export default Post;
