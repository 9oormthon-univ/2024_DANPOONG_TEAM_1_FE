import { planDetailInstance, planInstance } from '../instance';
import { sendRequest } from '../request';
import { applyInterceptors } from '../interceptor';
import { getAuthToken } from '../request';

export const fetchPlanAPI = async planId => {
  const token = getAuthToken(); // 로컬 스토리지에서 액세스 토큰 가져오기

  try {
    if (token) {
      const response = await sendRequest(planDetailInstance, 'get', `/${planId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.result;
    } else {
      const response = await sendRequest(planDetailInstance, 'get', `/${planId}`);
      return response.data.result;
    }
  } catch (error) {
    console.error('Failed to fetch plan:', error);
    return error;
  }
};

export const fetchSimilarPlanAPI = async planId => {
  try {
    const response = await sendRequest(planDetailInstance, 'get', `/${planId}/similar`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch similar plan:', error);
    return error;
  }
};

export const postLikePlanAPI = async planId => {
  const planLikeInstance = planInstance;
  applyInterceptors(planLikeInstance);
  try {
    const response = await sendRequest(planLikeInstance, 'post', `/${planId}/likes/`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch similar plan:', error);
    return error;
  }
};
