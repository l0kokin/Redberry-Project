import React, { createContext, useState, useContext } from "react";

const FilterContext = createContext();

export const useFilters = () => useContext(FilterContext);

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    selectedRegions: [],
    selectedBedrooms: null,
    selectedPriceRange: null,
    selectedAreaRange: null,
  });

  return (
    <FilterContext.Provider value={{ filters, setFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
