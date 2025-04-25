import axios from 'axios';

import { reGetToken } from './reGetToken';

export const axiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  async function (error) {
    if (error.response?.state === 401) {
      reGetToken();
    }

    return error;
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
