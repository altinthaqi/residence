import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import FilterSearchBar from "../components/Residences/FilterSearchBar";

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
      <FilterSearchBar
        filterData={filterData}
        onSubmitFilter={onSubmitFilter}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        onSortDataChange={onSortDataChange}
      />
    </>
  );
}

export default Residences;
