import { commentInstance } from '../instance';
import { sendRequest } from '../request';

export const fetchCommentAPI = async planId => {
  try {
    const response = await sendRequest(commentInstance, 'get', `/${planId}`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch plan:', error);
    return error;
  }
};
