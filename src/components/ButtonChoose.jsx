import { colors } from "../colors";
import { Button } from "./ButtonStyles";
import { ButtonContainer } from "./FiltersStyles";

function ButtonChoose({ onClick }) {
  return (
    <ButtonContainer>
      <Button
        $backcolor={colors.orange}
        $textcolor={colors.white}
        $padding={"0.8rem 1.4rem"}
        $hovercolor={colors.orange_dark}
        onClick={onClick}
      >
        <p>არჩევა</p>
      </Button>
    </ButtonContainer>
  );
}

export default ButtonChoose;
