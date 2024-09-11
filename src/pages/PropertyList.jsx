import { useEffect, useState } from "react";
import PropertyCard from "../components/PropertyCard";

const API_TOKEN = "9cfc13f4-6347-4be5-9ee8-0c174ea87e63";
const API_URL = "https://api.real-estate-manager.redberryinternship.ge/api";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch(`${API_URL}/real-estates`, {
          headers: { Authorization: `Bearer ${API_TOKEN}` },
        });
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyList;
