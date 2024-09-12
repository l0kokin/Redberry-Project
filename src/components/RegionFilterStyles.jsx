import styled from "styled-components";
import { colors } from "../colors";

export const FilterRegions = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  /* border: 1px solid; */
`;

export const Title = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.92rem;
  text-align: left;
  margin-bottom: 2.4rem;
`;

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

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 3.2rem;
`;
