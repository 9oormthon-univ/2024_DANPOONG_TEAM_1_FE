import { planInstance } from '../instance';
import { sendRequest } from '../request';
import { fetchPlanDetail } from '../../redux/slices/planSlice';
import { useDispatch } from 'react-redux';

export const usePlanHook = () => {
  const dispatch = useDispatch();
  const fetchPlan = async planId => {
    try {
      const response = await sendRequest(planInstance, 'get', `/${planId}`, planId);
      dispatch(fetchPlanDetail(response.data.result));
      return response.data.result;
    } catch (error) {
      console.error('Failed to fetch plan:', error);
      return error;
    }
  };

  // const createPlan = async planData => {
  //   try {
  //     const response = await sendRequest(planInstance, 'post', '', planData);
  //     dispatch(
  //       createPlan({
  //         planData,
  //         planId: response.data.result.planId,
  //       })
  //     );
  //     return response.data.result?.planId;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  return {
    fetchPlan,
  };
};
