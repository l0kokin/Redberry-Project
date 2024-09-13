import styled from "styled-components";
// import { colors } from "../colors";

export const SimiliarPropertiesContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
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
  /* transform: translateX(
    ${({ currentIndex, visibleProperties }) =>
    `-${currentIndex * (100 / visibleProperties)}%`}
  ); */
  transition: transform 0.5s ease-in-out;
  overflow: hidden;
`;
