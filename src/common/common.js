const API_URL = "https://api.real-estate-manager.redberryinternship.ge/api";

export const fetchData = async (path, method) => {
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

export const createContent = async (path, body) => {
  try {
    const response = await fetch(`${API_URL}/${path}`, {
      body,
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
        Accept: "Application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
