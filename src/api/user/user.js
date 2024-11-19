import { sendRequest } from '../request';
import { defaultInstance, memberInstance } from '../instance';

const API_ENDPOINTS = {
  LOGIN: '/login',
  SIGN_UP: '/join',
};

// 로그인 API
export const login = async (username, password) => {
  try {
    const response = await sendRequest(defaultInstance, 'post', API_ENDPOINTS.LOGIN, {
      username,
      password,
    });

    const accessToken = response.headers['access'];
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
      console.log('✅ 로그인 성공: Access Token 저장 완료');
    } else {
      throw new Error('Access Token이 반환되지 않았습니다.');
    }

    return response.data;
  } catch (error) {
    console.error('❌ 로그인 실패:', error.response || error.message);
    throw new Error(
      error.response?.data?.message || error.message || '로그인 중 문제가 발생했습니다.'
    );
  }
};

// 회원가입 API
export const signUp = async ({
  name,
  phoneNumber,
  email,
  username,
  password,
  nickname,
  province,
  city,
}) => {
  try {
    const requestBody = { name, phoneNumber, email, username, password, nickname, province, city };

    const response = await sendRequest(memberInstance, 'post', API_ENDPOINTS.SIGN_UP, requestBody);

    if (response.data.isSuccess) {
      console.log('✅ 회원가입 성공:', response.data);
      return response.data;
    }

    throw new Error(response.data.message || '회원가입에 실패했습니다.');
  } catch (error) {
    console.error('❌ 회원가입 실패:', error.response || error.message);
    throw new Error(
      error.response?.data?.message || error.message || '회원가입 중 문제가 발생했습니다.'
    );
  }
};
