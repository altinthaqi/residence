import {
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import ResidenceList from "../components/Residences/ResidenceList";
import Banner from "../components/Residence/Banner";
import Characteristics from "../components/Residence/Characteristics";
import Location from "../components/Residence/Location";
import Contact from "../components/Residence/Contact";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";

const specificResidenceApi =
  "http://localhost/residence/src/apis/specificResidence.php";

const residenceOwnerApi =
  "http://localhost/residence/src/apis/residenceOwner.php";

const similarResidencesApi =
  "http://localhost/residence/src/apis/similarResidences.php";

const deleteResidencesApi =
  "http://localhost/residence/src/apis/deleteResidence.php";

function Residence() {
  let isMounted = true;
  const [specificResidenceData, setSpecificResidenceData] = useState([]);
  const [residenceOwner, setResidenceOwner] = useState({});
  const [similarResidences, setSimilarResidences] = useState([]);
  const { id } = useParams();

  const { currentUserData } = useContext(UserContext);

  console.log(currentUserData.userInfo, specificResidenceData);

  let hasPermission =
    currentUserData.userInfo.id === specificResidenceData.usr_id;

  useEffect(() => {
    const fetchSpecificResidence = async () => {
      try {
        const response = await axios.post(specificResidenceApi, { id });
        if (isMounted) setSpecificResidenceData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchResidenceOwner = async () => {
      try {
        const user_id = specificResidenceData.usr_id;
        const response = await axios.post(residenceOwnerApi, {
          user_id,
        });
        if (isMounted) setResidenceOwner(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchSimilarResidences = async () => {
      try {
        const rooms = specificResidenceData.rooms;
        const response = await axios.post(similarResidencesApi, {
          rooms,
        });

        if (isMounted) setSimilarResidences(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSpecificResidence();
    fetchResidenceOwner();

    fetchSimilarResidences();

    return () => {
      isMounted = false;
    };
  }, [id, specificResidenceData.rooms, specificResidenceData.usr_id]);

  const handleDelete = async () => {
    try {
      const response = await axios.post(deleteResidencesApi, {
        resId: specificResidenceData.id,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Banner residenceImage={specificResidenceData.img} />

      <Center my={10}>
        <Heading textAlign="center">{specificResidenceData.title}</Heading>
      </Center>

      <Text my={20} textAlign="center">
        {specificResidenceData.descrip}
      </Text>

      <Characteristics
        rooms={specificResidenceData.rooms}
        residenceSize={specificResidenceData.square_meters}
        price={specificResidenceData.price}
      />

      <Location
        city={specificResidenceData.city}
        neighborehood={specificResidenceData.neighborhood}
        street={specificResidenceData.street}
      />

      <Contact
        {...residenceOwner}
        telephone_number={specificResidenceData.telephone_number}
      />

      <Container maxW="container.lg" centerContent>
        <Flex>
          <Button mx={5} colorScheme="blue">
            Përditëso Residencen
          </Button>
          <Button onClick={handleDelete} mx={5} colorScheme="red">
            Fshijë Residencen
          </Button>
        </Flex>
      </Container>

      <Container maxW="container.xl" my={20}>
        <Heading my={5} size="lg" fontWeight="medium">
          Të ngjajshme:
        </Heading>

        <Divider />
      </Container>

      {similarResidences && similarResidences.length > 1 && (
        <ResidenceList residencesData={similarResidences} />
      )}
    </>
  );
}

export default Residence;
