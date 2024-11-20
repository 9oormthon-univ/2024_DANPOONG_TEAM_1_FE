import React from 'react';
import * as S from './PlanComments.styles';

function PlanComments({ comments }) {
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
