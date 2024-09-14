const API_URL = "https://api.real-estate-manager.redberryinternship.ge/api";

const fetchData = async (path, method) => {
  try {
    const response = await fetch(`${API_URL}/${path}`, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
      method: method ?? "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetchData;
