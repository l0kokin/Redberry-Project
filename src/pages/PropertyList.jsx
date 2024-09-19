import styled from "styled-components";
import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";
import { fetchData } from "../common/common";
import Filters from "../components/Filters";
import { useFilters } from "../contexts/FilterContext";

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const { filters } = useFilters();

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

  const filterProperties = (properties) => {
    return (
      properties.filter((property) => {
        const matchesRegion =
          filters.selectedRegions.length !== 0 &&
          filters.selectedRegions.includes(property.city.region.name);
        const matchesBedrooms =
          filters.selectedBedrooms !== null &&
          filters.selectedBedrooms === property.bedrooms;
        const matchesPriceRange =
          filters.selectedPriceRange !== null &&
          property.price >= filters.selectedPriceRange.min &&
          property.price <= filters.selectedPriceRange.max;
        const matchesAreaRange =
          filters.selectedAreaRange !== null &&
          property.area >= filters.selectedAreaRange.min &&
          property.area <= filters.selectedAreaRange.max;

        return (
          matchesRegion ||
          matchesBedrooms ||
          matchesPriceRange ||
          matchesAreaRange
        );
      }) || []
    );
  };

  const appliedFiltersExist = (filters) => {
    return (
      filters.selectedRegions.length > 0 ||
      filters.selectedBedrooms !== null ||
      filters.selectedPriceRange !== null ||
      filters.selectedAreaRange !== null
    );
  };

  const filteredProperties = filterProperties(properties);

  return (
    <div>
      <Filters />
      <PropertyListContainer>
        {filteredProperties.length === 0 && appliedFiltersExist(filters) ? (
          <ErrorMessage className="text-large">
            აღნიშნული მონაცემებით განცხადება არ იძებნება
          </ErrorMessage>
        ) : Array.isArray(filteredProperties) &&
          filteredProperties.length >= 1 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          properties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
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
  margin-bottom: 15rem;
`;

const ErrorMessage = styled.p`
  white-space: nowrap;
  margin-top: 6.5rem;
  color: rgba(2, 21, 38, 0.8);
`;
