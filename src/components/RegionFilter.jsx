import { useEffect, useState } from "react";
import fetchData from "../common/common";
import {
  ButtonContainer,
  Region,
  RegionsContainer,
  Title,
} from "./RegionFilterStyles";
import { Button } from "./ButtonStyles";
import { colors } from "../colors";

function RegionFilter({ visible, onClose }) {
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

  const handleCheckboxChange = (regionId) => {
    setSelectedRegions((prevSelected) =>
      prevSelected.includes(regionId)
        ? prevSelected.filter((id) => id !== regionId)
        : [...prevSelected, regionId]
    );
  };

  return (
    <>
      <Title>რეგიონის მიხედვით</Title>
      <RegionsContainer visible={visible}>
        {regions.map((region) => (
          <Region key={region.id}>
            <input
              type="checkbox"
              checked={selectedRegions.includes(region.id)}
              onChange={() => handleCheckboxChange(region.id)}
            />
            {region.name}
          </Region>
        ))}
      </RegionsContainer>

      <ButtonContainer>
        <Button
          backColor={colors.orange}
          textColor={colors.white}
          hoverColor={colors.orange_dark}
        >
          <p>არჩევა</p>
        </Button>
      </ButtonContainer>
    </>
  );
}

export default RegionFilter;
