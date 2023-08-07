// http.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  timeout: 60000,
});

const setAxiosBearerToken = (token: string | undefined) => {
  axiosInstance.defaults.headers.common['Authorization'] = token
    ? `Bearer ${token}`
    : '';
};

const removeToken = () => {
  axiosInstance.defaults.headers.common['Authorization'] = '';
};

const getAuthHeader = () => {
  return axiosInstance.defaults.headers.common['Authorization'];
};

export { axiosInstance, setAxiosBearerToken, getAuthHeader, removeToken };
