import { colors } from "../colors";
import { Button } from "./ButtonStyles";
import { ButtonContainer, Title } from "./RegionFilterStyles";

function AreaFilter() {
  return (
    <div>
      <Title>ფართობის მიხედვით</Title>
      <ButtonContainer>
        <Button
          back_color={colors.orange}
          text_color={colors.white}
          padding={"0.8rem 1.4rem"}
          hover_color={colors.orange_dark}
        >
          <p>არჩევა</p>
        </Button>
      </ButtonContainer>
    </div>
  );
}

export default AreaFilter;
