// 인증 토큰을 가져오는 함수
export const getAuthToken = () => localStorage.getItem('accessToken');

// API 공통 요청 처리기
export const sendRequest = async (instance, method, url, data = {}) => {
  try {
    console.log(`🔍 요청 URL: ${instance.defaults.baseURL}${url}`);
    console.log(`🔍 요청 데이터: ${JSON.stringify(data, null, 2)}`);
    const response = await instance[method](url, data);
    console.log(`✅ ${url} -[${method}] success :`, response);
    return response;
  } catch (error) {
    console.error(
      `❌ ${url}-[${method}] error_response:`,
      error.response,
      `error_status : `,
      error.response?.status,
      `error_status_text: `,
      error.response?.statusText
    );
    throw error;
  }
};
