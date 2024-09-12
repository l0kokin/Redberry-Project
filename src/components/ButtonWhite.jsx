import { Button } from "./ButtonStyles";
import { colors } from "../colors";
import { ReactComponent as Plus } from "../icons/plus.svg";
// import { Link } from "react-router-dom";

function ButtonWhite() {
  return (
    // <Link to="/addListing">
    <Button
      backColor={colors.white}
      textColor={colors.orange}
      hoverColor={colors.orange}
    >
      <Plus />
      <p>აგენტის დამატება</p>
    </Button>
    // </Link>
  );
}

export default ButtonWhite;
