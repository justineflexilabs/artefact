// http.ts
import Router from 'next/router';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  timeout: 60000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      return Promise.reject(error);
    }

    if (error.response.status === 401 && typeof window !== 'undefined') {
      Router.push('/auth/sign-in');
    }

    // If the error's response is not a 401, just reject the promise
    return Promise.reject(error);
  }
);

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
