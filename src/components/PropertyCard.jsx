import { ReactComponent as LocationIcon } from "../icons/location.svg";
import { ReactComponent as BedIcon } from "../icons/bed.svg";
import { ReactComponent as AreaIcon } from "../icons/area.svg";
import { ReactComponent as ZipCodeIcon } from "../icons/zip.svg";
import {
  AdditionalInfo,
  Card,
  Details,
  InfoContainer,
  Price,
  PropertyDetails,
  SaleRent,
} from "./PropertyCardStyles";

function PropertyCard({ property }) {
  return (
    <Card to={`/property/${property.id}`}>
      <img src={property.image} alt="a home" />
      <SaleRent>{property.is_rental ? "ქირავდება" : "იყიდება"}</SaleRent>
      <PropertyDetails>
        <Price>{property.price} ₾</Price>
        <InfoContainer>
          <Details>
            <LocationIcon />
            {property.city.name}, {property.address}
          </Details>
          <AdditionalInfo>
            <Details>
              <BedIcon />
              {property.bedrooms}
            </Details>
            <Details>
              <AreaIcon />
              {property.area}
            </Details>
            <Details>
              <ZipCodeIcon />
              {property.zip_code}
            </Details>
          </AdditionalInfo>
        </InfoContainer>
      </PropertyDetails>
    </Card>
  );
}

export default PropertyCard;
