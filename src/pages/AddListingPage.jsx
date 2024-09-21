import { useEffect, useRef, useState } from "react";
import { createContent, fetchData } from "../common/common";
import { useAgentModal } from "../contexts";
import { ReactComponent as TrashIcon } from "../icons/trash.svg";
import { ReactComponent as PlusCircle } from "../icons/plus-circle.svg";
import AddAgentModal from "../components/AddAgentModal";
import ConfirmCancelButtons from "../components/ConfirmCancelButtons";
import ValidationMessage from "../components/ValidationMessage";
import {
  AddListing,
  AddListingContainer,
  DescriptionInput,
  ImgInput,
  SaleRentSection,
  StyledInput,
  StyledSelect,
  StyledTextarea,
  UploadButton,
  UploadedImgContainer,
} from "./AddListingStyles";

function AddListingPage() {
  const [agents, setAgents] = useState([]);
  const [regions, setRegions] = useState([]);
  const [cities, setCities] = useState([]);
  const [citiesToSelect, setCitiesToSelect] = useState([]);
  const [imgPreview, setImgPreview] = useState("");
  const [errors, setErrors] = useState({});
  const { isAgentModalOpen, setIsAgentModalOpen } = useAgentModal();
  const initialFormValues = {
    address: "",
    zip_code: "",
    region_id: "",
    city_id: "",
    price: "",
    area: "",
    bedrooms: "",
    description: "",
    agent_id: "",
    is_rental: 1,
    image: "",
  };
  const [formValues, setFormValues] = useState(() => {
    const savedValues = localStorage.getItem("formValues");
    return savedValues ? JSON.parse(savedValues) : initialFormValues;
  });
  const imgInputRef = useRef(null);
  const agentModalRef = useRef();

  const fetchAgents = async () => {
    try {
      const data = await fetchData("agents");
      setAgents(data);
    } catch (error) {
      console.error("Error fetching agents:", error);
    }
  };

  const fetchRegions = async () => {
    try {
      const data = await fetchData("regions");
      setRegions(data);
    } catch (error) {
      console.error("Error fetching regions:", error);
    }
  };

  const fetchCities = async () => {
    try {
      const data = await fetchData("cities");
      setCities(data);
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  useEffect(() => {
    fetchCities();
    fetchRegions();
  }, []);

  useEffect(() => {
    fetchAgents();
  }, [isAgentModalOpen]);

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  function isNumber(value) {
    return /^\d+$/.test(value);
  }

  const formHasErrors = () => {
    const fieldsToValidate = {
      zip_code: !isNumber(formValues.zip_code),
      price: !isNumber(formValues.price),
      area: !isNumber(formValues.area),
      bedrooms: !isNumber(formValues.bedrooms),
      address: formValues.address.length < 2,
      region_id: formValues.region_id === "",
      city_id: formValues.city_id === "",
      agent_id: formValues.agent_id === "",
      image: formValues.image === "",
      description: formValues.description?.split(" ").length < 5,
    };

    console.log(formValues.agent_id);

    setErrors(fieldsToValidate);
    const hasErrors = Object.values(fieldsToValidate).some(
      (value) => value === true
    );

    return hasErrors;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleRegionChange = (e) => {
    setFormValues({ ...formValues, region_id: Number(e.target.value) });

    const filterCities = cities.filter((city) =>
      e.target.value.includes(city.region_id)
    );
    setCitiesToSelect(filterCities);
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();

    if (formHasErrors()) return;

    const formData = new FormData();

    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await createContent("real-estates", formData);

    setFormValues(initialFormValues);
    clearPreview();
    setErrors({});
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
    clearPreview();
  };

  const handleImgUpload = async (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    if (file) {
      setFormValues({ ...formValues, image: file });

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

  const handleAgentChange = (e) => {
    if (e.target.value === "addAgent") {
      setIsAgentModalOpen(true);
      return;
    }

    if (e.target.value === "chooseAgent") {
      return;
    }
    setFormValues({
      ...formValues,
      agent_id: Number(e.target.value),
    });
  };

  const handleClickOutside = (event) => {
    if (
      agentModalRef.current &&
      !agentModalRef.current.contains(event.target)
    ) {
      setIsAgentModalOpen(false);
    }
  };

  useEffect(() => {
    if (isAgentModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isAgentModalOpen]);

  return (
    <AddListingContainer>
      <AddListing onSubmit={handleAddProperty}>
        <h1>ლისტინგის დამატება</h1>

        <h2>გარიგების ტიპი *</h2>
        <SaleRentSection>
          <div>
            <input
              type="radio"
              checked={!formValues.is_rental}
              id="sale"
              value="sale"
              onChange={() => setFormValues({ ...formValues, is_rental: 0 })}
            />
            <label htmlFor="sale">იყიდება</label>
          </div>
          <div>
            <input
              type="radio"
              checked={formValues.is_rental}
              id="rent"
              value="rent"
              onChange={() => setFormValues({ ...formValues, is_rental: 1 })}
            />
            <label htmlFor="rent">ქირავდება</label>
          </div>
        </SaleRentSection>

        <h2>მდებარეობა</h2>
        <section className="grid">
          <div>
            <label htmlFor="address">მისამართი *</label>
            <StyledInput
              type="text"
              id="address"
              value={formValues.address}
              onChange={handleInputChange}
              $haserror={errors.address}
            />
            <ValidationMessage
              hasError={errors.address}
              isValid={!errors.address && formValues.address.length > 2}
              message="მინიმუმ ორი სიმბოლო"
            />
          </div>

          <div>
            <label htmlFor="zip_code">საფოსტო ინდექსი *</label>
            <StyledInput
              type="number"
              id="zip_code"
              value={formValues.zip_code}
              onChange={handleInputChange}
              $haserror={errors.zip_code}
            />
            <ValidationMessage
              hasError={errors.zip_code}
              isValid={!errors.zip_code && formValues.zip_code}
              message="მხოლოდ რიცხვები"
            />
          </div>

          <div>
            <label htmlFor="region_id">რეგიონი *</label>
            <StyledSelect
              id="region_id"
              value={formValues.region_id}
              onChange={(e) => handleRegionChange(e)}
              $haserror={errors.region_id}
            >
              <option value="">აირჩიეთ რეგიონი</option>
              {regions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </StyledSelect>
          </div>

          <div>
            <label htmlFor="city_id">ქალაქი *</label>
            <StyledSelect
              id="city_id"
              value={formValues.city_id}
              onChange={handleInputChange}
              $haserror={errors.city_id}
            >
              <option value="">აირჩიეთ ქალაქი</option>
              {citiesToSelect.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </StyledSelect>
          </div>
        </section>

        <h2>ბინის დეტალები</h2>
        <section className="grid">
          <div>
            <label htmlFor="price">ფასი *</label>
            <StyledInput
              type="number"
              id="price"
              value={formValues.price}
              onChange={handleInputChange}
              $haserror={errors.price}
            />
            <ValidationMessage
              hasError={errors.price}
              isValid={!errors.price && formValues.price}
              message="მხოლოდ რიცხვები"
            />
          </div>

          <div>
            <label htmlFor="area">ფართობი *</label>
            <StyledInput
              type="number"
              id="area"
              value={formValues.area}
              onChange={handleInputChange}
              $haserror={errors.area}
            />
            <ValidationMessage
              hasError={errors.area}
              isValid={!errors.area && formValues.area}
              message="მხოლოდ რიცხვები"
            />
          </div>

          <div>
            <label htmlFor="bedrooms">საძინებლების რაოდენობა *</label>
            <StyledInput
              type="number"
              id="bedrooms"
              value={formValues.bedrooms}
              onChange={handleInputChange}
              $haserror={errors.bedrooms}
            />
            <ValidationMessage
              hasError={errors.bedrooms}
              isValid={!errors.bedrooms && formValues.bedrooms}
              message="მხოლოდ რიცხვები"
            />
          </div>
        </section>

        <section className="flex">
          <DescriptionInput>
            <label htmlFor="description">აღწერა *</label>
            <StyledTextarea
              type="text"
              id="description"
              value={formValues.description}
              onChange={handleInputChange}
              $haserror={errors.description}
            />
            <ValidationMessage
              hasError={errors.description}
              isValid={
                !errors.description &&
                formValues.description.split(" ").length > 5
              }
              message="მინიმუმ ხუთი სიტყვა"
            />
          </DescriptionInput>

          <div style={{ position: "relative" }}>
            <label htmlFor="image">ატვირთეთ ფოტო *</label>
            <ImgInput $haserror={errors.image}>
              <input
                ref={imgInputRef}
                type="file"
                id="file"
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

          <div className="flex">
            <h2>აგენტი *</h2>
            <label htmlFor="agent" style={{ marginTop: "0" }}>
              აირჩიე
            </label>
            <StyledSelect
              id="agent"
              value={formValues.agent_id}
              onChange={(e) => handleAgentChange(e)}
              $haserror={errors.agent_id}
            >
              <option key="chooseAgent" value="chooseAgent">
                აირჩიე აგენტი
              </option>
              <option key="addAgent" value="addAgent">
                + დაამატე აგენტი
              </option>
              {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {agent.name} {agent.surname}
                </option>
              ))}
            </StyledSelect>
          </div>
        </section>

        <ConfirmCancelButtons
          onSubmit={(e) => handleAddProperty(e)}
          onCancel={handleCancel}
        />
      </AddListing>
      {isAgentModalOpen && <AddAgentModal modalRef={agentModalRef} />}
    </AddListingContainer>
  );
}

export default AddListingPage;
