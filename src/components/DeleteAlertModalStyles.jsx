import styled from "styled-components";
import { colors } from "../colors";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.navy_light};
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: ${colors.white};
  padding: 5rem 17rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px ${colors.navy_light};
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 2.4rem;
  right: 3.1rem;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 3.5rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
`;
