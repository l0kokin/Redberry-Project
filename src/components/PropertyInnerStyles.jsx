import styled from "styled-components";
import { colors } from "../colors";

export const PropertyContainer = styled.div`
  display: flex;
  margin-top: 2.9rem;
  position: relative;

  img {
    width: 83.9rem;
  }

  h1 {
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 5.76rem;
    margin: 3rem 0 0 6rem;
  }

  :nth-child(6) {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.6rem;
    margin: 4rem 0 0 6rem;
    color: ${colors.grey};
  }
`;

export const DatePosted = styled.div``;

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 2.4rem;
  font-weight: 400;
  line-height: 2.88rem;
  text-align: left;
  color: ${colors.grey};
  margin-left: 6rem;
  position: relative;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 3.4rem;
  margin: 2rem 0 0 6rem;
`;
