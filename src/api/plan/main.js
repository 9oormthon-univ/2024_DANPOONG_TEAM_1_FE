import { planMainInstance } from '../instance';
import { sendRequest } from '../request';

export const fetchThemesAPI = async () => {
  try {
    const response = await sendRequest(planMainInstance, 'get', `/themes`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch theme plans:', error);
    return error;
  }
};

export const fetchPopularUsersAPI = async () => {
  try {
    const response = await sendRequest(planMainInstance, 'get', `/popular-users`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch popular users:', error);
    return error;
  }
};

export const fetchHottestPlansAPI = async () => {
  try {
    const response = await sendRequest(planMainInstance, 'get', `/hottest`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch hottest plans:', error);
    return error;
  }
};

export const fetchBannersAPI = async () => {
  try {
    const response = await sendRequest(planMainInstance, 'get', `/banners`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch banners:', error);
    return error;
  }
};

export const fetchRankingListAPI = async () => {
  try {
    const response = await sendRequest(planMainInstance, 'get', `/Rankings`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch rankings:', error);
    return error;
  }
};
