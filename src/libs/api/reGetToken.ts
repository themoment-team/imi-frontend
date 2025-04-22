import { axiosInstance } from './axiosInstance';
import getCookie from './getCookieToken';

export const reGetToken = async (): Promise<boolean> => {
  try {
    const refreshToken = getCookie('refreshToken');

    const response: any = await axiosInstance.post('/auth/refresh', {
      refreshToken,
    });

    const expireDate = new Date(response.expiresIn).toUTCString();

    document.cookie = `accessToken=${response.accessToken}; path=/; expires=${expireDate}`;
    document.cookie = `refreshToken=${response.refreshToken}; path=/;`;

    return true;
  } catch (error) {
    return false;
  }
};
