import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "https://interlab4.azurewebsites.net",
    withCredentials: true,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
