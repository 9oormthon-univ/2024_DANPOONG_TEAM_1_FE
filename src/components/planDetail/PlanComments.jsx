import React from 'react';
import * as S from './PlanComments.styles';
import { useSelector } from 'react-redux';
import defaultProfileImage from '../../assets/images/default-profile-image.svg';
import Comment from './components/Comment';

// 계층 구조로 렌더링하는 함수
function renderComments(comments, hierarchy = 0) {
  return comments.map(comment => (
    <React.Fragment key={comment.id}>
      <Comment comment={comment} hierarchy={hierarchy} />
      <S.Line />
      {comment.replies && renderComments(comment.replies, hierarchy + 1)}
    </React.Fragment>
  ));
}

function PlanComments() {
  const currentPlan = useSelector(state => state.plan.currentPlan);
  const { isLoggedIn } = useSelector(state => state.auth);

  // 계층 구조로 변환
  const buildNestedComments = comments => {
    const map = {};
    const roots = [];

    comments.forEach(comment => {
      map[comment.id] = { ...comment, replies: [] };
    });

    comments.forEach(comment => {
      if (comment.hierarchy > 0) {
        const parent = map[comment.groups];
        if (parent) {
          parent.replies.push(map[comment.id]);
        }
      } else {
        roots.push(map[comment.id]);
      }
    });

    return roots;
  };

  const nestedComments = buildNestedComments(currentPlan?.comments || []);

  return (
    <S.Container>
      <S.CommentCount>댓글 {currentPlan?.comments.length}개</S.CommentCount>
      {isLoggedIn && (
        <S.CreateCommentContainer>
          <S.UserProfile>
            <S.ProfileImage src={defaultProfileImage} alt="profile" />
            <S.UserName>{currentPlan?.username}</S.UserName>
          </S.UserProfile>
          <S.FormContainer>
            <S.InputContainer type="text" placeholder="댓글을 입력해주세요" />
            <S.CreateCommentButton type="submit">등록하기</S.CreateCommentButton>
          </S.FormContainer>
        </S.CreateCommentContainer>
      )}
      {nestedComments.length > 0 ? renderComments(nestedComments) : <p>댓글이 없습니다.</p>}
    </S.Container>
  );
}

export default PlanComments;
