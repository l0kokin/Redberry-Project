import styled from "styled-components";
import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import fetchData from "../common/common";
import Filters from "../components/Filters";
import { Title } from "../components/FiltersStyles";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async () => {
    try {
      const data = await fetchData("real-estates");
      setProperties(data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div>
      <Filters />
      <PropertyListContainer>
        {properties.length > 0 ? (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <Title>განცხადება არ იძებნება</Title>
        )}
      </PropertyListContainer>
    </div>
  );
}

export default PropertyList;

const PropertyListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;
