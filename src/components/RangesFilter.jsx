import { colors } from "../colors";
import { Button } from "./ButtonStyles";
import {
  ButtonContainer,
  Title,
  Prices,
  Column,
  TitleSmall,
  Icon,
} from "./FiltersStyles";

function RangesFilter({ type, icon, unit }) {
  const priceRanges = [];
  for (let i = 50000; i <= 300000; i += 50000) {
    const price = i.toLocaleString("en-US");
    priceRanges.push(price);
  }

  return (
    <>
      <Title>{type} მიხედვით</Title>
      <Prices>
        <Column>
          <input placeholder="დან" />
          <Icon>{icon}</Icon>
          <TitleSmall>მინ. {unit}</TitleSmall>
          {priceRanges.map((price) => (
            <p>
              {price} {icon}
            </p>
          ))}
        </Column>
        <Column>
          <input placeholder="მდე" />
          <Icon>{icon}</Icon>
          <TitleSmall>მაქს. {unit}</TitleSmall>
          {priceRanges.map((price) => (
            <p>
              {price} {icon}
            </p>
          ))}
        </Column>
      </Prices>
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
    </>
  );
}

export default RangesFilter;
