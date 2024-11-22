import { planInstance } from '../instance';
import { sendRequest } from '../request';
import axios from 'axios';
import { applyInterceptors } from '../interceptor';

export const fetchCommentAPI = async planId => {
  const url = `/${planId}/comments/`;
  try {
    const response = await sendRequest(planInstance, 'get', url, planId);
    return response.data.result;
  } catch (error) {
    console.error('Failed to fetch comment:', error);
    return error;
  }
};

export const postCommentAPI = async ({ planId, commentData }) => {
  const postCommentInstance = axios.create(planInstance.defaults);
  postCommentInstance.defaults.baseURL += `/${planId}/comments/`;
  applyInterceptors(postCommentInstance);
  try {
    const response = await sendRequest(postCommentInstance, 'post', '', commentData);
    return response.data.result.commentId;
  } catch (error) {
    console.error('Failed to post comment:', error);
    return error;
  }
};

export const deleteCommentAPI = async ({ planId, commentId }) => {
  const deleteCommentInstance = axios.create(planInstance.defaults);
  deleteCommentInstance.defaults.baseURL += `/${planId}/comments/${commentId}`;
  applyInterceptors(deleteCommentInstance);
  try {
    const response = await sendRequest(deleteCommentInstance, 'delete', '');
    return response.data.result;
  } catch (error) {
    console.error('Failed to delete comment:', error);
    return error;
  }
};

export const updateCommentAPI = async ({ planId, commentId, commentBody }) => {
  const updateCommentInstance = axios.create(planInstance.defaults);
  updateCommentInstance.defaults.baseURL += `/${planId}/comments/${commentId}`;
  applyInterceptors(updateCommentInstance);
  try {
    const response = await sendRequest(updateCommentInstance, 'put', '', commentBody);
    return response.data.result;
  } catch (error) {
    console.error('Failed to delete comment:', error);
    return error;
  }
};

export const postLikeCommentAPI = async ({ planId, commentId }) => {
  const postLikeCommenInstance = axios.create(planInstance.defaults);
  postLikeCommenInstance.defaults.baseURL += `/${planId}/comments/likes/${commentId}`;
  applyInterceptors(postLikeCommenInstance);
  try {
    const response = await sendRequest(postLikeCommenInstance, 'post', '');
    return response.data.result.likesCount;
  } catch (error) {
    console.error('Failed to fetch similar plan:', error);
    return error;
  }
};
