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
  top: 15%;
  left: ${(props) => props.left || "16.2rem"};
  border: 1px solid ${colors.light_grey};
`;
