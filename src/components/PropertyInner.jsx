import {
  ButtonContainer,
  DatePosted,
  Info,
  PropertyContainer,
} from "./PropertyInnerStyles";
import { ReactComponent as Back } from "../icons/back.svg";
import { useNavigate } from "react-router-dom";
import { InfoContainer, SaleRent } from "./PropertyCardStyles";
import { ReactComponent as LocationIcon } from "../icons/location.svg";
import { ReactComponent as BedIcon } from "../icons/bed.svg";
import { ReactComponent as AreaIcon } from "../icons/area.svg";
import { ReactComponent as ZipCodeIcon } from "../icons/zip.svg";
import AgentCard from "./AgentCard";
import ButtonDelete from "./ButtonDelete";
import { useEffect, useRef, useState } from "react";
import DeleteAlertModal from "./DeleteAlertModal";
import { fetchData } from "../common/common";

function PropertyInner({ property }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef();

  // Delete alert modal opening and closing
  const handleBackClick = () => {
    navigate(-1);
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  // Actually deleting listing
  const deleteProperty = async () => {
    try {
      await fetchData(`real-estates/${property.id}`, "DELETE");
    } catch (error) {
      console.error("Error deleting property:", error);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <button onClick={handleBackClick}>
        <Back />
      </button>
      <PropertyContainer to={`/property/${property.id}`}>
        <InfoContainer>
          <img src={property.image} alt="a home" />
          <DatePosted>
            გამოქვეყნების თარიღი{" "}
            {new Date(property.created_at).toLocaleDateString("en-US", {
              year: "2-digit",
              month: "2-digit",
              day: "2-digit",
            })}
          </DatePosted>
          <SaleRent
            $top={"4.1rem"}
            $left={"4.1rem"}
            $font={"2rem"}
            $padding={"1rem 2.65rem"}
          >
            {property.is_rental ? "ქირავდება" : "იყიდება"}
          </SaleRent>
          <DatePosted></DatePosted>
        </InfoContainer>
        <InfoContainer>
          <h1>{property.price} ₾</h1>
          <Info>
            <LocationIcon />
            {property.city
              ? `${property.city.name}, ${property.address}`
              : property.address}{" "}
          </Info>
          <Info>
            <AreaIcon />
            ფართი {property.area} მ²
          </Info>
          <Info>
            <BedIcon />
            საძინებელი {property.bedrooms}
          </Info>
          <Info>
            <ZipCodeIcon />
            საფოსტო ინდექსი {property.zip_code}
          </Info>
          <p>{property.description}</p>
          <AgentCard agent={property.agent} />
          <ButtonContainer onClick={handleDeleteClick}>
            <ButtonDelete />
          </ButtonContainer>
        </InfoContainer>
      </PropertyContainer>
      {isModalOpen && (
        <DeleteAlertModal
          ref={modalRef}
          onClose={closeModal}
          onDelete={() => deleteProperty()}
        />
      )}
    </>
  );
}

export default PropertyInner;
