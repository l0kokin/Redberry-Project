import styled from "styled-components";
import { colors } from "../colors";

export const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
  line-height: 19.2px;
  text-align: left;
`;

export const RegionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.6rem 5rem;
  padding: 2rem;
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

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 3.2rem;
`;
