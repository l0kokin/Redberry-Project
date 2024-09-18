import { Button } from "./ButtonStyles";
import { colors } from "../colors";
import { ReactComponent as Plus } from "../icons/plus.svg";

function ButtonOrange() {
  return (
    <Button
      $backcolor={colors.orange}
      $textcolor={colors.white}
      $padding={"1.4rem 1.6rem"}
      $hovercolor={colors.orange_dark}
    >
      <Plus />
      <p>ლისტინგის დამატება</p>
    </Button>
  );
}

export default ButtonOrange;
