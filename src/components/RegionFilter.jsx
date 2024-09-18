import { useEffect, useState } from "react";
import { fetchData } from "../common/common";
import {
  Region,
  RegionsContainer,
  Title,
  StyledCheckbox,
} from "./FiltersStyles";
import ButtonChoose from "./ButtonChoose";

function RegionFilter({ visible, onClose, onSave }) {
  const [regions, setRegions] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const fetchRegions = async () => {
    try {
      const data = await fetchData("regions");
      setRegions(data);
    } catch (error) {
      console.error("Error fetching regions:", error);
    }
  };

  useEffect(() => {
    fetchRegions();
  }, []);

  const handleCheckboxChange = (region) => {
    setSelectedRegions((prevSelected) =>
      prevSelected.includes(region)
        ? prevSelected.filter((name) => name !== region)
        : [...prevSelected, region]
    );
  };

  const handleSave = () => {
    if (onSave) onSave(selectedRegions);
    onClose();
  };

  return (
    <>
      <Title>რეგიონის მიხედვით</Title>
      <RegionsContainer visible={visible}>
        {regions.map((region) => (
          <Region className="text-small" key={region.id}>
            <StyledCheckbox
              type="checkbox"
              checked={selectedRegions.includes(region.name)}
              onChange={() => handleCheckboxChange(region.name)}
            />
            {region.name}
          </Region>
        ))}
      </RegionsContainer>

      <ButtonChoose onClick={handleSave} />
    </>
  );
}

export default RegionFilter;
