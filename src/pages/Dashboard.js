import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Post from "../components/Posts/Post";
import { UserContext } from "../context/UserContext";

const fetchAdminPostsApi = "http://localhost/residence/src/apis/adminPosts.php";

const deleteResidencesApi =
  "http://localhost/residence/src/apis/deleteResidence.php";

function Dashboard() {
  const [allPostsData, setAllPostsData] = useState([]);
  const { currentUserData } = useContext(UserContext);

  const fetchMyPosts = async () => {
    try {
      if (currentUserData.userInfo.id) {
        const response = await axios.get(fetchAdminPostsApi);
        setAllPostsData(response.data);
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
    <Container height="80vh" maxW="container.lg">
      {allPostsData && allPostsData?.length > 0 && (
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th color="gray.400" boxSize="20px">
                Nr
              </Th>
              <Th>Postimet</Th>
              <Th isNumeric>Aksioni</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allPostsData?.map((post, indx) => (
              <Post {...post} indx={indx} onDelete={handleDelete} />
            ))}
          </Tbody>
        </Table>
      )}

      {allPostsData?.length === 0 && (
        <Container height="90vh" centerContent>
          <Center height="100%">
            <Flex direction="column">
              <Heading my={15}>Nuk ka asnje postim!</Heading>
            </Flex>
          </Center>
        </Container>
      )}
    </Container>
  );
}

export default Dashboard;
