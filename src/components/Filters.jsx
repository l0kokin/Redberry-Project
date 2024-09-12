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
import PriceFilter from "./PriceFilter";
import AreaFilter from "./AreaFilter";
import BedroomFilter from "./BedroomFilter";

function Filters() {
  const [isRegionModalVisible, setIsRegionModalVisible] = useState(false);
  const [isPriceModalVisible, setIsPriceModalVisible] = useState(false);
  const [isAreaModalVisible, setIsAreaModalVisible] = useState(false);
  const [isBedroomModalVisible, setIsBedroomModalVisible] = useState(false);
  const modalRef = useRef();

  const handleFilterClick = (event, setFilter) => {
    setFilter((prevState) => setFilter(!prevState));
  };

  // Closing Modal when clicking outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsRegionModalVisible(false);
      setIsPriceModalVisible(false);
      setIsAreaModalVisible(false);
      setIsBedroomModalVisible(false);
    }
  };

  useEffect(() => {
    if (
      isRegionModalVisible ||
      isAreaModalVisible ||
      isPriceModalVisible ||
      isBedroomModalVisible
    ) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [
    isRegionModalVisible,
    isAreaModalVisible,
    isPriceModalVisible,
    isBedroomModalVisible,
  ]);

  return (
    <Container>
      <FiltersContainer>
        <Filter onClick={(e) => handleFilterClick(e, setIsRegionModalVisible)}>
          <p>რეგიონი</p>
          <DownArrow />
        </Filter>
        <Filter onClick={(e) => handleFilterClick(e, setIsPriceModalVisible)}>
          <p>საფასო კატეგორია</p>
          <DownArrow />
        </Filter>
        <Filter onClick={(e) => handleFilterClick(e, setIsAreaModalVisible)}>
          <p>ფართობი</p>
          <DownArrow />
        </Filter>
        <Filter onClick={(e) => handleFilterClick(e, setIsBedroomModalVisible)}>
          <p>საძინებლების რაოდენობა</p>
          <DownArrow />
        </Filter>
      </FiltersContainer>

      <Buttons>
        <ButtonOrange />
        <ButtonWhite />
      </Buttons>

      {isRegionModalVisible && (
        <ModalContent ref={modalRef}>
          <RegionFilter onClose={() => setIsRegionModalVisible(false)} />
        </ModalContent>
      )}

      {isPriceModalVisible && (
        <ModalContent ref={modalRef} left={"30.6rem"}>
          <PriceFilter onClose={() => setIsPriceModalVisible(false)} />
        </ModalContent>
      )}

      {isAreaModalVisible && (
        <ModalContent ref={modalRef} left={"52.9rem"}>
          <AreaFilter onClose={() => setIsAreaModalVisible(false)} />
        </ModalContent>
      )}

      {isBedroomModalVisible && (
        <ModalContent ref={modalRef} left={"67.9rem"}>
          <BedroomFilter onClose={() => setIsBedroomModalVisible(false)} />
        </ModalContent>
      )}
    </Container>
  );
}

export default Filters;
