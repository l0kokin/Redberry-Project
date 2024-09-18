import { useEffect, useState } from "react";
import {
  CarouselContainer,
  SimiliarPropertiesContainer,
  SimiliarPropertyList,
} from "./SimiliarPropertiesStyles";
import { fetchData } from "../common/common";
import PropertyCard from "./PropertyCard";
import { ReactComponent as Back } from "../icons/back.svg";
import { ReactComponent as Next } from "../icons/next.svg";
import { useNavigate } from "react-router-dom";

function SimiliarProperties({ property }) {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleProperties = 4;

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % properties.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + properties.length) % properties.length
    );
  };

  const hanedlePropertyClick = (property) => {
    navigate(`/property/${property.id}`);
    window.scrollTo(0, 0);
  };

  return (
    <SimiliarPropertiesContainer>
      <h2>ბინები მსგავს ლოკაციაზე</h2>
      {properties.length === 0 ? (
        <h3>ამ ლოკაციაზე ბინები არ მოიძებნა</h3>
      ) : (
        <CarouselContainer>
          <button onClick={prevSlide} disabled={currentIndex === 0}>
            <Back />
          </button>
          <SimiliarPropertyList
            currentIndex={currentIndex}
            visibleProperties={visibleProperties}
          >
            {properties
              .slice(currentIndex, currentIndex + visibleProperties)
              .map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  onClick={() => hanedlePropertyClick(property)}
                />
              ))}
          </SimiliarPropertyList>
          <button onClick={nextSlide}>
            <Next />
          </button>
        </CarouselContainer>
      )}
    </SimiliarPropertiesContainer>
  );
}

export default SimiliarProperties;
