import { useEffect, useState } from "react";
import {
  CarouselContainer,
  SimiliarPropertiesContainer,
  SimiliarPropertyList,
} from "./SimiliarPropertiesStyles";
import fetchData from "../common/common";
import PropertyCard from "./PropertyCard";
import { ReactComponent as Back } from "../icons/back.svg";
import { ReactComponent as Next } from "../icons/next.svg";

function SimiliarProperties() {
  // Better to reformat this
  const [properties, setProperties] = useState([]);
  const [displayProperties, setDisplayProperties] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchProperties = async () => {
    try {
      const data = await fetchData("real-estates");
      setProperties(data);
      setDisplayProperties([...data, ...data]);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const visibleProperties = 4;
  const allProperties = properties.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % displayProperties.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + displayProperties.length) % displayProperties.length
    );
  };

  return (
    <SimiliarPropertiesContainer>
      <h2>ბინები მსგავს ლოკაციაზე</h2>
      <CarouselContainer>
        <button onClick={prevSlide}>
          <Back />
        </button>
        <SimiliarPropertyList
          currentIndex={currentIndex}
          visibleProperties={visibleProperties}
          allProperties={allProperties}
        >
          {displayProperties
            .slice(currentIndex, currentIndex + visibleProperties)
            .map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
        </SimiliarPropertyList>
        <button onClick={nextSlide}>
          <Next />
        </button>
      </CarouselContainer>
    </SimiliarPropertiesContainer>
  );
}

export default SimiliarProperties;
