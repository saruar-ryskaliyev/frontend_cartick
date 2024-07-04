import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000', // your backend URL
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from local storage or any other storage mechanism
    const token = localStorage.getItem('jwtToken');

    // If the token exists, set the Authorization header
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
