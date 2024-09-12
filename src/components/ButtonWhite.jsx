import { Button } from "./ButtonStyles";
import { colors } from "../colors";
import { ReactComponent as Plus } from "../icons/plus.svg";

function ButtonWhite() {
  return (
    <Button
      back_color={colors.white}
      text_color={colors.orange}
      padding={"1.4rem 1.6rem"}
      hover_color={colors.orange}
    >
      <Plus />
      <p>აგენტის დამატება</p>
    </Button>
  );
}

export default ButtonWhite;
