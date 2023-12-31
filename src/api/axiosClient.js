import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// Add a request interceptor
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    console.log(error);
    throw error;
  }
);

export default axiosClient;
