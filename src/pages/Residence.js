import {
  Center,
  Container,
  Divider,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ResidenceList from "../components/Residences/ResidenceList";
import Banner from "../components/Residence/Banner";
import Characteristics from "../components/Residence/Characteristics";
import Location from "../components/Residence/Location";
import Contact from "../components/Residence/Contact";
import { useParams } from "react-router-dom";
import axios from "axios";

const specificResidenceApi =
  "http://localhost/residence/src/apis/specificResidence.php";

const residenceOwnerApi =
  "http://localhost/residence/src/apis/residenceOwner.php";

const similarResidencesApi =
  "http://localhost/residence/src/apis/similarResidences.php";

function Residence() {
  let isMounted = true;
  const [specificResidenceData, setSpecificResidenceData] = useState([]);
  const [residenceOwner, setResidenceOwner] = useState({});
  const [similarResidences, setSimilarResidences] = useState([]);
  const { id } = useParams();

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

      <Container maxW="container.xl" my={20}>
        <Heading my={5} size="lg" fontWeight="medium">
          Të ngjajshme:
        </Heading>

        <Divider />
      </Container>

      {/* <Container maxW="container.xl" my={10}>
      <SimpleGrid columns={[1, 1, 1, 2]} spacing={10}>
        {similarResidences &&
          similarResidences.map((residence) => <ResidenceItem {...residence} />)}

        {similarResidences &&
          similarResidences.length === 0 &&
          "There isn't any similar residences!"}
      </SimpleGrid>
    </Container>  */}

      {similarResidences && similarResidences.length > 1 && (
        <ResidenceList residencesData={similarResidences} />
      )}
    </>
  );
}

export default Residence;
