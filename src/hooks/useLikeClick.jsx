import { useCallback } from 'react';
import { postLikePlanAsync, postLikeCommentAsync } from '../redux/slices/planSlice';
import { useDispatch, useSelector } from 'react-redux';

function useLikeClick(type) {
  const checkLike = useSelector(state => state.plan.currentPlan?.checkLike);
  const dispatch = useDispatch();
  const handleClick = useCallback(
    async ({ planId, commentId }) => {
      if (type === 'comment') {
        await dispatch(postLikeCommentAsync({ planId, commentId }));
      } else if (type === 'plan') {
        await dispatch(postLikePlanAsync(planId));
      } else {
        throw new Error('Invalid type for like operation.');
      }
    },
    [dispatch, type]
  );

  return { handleClick, checkLike };
}

export default useLikeClick;
