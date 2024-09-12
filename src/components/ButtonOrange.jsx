import { Button } from "./ButtonStyles";
import { colors } from "../colors";
import { ReactComponent as Plus } from "../icons/plus.svg";
import { Link } from "react-router-dom";

function ButtonOrange() {
  return (
    <Link to="/addListing">
      <Button
        back_color={colors.orange}
        text_color={colors.white}
        padding={"1.4rem 1.6rem"}
        hover_color={colors.orange_dark}
      >
        <Plus />
        <p>ლისტინგის დამატება</p>
      </Button>
    </Link>
  );
}

export default ButtonOrange;
