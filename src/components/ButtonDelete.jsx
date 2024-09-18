import { Button } from "./ButtonStyles";
import { colors } from "../colors";

function ButtonDelete() {
  return (
    <Button
      backcolor={colors.white}
      textcolor={colors.grey}
      padding={"1rem 1rem"}
      hovercolor={colors.grey}
      bordercolor={colors.grey}
    >
      <p>ლისტინგის წაშლა</p>
    </Button>
  );
}

export default ButtonDelete;
