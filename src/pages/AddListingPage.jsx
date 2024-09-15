import { colors } from "../colors";
import {
  AddListing,
  AddListingContainer,
  DescriptionInput,
  SaleRentSection,
  UploadButton,
} from "./AddListingStyles";
import { Button } from "../components/ButtonStyles";
import { ButtonsWrapper } from "../components/DeleteAlertModalStyles";
import { useEffect, useState } from "react";
import fetchData from "../common/common";
import { ReactComponent as PlusCircle } from "../icons/plus-circle.svg";

function AddListingPage() {
  const [agents, setAgents] = useState([]);
  const [cities, setCities] = useState([]);

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
            <input type="text" id="address" />
          </div>
          <div>
            <label htmlFor="zip">საფოსტო ინდექსი *</label>
            <input type="number" id="zip" />
          </div>
          <div>
            <label htmlFor="region">რეგიონი</label>
            <input type="text" id="region" />
          </div>
          <div>
            <label htmlFor="city">ქალაქი</label>
            <select id="city">
              {cities.map((city) => (
                <option value={city.region_id}>{city.name}</option>
              ))}
            </select>
          </div>
        </section>

        <h2>ბინის დეტალები</h2>
        <section className="grid">
          <div>
            <label htmlFor="price">ფასი</label>
            <input type="number" id="price" />
          </div>
          <div>
            <label htmlFor="area">ფართობი</label>
            <input type="number" id="area" />
          </div>
          <div>
            <label htmlFor="numbedrooms">საძინებლების რაოდენობა *</label>
            <input type="number" id="numbedrooms" />
          </div>
        </section>

        <section className="flex">
          <DescriptionInput>
            <label htmlFor="description">აღწერა *</label>
            <input type="text" id="description" />
          </DescriptionInput>
          <div style={{ position: "relative" }}>
            <label htmlFor="image">ატვირთეთ ფოტო *</label>
            <input type="upload" id="image" placeholder="" />
            <UploadButton>
              <PlusCircle />
            </UploadButton>
          </div>
          <div className="flex">
            <h2>აგენტი</h2>
            <label htmlFor="agent" style={{ margin: "0" }}>
              აირჩიე
            </label>
            <select id="agent" style={{ width: "50%" }}>
              {agents.map((agent) => (
                <option value={agent.id}>
                  {agent.name} {agent.surname}
                </option>
              ))}
            </select>
          </div>
        </section>

        <ButtonsWrapper style={{ justifyContent: "flex-end" }}>
          <Button
            back_color={colors.white}
            text_color={colors.orange}
            hover_color={colors.orange}
          >
            <p>ლისტინგის წაშლა</p>
          </Button>
          <Button>
            <p>დაამატე ლისტინგი</p>
          </Button>
        </ButtonsWrapper>
      </AddListing>
    </AddListingContainer>
  );
}

export default AddListingPage;
