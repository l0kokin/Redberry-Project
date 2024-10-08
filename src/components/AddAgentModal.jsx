import { useRef, useState } from "react";
import { createContent } from "../common/common";
import { ReactComponent as PlusCircle } from "../icons/plus-circle.svg";
import { ReactComponent as TrashIcon } from "../icons/trash.svg";
import {
  ImgInput,
  StyledInput,
  UploadButton,
  UploadedImgContainer,
} from "../pages/AddListingStyles";
import { ModalOverlay } from "./DeleteAlertModalStyles";
import { AgentModal, SectionGrid } from "./AddAgentModalStyles";
import ConfirmCancelButtons from "./ConfirmCancelButtons";
import ValidationMessage from "./ValidationMessage";
import { useAgentModal } from "../contexts";

function AddAgentModal({ modalRef }) {
  const initialFormValues = {
    name: "",
    surname: "",
    email: "",
    phone: "",
    avatar: null,
  };
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});
  const [imgPreview, setImgPreview] = useState("");
  const { setIsAgentModalOpen } = useAgentModal();
  const imgInputRef = useRef(null);

  const formHasErrors = () => {
    const fieldsToValidate = {
      name: formValues.name.length < 2,
      surname: formValues.surname.length < 2,
      email: !formValues.email.endsWith("@redberry.ge"),
      phone: !/^[5]\d{8}$/.test(formValues.phone),
      avatar: formValues.avatar === null,
    };

    setFormErrors(fieldsToValidate);
    const hasErrors = Object.values(fieldsToValidate).some(
      (value) => value === true
    );

    return hasErrors;
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormValues({
      ...formValues,
      [id]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (formHasErrors()) return;

    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await createContent("agents", formData);

    setFormValues(initialFormValues);
    clearPreview();
    setIsAgentModalOpen(false);
  };

  const handleImgUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file) {
      setFormValues({ ...formValues, avatar: file });

      reader.onload = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const clearPreview = () => {
    setImgPreview("");
    imgInputRef.current.value = null;
  };

  return (
    <ModalOverlay>
      <AgentModal onSubmit={handleSubmit} ref={modalRef}>
        <h1>აგენტის დამატება</h1>
        <SectionGrid>
          <div>
            <label htmlFor="name">სახელი *</label>
            <StyledInput
              type="text"
              id="name"
              value={formValues.name}
              onChange={handleChange}
              $haserror={formErrors.name}
            />
            <ValidationMessage
              hasError={formErrors.name}
              message={"მინიმუმ 2 სიმბოლო"}
              isValid={!formErrors.name && formValues.name.length >= 2}
            />
          </div>
          <div>
            <label htmlFor="surname">გვარი *</label>
            <StyledInput
              type="text"
              id="surname"
              value={formValues.surname}
              onChange={handleChange}
              $haserror={formErrors.surname}
            />
            <ValidationMessage
              hasError={formErrors.surname}
              message={"მინიმუმ 2 სიმბოლო"}
              isValid={!formErrors.surname && formValues.surname.length >= 2}
            />
          </div>
          <div>
            <label htmlFor="email">ელ-ფოსტა *</label>
            <StyledInput
              type="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              $haserror={formErrors.email}
            />
            <ValidationMessage
              hasError={formErrors.email}
              message={"გამოიყენეთ @redberry.ge ფოსტა"}
              isValid={
                !formErrors.email && formValues.email.endsWith("@redberry.ge")
              }
            />
          </div>
          <div>
            <label htmlFor="phone">ტელეფონის ნომერი *</label>
            <StyledInput
              type="number"
              id="phone"
              value={formValues.phone}
              onChange={handleChange}
              $haserror={formErrors.phone}
            />
            <ValidationMessage
              hasError={formErrors.phone}
              message={"მხოლოდ რიცხვები"}
              isValid={!formErrors.phone && /^[5]\d{8}$/.test(formValues.phone)}
            />
          </div>
        </SectionGrid>

        <div style={{ marginTop: "2.4rem" }}>
          <label htmlFor="avatar">ატვირთეთ ფოტო *</label>
          <ImgInput $haserror={formErrors.avatar}>
            <input
              type="file"
              id="file"
              ref={imgInputRef}
              onChange={(e) => handleImgUpload(e)}
            />
            {imgPreview ? (
              <UploadedImgContainer>
                <img src={imgPreview} alt="home" />
                <TrashIcon onClick={clearPreview} />
              </UploadedImgContainer>
            ) : (
              <UploadButton onClick={() => imgInputRef.current.click()}>
                <PlusCircle />
              </UploadButton>
            )}
          </ImgInput>
        </div>

        <ConfirmCancelButtons
          submitText={"დაამატე აგენტი"}
          onClick={(e) => handleSubmit(e)}
          onCancel={() => {
            setFormValues(initialFormValues);
            clearPreview();
            setIsAgentModalOpen(false);
          }}
        />
      </AgentModal>
    </ModalOverlay>
  );
}

export default AddAgentModal;
