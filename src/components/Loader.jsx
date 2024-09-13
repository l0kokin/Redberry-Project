import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../colors";

function Loader() {
  return (
    <LoaderWrapper>
      <Spinner />
    </LoaderWrapper>
  );
}

export default Loader;

const rotate = keyframes`
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    `;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Spinner = styled.div`
  border: 4px solid ${colors.grey};
  border-top: 4px solid ${colors.orange};
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  animation: ${rotate} 1s linear infinite;
`;
