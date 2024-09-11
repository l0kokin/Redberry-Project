import { Card } from "./PropertyCardStyles";
import Img from "../images/randomImg.png";

function PropertyCard() {
  return (
    <Card>
      <img src={Img} alt="dummy img" />
      <p className="price">80, 458 ₾</p>
      <p className="info">თბილისი, ი. ჭავჭავაძის 53</p>
    </Card>
  );
}

export default PropertyCard;
