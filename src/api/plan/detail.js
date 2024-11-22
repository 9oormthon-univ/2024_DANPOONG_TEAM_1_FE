import { planDetailInstance, planInstance } from '../instance';
import { sendRequest } from '../request';
import { applyInterceptors } from '../interceptor';

export const fetchPlanAPI = async planId => {
  try {
    const response = await sendRequest(planDetailInstance, 'get', `/${planId}`, planId);
    return response.data.result;
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
    return response.data.result.likesCount;
  } catch (error) {
    console.error('Failed to fetch similar plan:', error);
    return error;
  }
};
