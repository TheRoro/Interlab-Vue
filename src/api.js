import axios from "axios";

const api = axios.create({
    baseURL: process.env.VUE_APP_API_BASE_URL || "https://interlab4.azurewebsites.net",
    withCredentials: true,
    timeout: 15000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;
