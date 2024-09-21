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
    font-family: "Helvetica Neue", sans-serif;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.95rem;
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

  border: ${(props) => {
    if (props.$haserror) return `1px solid ${colors.orange}`;
    return `1px solid ${colors.grey}`;
  }};
`;

export const StyledSelect = styled.select`
  ${inputStyles}
`;

export const StyledInput = styled.input`
  ${inputStyles}
`;

export const StyledTextarea = styled.textarea`
  ${inputStyles}
  height: 13.5rem;
  line-height: 1.6;
  vertical-align: top;
`;

export const ImgInput = styled.div`
  width: 100%;
  height: 12rem;
  border: ${(props) => {
    if (props.$haserror) return `1px dashed ${colors.orange}`;
    return `1px dashed ${colors.black}`;
  }};
  border-radius: 8px;
  position: relative;

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

export const UploadedImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  width: 100%;

  img {
    width: 9.2rem;
  }

  svg {
    position: absolute;
    bottom: 1.4rem;
    right: 34rem;
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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const Validations = styled.div`
  flex-direction: row !important;
  gap: 0.7rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.68rem;
  margin-top: 0.5rem;

  color: ${(props) => {
    if (props.$isvalid) return `${colors.green}`;
    if (props.$haserror) return `${colors.orange}`;
    return "inherit";
  }};

  svg {
    path {
      stroke: ${(props) => {
        if (props.$isvalid) return `${colors.green}`;
        if (props.$haserror) return `${colors.orange}`;
        return `${colors.black}`;
      }};
    }
  }
`;

export const ErrorMessage = styled.p`
  color: ${colors.orange};
`;
