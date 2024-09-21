import { ErrorMessage, Validations } from "../pages/AddListingStyles";
import { ReactComponent as CheckIcon } from "../icons/check.svg";

function ValidationMessage({ hasError, isValid, message }) {
  return (
    <Validations $haserror={hasError} $isvalid={isValid}>
      <CheckIcon />
      {hasError ? (
        <ErrorMessage>ჩაწერეთ ვალიდური მონაცემები</ErrorMessage>
      ) : (
        <p>{message}</p>
      )}
    </Validations>
  );
}

export default ValidationMessage;
