import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchData from "../common/common";
import PropertyCard from "../components/PropertyCard";

function PropertyInner() {
  const params = useParams();
  const [property, setProperty] = useState("");

  const fetchProperty = async () => {
    try {
      const data = await fetchData(`real-estates/${params.id}`);
      setProperty(data);
    } catch (error) {
      console.error("Error fetching property:", error);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, []);

  return <PropertyCard property={property} />;
}

export default PropertyInner;
