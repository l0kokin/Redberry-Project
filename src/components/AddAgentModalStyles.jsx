import styled from "styled-components";
import { colors } from "../colors";

export const AgentModal = styled.div`
  background: ${colors.white};
  padding: 8.7rem 10.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px ${colors.navy_light};
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100rem;

  h1 {
    align-self: center;
    margin-bottom: 6rem;
  }

  label {
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.68rem;
  }
`;

export const SectionGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 2rem;

  div {
    display: flex;
    flex-direction: column;
  }
`;
