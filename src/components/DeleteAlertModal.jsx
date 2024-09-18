import {
  CloseButton,
  ModalContainer,
  ModalOverlay,
} from "./DeleteAlertModalStyles";
import { ReactComponent as CloseBtn } from "../icons/close.svg";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import ConfirmCancelButtons from "./ConfirmCancelButtons";

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
        <h2 className="text-large">გსურთ წაშალოთ ლისტინგი?</h2>
        <div style={{ justifyContent: "center" }}>
          <ConfirmCancelButtons onSubmit={handleConfirm} onCancel={onClose} />
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
});

export default DeleteAlertModal;
