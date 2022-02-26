import {
  Button,
  Center,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

function Ofro() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    residenceType: "",
    nrRooms: "",
    residenceSize: "",
    price: "",
    city: "",
    neighborhood: "",
    street: "",
    tel: "",
    image: "",
    residenceImage: "",
  });

  //   const canSubmit =
  //     formData.title !== "" &&
  //     formData.description !== "" &&
  //     formData.residenceType !== "" &&
  //     formData.nrRooms !== "" &&
  //     formData.residenceSize !== "" &&
  //     formData.price !== "" &&
  //     formData.city !== "" &&
  //     formData.neighborhood !== "" &&
  //     formData.street !== "" &&
  //     formData.tel !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      title: e.target.description.value,
      description: e.target.title.value,
      residenceType: e.target.residenceType.value,
      nrRooms: e.target.nrRooms.value,
      residenceSize: e.target.residenceSize.value,
      price: e.target.price.value,
      city: e.target.city.value,
      neighborhood: e.target.neighborhood.value,
      street: e.target.street.value,
      tel: e.target.tel.value,
      residenceImage: e.target.residenceImage?.value,
    });
  };

  return (
    <Container maxWidth="600px" my={10} centerContent>
      <Heading my={15} fontWeight="medium">
        Ofro Residence
      </Heading>

      <form onSubmit={handleSubmit} style={{ width: "80%" }}>
        <FormControl isRequired my={3}>
          <FormLabel>Titulli</FormLabel>
          <Input
            name="title"
            id="title"
            placeholder="Titulli"
            type="text"
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
          />
        </FormControl>

        <FormControl isRequired my={5}>
          <FormLabel>Tipi i residences</FormLabel>
          <Stack spacing={3}>
            <Select
              width="150px"
              defaultValue="1"
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
          />
        </FormControl>

        <FormControl isRequired my={3}>
          <FormLabel>Hapësira në m2 (number)</FormLabel>
          <Input
            name="residenceSize"
            id="residenceSize"
            placeholder="75"
            type="number"
          />{" "}
        </FormControl>

        <FormControl isRequired my={3}>
          <FormLabel>Cmimi per muaj (number)</FormLabel>
          <Input name="price" id="price" placeholder="250" type="number" />{" "}
        </FormControl>

        <FormControl isRequired my={3}>
          <FormLabel>Qyteti</FormLabel>
          <Input name="city" id="city" placeholder="Qyteti" type="text" />
        </FormControl>

        <FormControl isRequired my={3}>
          <FormLabel>Lagjia</FormLabel>
          <InputGroup>
            <Input
              name="neighborhood"
              id="neighborhood"
              placeholder="Lagjia e residences"
              type="text"
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
          />
        </FormControl>

        <FormControl isRequired my={3}>
          <FormLabel>Numri Kontaktues (tel)</FormLabel>
          <Input name="tel" id="tel" placeholder="049111111" type="text" />
        </FormControl>

        <FormControl my={8}>
          <FormLabel>Imazhi Residences</FormLabel>
          <input name="residenceImage" id="residenceImage" type="file" />
          <FormHelperText>opsionale*</FormHelperText>
        </FormControl>
        <Center>
          <Button type="submit" colorScheme="teal">
            Ofro Residencen
          </Button>
        </Center>
      </form>
    </Container>
  );
}

export default Ofro;
