import { planInstance } from '../instance';
import { sendRequest } from '../request';

export const fetchCommentAPI = async planId => {
  const url = `/${planId}/comments/`;
  try {
    const response = await sendRequest(planInstance, 'get', url, planId);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch plan:', error);
    return error;
  }
};
