import styled, { css } from "styled-components";
import { colors } from "../colors";

export const AddListingContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5.7rem;

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem 2rem;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  .flex {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div {
      display: flex;
      flex-direction: column;
    }
  }

  #agent {
    width: 50%;
  }
`;

export const AddListing = styled.form`
  display: flex;
  flex-direction: column;
  width: 79rem;

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 3.84rem;
    text-align: center;
  }

  h2 {
    font-family: Helvetica Neue;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.95rem;
    text-align: left;
    margin-top: 6.1rem;
  }

  label {
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 1.68rem;
    margin: 2.2rem 0 0.5rem 0;
  }
`;

const inputStyles = css`
  padding: 1.4rem 1rem;
  border-radius: 6px;
  font-size: 1.6rem;
  outline: none;

  border: ${({ hasError, isValid }) => {
    if (hasError) return `1px solid ${colors.orange}`;
    if (isValid) return `1px solid ${colors.grey}`;
    return `1px solid ${colors.grey}`;
  }};
`;

export const StyledSelect = styled.select`
  ${inputStyles}
`;

export const StyledInput = styled.input`
  ${inputStyles}
`;

export const ImgInput = styled.div`
  width: 100%;
  height: 12rem;
  border: 1px dashed ${colors.black};
  border-radius: 8px;

  input {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

export const SaleRentSection = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.8rem;
  gap: 8.4rem;

  label {
    margin-left: 0.7rem;
  }

  input[type="radio"] {
    accent-color: ${colors.black};
  }
`;

export const DescriptionInput = styled.div`
  margin-top: 2rem;

  input {
    width: 100%;
    height: 13.5rem;
  }
`;

export const UploadButton = styled.div`
  position: absolute;
  top: 63%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: -1;
`;

export const Validations = styled.div`
  flex-direction: row !important;
  gap: 0.7rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.68rem;
  margin-top: 0.5rem;

  color: ${({ hasError, isValid }) => {
    if (isValid) return `${colors.green}`;
    if (hasError) return `${colors.orange}`;
    return "inherit";
  }};

  svg {
    path {
      stroke: ${({ hasError, isValid }) => {
        if (isValid) return `${colors.green}`;
        if (hasError) return `${colors.orange}`;
        return `${colors.black}`;
      }};
    }
  }
`;

export const ErrorMessage = styled.p`
  color: ${colors.orange};
`;
