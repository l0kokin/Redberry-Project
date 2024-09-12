import styled from "styled-components";
import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import fetchData from "../common/common";
import Filters from "../components/Filters";

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
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </PropertyListContainer>
    </div>
  );
}

export default PropertyList;

const PropertyListContainer = styled.div`
  margin: 7.7rem 16.2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;
