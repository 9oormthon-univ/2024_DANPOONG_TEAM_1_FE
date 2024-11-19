import { getAuthToken } from './request';

export const applyInterceptors = instance => {
  const language = localStorage.getItem('language') || navigator.language || 'en';

  // 요청 인터셉터
  instance.interceptors.request.use(
    async config => {
      const token = getAuthToken(); // 로컬 스토리지에서 액세스 토큰 가져오기

      console.log('🔍 Access Token 확인:', token); // 토큰 디버깅
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['Accept-Language'] = language;
      } else {
        console.warn('⚠️ Access Token이 없습니다.');
      }
      return config;
    },
    error => {
      console.error('❌ 요청 인터셉터 에러:', error);
      return Promise.reject(error);
    }
  );

  // 응답 인터셉터
  instance.interceptors.response.use(
    response => {
      // 응답 데이터에 access, refresh가 있는 경우
      if (response.data.access && response.data.refresh) {
        localStorage.setItem('accessToken', response.data.access); // Access Token 저장
        document.cookie = `refreshToken=${response.data.refresh}; Path=/; Secure; HttpOnly;`; // Refresh Token 저장
        console.log('✅ 토큰 저장 완료');
      }
      return response;
    },

    error => {
      if (error.response?.status === 403) {
        console.error('❌ 403 Forbidden: 접근 권한이 없습니다.');
        alert('접근 권한이 없습니다. 로그인 상태를 확인하세요.');
        //window.location.href = '/login';
      } else if (error.response?.status === 401) {
        console.error('❌ 인증 실패: 로그인 페이지로 이동');
        //window.location.href = '/login';
      } else if (!error.response) {
        alert('네트워크 연결에 문제가 발생했습니다. 인터넷 상태를 확인해주세요.');
      } else if (error.response.status >= 500) {
        alert('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
      return Promise.reject(error);
    }
  );
};
