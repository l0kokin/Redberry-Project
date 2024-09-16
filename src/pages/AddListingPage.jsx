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
import { createContent, fetchData } from "../common/common";
import { ReactComponent as PlusCircle } from "../icons/plus-circle.svg";
import ConfirmCancelButtons from "../components/ConfirmCancelButtons";
import ValidationMessage from "../components/ValidationMessage";

function AddListingPage() {
  const [agents, setAgents] = useState([]);
  const [regions, setRegions] = useState([]);
  const [cities, setCities] = useState([]);
  const [citiesToSelect, setCitiesToSelect] = useState([]);

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
    is_rental: "",
    image: "",
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
    fetchAgents();
    fetchCities();
    fetchRegions();
  }, []);

  const validate = () => {
    const newErrors = {};

    const fieldsToValidate = {
      address: formValues.address.length < 2,
      zip_code: !/^\d+$/.test(formValues.zip_code),
      price: formValues.price && !/^\d+$/.test(formValues.price),
      area: formValues.area && !/^\d+$/.test(formValues.area),
      bedrooms: formValues.bedrooms && !/^\d+$/.test(formValues.bedrooms),
      description: formValues.description?.split(" ").length < 5,
    };

    const requiredFields = ["address", "zip_code", "bedrooms", "description"];
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

  const handleAgentChange = (e) => {
    setFormValues({ ...formValues, agent_id: Number(e.target.value) });
  };

  const handleListingStatusChange = (isRental) => {
    setFormValues({ ...formValues, is_rental: isRental });
  };

  const handleRegionChange = (e) => {
    console.log(e.target.value);
    setFormValues({ ...formValues, region_id: Number(e.target.value) });

    const filterCities = cities.filter((city) =>
      e.target.value.includes(city.region_id)
    );
    setCitiesToSelect(filterCities);
  };

  const handleAddProperty = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (!validate()) {
      return;
    }

    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });

    await createContent("real-estates", formData);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
  };

  return (
    <AddListingContainer>
      <AddListing onSubmit={handleAddProperty}>
        <h1>ლისტინგის დამატება</h1>

        <h2>გარიგების ტიპი</h2>
        <SaleRentSection>
          <div>
            <input
              type="radio"
              id="sale"
              value="sale"
              onChange={() => handleListingStatusChange(0)}
            />
            <label htmlFor="sale">იყიდება</label>
          </div>
          <div>
            <input
              type="radio"
              id="rent"
              value="rent"
              onChange={() => handleListingStatusChange(1)}
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
              hasError={!!errors.address}
            />
            <ValidationMessage
              hasError={!!errors.address}
              isValid={!errors.address && formValues.address.length >= 2}
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
              hasError={!!errors.zip_code}
            />
            <ValidationMessage
              hasError={!!errors.zip_code}
              isValid={!errors.zip_code && /^\d+$/.test(formValues.zip_code)}
              message="მხოლოდ რიცხვები"
            />
          </div>

          <div>
            <label htmlFor="region_id">რეგიონი</label>
            <select
              id="region_id"
              value={formValues.region_id}
              onChange={(e) => handleRegionChange(e)}
            >
              <option value="">აირჩიეთ რეგიონი</option>
              {regions.map((region) => (
                <option key={region.id} value={region.id}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="city_id">ქალაქი</label>
            <select
              id="city_id"
              value={formValues.city_id}
              onChange={handleInputChange}
            >
              <option value="">აირჩიეთ ქალაქი</option>
              {citiesToSelect.map((city) => (
                <option key={city.id} value={city.id}>
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
            <label htmlFor="bedrooms">საძინებლების რაოდენობა *</label>
            <StyledInput
              type="number"
              id="bedrooms"
              value={formValues.bedrooms}
              onChange={handleInputChange}
              hasError={!!errors.bedrooms}
            />
            <ValidationMessage
              hasError={!!errors.bedrooms}
              isValid={!errors.bedrooms && /^\d+$/.test(formValues.bedrooms)}
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
            <ImgInput
              type="file"
              id="file"
              onChange={(e) =>
                setFormValues({ ...formValues, image: e.target.files[0] })
              }
            />
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
              onChange={(e) => handleAgentChange(e)}
            >
              <option value="">აირჩიეთ აგენტი</option>
              {agents.map((agent) => (
                <option key={agent.id} value={agent.id}>
                  {agent.name} {agent.surname}
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
