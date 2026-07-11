// import axios from "axios";
// import { API_BASE_URL } from "./apiConfig";

// const axiosInstance = axios.create({
//   baseURL: API_BASE_URL,
// });

// // Attach access token before every request
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// // Handle responses (NO refresh token logic)
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.error("Unauthorized - token expired or invalid");

//       // Optional: clear storage and redirect to login
//       localStorage.clear();
//       window.location.href = "/";
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;


import axios from 'axios';
import { API_BASE_URL } from './apiConfig';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('UserId');
      localStorage.removeItem('role');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;