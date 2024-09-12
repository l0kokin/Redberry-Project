import { Button } from "./ButtonStyles";
import { colors } from "../colors";
import { ReactComponent as Plus } from "../icons/plus.svg";

function ButtonWhite() {
  return (
    <Button
      backColor={colors.white}
      textColor={colors.orange}
      padding={"1.4rem 1.6rem"}
      hoverColor={colors.orange}
    >
      <Plus />
      <p>აგენტის დამატება</p>
    </Button>
  );
}

export default ButtonWhite;
