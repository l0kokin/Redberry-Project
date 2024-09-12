import styled from "styled-components";
import { colors } from "../colors";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: ${(props) => props.padding || "1.4rem 1.6rem"};
  background-color: ${(props) => props.backColor || colors.orange};
  color: ${(props) => props.textColor || colors.white};
  border: 1px solid ${colors.orange};
  border-radius: 10px;
  font-family: "FiraGO";
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.92rem;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;

  svg {
    path {
      fill: ${(props) => props.textColor || colors.white};
    }
  }

  &:hover {
    background-color: ${(props) => props.hoverColor || colors.orange_dark};

    color: ${(props) =>
      props.textColor === props.hoverColor ? colors.white : props.textColor};

    svg {
      path {
        fill: ${(props) =>
          props.textColor === props.hoverColor
            ? colors.white
            : props.textColor};
      }
    }
  }
`;
