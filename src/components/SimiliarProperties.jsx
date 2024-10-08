import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../common/common";
import { ReactComponent as Back } from "../icons/back.svg";
import { ReactComponent as Next } from "../icons/next.svg";
import {
  ButtonNext,
  ButtonPrev,
  CarouselContainer,
  SimiliarPropertiesContainer,
  SimiliarPropertyList,
} from "./SimiliarPropertiesStyles";
import PropertyCard from "./PropertyCard";

function SimiliarProperties({ property }) {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [currentindex, setCurrentindex] = useState(0);
  const visibleproperties = 4;

  const fetchProperties = async () => {
    try {
      const data = await fetchData("real-estates");

      const filteredProperties = data.filter(
        (p) =>
          p.city.region.id === property.city.region.id && p.id !== property.id
      );
      setProperties(filteredProperties);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, [property]);

  const nextSlide = () => {
    setCurrentindex((prevIndex) => (prevIndex + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentindex(
      (prevIndex) => (prevIndex - 1 + properties.length) % properties.length
    );
  };

  const hanedlePropertyClick = (property) => {
    navigate(`/property/${property.id}`);
  };

  return (
    <SimiliarPropertiesContainer>
      <h2>ბინები მსგავს ლოკაციაზე</h2>
      {properties.length === 0 ? (
        <h3 className="text-large">ამ ლოკაციაზე ბინები არ მოიძებნა</h3>
      ) : (
        <CarouselContainer>
          <ButtonPrev onClick={prevSlide} disabled={currentindex === 0}>
            <Back />
          </ButtonPrev>
          <SimiliarPropertyList>
            {properties
              .slice(currentindex, currentindex + visibleproperties)
              .map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onClick={() => hanedlePropertyClick(property)}
                />
              ))}
          </SimiliarPropertyList>
          <ButtonNext onClick={nextSlide}>
            <Next />
          </ButtonNext>
        </CarouselContainer>
      )}
    </SimiliarPropertiesContainer>
  );
}

export default SimiliarProperties;
