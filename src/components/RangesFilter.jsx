import ButtonChoose from "./ButtonChoose";
import { Title, Column, TitleSmall, Icon, Units } from "./FiltersStyles";

function RangesFilter({ type, icon, unit }) {
  const priceRanges = [];
  for (let i = 50000; i <= 300000; i += 50000) {
    const price = i.toLocaleString("en-US");
    priceRanges.push(price);
  }

  return (
    <>
      <Title>{type} მიხედვით</Title>
      <Units>
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
      </Units>
      <ButtonChoose />
    </>
  );
}

export default RangesFilter;
