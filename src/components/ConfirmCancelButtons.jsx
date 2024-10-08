import { Button } from "../components/ButtonStyles";
import { colors } from "../colors";
import { ButtonsWrapper } from "./DeleteAlertModalStyles";

function ConfirmCancelButtons({ onCancel, onSubmit, submitText }) {
  return (
    <div>
      <ButtonsWrapper>
        <Button
          type="submit"
          $backcolor={colors.white}
          $textcolor={colors.orange}
          $hovercolor={colors.orange}
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
