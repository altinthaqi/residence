import {
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState, useRef } from "react";
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

  const [isEditing, setIsEditing] = useState(false);
  const [editingResidenceData, setEditingResidenceData] = useState({});

  const [residenceInputData, setResidenceInputData] = useState({});

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
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTitleChange = (e) => {
    setSpecificResidenceData({
      // title: e.target.value,
      // description: descriptRef.current.value,
      // residenceType: typeRef.current.value,
      // nrRooms: roomsRef.current.value,
      // residenceSize: sizeRef.current.value,
      // price: priceRef.current.value,
      // city: cityRef.current.value,
      // neighborhood: neighborhoodRef.current.value,
      // street: streetRef.current.value,
      // tel: telRef.current.value,
      // residenceImage: imgRef.current.value,
      // userId: specificResidenceData.usr_id,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();

    // console.log(e.target.reset());
  };

  let hasPermission =
    currentUserData.userInfo.id === specificResidenceData.usr_id ||
    currentUserData.userInfo.role_id === "2";

  return (
    <>
      {!isEditing && (
        <>
          {" "}
          <Banner residenceImage={specificResidenceData.img} />
          <Center my={10}>
            <Heading textAlign="center">{specificResidenceData.title}</Heading>
          </Center>
          <Container>
            <Text my={20} textAlign="center">
              {specificResidenceData.descrip}
            </Text>
          </Container>
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
          {hasPermission && (
            <Container maxW="container.lg" centerContent>
              <Flex>
                <Button onClick={handleDelete} mx={5} colorScheme="red">
                  Fshijë
                </Button>
                <Button
                  mx={5}
                  colorScheme="blue"
                  onClick={() => setIsEditing(true)}
                >
                  Përditëso
                </Button>
              </Flex>
            </Container>
          )}
          <Container maxW="container.xl" my={20}>
            <Heading my={5} size="lg" fontWeight="medium">
              Të ngjajshme:
            </Heading>

            <Divider />
          </Container>
          {/* {console.log(similarResidences)} */}
          {similarResidences && similarResidences.length > 1 && (
            <ResidenceList residencesData={similarResidences} />
          )}
        </>
      )}

      {isEditing && (
        <Container maxWidth="600px" my={10} centerContent>
          <Heading my={15} fontWeight="medium">
            Perditeso Residencen
          </Heading>

          <form
            onSubmit={handleEdit}
            style={{ width: "80%" }}
            encType="multipart/form-data"
          >
            <FormControl isRequired my={3}>
              <FormLabel>Titulli</FormLabel>
              <Input
                name="title"
                id="title"
                placeholder="Titulli"
                type="text"
                value={editingResidenceData.title}
              />{" "}
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Përshkrimi</FormLabel>
              <Textarea
                name="description"
                id="description"
                resize="none"
                rows="10"
                placeholder="Pershkrimi"
                value={editingResidenceData.descrip}
              />
            </FormControl>

            <FormControl isRequired my={5}>
              <FormLabel>Tipi i residences</FormLabel>
              <Stack spacing={3}>
                <Select
                  width="150px"
                  defaultValue={editingResidenceData.category_id}
                  size="md"
                  name="residenceType"
                  id="residenceType"
                >
                  <option value="1">Banese</option>
                  <option value="2">Shtepi</option>
                </Select>
              </Stack>{" "}
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Numri dhomave të gjumit (number)</FormLabel>
              <Input
                name="nrRooms"
                id="nrRooms"
                placeholder="1"
                type="number"
                width="150px"
                value={editingResidenceData.rooms}
              />
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Hapësira në m2 (number)</FormLabel>
              <Input
                name="residenceSize"
                id="residenceSize"
                placeholder="75"
                type="number"
                value={editingResidenceData.square_meters}
              />{" "}
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Cmimi per muaj (number)</FormLabel>
              <Input
                name="price"
                id="price"
                placeholder="250"
                type="number"
                value={editingResidenceData.price}
              />{" "}
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Qyteti</FormLabel>
              <Input
                name="city"
                id="city"
                placeholder="Qyteti"
                type="text"
                value={editingResidenceData.city}
              />
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Lagjia</FormLabel>
              <InputGroup>
                <Input
                  name="neighborhood"
                  id="neighborhood"
                  placeholder="Lagjia e residences"
                  type="text"
                  value={editingResidenceData.neighborhood}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Rruga</FormLabel>
              <Input
                name="street"
                id="street"
                placeholder="Rr. Azem Bajla 221"
                type="text"
                value={editingResidenceData.street}
              />
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Numri Kontaktues (tel)</FormLabel>
              <Input
                name="tel"
                id="tel"
                placeholder="049111111"
                type="text"
                value={editingResidenceData.telephone_number}
              />
            </FormControl>

            <FormControl isRequired my={8}>
              <FormLabel>URL i Imazhit te Residences</FormLabel>
              <Input
                name="residenceImage"
                id="residenceImage"
                placeholder="Image Adress"
                type="text"
                value={editingResidenceData.img}
              />
            </FormControl>
            <Center>
              <Button
                mx={4}
                onClick={() => setIsEditing(false)}
                colorScheme="red"
              >
                Anulo
              </Button>
              <Button mx={4} type="submit" colorScheme="teal">
                Perditeso
              </Button>
            </Center>
          </form>
        </Container>
      )}
    </>
  );
}

export default Residence;
