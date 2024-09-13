import { Info, PropertyContainer } from "./PropertyInnerStyles";
import { ReactComponent as Back } from "../icons/back.svg";
import { useNavigate } from "react-router-dom";
import { InfoContainer } from "./PropertyCardStyles";
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
