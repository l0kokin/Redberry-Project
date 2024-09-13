import { useState } from "react";
import { colors } from "../colors";
import { Button } from "./ButtonStyles";
import {
  ButtonContainer,
  ButtonsContainer,
  NumBedrooms,
  Title,
} from "./FiltersStyles";

function BedroomFilter({ onClose, onSave }) {
  const [selectedBedrooms, setSelectedBedrooms] = useState([]);

  const handleBedroomSelect = (bedroomCount) => {
    setSelectedBedrooms(bedroomCount);
  };

  const handleSave = () => {
    if (onSave) onSave(selectedBedrooms);
    console.log("Selected Bedrooms:", selectedBedrooms);
    onClose();
  };

  return (
    <>
      <Title>საძინებლების რაოდენობა</Title>
      <ButtonsContainer>
        {[1, 2, 3, 4, 5].map((count) => (
          <NumBedrooms
            key={count}
            onClick={() => handleBedroomSelect(count)}
            isSelected={selectedBedrooms === count}
          >
            {count}
          </NumBedrooms>
        ))}
      </ButtonsContainer>
      <ButtonContainer>
        <Button
          back_color={colors.orange}
          text_color={colors.white}
          padding={"0.8rem 1.4rem"}
          hover_color={colors.orange_dark}
          onClick={handleSave}
        >
          <p>არჩევა</p>
        </Button>
      </ButtonContainer>
    </>
  );
}

export default BedroomFilter;
