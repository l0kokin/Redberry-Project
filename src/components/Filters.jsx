import ButtonOrange from "./ButtonOrange";
import ButtonWhite from "./ButtonWhite";
import {
  Buttons,
  Filter,
  FiltersContainer,
  Container,
  ModalContent,
  AppliedFilter,
  CloseButton,
  AppliedFiltersContainer,
} from "./FiltersStyles";
import { ReactComponent as DownArrow } from "../icons/down.svg";
import { ReactComponent as CloseBtn } from "../icons/close.svg";
import { useEffect, useRef, useState } from "react";
import RegionFilter from "./RegionFilter";
import BedroomFilter from "./BedroomFilter";
import RangesFilter from "./RangesFilter";

function Filters() {
  const [activeModal, setActiveModal] = useState(null);
  const [filters, setFilters] = useState({
    selectedRegions: [],
    selectedBedrooms: null,
    selectedPriceRange: null,
    selectedAreaRange: null,
  });
  const modalRef = useRef();

  const handleFilterClick = (filterType) => {
    setActiveModal((prevState) =>
      prevState === filterType ? null : filterType
    );
  };

  const updateFilter = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  const handleDeleteFilter = (filterType, valueToDelete) => {
    setFilters((prevFilters) => {
      let updatedFilter;
      if (Array.isArray(prevFilters[filterType])) {
        updatedFilter = prevFilters[filterType].filter(
          (item) => item !== valueToDelete
        );
      } else {
        updatedFilter = null;
      }
      return {
        ...prevFilters,
        [filterType]: updatedFilter,
      };
    });
  };

  const appliedFilters = [
    ...filters.selectedRegions,
    filters.selectedBedrooms && `${filters.selectedBedrooms}`,
    filters.selectedPriceRange &&
      filters.selectedPriceRange.min !== undefined &&
      filters.selectedPriceRange.max !== undefined &&
      `${filters.selectedPriceRange.min}₾ - ${filters.selectedPriceRange.max}₾`,
    filters.selectedAreaRange &&
      `${filters.selectedAreaRange.min}მ² - ${filters.selectedAreaRange.max}მ²`,
  ].filter(Boolean);

  // Closing filters modal when clicking outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setActiveModal(null);
    }
  };

  useEffect(() => {
    if (activeModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeModal]);

  return (
    <>
      <Container>
        <FiltersContainer>
          <Filter onClick={() => handleFilterClick("region")}>
            <p>რეგიონი</p>
            <DownArrow />
          </Filter>
          <Filter onClick={() => handleFilterClick("price")}>
            <p>საფასო კატეგორია</p>
            <DownArrow />
          </Filter>
          <Filter onClick={() => handleFilterClick("area")}>
            <p>ფართობი</p>
            <DownArrow />
          </Filter>
          <Filter onClick={() => handleFilterClick("bedroom")}>
            <p>საძინებლების რაოდენობა</p>
            <DownArrow />
          </Filter>
        </FiltersContainer>

        <Buttons>
          <ButtonOrange />
          <ButtonWhite />
        </Buttons>

        {/* Region filter */}
        {activeModal === "region" && (
          <ModalContent ref={modalRef}>
            <RegionFilter
              onClose={() => setActiveModal(null)}
              onSave={(regions) => updateFilter("selectedRegions", regions)}
            />
          </ModalContent>
        )}

        {/* Price filter */}
        {activeModal === "price" && (
          <ModalContent ref={modalRef} left={"30.6rem"}>
            <RangesFilter
              onClose={() => setActiveModal(null)}
              onSave={(range) => updateFilter("selectedPriceRange", range)}
              type={"ფასის"}
              icon={"₾"}
              unit={"ფასი"}
            />
          </ModalContent>
        )}

        {/* Area filter */}
        {activeModal === "area" && (
          <ModalContent ref={modalRef} left={"52.9rem"}>
            <RangesFilter
              onClose={() => setActiveModal(null)}
              onSave={(range) => updateFilter("selectedAreaRange", range)}
              type={"ფართობის"}
              icon={"მ²"}
              unit={"მ²"}
            />
          </ModalContent>
        )}

        {/* Number of bedrooms filter */}
        {activeModal === "bedroom" && (
          <ModalContent ref={modalRef} left={"67.9rem"}>
            <BedroomFilter
              onClose={() => setActiveModal(null)}
              onSave={(bedrooms) => updateFilter("selectedBedrooms", bedrooms)}
            />
          </ModalContent>
        )}
      </Container>

      <AppliedFiltersContainer>
        {appliedFilters.map((filter, index) => {
          const filterType = filter.includes("₾")
            ? "selectedPriceRange"
            : filter.includes("მ²")
            ? "selectedAreaRange"
            : filters.selectedBedrooms === Number(filter)
            ? "selectedBedrooms"
            : filters.selectedRegions.includes(filter)
            ? "selectedRegions"
            : null;

          return (
            <AppliedFilter key={index}>
              {filter}
              <CloseButton
                onClick={() =>
                  filterType && handleDeleteFilter(filterType, filter)
                }
              >
                <CloseBtn />
              </CloseButton>
            </AppliedFilter>
          );
        })}
      </AppliedFiltersContainer>
    </>
  );
}

export default Filters;
