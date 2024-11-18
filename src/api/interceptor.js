// 인터셉터 적용
import { getAuthToken } from './request';

export const applyInterceptors = instance => {
  const language = localStorage.getItem('language');
  instance.interceptors.request.use(
    async config => {
      const token = await getAuthToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['Accept-Language'] = `${language}`;
      } else {
        window.location.href = `/login`;
        // enqueueSnackbar(
        //     `☺️1초 만에 로그인 가능하게 만들어뒀어요!`,
        // );
      }
      return config;
    },
    error => {
      console.log(error);
      return Promise.reject(error);
    }
  );
};
