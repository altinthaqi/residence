import {
  Button,
  Container,
  HStack,
  Select,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FilterModal from "./FilterModal";

function FilterSearchBar({
  filterData,
  onSubmitFilter,
  onClose,
  isOpen,
  onOpen,
  onSortDataChange,
}) {
  let hasFiltered =
    filterData.city !== null &&
    filterData.residenceType !== null &&
    filterData.nrRooms !== null;

  let viewFilteredNrRooms;
  switch (filterData.nrRooms) {
    case "1":
      viewFilteredNrRooms = "gjitha dhomat";
      break;
    case "2":
      viewFilteredNrRooms = "1 dhomë";
      break;
    case "3":
      viewFilteredNrRooms = "2+ dhoma";
      break;
    default:
      viewFilteredNrRooms = "";
  }

  let viewFilteredData = `${filterData.city}, ${
    filterData.residenceType == 1 ? "Banese" : "Shtepi"
  }, ${viewFilteredNrRooms}`;

  const handleSortData = (e) => {
    onSortDataChange(e.target.value);
  };

  return (
    <Container
      maxW="container.xl"
      style={{ minHeight: "100px", height: "100px" }}
    >
      <HStack height="100%">
        <Text height="100%" mt={12} fontWeight="medium">
          {hasFiltered ? viewFilteredData : "You're viewing relevant data"}
        </Text>
        <Spacer />
        <Button onClick={onOpen}>Filtro</Button>

        <FilterModal
          onSubmitFilter={onSubmitFilter}
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
        />

        <Select onChange={handleSortData} variant="filled" maxW="200px">
          <option value="default">Default</option>
          <option value="asc">Lirë {">"} Shtrenjtë</option>
          <option value="desc">Shtrenjtë {">"} Lirë</option>
        </Select>
      </HStack>
    </Container>
  );
}

export default FilterSearchBar;
