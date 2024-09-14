import { useState } from "react";
import { ButtonsContainer, NumBedrooms, Title } from "./FiltersStyles";
import ButtonChoose from "./ButtonChoose";

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
      <ButtonChoose onClick={handleSave} />
    </>
  );
}

export default BedroomFilter;
