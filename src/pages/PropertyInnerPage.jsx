import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../common/common";
import PropertyInner from "../components/PropertyInner";
import SimiliarProperties from "../components/SimiliarProperties";

function PropertyInnerPage() {
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
  }, [params.id]);

  return (
    <>
      <PropertyInner property={property} />
      <SimiliarProperties />
    </>
  );
}

export default PropertyInnerPage;
