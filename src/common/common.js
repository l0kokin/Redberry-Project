const API_URL = "https://api.real-estate-manager.redberryinternship.ge/api";

const fetchData = async (path) => {
  try {
    console.log(process.env);
    const response = await fetch(`${API_URL}/${path}`, {
      headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetchData;
