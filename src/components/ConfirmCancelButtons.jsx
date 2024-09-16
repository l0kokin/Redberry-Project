import { Button } from "../components/ButtonStyles";
import { colors } from "../colors";
import { ButtonsWrapper } from "./DeleteAlertModalStyles";

function ConfirmCancelButtons({ onCancel, onSubmit, submitText }) {
  return (
    <div>
      <ButtonsWrapper>
        <Button
          back_color={colors.white}
          text_color={colors.orange}
          hover_color={colors.orange}
          onClick={onCancel}
        >
          <p>გაუქმება</p>
        </Button>
        <Button onClick={onSubmit}>
          <p>{submitText || "დადასტურება"}</p>
        </Button>
      </ButtonsWrapper>
    </div>
  );
}

export default ConfirmCancelButtons;
