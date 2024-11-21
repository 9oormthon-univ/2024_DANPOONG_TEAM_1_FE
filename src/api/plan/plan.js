import { planDetailInstance } from '../instance';
import { sendRequest } from '../request';

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
  console.log(planId);
  try {
    const response = await sendRequest(planDetailInstance, 'get', `/1/similar`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch similar plan:', error);
    return error;
  }
};
