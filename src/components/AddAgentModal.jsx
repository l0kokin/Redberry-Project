import { ImgInput, StyledInput, UploadButton } from "../pages/AddListingStyles";
import { ModalOverlay } from "./DeleteAlertModalStyles";
import { ReactComponent as PlusCircle } from "../icons/plus-circle.svg";
import { AgentModal, SectionGrid } from "./AddAgentModalStyles";
import ConfirmCancelButtons from "./ConfirmCancelButtons";
import { useState } from "react";
import ValidationMessage from "./ValidationMessage";

function AddAgentModal() {
  const initialFormValues = {
    name: "",
    lastname: "",
    email: "",
    phone: "",
    image: null,
  };

  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errors = {};
    const requiredFields = ["name", "lastname", "email", "phone", "image"];

    const fieldsToValidate = {
      name: formValues.name.length < 2,
      lastname: formValues.name.length < 2,
      email: !formValues.email.endsWith("@redberry.ge"),
      phone: !/^[5]\d{8}$/.test(formValues.phone),
    };

    requiredFields.forEach((field) => {
      if (!formValues[field]) errors[field] = "ეს ველი აუცილებელია";
    });

    for (const [field, isInvalid] of Object.entries(fieldsToValidate)) {
      if (isInvalid) {
        errors[field] = "ჩაწერეთ ვალიდური მონაცემები";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    setFormValues({
      ...formValues,
      [id]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (!validate()) return;

    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    setFormValues(initialFormValues);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
  };

  return (
    <ModalOverlay>
      <AgentModal onSubmit={handleSubmit}>
        <h1>აგენტის დამატება</h1>
        <SectionGrid>
          <div>
            <label htmlFor="name">სახელი *</label>
            <StyledInput
              type="text"
              id="name"
              value={formValues.name}
              onChange={handleChange}
              hasError={!!formErrors.name}
            />
            <ValidationMessage
              hasError={!!formErrors.name}
              message={"მინიმუმ 2 სიმბოლო"}
              isValid={!formErrors.name && formValues.name.length >= 2}
            />
          </div>
          <div>
            <label htmlFor="lastname">გვარი</label>
            <StyledInput
              type="text"
              id="lastname"
              value={formValues.lastname}
              onChange={handleChange}
              hasError={!!formErrors.lastname}
            />
            <ValidationMessage
              hasError={!!formErrors.lastname}
              message={"მინიმუმ 2 სიმბოლო"}
              isValid={!formErrors.lastname && formValues.lastname.length >= 2}
            />
          </div>
          <div>
            <label htmlFor="email">ელ-ფოსტა *</label>
            <StyledInput
              type="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              hasError={!!formErrors.email}
            />
            <ValidationMessage
              hasError={!!formErrors.email}
              message={"გამოიყენეთ @redberry.ge ფოსტა"}
              isValid={
                !formErrors.email && formValues.email.endsWith("@redberry.ge")
              }
            />
          </div>
          <div>
            <label htmlFor="phone">ტელეფონის ნომერი</label>
            <StyledInput
              type="number"
              id="phone"
              value={formValues.phone}
              onChange={handleChange}
              hasError={!!formErrors.phone}
            />
            <ValidationMessage
              hasError={!!formErrors.phone}
              message={"მხოლოდ რიცხვები"}
              isValid={!formErrors.phone && /^[5]\d{8}$/.test(formValues.phone)}
            />
          </div>
        </SectionGrid>
        <div style={{ marginTop: "2.4rem" }}>
          <label htmlFor="image">ატვირთეთ ფოტო *</label>
          <ImgInput type="file" id="image" />
          <UploadButton>
            <PlusCircle />
          </UploadButton>
        </div>
        <ConfirmCancelButtons
          submitText={"დაამატე აგენტი"}
          onClick={(e) => handleSubmit(e)}
          onCancel={handleCancel}
        />
      </AgentModal>
    </ModalOverlay>
  );
}

export default AddAgentModal;
