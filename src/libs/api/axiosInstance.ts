import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: '', // 서버 배포 후 URL 입력 필요
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  return config; // 추후에 필요한 경우 설정 추가
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    return Promise.reject(error);
  }
);
