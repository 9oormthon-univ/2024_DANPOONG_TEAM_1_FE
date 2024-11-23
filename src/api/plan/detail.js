import { planDetailInstance, planInstance } from '../instance';
import { sendRequest } from '../request';
import { applyInterceptors } from '../interceptor';

export const fetchPlanAPI = async planId => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    if (accessToken !== null) {
      const response = await sendRequest(planDetailInstance, 'get', `/${planId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
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

export const deletePlanAPI = async planId => {
  const deletePlanInstance = planInstance;
  applyInterceptors(deletePlanInstance);
  try {
    const response = await sendRequest(deletePlanInstance, 'delete', `/${planId}`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch similar plan:', error);
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
