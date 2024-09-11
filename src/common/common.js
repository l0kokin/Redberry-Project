const API_TOKEN = "";
const API_URL = "https://api.real-estate-manager.redberryinternship.ge/api";

const fetchData = async (path) => {
  try {
    const response = await fetch(`${API_URL}/${path}`, {
      headers: { Authorization: `Bearer ${API_TOKEN}` },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetchData;
