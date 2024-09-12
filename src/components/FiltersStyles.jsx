import styled from "styled-components";
import { colors } from "../colors";

export const Buttons = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FiltersContainer = styled.div`
  width: 78.5rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  border: 1px solid ${colors.light_grey};
  border-radius: 10px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 1.92rem;
  text-align: center;
  padding: 0.8rem 1.4rem;
  color: ${colors.black};
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
`;
