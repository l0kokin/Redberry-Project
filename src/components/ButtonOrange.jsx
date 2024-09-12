import { Button } from "./ButtonStyles";
import { colors } from "../colors";
import { ReactComponent as Plus } from "../icons/plus.svg";
import { Link } from "react-router-dom";

function ButtonOrange() {
  return (
    <Link to="/addListing">
      <Button
        backColor={colors.orange}
        textColor={colors.white}
        hoverColor={colors.orange_dark}
      >
        <Plus />
        <p>ლისტინგის დამატება</p>
      </Button>
    </Link>
  );
}

export default ButtonOrange;
