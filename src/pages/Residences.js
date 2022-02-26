import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import PersonalizedSearchBar from "../components/Residences/PersonalizedSearchBar";
import ResidenceList from "../components/Residences/ResidenceList";

function Residences() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [filterData, setFilterData] = useState({
    city: null,
    residenceType: null,
    nrRooms: null,
  });
  const [sortData, setSortData] = useState();

  const onSubmitFilter = (query) => {
    setFilterData(query);
    onClose();
  };

  const onSortDataChange = (query) => {
    setSortData(query);
  };

  return (
    <>
      <PersonalizedSearchBar
        filterData={filterData}
        onSubmitFilter={onSubmitFilter}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onSortDataChange={onSortDataChange}
      />
      <ResidenceList />
    </>
  );
}

export default Residences;
