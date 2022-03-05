import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Post from "../components/Posts/Post";
import { UserContext } from "../context/UserContext";

const fetchMyPostsApi = "http://localhost/residence/src/apis/myPosts.php";

const deleteResidencesApi =
  "http://localhost/residence/src/apis/deleteResidence.php";

function Posts() {
  const [myPostsData, setMyPostsData] = useState([]);
  const { currentUserData } = useContext(UserContext);

  const fetchMyPosts = async () => {
    try {
      if (currentUserData.userInfo.id) {
        const response = await axios.post(fetchMyPostsApi, {
          id: currentUserData.userInfo.id,
        });
        setMyPostsData(response.data);
        console.log(response);
      }

      console.log("didnt work?");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMyPosts();
  }, [currentUserData.userInfo.id]);

  const handleDelete = async (id) => {
    try {
      await axios.post(deleteResidencesApi, {
        resId: id,
      });
      fetchMyPosts();
    } catch (err) {
      console.log(err);
    }
  };
  console.log(currentUserData.userInfo.id);

  return (
    <Container maxW="container.lg">
      {myPostsData && myPostsData?.length > 0 && (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="gray.400" boxSize="20px">
                Nr
              </Th>
              <Th>Postimet mia</Th>
              <Th isNumeric>Aksioni</Th>
            </Tr>
          </Thead>
          <Tbody>
            {myPostsData?.map((post, indx) => (
              <Post {...post} indx={indx} onDelete={handleDelete} />
            ))}
          </Tbody>
        </Table>
      )}

      {myPostsData?.length === 0 && (
        <Container height="90vh" centerContent>
          <Center height="100%">
            <Flex direction="column">
              <Heading my={15}>Ju nuk keni asnje postim!</Heading>
              <Button my={15} colorScheme="teal">
                <NavLink to="/ofro">Ofro Residence</NavLink>
              </Button>
            </Flex>
          </Center>
        </Container>
      )}
    </Container>
  );
}

export default Posts;
