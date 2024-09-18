import styled from "styled-components";
import { colors } from "../colors";

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: ${(props) => props.$padding || "1.4rem 1.6rem"};
  background-color: ${(props) => props.$backcolor || colors.orange};
  color: ${(props) => props.$textcolor || colors.white};
  border: 1px solid ${(props) => props.$bordercolor || colors.orange};
  border-radius: 10px;
  font-family: "FiraGO";
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.92rem;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;

  svg {
    path {
      fill: ${(props) => props.$textcolor || colors.white};
    }
  }

  &:hover {
    background-color: ${(props) => props.$hovercolor || colors.orange_dark};

    color: ${(props) =>
      props.$textcolor === props.$hovercolor ? colors.white : props.$textcolor};

    svg {
      path {
        fill: ${(props) =>
          props.$textcolor === props.$hovercolor
            ? colors.white
            : props.$textcolor};
      }
    }
  }
`;
