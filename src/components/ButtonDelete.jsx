import { Button } from "./ButtonStyles";
import { colors } from "../colors";

function ButtonDelete() {
  return (
    <Button
      back_color={colors.white}
      text_color={colors.grey}
      padding={"1rem 1rem"}
      hover_color={colors.grey}
      border_color={colors.grey}
    >
      <p>ლისტინგის წაშლა</p>
    </Button>
  );
}

export default ButtonDelete;
