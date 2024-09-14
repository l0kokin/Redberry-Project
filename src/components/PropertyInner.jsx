import { Info, PropertyContainer } from "./PropertyInnerStyles";
import { ReactComponent as Back } from "../icons/back.svg";
import { useNavigate } from "react-router-dom";
import { InfoContainer, SaleRent } from "./PropertyCardStyles";
import { ReactComponent as LocationIcon } from "../icons/location.svg";
import { ReactComponent as BedIcon } from "../icons/bed.svg";
import { ReactComponent as AreaIcon } from "../icons/area.svg";
import { ReactComponent as ZipCodeIcon } from "../icons/zip.svg";
import AgentCard from "./AgentCard";

function PropertyInner({ property }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <button onClick={handleBackClick}>
        <Back />
      </button>
      <PropertyContainer to={`/property/${property.id}`}>
        <img src={property.image} alt="a home" />
        <SaleRent
          top={"4.1rem"}
          left={"4.1rem"}
          font={"2rem"}
          padding={"1rem 2.65rem"}
        >
          {property.is_rental ? "ქირავდება" : "იყიდება"}
        </SaleRent>
        <InfoContainer>
          <h1>{property.price} ₾</h1>
          <Info>
            <LocationIcon />
            {property.address}
          </Info>
          <Info>
            <AreaIcon />
            ფართი {property.area} მ²
          </Info>
          <Info>
            <BedIcon />
            საძინებელი {property.bedrooms}
          </Info>
          <Info>
            <ZipCodeIcon />
            საფოსტო ინდექსი {property.zip_code}
          </Info>
          <p>{property.description}</p>
          <AgentCard agent={property.agent} />
        </InfoContainer>
      </PropertyContainer>
    </>
  );
}

export default PropertyInner;

/* 
  {
      <PropertyDetails>
  <InfoContainer>
    <AdditionalInfo>
    </AdditionalInfo>
  </InfoContainer>
</PropertyDetails> */
