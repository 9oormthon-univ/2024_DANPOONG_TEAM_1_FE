import React, { useEffect } from 'react';
import * as S from './PlanComments.styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { fetchCommentAsync } from '../../redux/slices/commentSlice';

function PlanComments({ planId }) {
  const dispatch = useDispatch();
  const { comments, error } = useSelector(state => ({
    comments: state.comment?.comments,
    error: state.comment?.error,
  }));

  useEffect(() => {
    if (planId) {
      dispatch(fetchCommentAsync(planId));
    }
  }, [planId, dispatch]);

  if (error) {
    return <p>댓글을 불러오는 중 오류가 발생했습니다: {error}</p>;
  }

  return (
    <S.Container>
      {comments ? (
        comments.map((comment, index) => <p key={index}>{comment.text}</p>)
      ) : (
        <p>댓글이 없습니다.</p>
      )}
    </S.Container>
  );
}

export default PlanComments;
