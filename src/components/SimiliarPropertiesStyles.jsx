import styled from "styled-components";
import { colors } from "../colors";

export const SimiliarPropertiesContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-bottom: 22.8rem;

  h2 {
    margin: 5.3rem 0;
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 3.84rem;
    color: ${colors.black};
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

export const SimiliarPropertyList = styled.div`
  display: flex;
  gap: 1rem;
  width: calc(100% - 5rem);
  transition: transform 0.5s ease-in-out;
  overflow: hidden;
`;
