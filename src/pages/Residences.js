import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PersonalizedSearchBar from "../components/Residences/PersonalizedSearchBar";
import ResidenceList from "../components/Residences/ResidenceList";

const fetchAllResidencesApi =
  "http://localhost/residence/src/apis/residences.php";

const fetchFilteredResidencesApi =
  "http://localhost/residence/src/apis/filteredResidences.php";
function Residences() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();
  const [filterData, setFilterData] = useState({
    city: null,
    residenceType: null,
    nrRooms: null,
  });
  const [sortData, setSortData] = useState();

  const [residencesData, setResidencesData] = useState([]);

  useEffect(() => {
    const fetchResidences = async () => {
      try {
        const response = await axios.get(fetchAllResidencesApi);
        setResidencesData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchResidences();
  }, [id]);

  const onSubmitFilter = (query) => {
    setFilterData(query);

    const fetchFilteredResidences = async () => {
      try {
        const response = await axios.post(fetchFilteredResidencesApi, query);
        setResidencesData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchFilteredResidences();
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
      <ResidenceList residencesData={residencesData} />
    </>
  );
}

export default Residences;
