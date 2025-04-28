import axios from 'axios';

import getCookie from '@/utils/getCookie';

type RefreshResponse = {
  accessToken: string;
  expiresIn: number;
  issuedAt: number;
  refreshToken: string;
};

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
      try {
        const refreshToken = getCookie('refreshToken');

        const response: RefreshResponse = await axiosInstance.post(
          '/auth/refresh',
          {
            refreshToken,
          }
        );

        document.cookie = `accessToken=${response.accessToken}; path=/;`;
        document.cookie = `refreshToken=${response.refreshToken}; path=/;`;
      } catch (error) {
        console.log(error);
      }
    }

    return Promise.reject(error);
  }
);
