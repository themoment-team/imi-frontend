import axios from 'axios';

import getCookie from '@/utils/getCookie';

import { reGetToken } from './reGetToken';

export const axiosInstance = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = getCookie('accessToken');
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    if (error.response?.state === 401) {
      reGetToken();
    }

    return Promise.reject(error);
  }
);
