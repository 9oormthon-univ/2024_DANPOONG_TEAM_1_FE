import { useDispatch } from 'react-redux';
import {
  createPlanFailure,
  createPlanSuccess,
  updatePlanFailure,
  updatePlanSuccess,
  fetchPlanDetailSuccess,
  fetchPlanDetailFailure,
} from '../../redux/modules/plan';
import { planInstance } from '../instance';
import { sendRequest } from '../request';

export const usePlanHook = () => {
  const dispatch = useDispatch();

  const fetchPlan = async planId => {
    try {
      const response = await sendRequest(planInstance, 'get', `/${planId}`, planId);
      dispatch(fetchPlanDetailSuccess(response.data.result));
      return response.data.result;
    } catch (error) {
      console.error('Failed to fetch plan:', error);
      dispatch(fetchPlanDetailFailure(error.message));
      return error;
    }
  };

  const createPlan = async planData => {
    try {
      const response = await sendRequest(planInstance, 'post', '', planData);

      dispatch(
        createPlanSuccess({
          ...planData,
          planId: response.data.result?.planId,
        })
      );
      return response.data.result?.planId;
    } catch (error) {
      dispatch(createPlanFailure(error.message));
      throw error;
    }
  };

  const updatePlan = async (planId, updatedData) => {
    try {
      const response = await sendRequest(planInstance, 'put', `/${planId}`, {
        updatedData,
      });
      dispatch(updatePlanSuccess({ planId: planId, updatedData }));
      return response.data.result;
    } catch (error) {
      dispatch(updatePlanFailure(error.message));
      throw error;
    }
  };

  return {
    createPlan,
    updatePlan,
    fetchPlan,
  };
};
