import { colors } from "../colors";
import { Button } from "./ButtonStyles";
import { ButtonContainer } from "./FiltersStyles";

function ButtonChoose({ onClick }) {
  return (
    <ButtonContainer>
      <Button
        back_color={colors.orange}
        text_color={colors.white}
        padding={"0.8rem 1.4rem"}
        hover_color={colors.orange_dark}
        onClick={onClick}
      >
        <p>არჩევა</p>
      </Button>
    </ButtonContainer>
  );
}

export default ButtonChoose;
