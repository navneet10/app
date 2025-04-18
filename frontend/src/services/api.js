const BASE_URL = "http://localhost:5000/link";

export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${BASE_URL}/${endpoint}`);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("API fetch error:", error);
        return null;
    }
};
