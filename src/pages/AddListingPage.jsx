import {
  AddListing,
  AddListingContainer,
  DescriptionInput,
  ImgInput,
  SaleRentSection,
  StyledInput,
  UploadButton,
} from "./AddListingStyles";
import { useEffect, useState } from "react";
import fetchData from "../common/common";
import { ReactComponent as PlusCircle } from "../icons/plus-circle.svg";
import ConfirmCancelButtons from "../components/ConfirmCancelButtons";
import ValidationMessage from "../components/ValidationMessage";

function AddListingPage() {
  const [agents, setAgents] = useState([]);
  const [cities, setCities] = useState([]);

  const initialFormValues = {
    address: "",
    zip: "",
    region: "",
    city_id: "",
    price: "",
    area: "",
    numbedrooms: "",
    description: "",
    agent_id: "",
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const [errors, setErrors] = useState({});

  const fetchAgents = async () => {
    try {
      const data = await fetchData("agents");
      setAgents(data);
    } catch (error) {
      console.error("Error fetching agents:", error);
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
    fetchAgents();
    fetchCities();
  }, []);

  const validate = () => {
    const newErrors = {};

    const fieldsToValidate = {
      address: formValues.address.length < 2,
      zip: !/^\d+$/.test(formValues.zip),
      region: formValues.region.length < 2,
      price: formValues.price && !/^\d+$/.test(formValues.price),
      area: formValues.area && !/^\d+$/.test(formValues.area),
      numbedrooms:
        formValues.numbedrooms && !/^\d+$/.test(formValues.numbedrooms),
      description: formValues.description.split(" ").length < 5,
    };

    const requiredFields = ["address", "zip", "numbedrooms", "description"];
    requiredFields.forEach((field) => {
      if (!formValues[field]) {
        newErrors[field] = "ეს ველი აუცილებელია";
      }
    });

    for (const [field, isInvalid] of Object.entries(fieldsToValidate)) {
      if (isInvalid) {
        newErrors[field] = "ჩაწერეთ ვალიდური მონაცემები";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues({ ...formValues, [id]: value });
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const propertyData = {
      listingType: document.querySelector('input[name="listingType"]:checked')
        ?.value,
      ...formValues,
    };

    try {
      await fetchData("real-estates", "POST", propertyData);
      console.log("Property added successfully");
    } catch (error) {
      console.error("Error posting property:", error);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
  };

  return (
    <AddListingContainer>
      <AddListing>
        <h1>ლისტინგის დამატება</h1>

        <h2>გარიგების ტიპი</h2>
        <SaleRentSection>
          <div>
            <input type="radio" id="sale" name="listingType" value="sale" />
            <label htmlFor="sale">იყიდება</label>
          </div>
          <div>
            <input type="radio" id="rent" name="listingType" value="rent" />
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
              hasError={!!errors.address}
            />
            <ValidationMessage
              hasError={!!errors.address}
              isValid={!errors.address && formValues.address.length >= 2}
              message="მინიმუმ ორი სიმბოლო"
            />
          </div>

          <div>
            <label htmlFor="zip">საფოსტო ინდექსი *</label>
            <StyledInput
              type="number"
              id="zip"
              value={formValues.zip}
              onChange={handleInputChange}
              hasError={!!errors.zip}
            />
            <ValidationMessage
              hasError={!!errors.zip}
              isValid={!errors.zip && /^\d+$/.test(formValues.zip)}
              message="მხოლოდ რიცხვები"
            />
          </div>

          <div>
            <label htmlFor="region">რეგიონი</label>
            <StyledInput
              type="text"
              id="region"
              value={formValues.region}
              onChange={handleInputChange}
              hasError={!!errors.region}
            />
            <ValidationMessage
              hasError={!!errors.region}
              isValid={!errors.region && formValues.region.length >= 2}
              message="მინიმუმ ორი სიმბოლო"
            />
          </div>

          <div>
            <label htmlFor="city">ქალაქი</label>
            <select
              id="city"
              value={formValues.city_id}
              onChange={handleInputChange}
            >
              <option value="">აირჩიეთ ქალაქი</option>
              {cities.map((city) => (
                <option key={city.region_id} value={city.region_id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
        </section>

        <h2>ბინის დეტალები</h2>
        <section className="grid">
          <div>
            <label htmlFor="price">ფასი</label>
            <StyledInput
              type="number"
              id="price"
              value={formValues.price}
              onChange={handleInputChange}
              hasError={!!errors.price}
            />
            <ValidationMessage
              hasError={!!errors.price}
              isValid={!errors.price && /^\d+$/.test(formValues.price)}
              message="მხოლოდ რიცხვები"
            />
          </div>

          <div>
            <label htmlFor="area">ფართობი</label>
            <StyledInput
              type="number"
              id="area"
              value={formValues.area}
              onChange={handleInputChange}
              hasError={!!errors.area}
            />
            <ValidationMessage
              hasError={!!errors.area}
              isValid={!errors.area && /^\d+$/.test(formValues.area)}
              message="მხოლოდ რიცხვები"
            />
          </div>

          <div>
            <label htmlFor="numbedrooms">საძინებლების რაოდენობა *</label>
            <StyledInput
              type="number"
              id="numbedrooms"
              value={formValues.numbedrooms}
              onChange={handleInputChange}
              hasError={!!errors.numbedrooms}
            />
            <ValidationMessage
              hasError={!!errors.numbedrooms}
              isValid={
                !errors.numbedrooms && /^\d+$/.test(formValues.numbedrooms)
              }
              message="მხოლოდ რიცხვები"
            />
          </div>
        </section>

        <section className="flex">
          <DescriptionInput>
            <label htmlFor="description">აღწერა *</label>
            <StyledInput
              type="text"
              id="description"
              value={formValues.description}
              onChange={handleInputChange}
              hasError={!!errors.description}
            />
            <ValidationMessage
              hasError={!!errors.description}
              isValid={
                !errors.description &&
                formValues.description.split(" ").length >= 5
              }
              message="მინიმუმ ხუთი სიტყვა"
            />
          </DescriptionInput>

          <div style={{ position: "relative" }}>
            <label htmlFor="image">ატვირთეთ ფოტო *</label>
            <ImgInput type="file" id="image" />
            <UploadButton>
              <PlusCircle />
            </UploadButton>
          </div>

          <div className="flex">
            <h2>აგენტი</h2>
            <label htmlFor="agent">აირჩიე</label>
            <select
              id="agent"
              value={formValues.agent_id}
              onChange={handleInputChange}
            >
              <option value="">აირჩიეთ აგენტი</option>
              {agents.map((agent) => (
                <option key={agent.agent_id} value={agent.agent_id}>
                  {agent.first_name} {agent.last_name}
                </option>
              ))}
            </select>
          </div>
        </section>

        <ConfirmCancelButtons
          onSubmit={(e) => handleAddProperty(e)}
          onCancel={handleCancel}
        />
      </AddListing>
    </AddListingContainer>
  );
}

export default AddListingPage;
