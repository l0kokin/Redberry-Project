import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useFilters, useAgentModal } from "../contexts";
import { ReactComponent as DownArrow } from "../icons/down.svg";
import { ReactComponent as CloseBtn } from "../icons/close.svg";
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
  ButtonClear,
} from "./FiltersStyles";
import RegionFilter from "./RegionFilter";
import BedroomFilter from "./BedroomFilter";
import RangesFilter from "./RangesFilter";
import AddAgentModal from "./AddAgentModal";

function Filters() {
  const { filters, setFilters } = useFilters();
  const { isAgentModalOpen, setIsAgentModalOpen } = useAgentModal();
  const [activeModal, setActiveModal] = useState(null);
  const filterModalRef = useRef();
  const agentModalRef = useRef();

  const handleFilterClick = (filterType) => {
    setActiveModal((prevState) =>
      prevState === filterType ? null : filterType
    );
  };

  const updateFilter = (filterType, value) => {
    setFilters((prevFilters) => {
      const newFilters = {
        ...prevFilters,
        [filterType]: value,
      };
      localStorage.setItem("filters", JSON.stringify(newFilters));
      return newFilters;
    });
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
      const newFilters = {
        ...prevFilters,
        [filterType]: updatedFilter,
      };
      localStorage.setItem("filters", JSON.stringify(newFilters));
      return newFilters;
    });
  };

  const handleDeleteAllFilters = () => {
    const clearedFilters = {
      selectedRegions: [],
      selectedBedrooms: null,
      selectedPriceRange: null,
      selectedAreaRange: null,
    };

    setFilters(clearedFilters);
    localStorage.setItem("filters", JSON.stringify(clearedFilters));
  };

  useEffect(() => {
    const savedFilters = JSON.parse(localStorage.getItem("filters"));
    if (savedFilters) {
      setFilters(savedFilters);
    }
  }, [setFilters]);

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

  // Closing modals when clicking outside
  const handleClickOutside = (event) => {
    if (
      filterModalRef.current &&
      !filterModalRef.current.contains(event.target)
    ) {
      setActiveModal(null);
    }

    if (
      agentModalRef.current &&
      !agentModalRef.current.contains(event.target)
    ) {
      setIsAgentModalOpen(false);
    }
  };

  useEffect(() => {
    if (activeModal || isAgentModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeModal, isAgentModalOpen]);

  // handling agent modal opening
  const handleClickAddAgent = () => {
    setIsAgentModalOpen(true);
  };

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
          <Link to="/addListing">
            <ButtonOrange />
          </Link>
          <ButtonWhite onClick={handleClickAddAgent} />
        </Buttons>

        {/* Region filter */}
        {activeModal === "region" && (
          <ModalContent ref={filterModalRef}>
            <RegionFilter
              onClose={() => setActiveModal(null)}
              onSave={(regions) => updateFilter("selectedRegions", regions)}
            />
          </ModalContent>
        )}

        {/* Price filter */}
        {activeModal === "price" && (
          <ModalContent ref={filterModalRef} $left={"30.6rem"}>
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
          <ModalContent ref={filterModalRef} $left={"52.9rem"}>
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
          <ModalContent ref={filterModalRef} $left={"67.9rem"}>
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
            <AppliedFilter className="text-small" key={index}>
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

        {appliedFilters.length > 0 && (
          <ButtonClear onClick={handleDeleteAllFilters} className="text-small">
            გასუფთავება
          </ButtonClear>
        )}
      </AppliedFiltersContainer>

      {/* Add agent modal */}
      {isAgentModalOpen && <AddAgentModal modalRef={agentModalRef} />}
    </>
  );
}

export default Filters;
