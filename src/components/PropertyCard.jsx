import { Card } from "./PropertyCardStyles";
import { ReactComponent as LocationIcon } from "../icons/location.svg";
import { ReactComponent as BedIcon } from "../icons/bed.svg";
import { ReactComponent as AreaIcon } from "../icons/area.svg";
import { ReactComponent as ZipCodeIcon } from "../icons/zip.svg";

function PropertyCard({ property }) {
  return (
    <Card>
      <img src={property.image} alt="dummy img" />
      <p className="price">{property.price}</p>
      <p className="info">
        <LocationIcon />
        {property.address}
      </p>
      <div>
        <div>
          <BedIcon />
          {property.bedrooms}
        </div>
        <div>
          <AreaIcon />
          {property.area}
        </div>
        <div>
          <ZipCodeIcon />
          {property.zip_code}
        </div>
      </div>
    </Card>
  );
}

export default PropertyCard;
