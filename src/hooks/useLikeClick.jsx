import { useState } from 'react';
import { postLikePlanAsync, postLikeCommentAsync } from '../redux/slices/planSlice';
import { useDispatch } from 'react-redux';

function useLikeClick(type) {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleClick = async ({ planId, commentId }) => {
    try {
      setIsActive(!isActive);

      let updatedLikesCount;
      if (type === 'comment') {
        const result = await dispatch(postLikeCommentAsync({ planId, commentId }));
        updatedLikesCount = result.likesCount;
      } else if (type === 'plan') {
        console.log('성공');
        const result = await dispatch(postLikePlanAsync(planId));
        updatedLikesCount = result.likesCount;
        console.log(updatedLikesCount);
      } else {
        throw new Error('Invalid type for like operation.');
      }

      setLikesCount(updatedLikesCount);
    } catch (error) {
      console.error('Failed to toggle like:', error);
    }
  };

  return { handleClick, isActive, likesCount };
}

export default useLikeClick;
