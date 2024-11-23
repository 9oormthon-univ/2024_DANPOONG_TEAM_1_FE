import { planThemeInstance } from '../instance';
import { sendRequest } from '../request';

export const fetchUpdateDateThemeAPI = async categoryName => {
  try {
    const response = await sendRequest(planThemeInstance, 'get', `/update-date/${categoryName}`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch theme plans:', error);
    return error;
  }
};

export const fetchRegionThemeAPI = async ({ categoryName, town }) => {
  try {
    if (town === '전체') {
      const response = await sendRequest(planThemeInstance, 'get', `/update-date/${categoryName}`);
      return response.data.result;
    } else {
      const response = await sendRequest(
        planThemeInstance,
        'get',
        `/region/${categoryName}?town=${town}`
      );
      return response.data.result;
    }
  } catch (error) {
    console.error('Failed to fetch popular users:', error);
    return error;
  }
};

export const fetchLikeCountThemeAPI = async categoryName => {
  try {
    const response = await sendRequest(planThemeInstance, 'get', `/like-count/${categoryName}`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch hottest plans:', error);
    return error;
  }
};

export const fetchBannerThemeAPI = async categoryName => {
  try {
    const response = await sendRequest(planThemeInstance, 'get', `/banner/${categoryName}`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch banners:', error);
    return error;
  }
};

export const fetchRankingThemeListAPI = async categoryName => {
  try {
    const response = await sendRequest(planThemeInstance, 'get', `/Ranking/${categoryName}`);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch rankings:', error);
    return error;
  }
};
