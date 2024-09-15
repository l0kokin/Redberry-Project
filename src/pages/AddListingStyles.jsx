import styled from "styled-components";
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

  option {
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

  input[type="text"],
  input[type="number"],
  select {
    padding: 1.4rem 1rem;
    border: 1px solid ${colors.grey};
    border-radius: 6px;
    font-size: 1.6rem;
    outline: none;

    /* &:focus {
      border: 1px solid ${colors.orange};
    } */
  }

  input[type="upload"] {
    width: 100%;
    height: 12rem;
    border: 1px dashed ${colors.black};
    border-radius: 8px;
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

export const UploadButton = styled.button`
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
