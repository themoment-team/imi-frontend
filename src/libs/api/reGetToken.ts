import { getCookie } from '@/utils';

import { axiosInstance } from './axiosInstance';

type RefreshResponse = {
  accessToken: string;
  expiresIn: number;
  issuedAt: number;
  refreshToken: string;
};

export const reGetToken = async () => {
  try {
    const refreshToken = getCookie('refreshToken');

    const response: RefreshResponse = await axiosInstance.post(
      '/auth/refresh',
      {
        refreshToken,
      }
    );

    const expireDate = new Date(response.expiresIn).toUTCString();

    document.cookie = `accessToken=${response.accessToken}; path=/; expires=${expireDate}`;
    document.cookie = `refreshToken=${response.refreshToken}; path=/;`;
  } catch (error) {
    console.log(error);
  }
};
