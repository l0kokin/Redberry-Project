import {
  AdditionalInfo,
  Card,
  Details,
  InfoContainer,
  Price,
  PropertyDetails,
} from "./PropertyCardStyles";
import { ReactComponent as LocationIcon } from "../icons/location.svg";
import { ReactComponent as BedIcon } from "../icons/bed.svg";
import { ReactComponent as AreaIcon } from "../icons/area.svg";
import { ReactComponent as ZipCodeIcon } from "../icons/zip.svg";

function PropertyCard({ property }) {
  return (
    <Card to={`/property/${property.id}`}>
      <img src={property.image} alt="a home" />
      <PropertyDetails>
        <Price>{property.price} ₾</Price>
        <InfoContainer>
          <Details>
            <LocationIcon />
            {property.address}
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
