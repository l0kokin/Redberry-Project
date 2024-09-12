import ButtonOrange from "./ButtonOrange";
import ButtonWhite from "./ButtonWhite";
import { Buttons, Filter, FiltersContainer, Container } from "./FiltersStyles";
import { ReactComponent as DownArrow } from "../icons/down.svg";

function Filters() {
  return (
    <Container>
      <FiltersContainer>
        <Filter>
          <p>რეგიონი</p>
          <DownArrow />
        </Filter>
        <Filter>
          <p>საფასო კატეგორია</p>
          <DownArrow />
        </Filter>
        <Filter>
          <p>ფართობი</p>
          <DownArrow />
        </Filter>
        <Filter>
          <p>საძინებლების რაოდენობა</p>
          <DownArrow />
        </Filter>
      </FiltersContainer>

      <Buttons>
        <ButtonOrange />
        <ButtonWhite />
      </Buttons>
    </Container>
  );
}

export default Filters;
