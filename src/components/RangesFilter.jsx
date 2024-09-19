import { useState } from "react";
import ButtonChoose from "./ButtonChoose";
import {
  Title,
  Column,
  TitleSmall,
  Icon,
  Units,
  ValidationError,
} from "./FiltersStyles";

function RangesFilter({ type, icon, unit, onSave, onClose }) {
  const [range, setRange] = useState({ min: "", max: "" });
  const [error, setError] = useState("");

  const priceRanges = [];
  for (let i = 50000; i <= 300000; i += 50000) {
    const price = i.toLocaleString("en-US");
    priceRanges.push(price);
  }

  const areaRanges = [];
  for (let i = 40; i <= 230; i += 30) {
    const area = i.toLocaleString("en-US");
    areaRanges.push(area);
  }

  const handleInputChange = (e, type) => {
    const value = e.target.value.replace(/,/g, "");

    setRange((prevRange) => ({
      ...prevRange,
      [type]: value,
    }));
  };

  const handleOptionClick = (value, type) => {
    const valueNoCommas = value.replace(/,/g, "");
    setRange((prevRange) => {
      const updatedRange = { ...prevRange, [type]: valueNoCommas };

      if (
        updatedRange.min &&
        updatedRange.max &&
        parseInt(updatedRange.min) > parseInt(updatedRange.max)
      ) {
        setError("გთხოვთ შეიყვანოთ ვალიდური რიცხვები");
        return prevRange;
      }

      setError("");
      return updatedRange;
    });
  };

  const handleSave = () => {
    if (range.min && range.max && parseInt(range.min) > parseInt(range.max)) {
      setError("გთხოვთ შეიყვანოთ ვალიდური რიცხვები");
      return;
    }

    setError("");

    if (onSave) onSave(range);
    onClose();
  };

  const ranges = unit === "მ²" ? areaRanges : priceRanges;

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
          {ranges.map((value) => (
            <p
              key={value}
              className="text-small"
              onClick={() => handleOptionClick(value, "min")}
              style={{ cursor: "pointer" }}
            >
              {value} {icon}
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
          {ranges.map((value) => (
            <p
              key={value}
              className="text-small"
              onClick={() => handleOptionClick(value, "max")}
              style={{ cursor: "pointer" }}
            >
              {value} {icon}
            </p>
          ))}
        </Column>
      </Units>
      {error && (
        <ValidationError className="text-small">{error}</ValidationError>
      )}
      <ButtonChoose onClick={handleSave} />
    </>
  );
}

export default RangesFilter;
