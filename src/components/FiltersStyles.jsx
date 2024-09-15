import styled from "styled-components";
import { colors } from "../colors";

export const Buttons = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FiltersContainer = styled.div`
  width: 78.5rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  border: 1px solid ${colors.light_grey};
  border-radius: 10px;
  padding: 0.8rem 1.4rem;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.8rem 1.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.92rem;
  text-align: center;
  color: ${colors.black};
  transition: transform 0.3s ease;

  &:hover {
    background-color: ${colors.background_color};
    border-radius: 6px;

    svg {
      transform: rotate(180deg);
    }
  }
`;

export const ModalContent = styled.div`
  background: ${colors.white};
  padding: 2.4rem;
  border-radius: 10px;
  position: absolute;
  top: 24rem;
  left: ${(props) => props.left || "16.2rem"};
  border: 1px solid ${colors.light_grey};
  z-index: 100000;
`;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.92rem;
  margin-bottom: 2.4rem;
`;

export const TitleSmall = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.68rem;
  margin-bottom: 1.6rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 3.2rem;
`;

export const StyledCheckbox = styled.input`
  appearance: none;
  width: 2rem;
  height: 2rem;
  border: 1px solid ${colors.light_grey};
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  justify-content: center;

  &:checked {
    background-color: ${colors.green};
    border: none;
  }

  &:checked::after {
    content: "✔";
    width: 1rem;
    height: 1rem;
    color: ${colors.white};
  }
`;

// Region Filter Styles
export const RegionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem 5rem;
  border-radius: 10px;
  position: relative;
  width: 100%;
`;

export const Region = styled.p`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.68rem;
  text-align: left;
  width: 16.3rem;
`;

// Ranges filter styles
export const Units = styled.div`
  display: flex;
`;

export const Column = styled.div`
  flex-direction: column;
  width: 15.5rem;
  gap: 2.4rem;
  position: relative;

  input {
    width: 90%;
    padding: 1.25rem 1rem;
    border: 1px solid ${colors.grey};
    margin-bottom: 2.4rem;
    border-radius: 6px;
  }

  p {
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.68rem;
    margin-bottom: 0.8rem;
  }
`;

export const Icon = styled.div`
  position: absolute;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.44rem;
  top: 1.6rem;
  right: 2.4rem;
`;

// Bedrooms filter styles
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const NumBedrooms = styled.button`
  width: fit-content;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.68rem;
  text-align: center;
  padding: 1.25rem 1.65rem;
  color: ${colors.navy_light};
  border: 1px solid ${colors.grey};
  border-radius: 6px;

  &:hover {
    border: 1px solid ${colors.orange};
  }
`;

// Applied filters styles
export const AppliedFiltersContainer = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 3.2rem;
`;

export const AppliedFilter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border: 1px solid ${colors.light_grey};
  border-radius: 43px;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.68rem;
  text-align: center;
  width: fit-content;
  padding: 0.8rem 1rem;
  margin-top: 1.6rem;
`;

export const CloseButton = styled.button`
  &:hover {
    path {
      fill: ${colors.black};
    }
  }
`;
