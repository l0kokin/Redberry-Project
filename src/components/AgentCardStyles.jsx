import styled from "styled-components";
import { colors } from "../colors";

export const AgentContainer = styled.div`
  margin-left: 6.8rem;
  width: 50.3rem;
  border: 1px solid ${colors.light_grey};
  border-radius: 8px;
  padding: 2.4rem 2rem;

  img {
    width: 7.2rem;
    height: 7.3rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.6rem;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  h2 {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.62rem;
  }

  h3 {
    margin-top: 0.4rem;
    color: ${colors.steel};
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.68rem;
  }
`;

export const AgentInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 0.4rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.68rem;
  color: ${colors.grey};
`;
