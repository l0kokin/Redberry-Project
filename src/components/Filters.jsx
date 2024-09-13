import ButtonOrange from "./ButtonOrange";
import ButtonWhite from "./ButtonWhite";
import {
  Buttons,
  Filter,
  FiltersContainer,
  Container,
  ModalContent,
} from "./FiltersStyles";
import { ReactComponent as DownArrow } from "../icons/down.svg";
import { useEffect, useRef, useState } from "react";
import RegionFilter from "./RegionFilter";
import BedroomFilter from "./BedroomFilter";
import RangesFilter from "./RangesFilter";

function Filters() {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const modalRef = useRef();

  const handleFilterClick = (filterType) => {
    setActiveModal((prevState) =>
      prevState === filterType ? null : filterType
    );
  };

  const handleSaveRegions = (regions) => {
    setSelectedRegions(regions);
    console.log("Selected Regions:", regions);
  };

  // Closing Modal when clicking outside
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

        {activeModal === "region" && (
          <ModalContent ref={modalRef}>
            <RegionFilter
              onClose={() => setActiveModal(null)}
              onSave={handleSaveRegions}
            />
          </ModalContent>
        )}

        {activeModal === "price" && (
          <ModalContent ref={modalRef} left={"30.6rem"}>
            <RangesFilter
              onClose={() => setActiveModal(null)}
              type={"ფასის"}
              icon={"₾"}
              unit={"ფასი"}
            />
          </ModalContent>
        )}

        {activeModal === "area" && (
          <ModalContent ref={modalRef} left={"52.9rem"}>
            <RangesFilter
              onClose={() => setActiveModal(null)}
              type={"ფართობის"}
              icon={"მ²"}
              unit={"მ²"}
            />
          </ModalContent>
        )}

        {activeModal === "bedroom" && (
          <ModalContent ref={modalRef} left={"67.9rem"}>
            <BedroomFilter onClose={() => setActiveModal(null)} />
          </ModalContent>
        )}
      </Container>

      <div>
        {selectedRegions.length > 0 &&
          selectedRegions.map((region) => {
            return <p>{region}</p>;
          })}
      </div>
    </>
  );
}

export default Filters;
