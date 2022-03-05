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
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import ResidenceList from "../components/Residences/ResidenceList";
import Banner from "../components/Residence/Banner";
import Characteristics from "../components/Residence/Characteristics";
import Location from "../components/Residence/Location";
import Contact from "../components/Residence/Contact";
import { useNavigate, useParams } from "react-router-dom";
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

const updateResidencesApi =
  "http://localhost/residence/src/apis/updateResidence.php";

function Residence() {
  let isMounted = true;
  let navigate = useNavigate();

  const [specificResidenceData, setSpecificResidenceData] = useState([]);
  const [residenceOwner, setResidenceOwner] = useState({});
  const [similarResidences, setSimilarResidences] = useState([]);
  const { id } = useParams();

  const { currentUserData } = useContext(UserContext);

  const [isEditing, setIsEditing] = useState(false);
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
        if (specificResidenceData.rooms && specificResidenceData.rooms > 0) {
          const response = await axios.post(similarResidencesApi, {
            rooms: Number(specificResidenceData.rooms),
          });
          setSimilarResidences(response.data);
        }
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

      navigate("/residences");

      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleTitleChange = (e) => {
    setResidenceInputData({
      id: specificResidenceData.id,
      title: e.target.value,
      descrip: residenceInputData.descrip,
      category_id: residenceInputData.category_id,
      rooms: residenceInputData.rooms,
      square_meters: residenceInputData.square_meters,
      price: residenceInputData.price,
      city: residenceInputData.city,
      neighborhood: residenceInputData.neighborhood,
      street: residenceInputData.street,
      telephone_number: residenceInputData.telephone_number,
      img: residenceInputData.img,
    });
  };
  const handleDescripChange = (e) => {
    setResidenceInputData({
      id: specificResidenceData.id,
      title: residenceInputData.title,
      descrip: e.target.value,
      category_id: residenceInputData.category_id,
      rooms: residenceInputData.rooms,
      square_meters: residenceInputData.square_meters,
      price: residenceInputData.price,
      city: residenceInputData.city,
      neighborhood: residenceInputData.neighborhood,
      street: residenceInputData.street,
      telephone_number: residenceInputData.telephone_number,
      img: residenceInputData.img,
    });
  };
  const handleCategoryChange = (e) => {
    setResidenceInputData({
      id: specificResidenceData.id,
      title: residenceInputData.title,
      descrip: residenceInputData.descrip,
      category_id: e.target.value,
      rooms: residenceInputData.rooms,
      square_meters: residenceInputData.square_meters,
      price: residenceInputData.price,
      city: residenceInputData.city,
      neighborhood: residenceInputData.neighborhood,
      street: residenceInputData.street,
      telephone_number: residenceInputData.telephone_number,
      img: residenceInputData.img,
    });
  };
  const handleRoomsChange = (e) => {
    setResidenceInputData({
      id: specificResidenceData.id,
      title: residenceInputData.title,
      descrip: residenceInputData.descrip,
      category_id: residenceInputData.category_id,
      rooms: e.target.value,
      square_meters: residenceInputData.square_meters,
      price: residenceInputData.price,
      city: residenceInputData.city,
      neighborhood: residenceInputData.neighborhood,
      street: residenceInputData.street,
      telephone_number: residenceInputData.telephone_number,
      img: residenceInputData.img,
    });
  };
  const handleSquareSizeChange = (e) => {
    setResidenceInputData({
      id: specificResidenceData.id,
      title: residenceInputData.title,
      descrip: residenceInputData.descrip,
      category_id: residenceInputData.category_id,
      rooms: residenceInputData.rooms,
      square_meters: e.target.value,
      price: residenceInputData.price,
      city: residenceInputData.city,
      neighborhood: residenceInputData.neighborhood,
      street: residenceInputData.street,
      telephone_number: residenceInputData.telephone_number,
      img: residenceInputData.img,
    });
  };
  const handlePriceChange = (e) => {
    setResidenceInputData({
      id: specificResidenceData.id,
      title: residenceInputData.title,
      descrip: residenceInputData.descrip,
      category_id: residenceInputData.category_id,
      rooms: residenceInputData.rooms,
      square_meters: residenceInputData.square_meters,
      price: e.target.value,
      city: residenceInputData.city,
      neighborhood: residenceInputData.neighborhood,
      street: residenceInputData.street,
      telephone_number: residenceInputData.telephone_number,
      img: residenceInputData.img,
    });
  };
  const handleCityChange = (e) => {
    setResidenceInputData({
      id: specificResidenceData.id,
      title: residenceInputData.title,
      descrip: residenceInputData.descrip,

      category_id: residenceInputData.category_id,
      rooms: residenceInputData.rooms,
      square_meters: residenceInputData.square_meters,
      price: residenceInputData.price,
      city: e.target.value,
      neighborhood: residenceInputData.neighborhood,
      street: residenceInputData.street,
      telephone_number: residenceInputData.telephone_number,
      img: residenceInputData.img,
    });
  };
  const handleNeighborhoodChange = (e) => {
    setResidenceInputData({
      id: specificResidenceData.id,
      title: residenceInputData.title,
      descrip: residenceInputData.descrip,

      category_id: residenceInputData.category_id,
      rooms: residenceInputData.rooms,
      square_meters: residenceInputData.square_meters,
      price: residenceInputData.price,
      city: residenceInputData.city,
      neighborhood: e.target.value,
      street: residenceInputData.street,
      telephone_number: residenceInputData.telephone_number,
      img: residenceInputData.img,
    });
  };
  const handleStreetChange = (e) => {
    setResidenceInputData({
      id: specificResidenceData.id,
      title: residenceInputData.title,
      descrip: residenceInputData.descrip,

      category_id: residenceInputData.category_id,
      rooms: residenceInputData.rooms,
      square_meters: residenceInputData.square_meters,
      price: residenceInputData.price,
      city: residenceInputData.city,
      neighborhood: residenceInputData.neighborhood,
      street: e.target.value,
      telephone_number: residenceInputData.telephone_number,
      img: residenceInputData.img,
    });
  };
  const handleTelephoneNumberChange = (e) => {
    setResidenceInputData({
      id: specificResidenceData.id,
      title: residenceInputData.title,
      descrip: residenceInputData.descrip,

      category_id: residenceInputData.category_id,
      rooms: residenceInputData.rooms,
      square_meters: residenceInputData.square_meters,
      price: residenceInputData.price,
      city: residenceInputData.city,
      neighborhood: residenceInputData.neighborhood,
      street: residenceInputData.street,
      telephone_number: e.target.value,
      img: residenceInputData.img,
    });
  };
  const handleImgChange = (e) => {
    setResidenceInputData({
      id: specificResidenceData.id,
      title: residenceInputData.title,
      descrip: residenceInputData.descrip,
      category_id: residenceInputData.category_id,
      rooms: residenceInputData.rooms,
      square_meters: residenceInputData.square_meters,
      price: residenceInputData.price,
      city: residenceInputData.city,
      neighborhood: residenceInputData.neighborhood,
      street: residenceInputData.street,
      telephone_number: residenceInputData.telephone_number,
      img: e.target.value,
    });
  };

  const handleEdit = async (e) => {
    setIsEditing(true);
    setResidenceInputData(specificResidenceData);
  };

  const handlePerditesoResidence = (e) => {
    e.preventDefault();
    console.log("u perditesu", residenceInputData);

    axios
      .post(updateResidencesApi, residenceInputData)
      .then((data) => console.log(data))
      .then(() => setSpecificResidenceData(residenceInputData))
      .then(() => setIsEditing(false))
      .catch((err) => console.log(err));
  };

  let hasPermission =
    currentUserData.userInfo.id === specificResidenceData.usr_id ||
    currentUserData.userInfo.role_id === "2";

  return (
    <>
      {!isEditing && (
        <>
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
                <Button mx={5} colorScheme="blue" onClick={handleEdit}>
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
          {console.log(similarResidences)}
          {similarResidences && similarResidences.length > 1 && (
            <ResidenceList residencesData={similarResidences} />
          )}
        </>
      )}

      {isEditing && residenceInputData && (
        <Container maxWidth="600px" my={10} centerContent>
          <Heading my={15} fontWeight="medium">
            Perditeso Residencen
          </Heading>

          <form
            style={{ width: "80%" }}
            onSubmit={handlePerditesoResidence}
            encType="multipart/form-data"
          >
            <FormControl isRequired my={3}>
              <FormLabel>Titulli</FormLabel>
              <Input
                onChange={handleTitleChange}
                name="title"
                id="title"
                placeholder="Titulli"
                type="text"
                value={residenceInputData.title}
              />{" "}
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Përshkrimi</FormLabel>
              <Textarea
                onChange={handleDescripChange}
                name="description"
                id="description"
                resize="none"
                rows="10"
                placeholder="Pershkrimi"
                value={residenceInputData.descrip}
              />
            </FormControl>

            <FormControl isRequired my={5}>
              <FormLabel>Tipi i residences</FormLabel>
              <Stack spacing={3}>
                <Select
                  onChange={handleCategoryChange}
                  width="150px"
                  defaultValue={residenceInputData.category_id}
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
                onChange={handleRoomsChange}
                name="nrRooms"
                id="nrRooms"
                placeholder="1"
                type="number"
                width="150px"
                value={residenceInputData.rooms}
              />
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Hapësira në m2 (number)</FormLabel>
              <Input
                onChange={handleSquareSizeChange}
                name="residenceSize"
                id="residenceSize"
                placeholder="75"
                type="number"
                value={residenceInputData.square_meters}
              />{" "}
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Cmimi per muaj (number)</FormLabel>
              <Input
                onChange={handlePriceChange}
                name="price"
                id="price"
                placeholder="250"
                type="number"
                value={residenceInputData.price}
              />{" "}
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Qyteti</FormLabel>
              <Input
                onChange={handleCityChange}
                name="city"
                id="city"
                placeholder="Qyteti"
                type="text"
                value={residenceInputData.city}
              />
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Lagjia</FormLabel>
              <InputGroup>
                <Input
                  onChange={handleNeighborhoodChange}
                  name="neighborhood"
                  id="neighborhood"
                  placeholder="Lagjia e residences"
                  type="text"
                  value={residenceInputData.neighborhood}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Rruga</FormLabel>
              <Input
                onChange={handleStreetChange}
                name="street"
                id="street"
                placeholder="Rr. Azem Bajla 221"
                type="text"
                value={residenceInputData.street}
              />
            </FormControl>

            <FormControl isRequired my={3}>
              <FormLabel>Numri Kontaktues (tel)</FormLabel>
              <Input
                onChange={handleTelephoneNumberChange}
                name="tel"
                id="tel"
                placeholder="049111111"
                type="text"
                value={residenceInputData.telephone_number}
              />
            </FormControl>

            <FormControl isRequired my={8}>
              <FormLabel>URL i Imazhit te Residences</FormLabel>
              <Input
                onChange={handleImgChange}
                name="residenceImage"
                id="residenceImage"
                placeholder="Image Adress"
                type="text"
                value={residenceInputData.img}
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
