import {
  AdditionalInfo,
  Card,
  Details,
  InfoContainer,
  PropertyDetails,
} from "./PropertyCardStyles";
import { ReactComponent as LocationIcon } from "../icons/location.svg";
import { ReactComponent as BedIcon } from "../icons/bed.svg";
import { ReactComponent as AreaIcon } from "../icons/area.svg";
import { ReactComponent as ZipCodeIcon } from "../icons/zip.svg";

function PropertyCard({ property }) {
  return (
    <Card to={`/property/${property.id}`}>
      {/* <Card> */}
      <img src={property.image} alt="dummy img" />
      <PropertyDetails>
        <p className="price">{property.price} ₾</p>
        <InfoContainer>
          <Details className="info">
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
