import { planSearchInstance } from '../instance';
import { sendRequest } from '../request';

export const fetchSearchPlanAPI = async searchContent => {
  try {
    const response = await sendRequest(planSearchInstance, 'get', `/${searchContent}`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch plan:', error);
    return error;
  }
};

export const fetchSearchPlanThemeAPI = async ({ searchContent, category }) => {
  try {
    const response = await sendRequest(
      planSearchInstance,
      'get',
      `/${searchContent}/themes?category=${category}`
    );
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch plan:', error);
    return error;
  }
};

export const fetchSearchPlanRegionAPI = async ({ searchContent, region }) => {
  console.log(region);
  try {
    const response = await sendRequest(
      planSearchInstance,
      'get',
      `/${searchContent}/regions?region=${region}`
    );
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch plan:', error);
    return error;
  }
};

export const fetchSearchPlanFreeAPI = async ({ searchContent, freeOrNon }) => {
  try {
    const response = await sendRequest(planSearchInstance, 'get', `/${searchContent}/${freeOrNon}`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch plan:', error);
    return error;
  }
};

export const fetchSearchPlanPeriodsAPI = async ({ searchContent, startDate, endDate }) => {
  try {
    const response = await sendRequest(
      planSearchInstance,
      'get',
      `/${searchContent}/periods?startDate=${startDate}&endDate=${endDate}`
    );
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch plan:', error);
    return error;
  }
};
