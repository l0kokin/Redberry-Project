import { colors } from "../colors";
import { Button } from "./ButtonStyles";
import {
  ButtonContainer,
  Title,
  Prices,
  Column,
  TitleSmall,
  Currency,
} from "./FiltersStyles";

function PriceFilter() {
  const priceRanges = [];
  for (let i = 50000; i <= 300000; i += 50000) {
    const price = i.toLocaleString("en-US");
    priceRanges.push(price);
  }

  return (
    <>
      <Title>ფასის მიხედვით</Title>
      <Prices>
        <Column>
          <input placeholder="დან" />
          <Currency>₾</Currency>
          <TitleSmall>მინ. ფასი</TitleSmall>
          {priceRanges.map((price) => (
            <p>{price} ₾</p>
          ))}
        </Column>
        <Column>
          <input placeholder="მდე" />
          <Currency>₾</Currency>
          <TitleSmall>მაქს. ფასი</TitleSmall>
          {priceRanges.map((price) => (
            <p>{price} ₾</p>
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

export default PriceFilter;
