import { Button } from "./ButtonStyles";
import {
  CloseButton,
  ModalContainer,
  ModalButtons,
  ModalHeader,
  ModalOverlay,
} from "./DeleteAlertModalStyles";
import { ReactComponent as CloseBtn } from "../icons/close.svg";
import { forwardRef } from "react";
import { colors } from "../colors";
import { useNavigate } from "react-router-dom";

const DeleteAlertModal = forwardRef(({ onClose, onDelete }, ref) => {
  const navigate = useNavigate();

  const handleConfirm = async () => {
    await onDelete();
    navigate("/");
  };

  return (
    <ModalOverlay>
      <ModalContainer ref={ref}>
        <CloseButton onClick={onClose}>
          <CloseBtn />
        </CloseButton>
        <ModalHeader>გსურთ წაშალოთ ლისტინგი?</ModalHeader>
        <ModalButtons>
          <Button
            back_color={colors.white}
            text_color={colors.orange}
            onClick={onClose}
          >
            გაუქმება
          </Button>
          <Button onClick={handleConfirm}>დადასტურება</Button>
        </ModalButtons>
      </ModalContainer>
    </ModalOverlay>
  );
});

export default DeleteAlertModal;
