import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  Stack,
} from "@chakra-ui/react";
import React from "react";

function Filter({ isOpen, onClose, onSubmitFilter }) {
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    onSubmitFilter({
      city: e.target.city.value,
      residenceType: e.target.residenceType.value,
      nrRooms: e.target.nrRooms.value,
    });
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Filtro të dhënat</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleFilterSubmit} style={{ width: "80%" }}>
            <FormControl my={5} isRequired>
              <FormLabel>Qyteti</FormLabel>
              <Input
                name="city"
                id="city"
                placeholder="Qyteti"
                type="text"
              />{" "}
            </FormControl>

            <FormControl my={5}>
              <FormLabel>Tipi i residences</FormLabel>
              <Stack spacing={3}>
                <Select
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

            <FormControl my={5}>
              <FormLabel>Nr i dhomave</FormLabel>
              <RadioGroup name="nrRooms" id="nrRooms" defaultValue="1">
                <Stack spacing={5} direction="row">
                  <Radio colorScheme="green" value="1">
                    Të gjitha
                  </Radio>
                  <Radio colorScheme="red" value="2">
                    1
                  </Radio>
                  <Radio colorScheme="red" value="3">
                    2+
                  </Radio>
                </Stack>
              </RadioGroup>{" "}
            </FormControl>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Gjejë residencën
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default Filter;
