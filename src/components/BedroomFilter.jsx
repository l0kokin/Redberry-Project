import { useState } from "react";
import { ButtonsContainer, NumBedrooms, Title } from "./FiltersStyles";
import ButtonChoose from "./ButtonChoose";

function BedroomFilter({ onClose, onSave }) {
  const [selectedBedroom, setSelectedBedroom] = useState(null);

  const handleBedroomSelect = (bedroomCount) => {
    bedroomCount === selectedBedroom
      ? setSelectedBedroom(null)
      : setSelectedBedroom(bedroomCount);
  };

  const handleSave = () => {
    if (onSave) onSave(selectedBedroom);
    onClose();
  };

  return (
    <>
      <Title>საძინებლების რაოდენობა</Title>
      <ButtonsContainer>
        {[1, 2, 3, 4, 5].map((count) => (
          <NumBedrooms
            className="text-small"
            key={count}
            onClick={() => handleBedroomSelect(count)}
            isselected={selectedBedroom === count}
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
