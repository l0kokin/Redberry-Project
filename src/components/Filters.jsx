import ButtonOrange from "./ButtonOrange";
import ButtonWhite from "./ButtonWhite";
import {
  Buttons,
  Filter,
  FiltersContainer,
  Container,
  ModalOverlay,
  ModalContent,
} from "./FiltersStyles";
import { ReactComponent as DownArrow } from "../icons/down.svg";
import { useEffect, useRef, useState } from "react";
import RegionFilter from "./RegionFilter";

function Filters() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const modalRef = useRef();

  const handleRegionClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  // Closing Modal when clicking outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalVisible(false);
    }
  };

  useEffect(() => {
    if (isModalVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalVisible]);

  return (
    <Container>
      <FiltersContainer>
        <Filter onClick={handleRegionClick}>
          <p>რეგიონი</p>
          <DownArrow />
        </Filter>
        <Filter>
          <p>საფასო კატეგორია</p>
          <DownArrow />
        </Filter>
        <Filter>
          <p>ფართობი</p>
          <DownArrow />
        </Filter>
        <Filter>
          <p>საძინებლების რაოდენობა</p>
          <DownArrow />
        </Filter>
      </FiltersContainer>

      <Buttons>
        <ButtonOrange />
        <ButtonWhite />
      </Buttons>

      {isModalVisible && (
        <ModalOverlay>
          <ModalContent ref={modalRef}>
            <RegionFilter onClose={() => setIsModalVisible(false)} />
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

export default Filters;
