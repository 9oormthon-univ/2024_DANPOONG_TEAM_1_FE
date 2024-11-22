import { useState, useCallback } from 'react';
import { postLikePlanAsync, postLikeCommentAsync } from '../redux/slices/planSlice';
import { useDispatch, useSelector } from 'react-redux';

function useLikeClick(type) {
  const dispatch = useDispatch();
  const currentPlan = useSelector(state => state.plan.currentPlan);

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

  const isActive = currentPlan?.checkLike;

  return { handleClick, isActive };
}

export default useLikeClick;
