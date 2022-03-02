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

const sortResidencesApi = "http://localhost/residence/src/apis/sort.php";
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
    const fetchSortedResidences = async () => {
      try {
        const response = await axios.post(sortResidencesApi, {
          type: query.toUpperCase(),
        });
        setResidencesData(response.data);
        console.log(response);

        console.log(query.toUpperCase());
      } catch (err) {
        console.log(err);
      }
    };

    fetchSortedResidences();
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
