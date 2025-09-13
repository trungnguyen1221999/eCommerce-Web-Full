// // Import Axios

// import axios from "axios";
// // Create an Axios instance
// const apiClient = axios.create({
//   baseURL: "https://be-project-reactjs.onrender.com/api/v1", // Replace with your API's base URL
//   timeout: 10000, // Set a timeout (in milliseconds)
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Export the Axios instance
// export default apiClient;

import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://be-project-reactjs.onrender.com/api/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;

apiClient.interceptors.request.use(
  async (config) => {
    console.log("Request Interceptor:", config);
    // You can modify the request config here if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
