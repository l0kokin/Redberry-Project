import { ImgInput, StyledInput, UploadButton } from "../pages/AddListingStyles";
import { ModalOverlay } from "./DeleteAlertModalStyles";
import { ReactComponent as PlusCircle } from "../icons/plus-circle.svg";
import { AgentModal, SectionGrid } from "./AddAgentModalStyles";
import ConfirmCancelButtons from "./ConfirmCancelButtons";

function AddAgentModal() {
  return (
    <ModalOverlay>
      <AgentModal>
        <h1>აგენტის დამატება</h1>
        <SectionGrid>
          <div>
            <label htmlFor="name">სახელი *</label>
            <StyledInput type="text" id="name" />
          </div>
          <div>
            <label htmlFor="lastname">გვარი</label>
            <StyledInput type="number" id="lastname" />
          </div>
          <div>
            <label htmlFor="email">ელ-ფოსტა *</label>
            <StyledInput type="text" id="email" />
          </div>
          <div>
            <label htmlFor="phone">ტელეფონის ნომერი</label>
            <StyledInput type="text" id="phone" />
          </div>
        </SectionGrid>
        <div style={{ marginTop: "2.4rem" }}>
          <label htmlFor="image">ატვირთეთ ფოტო *</label>
          <ImgInput type="upload" id="image" />
          <UploadButton>
            <PlusCircle />
          </UploadButton>
        </div>
        <ConfirmCancelButtons submitText={"დაამატე აგენტი"} />
      </AgentModal>
    </ModalOverlay>
  );
}

export default AddAgentModal;
