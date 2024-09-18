import { useState } from "react";
import ButtonChoose from "./ButtonChoose";
import { Title, Column, TitleSmall, Icon, Units } from "./FiltersStyles";

function RangesFilter({ type, icon, unit, onSave, onClose }) {
  const [range, setRange] = useState({ min: "", max: "" });

  const priceRanges = [];
  for (let i = 50000; i <= 300000; i += 50000) {
    const price = i.toLocaleString("en-US");
    priceRanges.push(price);
  }

  const handleInputChange = (e, type) => {
    const value = e.target.value;
    setRange((prevRange) => ({
      ...prevRange,
      [type]: value,
    }));
  };

  const handleSave = () => {
    if (onSave) onSave(range);
    onClose();
  };

  return (
    <>
      <Title>{type} მიხედვით</Title>
      <Units>
        <Column>
          <input
            placeholder="დან"
            value={range.min}
            onChange={(e) => handleInputChange(e, "min")}
          />
          <Icon>{icon}</Icon>
          <TitleSmall>მინ. {unit}</TitleSmall>
          {priceRanges.map((price) => (
            <p className="text-small">
              {price} {icon}
            </p>
          ))}
        </Column>
        <Column>
          <input
            placeholder="მდე"
            value={range.max}
            onChange={(e) => handleInputChange(e, "max")}
          />
          <Icon>{icon}</Icon>
          <TitleSmall>მაქს. {unit}</TitleSmall>
          {priceRanges.map((price) => (
            <p className="text-small">
              {price} {icon}
            </p>
          ))}
        </Column>
      </Units>
      <ButtonChoose onClick={handleSave} />
    </>
  );
}

export default RangesFilter;
