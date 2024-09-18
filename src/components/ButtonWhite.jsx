import { Button } from "./ButtonStyles";
import { colors } from "../colors";
import { ReactComponent as Plus } from "../icons/plus.svg";

function ButtonWhite({ onClick }) {
  return (
    <Button
      $backcolor={colors.white}
      $textcolor={colors.orange}
      $padding={"1.4rem 1.6rem"}
      $hovercolor={colors.orange}
      onClick={onClick}
    >
      <Plus />
      <p>აგენტის დამატება</p>
    </Button>
  );
}

export default ButtonWhite;
