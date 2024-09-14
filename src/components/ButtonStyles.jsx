import styled from "styled-components";
import { colors } from "../colors";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: ${(props) => props.padding || "1.4rem 1.6rem"};
  background-color: ${(props) => props.back_color || colors.orange};
  color: ${(props) => props.text_color || colors.white};
  border: 1px solid ${(props) => props.border_color || colors.orange};
  border-radius: 10px;
  font-family: "FiraGO";
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.92rem;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;

  svg {
    path {
      fill: ${(props) => props.text_color || colors.white};
    }
  }

  &:hover {
    background-color: ${(props) => props.hover_color || colors.orange_dark};

    color: ${(props) =>
      props.text_color === props.hover_color ? colors.white : props.text_color};

    svg {
      path {
        fill: ${(props) =>
          props.text_color === props.hover_color
            ? colors.white
            : props.text_color};
      }
    }
  }
`;
